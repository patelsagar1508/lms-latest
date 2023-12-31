import React, {createRef, useEffect} from 'react';
import {Col, Row} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import {membershipPlanFrequencyOptions} from '../../constants';
import membershipPlanValidate from './membershipPlanValidate';
import InputGroup from '../../../shared/components/InputGroup';
import SaveAction from '../../../shared/action-buttons/SaveAction';
import TextArea from '../../../shared/components/TextArea';
import Select from "../../../shared/components/Select";
import {getFormattedOptions} from "../../../shared/sharedMethod";

const MembershipPlanForm = props => {
    const { onSaveMembershipPlan, handleSubmit,currency } = props;
    const inputRef = createRef();
    const membershipFrequencyOptions = getFormattedOptions(membershipPlanFrequencyOptions);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        document.querySelector(".inputBox").addEventListener("keypress", function (evt) {
            if (evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });
    }, []);

    const onSave = formValues => {
        const { description, frequency, name, price,issue_books_limit,reserve_books_limit
            // stripe_plan_id
        } = formValues;
        onSaveMembershipPlan({ description, frequency: frequency.id, name, price,issue_books_limit,reserve_books_limit
            // stripe_plan_id
        });
    };

    return (
        <Row className="animated fadeIn m-3">
            <Col xs={12}>
                <Field name="name" label="membership-plans.input.name.label" required inputRef={inputRef}
                       groupText="tasks" component={InputGroup}/>
            </Col>
            <Col xs={12}>
                <Field name="price" className="inputBox" label="membership-plans.input.price.label" type="number" min="0" required
                       groupText={currency} component={InputGroup} isDefaultCurrency={true}/>
            </Col>
            <Col xs={12}>
                        <Field name='issue_books_limit' className="inputBox2" type="number" label="settings.input.max-issue-books-limit.label" min="1"
                               required groupText="calendar" component={InputGroup}/>
            </Col>
            <Col xs={12}>
                <Field name='reserve_books_limit' className="inputBox3" type="number" label="settings.input.max-reserve-books-limit.label" min="1"
                        required groupText="calendar" component={InputGroup}/>
            </Col>
            <Col xs={12}>
                <Field name="frequency" label="membership-plans.select.frequency.label" required
                       options={membershipFrequencyOptions}
                       placeholder="membership-plans.select.frequency.placeholder" groupText="clock-o"
                       component={Select}/>
            </Col>
            {/*<Col xs={12}>*/}
            {/*    <Field name="stripe_plan_id" label="membership-plans.input.stripe-plan-id.label" required*/}
            {/*           groupText="stripe" component={InputGroup}/>*/}
            {/*</Col>*/}
            <Col xs={12}>
                <Field name="description" label="membership-plans.input.description.label" component={TextArea}/>
            </Col>
            <Col xs={12}>
                <SaveAction onSave={handleSubmit(onSave)} {...props}/>
            </Col>
        </Row>
    );
};

MembershipPlanForm.propTypes = {
    initialValues: PropTypes.object,
    currency: PropTypes.string,
    onSaveMembershipPlan: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default reduxForm({ form: 'MembershipPlanForm', validate: membershipPlanValidate })(MembershipPlanForm);
