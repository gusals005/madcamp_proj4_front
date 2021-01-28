import AuthActionTypes from './types';

const INITIAL_STATE = {
    jwt:'init',
    user_id: 'init',
    coin: 0,
    betting: [],
    name: 'init',
    principal: 0
};

const authReducer = (state = INITIAL_STATE, action) => {
    if (state === undefined)
        state = INITIAL_STATE;
    switch (action.type) {
        case 'LoginSuccess':
            console.log("찐찐",action.token);
            return {...state, jwt:action.jwt};
        case 'SetUser_id':
            return { ...state, user_id:action.user_id };
        case 'SetCoin':
            console.log("찐찐",action.coin);
            return { ...state, coin: action.coin }
        case 'SetBetting':
            return { ...state, betting: action.betting }
        case 'SetName':
            return { ...state, name: action.name }
        case 'SetPrincipal':
            return { ...state, principal: action.principal }
        case 'Logout':
            return { ...state, jwt:action.jwt }
        default:
            return state;
    }
};
export default authReducer;