import React from 'react'
import Contacts from "../contacts/Contacts"
import ContactForm from "../contacts/ContactForm"
const Home = () => {
    return (
        <div className="homeFlex">
            <ContactForm/>
            <Contacts/>
        </div>
    )
}

export default Home
