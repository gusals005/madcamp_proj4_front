import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Signup from './Signup';
import './Login.css';
import 'react-bootstrap/Form'

/*
Login page
    - Login 기능 구현 (Id 하고 pwd받아서 DB 내에 사용자인지 확인) (Get api로 확인)
    - Login 를 하기 위한 회원가입 페이지도 만들어야 함.(POST api 만들어야 하고)
    - Login 
*/
function Login(props){
    const [state, setState] = useState({userid:"",password:"", login:"waitting input."});

    document.title = `Login`;


    useEffect( async () => {
        //const response = await axios.get('http://192.249.18.232:8080/');
        //console.log(response);
        
        /*
              console.log(response.data.myCollection[0]);
              state.name = response.data.myCollection[0].test_database;
              state.age = response.data.myCollection[0].test;
        */
    });
    
    //login 
    async function loginCheck(e) {
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
            props.history.push("/home");
            
        }

    }

    return (
        <form class="form-form">
            <h3>Sign In</h3>
            <div class="form-group">
                <label for="id">Id</label>
                {/*
                <input type="email" class="form-control" id="id" aria-describedby="emailHelp">
                    */}
                <input type='text' class="form-control" value={state.userid } id="id" onChange={e => setState({...state, userid:e.target.value})}/>
                <small id="help" class="form-text text-muted">hi.helpmessagetest</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type='text' class="form-control" value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
                {/*<input type="password" class="form-control" id="exampleInputPassword1"> */}
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                <button type="submit" class="btn btn-primary" onClick={loginCheck}>Submit</button>
            <p className="form-group">
                <Link to='/signup' class="nav-link">Signup</Link>
            </p>
            <p className="forgot-password text-right">
                로그인 성공?? <b>{state.login}</b>
            </p>
        </form>
        
    );
}


export default Login;