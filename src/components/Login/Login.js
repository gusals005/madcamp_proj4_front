import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Signup from './Signup';

/*
Login page
    - Login 기능 구현 (Id 하고 pwd받아서 DB 내에 사용자인지 확인) (Get api로 확인)
    - Login 를 하기 위한 회원가입 페이지도 만들어야 함.(POST api 만들어야 하고)
    - Login 
*/
function Login(){
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
        const response = await axios.post('http://192.249.18.246:8080/user/login',{
            id: state.userid,
            password : state.password
        });
        console.log(response);

        if(response.data.Message == "verified"){
            console.log("로그인 성공");
            setState({...state, login:"success"});   
        }
        else{
            console.log("로그인 실패");
            setState({...state, login:"fail"});   
        }

    }

    return (
        <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Id</label>
                    <input type='text' value={state.userid } onChange={e => setState({...state, userid:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type='text' value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
                </div>

                {/*
                    check box(Remember me)
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                */}

                <button type="submit" className="btn btn-primary btn-block" onClick={loginCheck}>
                    Submit
                    </button>

                <p className="forgot-password text-right">
                    <Link to='/signup'>Signup</Link>
                </p>
                <p className="forgot-password text-right">
                    로그인 성공?? <b>{state.login}</b>
                </p>

               
            </form>
        
            {/*
            <div>
                <p> Login</p>
                <input type='text' value={state.userid} onChange={e => setState({...state, userid:e.target.value})}/>
                <input type='text' value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
                <br></br>로그인을 하려면 <b>{"회원가입"}</b>을 해야 합니다.
            </div>
            */}      
        </div>
    );
}


export default Login;