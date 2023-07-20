import {getFormattedMessage} from "../../../shared/sharedMethod";

export default formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = getFormattedMessage('membership-plans.input.name.validate.label');
    }
    if (!formValues.price) {
        errors.price = getFormattedMessage('membership-plans.input.price.validate.label');
    }
    if (!formValues.issue_books_limit  || formValues.issue_books_limit == 0) {
        errors.issue_books_limit = getFormattedMessage('settings.input.max-issue-books-limit.validate.label');
    }
    if (!formValues.reserve_books_limit || formValues.reserve_books_limit == 0) {
        errors.reserve_books_limit = getFormattedMessage('settings.input.max-reserve-books-limit.validate.label');
    }
    if (!formValues.frequency) {
        errors.frequency = getFormattedMessage('membership-plans.select.frequency.validate.label');
    }
    // if (!formValues.stripe_plan_id) {
    //     errors.stripe_plan_id = getFormattedMessage('membership-plans.input.stripe-plan-id.validate.label');
    // }
    return errors;
};
