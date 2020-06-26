import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../Actions/LoginActions"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import {makeStyles } from '@material-ui/core/styles';

const Navbar = ({title, icon}) => {

    const loginState = useSelector(state =>state.Login)
    const Contact = useSelector(state=>state.Contact)
    const Register = useSelector(state=>state.Register)
    const dispatch = useDispatch()

    const [mobileAnchor, setMobileAnchor] = React.useState(null)

    const isMobileMenuOpen = Boolean(mobileAnchor)

    const useStyle = makeStyles((theme)=>({

        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'flex',
            },
          },
          sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          },
          iconsSyle:{
              color:"white"
          },
    }))

    const classes = useStyle()
    
    const mobileMenuOpen = (e)=>{
        setMobileAnchor(e.currentTarget)
    }

    const mobileMenuClose = ()=>{
        setMobileAnchor(null)
    }

    const logOut = (e)=>{
        // e.preventDefault()
        sessionStorage.clear()
        dispatch(logout())
    }

    const renderMobileMenu = (
        <Menu
        anchorEl={mobileAnchor}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="mobile-view"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={mobileMenuClose}
      >

          {
              loginState.token?
                <div>
                    <MenuItem >
                        <Link to='/'>
                            <Button color="primary">Home</Button>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/about'>
                            <Button color="primary">About</Button>
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to='/login'>
                            <Button onClick={(e)=>logOut(e)} color="primary">Logout</Button>
                        </Link>
                    </MenuItem>
                </div>
              :
                <div>
                    <MenuItem >
                        <Link to='/login'>
                            <Button color="primary">Login</Button>
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to='/register'>
                            <Button color="primary">Register</Button>
                        </Link>
                    </MenuItem>
                </div>
          }

        </Menu>
    )


    return (
        <>
            <AppBar position='relative'>
                <Toolbar>
                    <h1>
                        <i className={icon}/> {title}
                    </h1>
                    <div className={classes.sectionDesktop}>
                        {
                            loginState.token?
                            <>
                                <Link to='/'>
                                    <Button color="inherit">Home</Button>
                                </Link>
                                <Link to='/about'>
                                    <Button color="inherit">About</Button>
                                </Link>
                                <Link to='/login'>
                                    <Button onClick={(e)=>logOut(e)} color="inherit">Logout</Button>
                                </Link>
                            
                            </>

                            :

                            <>
                                <Link to='/login'>
                                    <Button color="inherit">Login</Button>
                                </Link>
                                <Link to='/register'>
                                    <Button color="inherit">Register</Button>
                                </Link>                    
                            </>
                        }
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton onClick={(e)=>mobileMenuOpen(e)}>
                            <MoreIcon className={classes.iconsSyle}/>
                        </IconButton>
                    </div>
                    {renderMobileMenu}
                </Toolbar>
            </AppBar>
            {
                loginState.loading?
                <LinearProgress color="secondary"/>
                :
                <></>
            }
            {
                Register.loading?
                <LinearProgress color="secondary"/>
                :
                <></>
            }
            {
                Contact.loading?
                <LinearProgress color="secondary"/>
                :
                <></>
            }
        </>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}
Navbar.defaultProps={
    title:'Contact Keeper',
    icon:'fas fa-address-card'
}

export default Navbar