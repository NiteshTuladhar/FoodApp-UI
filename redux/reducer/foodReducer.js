import FoodTypes from "../types";

const INITIAL_STATE = {
    categoriesList: [],
    foodList: [],
    foodDetails:{},
    loading: false,
    success: false,
    error: null,
}


export const topCategoryReducer = (state=INITIAL_STATE, action)  => {
    switch (action.type){
        
        case FoodTypes.TOP_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FoodTypes.TOP_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: true,
                categoriesList: action.payload,
            }
        case FoodTypes.TOP_CATEGORY_FAIL:
            return{
                loading:false,
                success:false,
                error: action.payload
            }
        default:
            return state;
    }
}


export const popularFoodReducer = (state=INITIAL_STATE, action)  => {
    switch (action.type){
        
        case FoodTypes.POPULAR_FOOD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FoodTypes.POPULAR_FOOD_SUCCESS:
            return {
                loading: false,
                success: true,
                foodList: action.payload,
            }
        case FoodTypes.POPULAR_FOOD_FAIL:
            return{
                loading:false,
                success:false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const foodDetailsReducer = (state=INITIAL_STATE, action)  => {
    switch (action.type){
        
        case FoodTypes.FOOD_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FoodTypes.FOOD_DETAILS_SUCCESS:
            return {
                loading: false,
                success: true,
                foodDetails: action.payload,
            }
        case FoodTypes.FOOD_DETAILS_FAIL:
            return{
                loading:false,
                success:false,
                error: action.payload
            }
        default:
            return state;
    }
}
