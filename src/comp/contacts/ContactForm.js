import React from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ContactForm = () => {

    const useStyles = makeStyles((theme)=>({
        formRoot:{
            minWidth:"350px",
            border:'.1px solid blue'
        },
        input:{
            width:"100%",
            margin:'4% 0'
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

    const classes = useStyles()

    return (
        <div>
            <Typography variant="h4" color="primary">
                Add Contact
            </Typography>
            <form className={classes.formRoot}>
                <div>
                    <TextField className={classes.input} variant="outlined" label="Name" name="name" value={name} onChange={handleChange}/>
                </div>
                <div>
                    <TextField className={classes.input} variant="outlined" label="Email" name="email" value={email} onChange={handleChange}/>                
                </div>
                <div>
                    <TextField className={classes.input} variant="outlined" label="Phone" name="phone" value={phone} onChange={handleChange}/>                
                </div>
            </form>
        </div>
    )
}

export default ContactForm
