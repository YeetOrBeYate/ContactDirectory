import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {stopEdit} from "../../Actions/EditActions"
import {addContact,editContact} from "../../Actions/ContactActions"


import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import {useForms} from "../Hooks"

const ContactForm = () => {

    const dispatch = useDispatch()
    const userId = useSelector(state=>state.Login.userId)
    const Edit = useSelector(state=>state.Edit)

    const [contact,setContact] = React.useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    React.useEffect(()=>{

        if(Edit.edit){
            let {name, email, phone} = Edit.contact
            setContact({...contact, name:name,email:email, phone:phone})
        }

    },[Edit.edit])

    const {name, email, phone, type} =contact

    const handleChange = (e)=>{
        setContact({...contact, [e.target.name]:e.target.value})
    }

    const Submit = (e)=>{
        e.preventDefault()
        if(Edit.edit){
            //do the update request
            dispatch(editContact(userId,Edit._id, contact))
            //calling the clear function so that the form is ready for another edit or post request
            Clear(e)
        }else{
            //do the add request
            dispatch(addContact(userId,contact))
            //calling the clear function so that the form is ready for another edit or post request
            Clear(e)
        }
    }

    const Clear =(e)=>{
        e.preventDefault()
        setContact({...contact, name:'', email:'', phone:''})
        dispatch(stopEdit())
    }

    const disableClear = ()=>{
        //if theres anything in the form button is active
        if(name || email || phone){
            return false
        }

        if(!Edit.edit){
            return true
        }
    }

    const classes = useForms()


    return (
        <div className="formHold">
            <Typography variant="h4" color="primary">
                Add Contact
            </Typography>
            <form >
                <div>
                    <TextField className={classes.input} variant="outlined" label="Name" name="name" value={name} onChange={handleChange}/>
                </div>
                <div>
                    <TextField className={classes.input} variant="outlined" label="Email" name="email" value={email} onChange={handleChange}/>                
                </div>
                <div>
                    <TextField className={classes.input} variant="outlined" label="Phone" name="phone" value={phone} onChange={handleChange}/>                
                </div>
                <FormLabel  component="legend">Contact type</FormLabel>
                <RadioGroup className={classes.input} value={type} onChange={handleChange} name="type">
                    <FormControlLabel value="personal" control={<Radio/>} label="Personal"/>
                    <FormControlLabel value="professional" control={<Radio/>} label="Professional"/>                    
                </RadioGroup>
                <Button className={classes.button} variant="outlined" onClick={(e)=>Clear(e)} disabled={disableClear()}>Clear</Button>
                <Button className={classes.button} variant='contained' color="primary" onClick={(e)=>Submit(e)}>Submit</Button>
            </form>
        </div>
    )
}


export default ContactForm
