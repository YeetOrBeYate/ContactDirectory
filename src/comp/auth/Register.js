import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {resetRegister,registerUser} from "../../Actions/RegisterActions"
import {Link} from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import {useForms} from "../Hooks"


const Register = () => {
    const registerState = useSelector(state=>state.Register)
    const dispatch = useDispatch()
    const [user,setUser] = React.useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    React.useEffect(()=>{

    },[registerState.success])

    const {name, email, password, password2} = user;

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const Register = (e)=>{
        e.preventDefault()
        let yeet = {name:name, email:email, password:password}
        dispatch(registerUser(yeet))
    }

    const classes = useForms()
    return (
        <div className="regFormHold">
            <Typography variant="h4" color="primary">
                Register
            </Typography>
            {
                registerState.failure?

                <Alert 
                severity="error"
                onClose={()=>dispatch(resetRegister())}
                >Email already in use!</Alert>

                :

                <></>
            }
            {
                registerState.success? 
                 <Alert
                 severity="success"
                 >
                     Account added!-<Link style={{color:'#323232'}} to="/login">
                         <strong>Please login</strong></Link>
                 </Alert>

                 :
                 <></>
            }
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
                <div>
                    <TextField 
                    className={classes.input}
                    type="password"
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
                onClick={(e)=>Register(e)}>Register</Button>

            </form>

            
        </div>
    )
}

export default Register
