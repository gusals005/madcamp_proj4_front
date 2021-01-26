import React from 'react';
import { Link } from 'react-router-dom';

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