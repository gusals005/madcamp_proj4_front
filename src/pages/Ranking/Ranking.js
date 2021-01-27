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

const useStyles = makeStyles({
    root: {
        
        minWidth: 275,
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 30,
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        
    },
    title: {
        backgroundColor: "#FFDB5855",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const useStyles1 = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 30
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        backgroundColor: "#9EF04855",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const useStylesL = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 30,
        marginLeft: 30
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        backgroundColor: "#CDECFA55",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const useStylesC = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 30,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        backgroundColor: "#CDECFA55",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const useStylesR = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 30,
        marginRight: 30
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        backgroundColor: "#CDECFA55",
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Ranking = () => {
    const classes = useStyles();
    const classes1 = useStyles1();

    const classesL1 = useStylesL();
    const classesL2 = useStylesL();
    const classesL3 = useStylesL();
    const classesC1 = useStylesC();
    const classesC2 = useStylesC();
    const classesC3 = useStylesC();
    const classesR1 = useStylesR();
    const classesR2 = useStylesR();
    const classesR3 = useStylesR();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div class="col">
            <div class="row">
                <div class="col-sm-6">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
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
                    <Card className={classes1.root}>
                        <CardContent>
                            <Typography className={classes1.title} color="textSecondary" gutterBottom>
                                동부 컨퍼런스 팀 순위
                            </Typography>
                            <ul class="list-group">
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

            <div class="row">
                <div class="col-sm-4">
                    <Card className={classesL1.root}>
                        <CardContent>
                            <Typography className={classesL1.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesC1.root}>
                        <CardContent>
                            <Typography className={classesC1.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesR1.root}>
                        <CardContent>
                            <Typography className={classesR1.title} color="textSecondary" gutterBottom>
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

            <div class="row">
                <div class="col-sm-4">
                    <Card className={classesL2.root}>
                        <CardContent>
                            <Typography className={classesL2.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesC2.root}>
                        <CardContent>
                            <Typography className={classesC2.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesR2.root}>
                        <CardContent>
                            <Typography className={classesR2.title} color="textSecondary" gutterBottom>
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
            <div class="row">
                <div class="col-sm-4">
                    <Card className={classesL3.root}>
                        <CardContent>
                            <Typography className={classesL3.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesC3.root}>
                        <CardContent>
                            <Typography className={classesC3.title} color="textSecondary" gutterBottom>
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
                    <Card className={classesR3.root}>
                        <CardContent>
                            <Typography className={classesR3.title} color="textSecondary" gutterBottom>
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