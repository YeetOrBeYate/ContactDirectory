import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = ({title, icon}) => {
    return (
        <AppBar position='relative'>
            <Toolbar>
                <h1>
                    <i className={icon}/> {title}
                </h1>
                <div>
                    <Button color="inherit">Profile</Button>
                    <Button color="inherit">Contacts</Button>
                </div>
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
