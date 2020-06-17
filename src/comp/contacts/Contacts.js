import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {getAll} from "../../Actions/ContactActions"





import ContactItem from "./ContactItem"


const Contacts = () => {

    
    
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.Login.userId)
    const Contact = useSelector(state=>state.Contact)
    

    React.useEffect(()=>{
        dispatch(getAll(userId))
    },[])

    if(Contact.loading){
        return(
            <div className="contactHold">
            </div>
        )
    }

    if(Contact.contacts===null || Contact.contacts.length ===0){
        return(
            <div className="contactHold">
                
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
