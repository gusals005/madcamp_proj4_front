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
import {Tabs,Tab,Col,Row,Nav,NavItem} from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { selectToken } from '../../redux/user/selector';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        padding: 0,
        marginTop: 50,
        marginLeft: 50
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 5,
      marginTop: 5,
      padding: 0
    },
    body2: {

    }
  });

const useStyles1 = makeStyles({
    root: {
        maxWidth: 275,
        minHeight: 500,
        padding: 0,
        marginTop: 30,
        marginLeft: 50
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 5,
      marginTop: 5,
      padding: 0
    },
    body2: {

    }
});
const useStyles2 = makeStyles({
    root: {
        maxWidth: 1500,
        padding: 0,
        marginTop: 50,
        marginRight: 50,
        backgroundColor: 'white'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 5,
      marginTop: 5,
      padding: 0
    },
    body2: {

    }
});



const Factcheck = (props) => {
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes2 = useStyles2();
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
        <div className="row">
            <Navbar/>
            
        </div>         
    )
}
export default Factcheck;