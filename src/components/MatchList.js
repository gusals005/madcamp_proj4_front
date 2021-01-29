import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { BrandingWatermark } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { selectUser_id, selectCoin } from '../redux/user/selector';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetBetting, SetCoin } from '../redux/user/action';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dialog:{
        margin:"auto",
    },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles1 = makeStyles((theme) => ({
    dividerColor: {
        backgroundColor: '#4CAF50',
    },
}));

const AlertDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState([1]);
    const [amount,setAmount] = React.useState(0);
    const [error_message,setError_message] = React.useState('');
    const [aipick, setAipick] = React.useState('');
    const [isAipickChecked, setIsAipickChecked] = React.useState(0);
    const classes = useStyles();
    
    const dispatch = useDispatch();

    

    useEffect(()=>{
        console.log("AFTER",isAipickChecked);
    }, [isAipickChecked])

    const handleClickOpen = () => {
      setOpen(true);
    };

    //팝업창 닫기
    const handleClose = () => {
      setOpen(false);
      console.log(checked);
    };

    const postBetting = async () => {
        
        let pred = (checked[0] == 1 ? "WIN" :"LOSE");
        let new_amount = 0 ;
        if( isAipickChecked == 0)
            new_amount = amount;
        else
            new_amount = amount*1+1000;

        //make input array
        let inputArray = {
            user_id:props.user.user_id,
            match_id:props.match._id,
            amount:new_amount,
            prediction:pred
        };

        //get 
        const response= await axios.post('http://192.249.18.232:8080/match/betting',{input:inputArray,isAipick:isAipickChecked});
        console.log(response);

        let new_coin = 0;
        console.log("hih",isAipickChecked);
        if( isAipickChecked == 0)
            new_coin = props.user.coin-amount;
        else
            new_coin = props.user.coin-amount-1000;

        let new_betting_list = response.data.betting;
        console.log(new_betting_list);
        console.log("찐",props.user.coin);
        dispatch(SetCoin({coin:new_coin}));
        dispatch(SetBetting({betting:new_betting_list}));
        
    } 

    //betting
    const handleBetting = () => {
        if(props.user.coin < amount){
            setError_message("가진돈보다 많은 금액은 베팅하실 수 없습니다.");
            setOpen(true);
        }
        else if(amount <=0){
            setError_message("수량은 1coin 이상 입력하셔야 합니다.");
            setOpen(true);
        }
        else{
            setError_message("");
            setOpen(false);
            postBetting();
        }
        console.log(amount);
        console.log(checked);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        
        if (currentIndex === -1 && newChecked.length ==0) {
          newChecked.push(value);
        } else if(currentIndex !== -1 && newChecked.length !== 0){
          newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAipick = () => {
        const currentChecked = aipick;
        if(props.user.coin < 1000){
            setAipick("보유금액이 작아 aipick을 받을 수 없습니다.");
            return;
        }

        if (currentChecked == '') {
          //match 에 aipick을 가져와.
            let pick = props.match.aipick;
            setAipick(pick);
            console.log("pre" ,isAipickChecked);
            setIsAipickChecked(1);
            
        } else{
            let str ='';
            setAipick(str);  
        }
    };
    
    const setDialog = (value) => {
        let team_name = "";
        let team_odds = 0.0;
        switch(value){
            case 0:
                team_name = "팀 이름";
                team_odds = "배당률";
                break;
            case 1:
                team_name = props.match.home;
                team_odds = props.match.win_odds;
                break;
            case 2:
                team_name = props.match.away;
                team_odds = props.match.lose_odds;
                break;
        }

        return(
            <div className="dialog">
                {team_name}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                {team_odds}
            </div>    
        )
    };

    const setBettingBtn = () => {
        
        let can_bet = props.match.can_betting;
        
        return(
            <div class="row justify-content-end">
                { can_bet ? 
                    <Button variant="outlined" color="inherit" onClick={handleClickOpen} style={{margin: 10, maxWidth: 200}}>
                    Betting This Game
                    </Button> : ''  
                }
            </div>
            
        )
    };


    return (
      <div>
        {setBettingBtn()}
        <Dialog
          open={open}
          onClose={handleClose}
          className={classes.dialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title" className={classes.dialog}>{`Home ${props.match.home} vs ${props.match.away} Away`}</DialogTitle>
        <DialogContent>
            <div className="row">
                <DialogContentText>
                    내가가진 코인 : {props.user.coin}
                    <br />
                    투자하기:
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="demo-customized-textbox">amount</InputLabel>
                        <BootstrapInput id="demo-customized-textbox" onChange={e => setAmount(e.target.value)}/>
                    </FormControl>
                </DialogContentText>
                <DialogContentText>
                    AI로부터 Pick받기
                    <Checkbox edge="end" onChange={handleAipick} />
                    &emsp;{aipick}
                </DialogContentText>
            </div>
            <List dense className={classes.root}>
                {[0, 1,2].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                    <ListItem key={value} button>
                        <ListItemText id={labelId}>
                            {setDialog(value)}
                        </ListItemText>
                        
                        <ListItemSecondaryAction>
                        {value > 0 ? <Checkbox
                            edge="end"
                            onChange={handleToggle(value)}
                            checked={checked.indexOf(value) !== -1}
                            inputProps={{ 'aria-labelledby': labelId }}
                        /> : ''}
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                })}
            </List>
            <DialogContentText>
                {error_message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Close
            </Button>
            <Button onClick={handleBetting} color="primary" autoFocus>
                Betting
            </Button>
        </DialogActions>
        </Dialog>
      </div>
    );
}



const MatchList = (props) => {
    const classes1 = useStyles1();
    let user_id = useSelector(state => {
        return selectUser_id(state);
    });
    let user_coin = useSelector(state => {
        return selectCoin(state);
    });
    const loadList = () => {
        return props.matches.map((item) => {
            let match_date = item.match_date.split('T')[0];
            console.log(match_date);
            
            return(

                <div className="list-group-item list-group-item-action" style={{backgroundColor: "#212529", color: "#ffffff", border: 'solid', borderColor: "#999999", borderTop: 'none', borderLeft: "none", borderRight: 'none'}}>
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.home} vs {item.away}</h5>
                    <small>{match_date}</small>
                    </div>
                    <p className="mb-1">점수  || Home {item.home_score} : {item.away_score} Away</p>
                    <small>배당률 || Win {item.win_odds} : {item.lose_odds} Lose</small>
                    <AlertDialog match={item} user={{user_id:user_id , coin:user_coin}} />
                </div>
            )
        })
    }

    return (
        <ul style={{padding: 0, marginRight:10 }}>
            {loadList()}
        </ul>

    )
}

export default MatchList;