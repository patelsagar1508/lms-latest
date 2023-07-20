import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Row, Col, Card, CardBody, Button} from 'reactstrap';
import PropTypes from 'prop-types';
import ProgressBar from '../../../shared/progress-bar/ProgressBar';
import HeaderTitle from "../../../shared/header-title/HeaderTitle";
import {getFormattedMessage, getFormattedOptions} from "../../../shared/sharedMethod";
import {createMembershipPaymentSession} from "../../store/actions/MembershipPaymentAction";
import {fetchMembershipPlans} from "../../store/actions/membershipPlanAction";
import {fetchAllSettings} from "../../store/actions/allSettingsAction";
import {fetchCurrentPlanDetails} from "../../store/actions/currentPlanAction";
import {loadStripe} from "@stripe/stripe-js";
import {setLoading} from "../../../store/action/progressBarAction";
import {useHistory} from "react-router-dom";
import {openModal} from "../../../shared/custom-hooks";
import OfflinePaymentModal from "./OfflinePaymentModal";
import {toggleModal} from "../../../store/action/modalAction";


const MemberShipPlanMethod = (props) => {
    const {membershipPlans, match, createMembershipPaymentSession,
        paymentSessionId, isLoading, allSettings, currentPlanDetails,
        fetchCurrentPlanDetails,fetchAllSettings, fetchMembershipPlans,toggleModal
    } = props
    const [isCreate, isEdit, isDelete, singlePlan, onOpenModal] = openModal();
    const cardModalProps = { singlePlan, isCreate,isEdit, isDelete, toggleModal  };
    const dispatch = useDispatch()
    const [pubKey, setPubKey] = useState()
    const history = useHistory()

    const planId = +match.params.id
    const plan = membershipPlans.filter((plan) => plan.id === planId)[0]

    if (!membershipPlans) {
        return <ProgressBar/>;
    }

    useEffect(() => {
        fetchMembershipPlans(false, planId)
        fetchAllSettings()
        fetchCurrentPlanDetails()
    }, [])

    useEffect(() => {
        if (allSettings) {
            setPubKey(allSettings.stripe_key ? allSettings.stripe_key.value : null)
        }
    }, [allSettings])

    useEffect(() => {
        if (paymentSessionId) {
            callToStripe(pubKey)
        }
    }, [paymentSessionId])

    const callToStripe = async (pubKey) => {
        const stripe = await loadStripe(`${pubKey}`);
        const {err} = await stripe.redirectToCheckout({
            sessionId: paymentSessionId
        })
        dispatch(setLoading(false))
    }

    const clickOnStripe = () => {
        createMembershipPaymentSession(planId, history)
    }

    const clickOnOffLine = (isEdit, singlePlan = null, isDelete = false) => {
            onOpenModal(isEdit, singlePlan, isDelete);
            toggleModal();
    }

    return (
        <div className="animated fadeIn">
            <HeaderTitle title="Membership Plan"/>
            <Row>
                <Col sm={12} className="mb-2 d-flex justify-content-between">
                    <h5 className="pull-left text-dark">{getFormattedMessage("membership-plan.title")}</h5>
                </Col>
                <Col sm={12}>
                    <div className="sticky-table-container">
                        <Card>
                            <CardBody className="d-flex align-items-center">
                                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                    {/* <Button onClick={() => clickOnStripe()} size="lg" className="px-lg-4 py-lg-2 fs-6" color="primary ml-2 text-white">
                                        {getFormattedMessage("pay-via-stripe.label")}
                                    </Button> */}
                                    <Button onClick={() => {
                                        clickOnOffLine(true, plan)
                                    }} size="lg" className="px-lg-4 py-lg-2  fs-6" color="primary ml-2 text-white">
                                        {getFormattedMessage("pay-offline.label")}
                                    </Button>
                                </div>
                            </CardBody>
                            <OfflinePaymentModal {...cardModalProps}/>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    )
};


const mapStateToProps = (state) => {
    const {membershipPlans, paymentSessionId, isLoading, allSettings, currentPlanDetails} = state;
    return {membershipPlans, paymentSessionId, isLoading, allSettings, currentPlanDetails}
};

export default connect(mapStateToProps, {fetchMembershipPlans,
    createMembershipPaymentSession,
    fetchAllSettings,
    toggleModal,
    fetchCurrentPlanDetails})(MemberShipPlanMethod);
