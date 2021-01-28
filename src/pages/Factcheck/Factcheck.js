import React from 'react';
import './Factcheck.css';
import 'react-bootstrap/Navbar';
import Navbar from '../../components/Navbar'
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import { selectToken } from '../../redux/user/selector';
import { useSelector } from 'react-redux';
import { selectPrincipal, selectCoin } from '../../redux/user/selector';
import { Divider } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

  const marginStyles = makeStyles({
    root: {
        margin: 20,
    },
  });

const Factcheck = (props) => {

    const classes = useStyles();
    const class_margin = marginStyles();
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

    const user_coin = useSelector(state => {
        return selectCoin(state);
    });

    const user_principal = useSelector(state => {
        return selectPrincipal(state);
    });
    
    if (user_coin < user_principal)
    {
        return(
            <div>
                <Navbar/>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            만약 당신이 실제 돈으로 토토를 했다면...
                        </Typography>
                        <div class="row justify-content-around">
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">태평 소국밥</h5>
                                            <p class="card-text">태평 소국밥 약 {((user_principal-user_coin)/6.5).toFixed(0)} 그릇 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">붕어빵</h5>
                                            <p class="card-text">붕어빵 약 {((user_principal-user_coin)/0.33).toFixed(0)} 개</p>
                                        </div>
                                    </div>
                                </div>
                            </div><div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">별 피시방</h5>
                                            <p class="card-text">별 피시방 약 {((user_principal-user_coin)/1).toFixed(0)} 시간</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-around">
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">휴지</h5>
                                            <p class="card-text">두루마리 휴지 약 {((user_principal-user_coin)/0.009).toFixed(0)}m</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">수돗물</h5>
                                            <p class="card-text">수돗물 약 {((user_principal-user_coin)/0.0006).toFixed(0)}L</p>
                                        </div>
                                    </div>
                                </div>
                            </div><div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">연애할 수 있는 횟수</h5>
                                            <p class="card-text">0회</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>         
        )
    }
    else{
        return(
            <div>
                <Navbar/>
            </div>         
        )
    }
    
}
export default Factcheck;