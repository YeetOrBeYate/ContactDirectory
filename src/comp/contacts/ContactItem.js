import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { teal, red, blueGrey } from '@material-ui/core/colors';

const ContactItem = ({contact}) => {

    const useStyles = makeStyles((theme)=>({
        root:{
            minWidth:340,
            marginTop:'2%',
            marginBottom:'2%'
        },
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
    
    return (
        <Card className={classes.root} >
            <CardContent>
                <div className={classes.titlehold}>
                    <Typography color='primary' variant='h5'>
                        {name}
                    </Typography>
                    <Chip label={type}/>
                </div>
                <Typography className={classes.body}>
                    {email}
                </Typography>
                <Typography className={classes.body}>
                    {phone}
                </Typography>
                <CardActions>
                    <Button variant="contained" className={classes.edit} startIcon={<EditIcon/>}>Edit</Button>
                    <Button variant="contained" className={classes.delete} startIcon={<DeleteIcon/>}>Delete</Button>
                </CardActions>

            </CardContent>
            
        </Card>
    )
}

export default ContactItem
