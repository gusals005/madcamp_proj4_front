import AuthActionTypes from './types';

export const LoginSuccess = (info) => ({
    type:AuthActionTypes.LoginSuccess,
    jwt:info.token
})

export const SetUser_id = (info) => ({
    type: AuthActionTypes.SetUser_id,
    user_id: info.user_id
})
export const SetCoin = (info) => ({
    type: AuthActionTypes.SetCoin,
    coin: info.coin
})
export const SetBetting = (info) => ({
    type: AuthActionTypes.SetBetting,
    betting:info.betting
})
export const SetName = (info) => ({
    type: AuthActionTypes.SetName,
    name: info.name
})
export const SetPrincipal = (info) => ({
    type: AuthActionTypes.SetPrincipal,
    principal: info.principal
})

export const Logout = (info) => ({
    type:AuthActionTypes.Logout,
    jwt:'info'
})