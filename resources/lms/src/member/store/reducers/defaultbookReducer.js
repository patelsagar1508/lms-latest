import {bookActionType} from '../../constants';

export default (state = [], action) => {
    switch (action.type) {
        case bookActionType.FETCH_DEFAULT_BOOKS:
            return action.payload;
        case bookActionType.ALL_RESET_SEARCH_BOOKS:
                return [];
        default:
            return state;
    }
}
