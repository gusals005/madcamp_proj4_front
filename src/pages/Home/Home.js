import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom';
import styles from './Home.css';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import 'react-bootstrap/Navbar';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../components/Navbar'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import MatchList from '../../components/MatchList';
import { useSelector } from 'react-redux';
import { selectCoin } from '../../redux/user/selector';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        marginLeft: 100,
        marginTop: 50,
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

const matchStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 800,
        marginLeft: 50,
        marginTop: 50,
        maxHeight: 700,
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }


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

const Home = (props) => {
    //const [items, setItems] = useState([]);

    const [matches, setMatches] = useState([]);
    const [user, setUser] = useState({});
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const matchclasses = matchStyles();


    //const location = useLocation();

    
  
    useEffect(() => {
        console.log(matches);
    }, [matches])

    useEffect(() => {
        console.log(user);
    }, [user])

    useEffect(() => {
        axios.get('http://192.249.18.232:8080/match')
            .then((res) => {
                console.log("---------------");
                console.log(res);
                console.log("---------------");

                setMatches(res.data);
            });
    
        console.log('Get matches.');
    }, []);


    return (
        <div className="row">
            {/* 광고 */}
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        광고
                    </Typography>
                    <Typography variant="h5" component="h2">
                        현민이 컴퓨터
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        중학생한테
                    </Typography>
                    <Typography variant="body2" component="p">
                        털렸쥬?
                    <br />
                        {'"We are wating for you."'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Contact Us</Button>
                </CardActions>
            </Card>

            {/* Match */}
            <ul className="list-group list-group-flush" className={matchclasses.root}> 
                <MatchList matches={matches} />
            </ul>

            {/* 광고 */}
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        광고
                    </Typography>
                    <Typography variant="h5" component="h2">
                        현민이 컴퓨터
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        중학생한테
                    </Typography>
                    <Typography variant="body2" component="p">
                        털렸쥬?
                    <br />
                        {'"We are wating for you."'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Contact Us</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Home;