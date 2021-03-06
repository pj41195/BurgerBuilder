import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSuccess = (id, order) => {
        return {
                type: actionTypes.PURCHASE_BURGER_SUCCES,
                OrderId : id,
                orderData: order
        };
};

export const purchaseBurgerFail =(error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
} 
export const purchaseBurgerStart =() => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}

export const purchaseBurger = ( orderData ) => {
        return dispatch => {
            dispatch(purchaseBurgerStart());
            axios.post('/orders.json', orderData)
            .then(response => {

                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
        }) 
        .catch(error => {
            dispatch(purchaseBurgerFail(error));
        });
        };
}