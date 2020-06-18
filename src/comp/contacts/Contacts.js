import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {getAll} from "../../Actions/ContactActions"

import CircularProgress from '@material-ui/core/CircularProgress';



import ContactItem from "./ContactItem"


const Contacts = () => {

    
    
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.Login.userId)
    const Contact = useSelector(state=>state.Contact)
    

    React.useEffect(()=>{
        dispatch(getAll(userId))
    },[])

    if(!Contact.contacts){
        return(
            <div className="contactHold">
                <CircularProgress/>
            </div>
        )
    }


    return (
        <div className="contactHold">
            {Contact.contacts.map((person, index)=>(
                <ContactItem key={index} contact={person}/>
            ))}
        </div>
    )
}

export default Contacts
