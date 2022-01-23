import FoodTypes from "../types";
import axios from 'axios';

export const getTopCategory = () => async(dispatch) => {
    try{

        dispatch({
            type: FoodTypes.TOP_CATEGORY_REQUEST
        })

        const { data } = await axios.get(`http://192.168.1.14:8000/api/top_categories/`)
        

        dispatch({
            type:FoodTypes.TOP_CATEGORY_SUCCESS,
            payload: data
        
        })
    }catch(error){
        dispatch({
            type:FoodTypes.TOP_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
            ?error.response.data.detail:error.detail,
        })
    }
}


export const getPopularFood = () => async(dispatch) => {
    try{
      
        dispatch({
            type: FoodTypes.POPULAR_FOOD_REQUEST
        })
    
        const { data } = await axios.get(`http://192.168.1.14:8000/api/popular_food/`)
        

        dispatch({
            type:FoodTypes.POPULAR_FOOD_SUCCESS,
            payload: data
        
        })
    }catch(error){
        dispatch({
            type:FoodTypes.POPULAR_FOOD_FAIL,
            payload: error.response && error.response.data.detail
            ?error.response.data.detail:error.detail,
        })
    }
}



export const getFoodDetails = (id) => async(dispatch) => {
    try{
      
        dispatch({
            type: FoodTypes.FOOD_DETAILS_REQUEST
        })
    
        const { data } = await axios.get(`http://192.168.1.14:8000/api/food_details/${id}`)
        

        dispatch({
            type:FoodTypes.FOOD_DETAILS_SUCCESS,
            payload: data
        
        })
    }catch(error){
        dispatch({
            type:FoodTypes.FOOD_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ?error.response.data.detail:error.detail,
        })
    }
}
