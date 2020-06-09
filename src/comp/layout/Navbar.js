import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';

const Navbar = ({title, icon}) => {

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
          <MenuItem >
            <Link to='/'>
                <Button color="primary">Home</Button>
            </Link>
          </MenuItem>
          <MenuItem >
            <Link to='/about'>
                <Button color="primary">About</Button>
            </Link>
          </MenuItem>
        </Menu>
    )


    return (
        <AppBar position='relative'>
            <Toolbar>
                <h1>
                    <i className={icon}/> {title}
                </h1>
                <div className={classes.sectionDesktop}>
                    <Link to='/'>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to='/about'>
                        <Button color="inherit">About</Button>
                    </Link>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton onClick={(e)=>mobileMenuOpen(e)}>
                        <MoreIcon className={classes.iconsSyle}/>
                    </IconButton>
                </div>
                {renderMobileMenu}
            </Toolbar>
        </AppBar>
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