import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {useForms} from "../Hooks"
import {loginUser,resetLogin} from "../../Actions/LoginActions"

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const Login = () => {

    const loginState = useSelector(state=>state.Login)
    const dispatch = useDispatch()


    const[user,setUser] = React.useState({
        email:'',
        password:''
    })

    const {email,password} = user

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const submitLogin = (e)=>{
        e.preventDefault()
        dispatch(loginUser(user))
        setUser({...user, email:'', password:''})
    }


    const classes = useForms()
    return (
        <div className="regFormHold">
            <Typography variant="h4" color="primary">
                Login
            </Typography>
            {
                loginState.failure? 

                <Alert 
                severity="error"
                onClose={()=>dispatch(resetLogin())}
                >This is an error alert — check it out!</Alert>

                :
                <></>
            }
            <form>
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
                onClick={(e)=>submitLogin(e)}>Login</Button>
            </form>
        </div>
    )
}

export default Login
