import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const ContactItem = ({contact}) => {

    const useStyles = makeStyles({
        root:{
            minWidth:300
        }
    })

    const classes = useStyles()

    const {_id,name,email,phone,type} = contact
    
    return (
        <Card className={classes.root} >
            <CardContent>
                <div>
                    <Typography>
                        {name}
                    </Typography>
                    <Chip label={type}/>
                </div>
            </CardContent>
            
        </Card>
    )
}

export default ContactItem
