import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Login.css';
import 'react-bootstrap/Form'
import { SetUser_id, SetCoin,SetBetting,SetName,SetPrincipal, LoginSuccess} from '../../redux/user/action';
import { useDispatch, useSelector } from 'react-redux';
import IntroVideo from "../../components/material/introVideo.mp4"
import { faUser, faLock, faSignature, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/*
Login page
    - Login 기능 구현 (Id 하고 pwd받아서 DB 내에 사용자인지 확인) (Get api로 확인)
    - Login 를 하기 위한 회원가입 페이지도 만들어야 함.(POST api 만들어야 하고)
    - Login 
*/

function Login(props){
    const [state, setState] = useState({loginUserid:"", loginPassword:"", signupUserid:"", signupPassword:"", confirmPassword:"", nickname:"", coin:10000, loginVisible:"visible", signupVisible:"hidden"});
    
    document.title = `ToToNoNo`;

    const dispatch = useDispatch();
    
    //login 
    async function LoginCheck(e) {
        e.preventDefault();
        console.log('The link was clicked');
        const response = await axios.post('http://192.249.18.232:8080/user/login',{
            user_id: state.loginUserid,
            password : state.loginPassword
        });
        console.log(response);

        if(response.data.message == "fail"){
            console.log("로그인 실패");
        }
        else{
            console.log("로그인 성공");
            
            let user = response.data.currentUser;
            let token = response.data.token;

            dispatch(LoginSuccess({token:token}));
            dispatch(SetUser_id({user_id:user.user_id}));
            dispatch(SetCoin({coin:user.coin}));
            dispatch(SetBetting({betting:user.betting}));
            dispatch(SetName({name:user.name}));
            dispatch(SetPrincipal({principal:user.principal}));

            props.history.push("/home");
        }
    }

    async function Signup(e) {
        e.preventDefault();
        if(state.signupPassword === state.confirmPassword){
            const response = await axios.post('http://192.249.18.232:8080/user/signup',{
                user_id: state.signupUserid,
                password : state.signupPassword,
                name:state.nickname,
                principal:state.coin,
                coin:state.coin
            });
            console.log(response);

            if(response.data.message === "success"){
                setState({...state, register:"success", loginVisible:"visible", signupVisible:"hidden"});
            }
            else{
                setState({...state, register:"fail", loginVisible:"hidden", signupVisible:"visible"});
            }
        }
        else{
            console.log('is not same between password and confirm password');
        }
    }

    async function GoSignup() {
        setState({...state, loginVisible:"hidden", signupVisible:"visible"});
    }

    async function GoLogin() {
        setState({...state, loginVisible:"visible", signupVisible:"hidden"});
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
            <div class="login-box" style={{
                visibility: state.loginVisible
            }}>
                <h1>ToToNoNo</h1>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <input type='text' placeholder="Id" value={state.loginUserid } id="id" onChange={e => setState({...state, loginUserid:e.target.value})}/>
                </div>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faLock} />
                    </p>
                    <input type='password' placeholder="Password" value={state.loginPassword } onChange={e => setState({...state, loginPassword:e.target.value})}/>
                </div>
                <div>
                    <button class="btn-box" onClick={LoginCheck}>로그인</button>
                    <button class="btn-box" onClick={GoSignup}>회원가입</button>
                </div>
            </div>
            <div class="login-box" style={{
                visibility: state.signupVisible
            }}>
                <h1>Signup</h1>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <input type='text' placeholder="Id" value={state.signupUserid } id="id" onChange={e => setState({...state, signupUserid:e.target.value})}/>
                </div>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faLock} />
                    </p>
                    <input type='password' placeholder="Password" value={state.signupPassword } onChange={e => setState({...state, signupPassword:e.target.value})}/>
                </div>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faCheck} />
                    </p>
                    <input type='password' placeholder="Confirm Password" value={state.confirePassword } onChange={e => setState({...state, confirmPassword:e.target.value})}/>
                </div>
                <div class="text-box">
                    <p>
                        <FontAwesomeIcon icon={faSignature} />
                    </p>
                    <input type='text' placeholder="Nickname" value={state.nickname } onChange={e => setState({...state, nickname:e.target.value})}/>
                </div>
                <div>
                    <button class="btn-box" onClick={Signup}>회원가입</button>
                    <button class="btn-box" onClick={GoLogin}>돌아가기</button>
                </div>
            </div>
        </div>
        
    );
}


export default Login;