import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {getAll} from "../../Actions/ContactActions"

import ContactItem from "./ContactItem"


const Contacts = () => {

    const dispatch = useDispatch()
    const Contact = useSelector(state=>state.Contact)

    React.useEffect(()=>{
        dispatch(getAll())
    },[])

    if(!Contact.contacts){
        return(
            <div>
                loading..
            </div>
        )
    }


    return (
        <div>
            Contacts loaded
            {Contact.contacts.map((person, index)=>(
                <ContactItem key={index} contact={person}/>
            ))}
        </div>
    )
}

export default Contacts
