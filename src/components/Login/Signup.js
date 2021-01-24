import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Signup(){
    const [state, setState] = useState({userid:"",password:"",confirmPassword:"",nickname:""});

    document.title = `Sign up`;


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
        const response = await axios.post('http://192.249.18.232:8080/login',{
            id: state.userid,
            password : state.password
        });
        console.log(response);

        if(response.data.Message == "verified"){
            setState({...state, login:"success"});   
        }
        else{
            setState({...state, login:"fail"});   
        }

    }

    return (
        <form>
                <h3>Sign up</h3>

                <div className="form-group">
                    <label>Id</label>
                    <input type='text' value={state.userid } onChange={e => setState({...state, userid:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type='text' value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Confirm new password</label>
                    <input type='text' value={state.confirmPassword } onChange={e => setState({...state, confirmPassword:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Nickname</label>
                    <input type='text' value={state.nickname } onChange={e => setState({...state, nickname:e.target.value})}/>
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
                    회원가입
                    </button>

                <p className="forgot-password text-right">
                    <Link to='/login'>Login 창으로 돌아가기</Link>
                </p>
                <p className="forgot-password text-right">
                    로그인 성공?? <b>{state.login}</b>
                </p>
            </form>
      
      /*
      <div>
        <p> Login</p>
        <input type='text' value={state.userid} onChange={e => setState({...state, userid:e.target.value})}/>
        <input type='text' value={state.password } onChange={e => setState({...state, password:e.target.value})}/>
        <br></br>로그인을 하려면 <b>{"회원가입"}</b>을 해야 합니다.
      </div>
      */      
    );
}


export default Signup;