import * as types from './../const/ActionTypes';
import apiCaller from './../utils/apiCaller';

export const fetchProductsRequest = () => {
    return (dispatch) => {
        apiCaller('products', 'GET', null).then(res => {
            dispatch(fetchProducts(res.data));
        })
    }
}

export const fetchProducts = products => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}


export const deleteProductRequest = (id) => {
    return dispatch => {
        apiCaller(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                dispatch(deleteProduct(id));
            }
        })
    }
}


export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCTS,
        id
    }
}


export const addProductRequest = product => {
    return dispatch => {
        apiCaller('products', 'POST', product).then(res => {
            dispatch(addProduct(res.data))
        });
    }
}

export const addProduct = product => {
    return {
        type: types.ADD_PRODUCTS,
        product
    }
}

export const getEditProductRequest = id => {
    return dispatch => {
        apiCaller(`products/${id}`, 'GET', null).then(res => {
            dispatch(getEditProduct(res.data))
        })
    }
}

export const getEditProduct = product => {
    return {
        type: types.EDIT_PRODUCTS,
        product
    }
}

export const updateProductRequest = product => {
    return dispatch => {
        apiCaller(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(updateProduct(res.data))
        });
    }
}

export const updateProduct = product => {
    return {
        type: types.UPDATE_PRODUCTS,
        product
    }
}