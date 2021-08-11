import * as types from '../const/ActionTypes';

var initialState = {};

const editingItem = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCTS:
            return action.product;
        default: return state;
    }
}

export default editingItem;
