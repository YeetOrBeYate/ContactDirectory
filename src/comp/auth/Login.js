import React from 'react'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useForms} from "../Hooks"

const Login = () => {

    const[user,setUser] = React.useState({
        name:'',
        email:'',
        password:''
    })

    const {name,email,password} = user

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const Login = (e)=>{
        e.preventDefault()
        setUser({...user, name:'', email:'', password:''})
        console.log("login",user)
    }

    const classes = useForms()
    return (
        <div className="regFormHold">
            <Typography variant="h4" color="primary">
                Login
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
                    type="password"
                    variant="outlined"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}/>
                </div>
                <Button 
                color="primary"
                className={classes.button}
                variant="contained"
                onClick={(e)=>Login(e)}>Login</Button>

            </form>
        </div>
    )
}

export default Login
