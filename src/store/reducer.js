import * as actionTypes from './action';

const initialState ={
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad:1,
    cheese:2,
    meat : 3,
    bacon:4
}

const reducer = (state =initialState , action) => {
    switch(action.type) {

        case actionTypes.ADD_INGRIDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName]+ 1
                },
                totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };

        case actionTypes.REMOVE_INGRIDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName]- 1
                },
                totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };

        default:
            return state;
    }
};

export default reducer;

