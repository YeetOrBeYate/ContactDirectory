import React from 'react'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useForms} from "../Hooks"


const Register = () => {
    const [user,setUser] = React.useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name, email, password, password2} = user;

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const Login = (e)=>{
        e.preventDefault()
        console.log(user)
    }

    const classes = useForms()
    return (
        <div className="regFormHold">
            <Typography variant="h4" color="primary">
                Register
            </Typography>
            <form>
                <div>
                    <TextField 
                    className={classes.input}
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                    className={classes.input}
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                    className={classes.input}
                    variant="outlined"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                    className={classes.input}
                    variant="outlined"
                    label="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}/>
                </div>
                <Button 
                color="primary"
                className={classes.button}
                variant="contained"
                onClick={(e)=>Login(e)}>Register</Button>

            </form>

            
        </div>
    )
}

export default Register
