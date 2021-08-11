import * as types from './../const/ActionTypes';


var initialState = [];

const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCTS:
            index = findIndex(state, action.id)
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case types.ADD_PRODUCTS:
            state.push(action.product)
            return [...state];
        case types.UPDATE_PRODUCTS:
            index = findIndex(state, action.product.id)
            if (index !== -1) {
                state[index] = action.product
            }
            return [...state];

        default: return [...state];
    }
}


var findIndex = (products, id) => {
    var rs = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            rs = index;
        }
    });
    return rs;
}

export default products;