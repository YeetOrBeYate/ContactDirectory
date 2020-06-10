
const initialState = {
    contact:null,
    edit:false
}

export const EditReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'contactEdit':
            return {...state, contact:action.payload, edit:true}
        case 'editComplete':
            return {...state, contact:null, edit:false}
        default:
            return state
    }
}