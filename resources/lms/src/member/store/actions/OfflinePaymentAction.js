import apiConfig from '../../config/apiConfig';
import {setLoading} from '../../../store/action/progressBarAction';
import {addToast} from '../../../store/action/toastAction';
import {toastType} from '../../constants';
import {apiBaseURL, Routes} from "../../../constants";
import {getFormattedMessage} from "../../../shared/sharedMethod";


export const createOfflinePayment = (formValue, toggleModal, history) => async (dispatch) => {
    dispatch(setLoading(true));
    await apiConfig.post(apiBaseURL.CREATE_OFFLINE_PAYMENT + `/${formValue.plan_id}`, formValue)
        .then((response) => {
            dispatch(addToast({ text: getFormattedMessage("offline-payment.success.message")}));
            toggleModal();
            dispatch(setLoading(false));
            history.push(Routes.MEMBER_DEFAULT)
        })
        .catch(({ response }) => {
            dispatch(addToast({ text: response.data.message, type: toastType.ERROR }));
            dispatch(setLoading(false));
        });
};
