

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
        case "contactAdd":
            return {...state, contacts:[action.payload, ...state.contacts]}
        case "contactEdit":
            return {...state, contacts: state.contacts.map((con)=>{
                if(con._id.toString() === action.put){
                    con.name = action.payload.name
                    con.email = action.payload.email
                    con.phone = action.payload.phone
                    con.type = action.payload.type

                    return con
                }else{
                    return con
                }
            })}
        default: 
            return state
    }
}