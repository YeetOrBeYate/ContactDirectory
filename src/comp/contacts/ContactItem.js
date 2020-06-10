import React from 'react';
import PropTypes from 'prop-types'
import {useDispatch, useSelector}from 'react-redux'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { teal, red, blueGrey } from '@material-ui/core/colors';

import {deleteById} from "../../Actions/ContactActions"
import {setEdit,stopEdit} from "../../Actions/EditActions"

const ContactItem = ({contact}) => {

    const dispatch = useDispatch()
    const Edit = useSelector(state=>state.Edit)
    const useStyles = makeStyles((theme)=>({
        titlehold:{
            display:'flex',
            justifyContent:'space-between'
        },
        body:{
            textAlign:'left'
        },
        edit:{
            color:theme.palette.getContrastText(blueGrey[600]),
            backgroundColor:blueGrey[600],
            '&:hover':{
                backgroundColor:blueGrey[800]
            }
        },
        delete:{
            color:theme.palette.getContrastText(red[600]),
            backgroundColor:red[600],
            '&:hover':{
                backgroundColor:red[800]
            }
        }
    }))

    const classes = useStyles()

    const {_id,name,email,phone,type} = contact

    const editButton = (e)=>{
        e.preventDefault()
        dispatch(setEdit(contact))
    }

    const deleteButton = (e)=>{
        e.preventDefault()
        dispatch(deleteById(_id))
    }
    
    return (
        <Card className="contactHold" >
            <CardContent>
                <div className={classes.titlehold}>
                    <Typography color='primary' variant='h5'>
                        {name}
                    </Typography>
                    <Chip label={type.charAt(0).toUpperCase() + type.slice(1)}/>
                </div>
                <Typography className={classes.body}>
                    {email}
                </Typography>
                <Typography className={classes.body}>
                    {phone}
                </Typography>
                <CardActions>
                    <Button onClick={(e)=>editButton(e)} variant="contained" className={classes.edit} startIcon={<EditIcon/>}>Edit</Button>
                    <Button onClick={(e)=>deleteButton(e)} variant="contained" className={classes.delete} startIcon={<DeleteIcon/>}>Delete</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
ContactItem.propTypes={
    contact:PropTypes.object.isRequired
}
export default ContactItem
