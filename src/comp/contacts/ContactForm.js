import React from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ContactForm = () => {

    const useStyles = makeStyles((theme)=>({
        input:{
            width:"98%",
            margin:'4% auto'
        },
        button:{
            width:"98%",
            margin:'1% auto'
        }
    }))

    const [contact,setContact] = React.useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    const {name, email, phone, type} =contact

    const handleChange = (e)=>{
        setContact({...contact, [e.target.name]:e.target.value})
    }

    const Submit = (e)=>{
        e.preventDefault()

        console.log("contact=>",contact)

    }

    const classes = useStyles()

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
                <RadioGroup className={classes.input} defaultValue={type} onChange={handleChange} name="type">
                    <FormControlLabel value="personal" control={<Radio/>} label="Personal"/>
                    <FormControlLabel value="professional" control={<Radio/>} label="Professional"/>                    
                </RadioGroup>
                <Button className={classes.button} variant='contained' color="primary" onClick={(e)=>Submit(e)}>Submit</Button>
            </form>
        </div>
    )
}

export default ContactForm
