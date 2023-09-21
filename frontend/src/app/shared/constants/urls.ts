const BASE_URL = "http://localhost:3000"

export const FOODS_URL = BASE_URL+'/api/foods';
export const FOODS_TAGS_URL = FOODS_URL+'/tags';
export const FOOD_BY_SEARCH_URL = FOODS_URL+'/search/';
export const FOODS_TAG_URL = FOODS_URL+'/tag/';
export const FOOD_BY_ID_URL = FOODS_URL+'/';

export const USER_LOGIN_URL = BASE_URL+'/api/users/login'
export const USER_REGISTER_URL = BASE_URL+'/api/users/register'

export const ORDER_URL = BASE_URL+'/api/orders'
export const CREATE_ORDER_URL:string = ORDER_URL+'/create' 
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDER_URL +'/newOrderForCurrentUser'
export const ORDER_PAY_URL = ORDER_URL + '/pay'
export const ORDER_TRACK_URL = ORDER_URL + '/create/'