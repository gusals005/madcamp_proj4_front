import React, {useState } from 'react';
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
        margin: 50,
    },
    bullet: {
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Totoking = (props) => {
    const [state, setState] = useState({users: []});

    useEffect(() => {

        axios.get('http://192.249.18.232:8080/user/check', {
            headers: {
              'x-access-token': token
            }
        })
        .then((res) => {
            if(res.data.message == "error") props.history.push('/')
        })

        axios.get('http://192.249.18.232:8080/user')
        .then((res) => {
            const users = res.data
            setState({users: users})
            console.log(users[0])
        });
    }, []);
    let user_name;
    if (state.users.length > 1) {
        state.users.sort(function(a,b) {
            return (a.coin-a.principal)/a.principal - (b.coin-b.principal)/b.principal;
        });
    }
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const token = useSelector(state => {
        return selectToken(state);
    });

    const loadList = () => {
        return state.users.map((item) => {
            return(
                <div className="list-group-item list-group-item-action">
                    <p className="mb-1">이름: {item.name}</p>
                    <small>수익률: {((item.coin-item.principal)/item.principal*100).toFixed(2)}%</small>
                </div>
            )
        })
    }

    return(
        <div>
            <Navbar/>
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    금주의 토토킹
                </Typography>
                <Typography variant="h5" component="h2">
                    {loadList()}
                </Typography>
            </CardContent>
            </Card>

        </div>
         
    )
}

export default Totoking;