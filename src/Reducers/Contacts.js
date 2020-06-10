

const initialState = {
    loading:false,
    success:false,
    failure:false,
    contacts:null
}

export const ContactReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'Contactloading':
            return {...state, loading:true, success:false, failure:false}
        case 'Contactsuccess':
            return {...state, loading:false, success:true, failure:false, contacts:action.payload}
        case 'Contactfailure':
            return {...state, loading:false, success:false, failure:true}
        case "Contactdelete":
            return {...state, loading:false, contacts: state.contacts.filter(con=>con._id.toString() !== action.payload)}
        default: 
            return state
    }
}