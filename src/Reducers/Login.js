//function that checks sessionStorage upon refresh
const getUser = ()=>{

    let id = sessionStorage.getItem('userId')

    if(id){
        return id
    }else{
        return null
    }
}
//function that checks sessionStorage upon refresh
const getToken = ()=>{
    let token = sessionStorage.getItem('token')

    if(token){
        return token
    }else{
        return null
    }
}


const initialState = {
    loading:false,
    success:false,
    failure:false,
    userId:getUser(),
    token:getToken()
}

export const LoginReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'Loginloading':
            return {...state, loading:true, success:false, failure:false}
        case 'Loginsuccess':
            return {...state, loading:false, success:true, failure:false, token:action.token, userId:action.id}
        case 'Loginfailure':
            return {...state, loading:false, success:false, failure:true}
        case 'loginReset':
            return {...state, loading:false, success:false, failure:false}
        default:
            return state
    }
}