import React from 'react';
import { Route, Link } from 'react-router-dom';
import './Ranking.css';
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
        minWidth: 200
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

const Ranking = (props) => {
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

    return (
        <div class="col">
            <Navbar/>
            <div class="row" style={{padding: '30px'}}>
                <div class="col-sm-6">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                서부 컨퍼런스 팀 순위
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1. LAL</li>
                                <li class="list-group-item">2. 유타</li>
                                <li class="list-group-item">3. LAC</li>
                                <li class="list-group-item">4. 덴버</li>
                                <li class="list-group-item">5. 포틀랜드</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                동부 컨퍼런스 팀 순위
                            </Typography>
                            <ul class="list-group" style={{backgroundColor:'#555555'}}>
                                <li class="list-group-item">1. 필라델피아</li>
                                <li class="list-group-item">2. 보스턴</li>
                                <li class="list-group-item">3. 밀워키</li>
                                <li class="list-group-item">4. 인디애나</li>
                                <li class="list-group-item">5. 브루클린</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div class="row" style={{padding: '30px'}}>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                POINTS PER GAME
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Milwaukee Bucks	        120.1</li>
                                <li class="list-group-item">2.	Brooklyn Nets	        119.1</li>
                                <li class="list-group-item">3.	Denver Nuggets	        116.8</li>
                                <li class="list-group-item">4.	Washington Wizards	    116.5</li>
                                <li class="list-group-item">5.	Portland Trail Blazers	115.4</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                REBOUNDS
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Utah Jazz	        53</li>
                                <li class="list-group-item">2.	Washington Wizards	49</li>
                                <li class="list-group-item">3.	Atlanta Hawks	    46</li>
                                <li class="list-group-item">3.	LA Clippers	        46</li>
                                <li class="list-group-item">5.	Houston Rockets	    44</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                ASSISTS
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Utah Jazz	        24</li>
                                <li class="list-group-item">2.	LA Clippers	        23</li>
                                <li class="list-group-item">3.	Atlanta Hawks	    20</li>
                                <li class="list-group-item">4.	Washington Wizards	19</li>
                                <li class="list-group-item">5.	Houston Rockets	    16</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div class="row" style={{padding: '30px'}}>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                BLOCKS
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Atlanta Hawks	9</li>
                                <li class="list-group-item">2.	Utah Jazz	    5</li>
                                <li class="list-group-item">3.	Houston Rockets	4</li>
                                <li class="list-group-item">3.	LA Clippers	    4</li>
                                <li class="list-group-item">3.	New York Knicks	4</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                STEALS
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Houston Rockets	    13</li>
                                <li class="list-group-item">2.	LA Clippers	        11</li>
                                <li class="list-group-item">3.	Atlanta Hawks	    7</li>
                                <li class="list-group-item">3.	Washington Wizards	7</li>
                                <li class="list-group-item">5.	New York Knicks	    6</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                FIELD GOAL PERCENTAGE
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Atlanta Hawks	46.3</li>
                                <li class="list-group-item">2.	New York Knicks	43.4</li>
                                <li class="list-group-item">3.	Houston Rockets	42.0</li>
                                <li class="list-group-item">4.	LA Clippers	    40.4</li>
                                <li class="list-group-item">5.	Utah Jazz	    40.2</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div class="row" style={{padding: '30px'}}>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                THREE POINTERS MADE
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Utah Jazz	    15</li>
                                <li class="list-group-item">2.	Houston Rockets	12</li>
                                <li class="list-group-item">3.	Atlanta Hawks	10</li>
                                <li class="list-group-item">3.	New York Knicks	10</li>
                                <li class="list-group-item">5.	LA Clippers	    8</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                THREE POINT PERCENTAGE
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Atlanta Hawks	38.5</li>
                                <li class="list-group-item">2.	New York Knicks	37.0</li>
                                <li class="list-group-item">3.	Houston Rockets	32.4</li>
                                <li class="list-group-item">4.	Utah Jazz	    31.3</li>
                                <li class="list-group-item">5.	LA Clippers	    30.8</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div class="col-sm-4">
                    <Card className={classes.root} style={{border: 'solid', borderColor: '#4CAF50', backgroundColor: '#212529'}}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontSize: 30, color: 'white'}}>
                                FREE THROW PERCENTAGE
                            </Typography>
                            <ul class="list-group">
                                <li class="list-group-item">1.	Atlanta Hawks	    96.0</li>
                                <li class="list-group-item">2.	LA Clippers	        86.4</li>
                                <li class="list-group-item">2.	Utah Jazz	        86.4</li>
                                <li class="list-group-item">4.	Washington Wizards	73.9</li>
                                <li class="list-group-item">5.	Houston Rockets	    72.4</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Ranking;