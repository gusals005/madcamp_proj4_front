import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Signup from './Signup';
import './Login.css';
import 'react-bootstrap/Form'
import { SetUser_id, SetCoin,SetBetting,SetName,SetPrincipal, LoginSuccess} from '../../redux/user/action';
import { useDispatch, useSelector } from 'react-redux';
import IntroVideo from "../../components/material/introVideo.mp4"
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*
Login page
    - Login 기능 구현 (Id 하고 pwd받아서 DB 내에 사용자인지 확인) (Get api로 확인)
    - Login 를 하기 위한 회원가입 페이지도 만들어야 함.(POST api 만들어야 하고)
    - Login 
*/

function Login(props){
    const [state, setState] = useState({userid:"",password:"", login:"waitting input."});
    
    document.title = `Login`;

    const dispatch = useDispatch();
    
    //login 
    async function LoginCheck(e) {
        e.preventDefault();
        console.log('The link was clicked');
        const response = await axios.post('http://192.249.18.232:8080/user/login',{
            user_id: state.userid,
            password : state.password
        });
        console.log(response);

        if(response.data.message == "fail"){
            console.log("로그인 실패");
            setState({...state, login:"fail"});   
        }
        else{
            console.log("로그인 성공");
            setState({...state, login:"success"});
            
            //login이 성공하면, 그 유저의 정보를 가져와서 Home에 유저 정보 넘겨주기
            //console.log(response.data.currentUser);
            let user = response.data.currentUser;
            
            //token도 넣어주긴해야함.
            let token = response.data.token;
            console.log("token",token);

            dispatch(LoginSuccess({token:token}));
            dispatch(SetUser_id({user_id:user.user_id}));
            console.log("찐",user.coin);
            dispatch(SetCoin({coin:user.coin}));
            dispatch(SetBetting({betting:user.betting}));
            dispatch(SetName({name:user.name}));
            dispatch(SetPrincipal({principal:user.principal}));

            props.history.push("/home");
        }
    }

    async function Signup() {
        props.history.push("/signup");
    }

    return (
        <div>
            <video autoPlay loop muted
            style = {{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}
            >
                <source src={IntroVideo} type="video/mp4"/>
            </video>
            <div class="login-box">
                <h1>ToToNoNo</h1>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <input type='text' placeholder="Id" value={state.userid } id="id" onChange={e => setState({...state, userid:e.target.value})}/>
                </div>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faLock} />
                    </p>
                    <input type='password' placeholder="Password" value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
                </div>
                <div>
                    <button class="btn-box" onClick={LoginCheck}>로그인</button>
                    <button class="btn-box" onClick={Signup}>회원가입</button>
                </div>
            </div>
        </div>
    );
}


export default Login;