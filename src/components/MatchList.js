import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dialog:{
        margin:30,
    },
  }));
  
const AlertDialog = ({match}) => {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState([1]);
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };
    
    const setListItem = (value) => {
        let team_name = "";
        let team_odds = 0.0;
        if(value == 0){
            team_name = "팀 이름";
            team_odds = "배당률";
        }
        else if(value == 1){
            team_name = match.home;
            team_odds = match.win_odds;
        }
        else{
            team_name = match.away;
            team_odds = match.lose_odds;
        }

        return(
            <div className="dialog">
                {team_name}
                {team_odds}
            </div>    
        )
    };

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Betting This Game
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          className={classes.dialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title" className={classes.dialog}>{`Home ${match.home} vs ${match.away} Away`}</DialogTitle>
            <DialogContent>
                <List dense className={classes.root}>
                    {[0, 1,2].map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                        <ListItem key={value} button>
                            <ListItemText id={labelId}>
                                {setListItem(value)}
                            </ListItemText>
                            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </ListItemSecondaryAction>
                        </ListItem>
                        );
                    })}
                </List>
            </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Betting
            </Button>
        </DialogActions>
        </Dialog>
      </div>
    );
}



const MatchList = ({matches}) => {
    
    const loadList = () => {
        return matches.map((item) => {
            let match_date = item.match_date.split('T')[0];
            console.log(match_date);
            
            return(
                <div>
                    <Link to={`/${item._id}`} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{item.home} vs {item.away}</h5>
                        <small>{match_date}</small>
                        </div>
                        <p className="mb-1">점수  || Home {item.home_score} : {item.away_score} Away</p>
                        <small>배당률 || Win {item.win_odds} : {item.lose_odds} Lose</small>
                    </Link>
                    <AlertDialog match={item} />
                </div>
            ) 
            
        })
    }

    return (
        <ul>
            {loadList()}
        </ul>

    )
}

export default MatchList;


/*
<div className="row">
                <div>  
                    <DialogContentText id="alert-dialog-description">
                        Home 팀 베팅하기
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        Away 팀 베팅하기
                    </DialogContentText>
                </div>
                <div>  
                    <DialogContentText id="alert-dialog-description">
                        배당률 : {match.home_odds}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        배당률 : {match.away_odds}
                    </DialogContentText>
                </div>
                <div>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>

            </div>

            */