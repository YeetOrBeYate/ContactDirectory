import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {getAll} from "../../Actions/ContactActions"


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
            {/* {console.log(Contact.contacts)} */}
            {Contact.contacts.map((person, index)=>(
                <h1 key={index}>{person.name}</h1>
            ))}
        </div>
    )
}

export default Contacts
