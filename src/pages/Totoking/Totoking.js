import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Totoking.css';
import 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/Navbar'
import { useEffect } from 'react';
import axios from 'axios';
import { selectToken } from '../../redux/user/selector';
import { useSelector } from 'react-redux';


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

const Totoking = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const token = useSelector(state => {
        return selectToken(state);
    });

    useEffect(() => {

        axios.get('http://192.249.18.232:8080/user/check', {
            headers: {
              'x-access-token': token
            }
        })
            .then((res) => {
                console.log(res.data.message);
                if(res.data.message == "error") props.history.push('/')
            })

    }, []);

    return(
        <div>
            <Navbar/>
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    금주의 토토킹
                </Typography>
                <Typography variant="h5" component="h2">
                    1. blabla
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    2. blabla
                </Typography>
                <Typography variant="body2" component="p">
                    3. blabla
                <br />
                    {'"We are wating for you."'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">금액은?</Button>
            </CardActions>
            </Card>

        </div>
         
    )
}

export default Totoking;