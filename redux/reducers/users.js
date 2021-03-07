import { combineReducers } from 'redux';


const initialState = {
    useraccount: ""
}

 function user ( state = initialState , action )  {
    switch(action.type){
        case 'LOGIN':
            return  {
                useraccount: action.useraccount
            }
            
        case 'LOGOUT':
            return {
                useraccount: ""
            }
        default:
            return state
                
    }
}

export default combineReducers({
     userloginaccount: user
})