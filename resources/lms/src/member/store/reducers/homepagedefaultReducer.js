import {bookHistoryActionType} from '../../constants';

export default (state = [], action) => {
    switch (action.type) {
        case bookHistoryActionType.BOOK_HOME_SEARCH:
            return action.payload;
        default:
            return state;
    }
}
