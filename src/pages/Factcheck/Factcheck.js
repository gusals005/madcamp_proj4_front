import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Factcheck.css';
import 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/Navbar'

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Factcheck = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <div>
            
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    당신이 잃은 금액
                </Typography>
                <Typography variant="h5" component="h2">
                    1. 100만원
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    2. 200만원
                </Typography>
                <Typography variant="body2" component="p">
                    3. 300만원
                <br />
                    {'"위험해"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">~!!~</Button>
            </CardActions>
            </Card>

        </div>
         
    )
}

export default Factcheck;