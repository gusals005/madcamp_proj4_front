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
                <div className="list-group-item list-group-item-action" style={{padding: 10, margin:0, backgroundColor: '#555555', color: 'white'}}>
                    <div className="row justify-content-start"style={{padding: 0, margin:0}}>
                        <div class="col align-self-end" style={{maxWidth: 36, padding: 0, margin:0}}>
                            <small style={{fontSize: 12, maxWidth: 36, padding: 0, margin:0}}>이름: </small>
                        </div>
                        <div class="col align-self-end" style={{maxWidth: 60, padding: 0, margin:0}}>
                            <p className="mb-1" style={{fontSize: 20, maxWidth: 60, padding: 0, marginBottom:0}}>{item.name}</p>
                        </div>
                        <div class="col align-self-end" style={{maxWidth: 50, padding: 0, marginLeft: 100}}>
                            <small style={{fontSize: 12, maxWidth: 40, padding: 0, margin:0}}>수익률: </small>
                        </div>
                        <div class="col align-self-end" style={{maxWidth: 60, padding: 0, margin:0}}>
                            <p className="mb-1" style={{fontSize: 20, maxWidth: 60, padding: 0, margin:0}}>{((item.coin-item.principal)/item.principal*100).toFixed(2)}%</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return(
        <div>
            <Navbar/>
            <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                    금주의 토토왕
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