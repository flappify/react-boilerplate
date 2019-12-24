const initState={
    authError:null
}

const authReducers=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            return state;
        default:
            return state;
    }
}

export default authReducers;