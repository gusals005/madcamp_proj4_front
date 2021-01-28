import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import IntroVideo from "../../components/material/introVideo.mp4"

function Signup(){
    const [state, setState] = useState({userid:"",password:"",confirmPassword:"",nickname:"", coin:10000, register:"loading"});

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
    
    //회원가입 
    async function register(e) {
        e.preventDefault();
        console.log('Register was clicked');
        if(state.password === state.confirmPassword){
            const response = await axios.post('http://192.249.18.232:8080/user/signup',{
                user_id: state.userid,
                password : state.password,
                //confirmPassword: state.confirmPassword,
                name:state.nickname,
                principal:state.coin,
                coin:state.coin
            });
            console.log(response);

            if(response.data.message === "success"){
                setState({...state, register:"success"});
            }
            else{
                setState({...state, register:"fail"});
            }
        }
        else{
            console.log('is not same between password and confirm password');
        }
    
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

            <button type="submit" className="btn btn-primary btn-block" onClick={register}>
                회원가입
                </button>

            <p className="forgot-password text-right">
                <Link to='/'>Login 창으로 돌아가기</Link>
            </p>
            <p className="forgot-password text-right">
                회원가입 성공?? <b>{state.register}</b>
            </p>
        </div>
    );
}


export default Signup;