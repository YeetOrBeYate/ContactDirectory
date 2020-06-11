
const initialState = {
    contact:null,
    edit:false,
    _id:null
}

export const EditReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'setContactEdit':
            return {...state, contact:action.payload, edit:true, _id:action.payload._id}
        case 'editComplete':
            return {...state, contact:null, edit:false, _id:null}
        default:
            return state
    }
}