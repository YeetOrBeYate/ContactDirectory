
const initialState = {
    loading:false,
    success:false,
    failure:false
}

export const LoginReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'Loginloading':
            return {...state, loading:true, success:false, failure:false}
        case 'Loginsuccess':
            return {...state, loading:false, success:true, failure:false}
        case 'Loginfailure':
            return {...state, loading:false, success:false, failure:true}
        default:
            return state
    }
}