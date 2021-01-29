import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Mypage.css'
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
import { selectToken, selectUser_id, selectCoin, selectBetting, selectName, selectPrincipal } from '../../redux/user/selector';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, SetCoin, SetPrincipal } from '../../redux/user/action';
import { useState } from 'react';
import imgA from '../../components/material/image_1606922434772.gif';
import imgB from '../../components/material/image_1608796118742.gif';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        marginLeft: 100,
        marginRight: 50,
        marginTop: 50,
        backgroundColor: '#212529',
        color: 'white'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        color: 'white'
    },
    pos: {
        marginTop: 12,
        marginBottom: 12,
        color: 'white'
    }
});

const useStyles1 = makeStyles({
    root: {
        maxWidth: 275,
        minHeight: 470,
        marginTop: 30,
        marginLeft: 0,
        backgroundColor: '#212529',
        color: 'white'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      color: 'white'
    },
    pos: {
      marginBottom: 5,
      marginTop: 5,
      padding: 0,
      color: 'white'
    },
});
const useStyles2 = makeStyles({
    root: {
        maxWidth: 1500,
        padding: 0,
        marginTop: 50,
        marginRight: 50,
        backgroundColor: '#212529',
        color: 'white'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
      color: 'white'
    },
    pos: {
      marginBottom: 5,
      marginTop: 5,
      padding: 0,
      color: 'white'
    },
    body2: {

    }
});

const matchStyles = makeStyles({
    root: {
        paddingLeft: 0,
        minWidth: 275,
        maxWidth: 800,
        marginLeft: 50,
        marginright: 50,
        marginTop: 50,
        maxHeight: 700,
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: '0.4em',
            backgroundColor: '#212529',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ffffff',
            outline: '0px solid slategrey',
        },
        backgroundColor: '#00000000',
        color: 'white'


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});

const Mypage = (props) => {
    const [matches, setMatches] = useState([]);
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const matchclasses = matchStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const dispatch = useDispatch();
    const token = useSelector(state => {
        return selectToken(state);
    });
    const user_id = useSelector(state => {
        return selectUser_id(state);
    });
    const user_name = useSelector(state => {
        return selectName(state);
    });
    const user_coin = useSelector(state => {
        return selectCoin(state);
    });
    const user_betting = useSelector(state => {
        return selectBetting(state);
    });
    console.log(user_betting);
    const user_principal = useSelector(state => {
        return selectPrincipal(state);
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
            });

        axios.get('http://192.249.18.232:8080/match')
        .then((res) => {
            console.log("---------------");
            console.log(res);
            console.log("---------------");

            setMatches(res.data);

            axios.post('http://192.249.18.232:8080/user/finduser', {
                        user_id:user_id
                    }).then((res)=>{
                        console.log(res);
                        let new_coin = res.data.coin;
                        dispatch(SetCoin({coin:new_coin}));
                    })
        });
    
    }, []);
    const find_match = (item, pred) => {
        if (matches.length>0)
        {
            var i;
            for(i=0; i<matches.length; i++) {
                if (matches[i]._id == item.match_id) {
                    if (matches[i].can_betting) {
                        return (
                            <div>
                                <p className="mb-1">{(matches[i].home + 'vs' + matches[i].away)}</p>
                                <p className="mb-1">예측 팀: {pred}</p>
                            </div>
                        )
                    }
                    else {
                        let result = 'Fail'
                        if ((pred == 'Home' && matches[i].home_score>matches[i].away_score) || (pred == 'Away' && matches[i].home_score<matches[i].away_score)) {
                            result = 'Success'
                        }
                        return (
                            <div>
                                <p className="mb-1">{(matches[i].home + 'vs' + matches[i].away)}</p>
                                <p className="mb-1">예측 팀: {pred} ({result})</p>
                            </div>
                        )
                    }
                    break;
                }
            }
            return '';
        }
        return '';
    }
    const loadList = () => {
        return user_betting.map((item) => {
            let match_date = item.betting_date.split('T')[0];
            let pred;
            if (item.prediction == "WIN") pred = "Home"
            else pred = "Away"
            return(
                <div className="list-group-item list-group-item-action" style={{backgroundColor: "#212529", color: "#ffffff", border: 'solid', borderColor: "#999999", borderTop: 'none', borderLeft: "none", borderRight: 'none'}}>
                    <div className="d-flex w-100 justify-content-between">
                        <small>{match_date}</small>
                    </div>
                    {find_match(item, pred)}
                    <small>{item.amount} 코인 배팅</small>
                </div>
            )
        })
    }

    const addCoin = async () =>{
        //post 보내기 (addcoin 달라고)
        const response = await axios.post('http://192.249.18.232:8080/user/addcoin',{
            user_id:user_id
        })
        console.log("adcoin 후 response :",response);

        let coin_add = user_coin + 10000;
        let principal_add = user_principal +10000;

        //성공 했다면, coin 과 principal redux 수정
        if(response.data.message == "success"){
            dispatch(SetCoin({coin:coin_add}));
            dispatch(SetPrincipal({principal:principal_add}));
        }

    }

    const deleteUser = async () =>{
        //post 보내기 (addcoin 달라고)
        const response = await axios.post('http://192.249.18.232:8080/user/deleteUser',{
            user_id:user_id
        })
        console.log("delete 후 response :",response);
        
        //delete 하고 나면, 
        dispatch(Logout({token:'init'}));
        props.history.push('/');
    }

    return(
        <div>
            <Navbar/>
            <div className="row">
                <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50'}}>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            {user_name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            보유 코인: {user_coin}coin
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            원금: {user_principal}coin
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={addCoin} style={{color: 'white', border: 'solid'}}>코인 1만 개 충전</Button>
                        <Button size="small" onClick={deleteUser} style={{color: 'white', border: 'solid'}}>회원탈퇴</Button>
                    </CardActions>
                </Card>

                <div className={matchclasses.root} style={{padding: 0, border: 'solid', borderColor: '#4CAF50' }}>
                    <Typography className={matchclasses.title}>
                        배팅 기록
                    </Typography>
                    {loadList()}
                </div>
                
                <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50'}}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            광고
                        </Typography>
                        <Typography variant="h5" component="h2">
                            동원참치
                        </Typography>
                        <Typography className={classes1.pos} color="textSecondary">
                            이건 맛의
                        </Typography>
                        <Typography variant="body2" component="p">
                            대참치!
                        </Typography>
                    </CardContent>
                    <div className='row align-items-center'>
                        <img src={ imgA} width='275'/>
                    </div>
                    <div className='row align-items-center' style={{marginTop: 5}}>
                        <img src={ imgB} width='275'/>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default Mypage;