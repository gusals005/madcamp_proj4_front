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
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            즐거웠나요?
                        </Typography>
                        <div class="row justify-content-around">
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">국민 체육 진흥법 제48조 제3호</h5>
                                            <p class="card-text">불법 토토 이용자는 5년 이하의 징역이나 5천만원 이하의 벌금에 처한다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">수수료</h5>
                                            <p class="card-text">이 사이트의 수수료는 12프로지만 다른 사이트 운영자는 평균 30~40프로의 수수료를 가져간다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div><div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">먹튀</h5>
                                            <p class="card-text">경찰에 잡힌 스포츠 도박 운영자들의 말을 종합하면 불법 사이트 가운데 70%가 돈을 갖고 사라지는 이른바 '먹튀' 사이트로 추산된다.</p>
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
                                            <h5 class="card-title">당신이 될 수도 있습니다.</h5>
                                            <p class="card-text">(충격 실화) “8년간 5000만원 잃었어요” 불법 온라인 도박의 늪, ‘좀비’가 된 청년들</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">먹튀를 당할 수 있습니다.</h5>
                                            <p class="card-text">원금 {((user_principal)/10)}만원 증발</p>
                                        </div>
                                    </div>
                                </div>
                            </div><div class="col-sm-4" >
                                <div className = {class_margin.root}>
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">만들지 마세요.</h5>
                                            <p class="card-text">(실제 기사) 대박 욕심 사설토토 개설... 8개월만에 쇠고랑 ‘쪽박’</p>
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
    
}
export default Factcheck;