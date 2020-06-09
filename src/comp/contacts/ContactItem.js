import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { lightGreen, purple } from '@material-ui/core/colors';

const ContactItem = ({contact}) => {

    const useStyles = makeStyles((theme)=>({
        root:{
            minWidth:340
        },
        titlehold:{
            display:'flex',
            justifyContent:'space-between'
        },
        body:{
            textAlign:'left',
        },
        edit:{
            color:theme.palette.getContrastText(lightGreen[700]),
            backgroundColor:lightGreen[700],
            '&:hover':{
                backgroundColor:lightGreen[900]
            }
        },

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
                <Typography className={classes.body} color="info">
                    {email}
                </Typography>
                <Typography className={classes.body} color="secondary">
                    {phone}
                </Typography>
                <CardActions>
                    <Button variant="contained" className={classes.edit}>Edit</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                </CardActions>

            </CardContent>
            
        </Card>
    )
}

export default ContactItem
