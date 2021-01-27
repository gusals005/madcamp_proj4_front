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
            <div className="col">
                <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        불법 토토 예비 희생양
                    </Typography>
                    <Typography variant="h5" component="h2">
                        이동현
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        보유 코인: 500 Coin
                    </Typography>
                    <Typography variant="body2" component="p">
                        그만하세요
                    <br />
                        {'"위험해"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">~!!~</Button>
                </CardActions>
                </Card>
                <Card className={classes1.root}>
                <CardContent>
                    <Typography className={classes1.title} color="textSecondary" gutterBottom>
                        광고
                    </Typography>
                    <Typography variant="h5" component="h2">
                        ToToNoNo
                    </Typography>
                    <Typography className={classes1.pos} color="textSecondary">
                        중학생한테
                    </Typography>
                    <Typography variant="body2" component="p">
                        털렸쥬?
                    </Typography>
                </CardContent>
                </Card>
            </div>
            {/* <Card className={classes2.root}>
            <CardContent>
                <Typography className={classes2.title} color="textSecondary" gutterBottom>
                    불법 토토 예비 희생양
                </Typography>
                <Typography variant="h5" component="h2">
                    이현민
                </Typography>
                <Typography className={classes2.pos} color="textSecondary">
                    보유 코인: 500 Coin
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
            </Card> */}
            <div class={classes2.root}>
                <Tabs defaultActiveKey="gallery1" className="dormtab">
                    <Tab eventKey="gallery1" title="현재 배팅 현황">
                        <div className="tab-item-wrapper">
                            현재 배팅 현황..
                        </div>
                    </Tab>
                    <Tab eventKey="gallery2" title="과거 기록">
                        <div className="tab-item-wrapper">
                            과거 배팅 기록들..
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>         
    )
}
export default Factcheck;