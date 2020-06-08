

const initialState = {
    loading:false,
    success:false,
    failure:false
}

export const RegisterReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'Registerloading':
            return {...state, loading:true, success:false, failure:false}
        case 'Registersuccess':
            return {...state, loading:false, success:true, failure:false}
        case 'Registerfailure':
            return {...state, loading:false, success:false, failure:true}
        default:
            return state
    }
}