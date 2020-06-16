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
        password:''
    });
    const [error, setError] = React.useState({
        name:false,
        email:false,
        password:false
    })

    React.useEffect(()=>{

    },[registerState.success])

    const {name, email, password} = user;

    const handleChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    const validate = ()=>{
        let emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        //if the name fails exit early
        if(!name){
            setError({...error, name:true})
            return true
        }
        //if the email fails exit early
        if(!emailTest.test(email)){
            setError({...error, name:false, email:true})
            return true
        }
        //if the password fails exit early
        if(password.length <6){
            setError({...error, name:false,email:false, password:true})
            return true
        }else{
            //this means everthing before hand has passed, return false, so that the registration can occur
            setError({...error, name:false, email:false, password:false})
            return false
        }
    }

    const Register = (e)=>{
        e.preventDefault()
        let yeet = {name:name, email:email, password:password}
        if(validate()){
            //if there is a error, exit without registering the person
            return
        }else{
            //register the person
            dispatch(registerUser(yeet))
        }
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
                     Account added!-<Link style={{color:'#0095f6'}} to="/login">
                         <strong>Please login</strong></Link>
                 </Alert>

                 :
                 <></>
            }
            <form>
                <div>
                    <TextField 
                    className={classes.input}
                    error={error.name}
                    helperText="Please include a name"
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={name}
                    onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                    className={classes.input}
                    error={error.email}
                    helperText="Please include valid email"
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                    className={classes.input}
                    error={error.password}
                    helperText="password must be 6+ characters"
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
                onClick={(e)=>Register(e)}>Register</Button>

            </form>

            
        </div>
    )
}

export default Register
