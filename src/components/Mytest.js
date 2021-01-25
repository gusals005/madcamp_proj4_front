import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


function Mytest(props){
    const [state, setState] = useState({name:"", age:0, test:""});


    useEffect( () => {
        document.title = `이름은 : ${state.name}`;
        
        getTest()
          .then(response => {
            if(response.data){
              //const obj = JSON.parse(response.data);
              console.log(response.data.myCollection[0]);
              state.name = response.data.myCollection[0].test_database;
              state.age = response.data.myCollection[0].test;
              //console.log(obj.test_database);
              //console.log(obj.test);
            }
            else
              console.log('no result');
            })
          .catch(error => {
            console.log(error);
          })
        
    });

    return (
      <div>
        <p> {`test_database is ${state.name}`}</p>
        <p> {`test is ${state.age}`}</p>
        
        
        <input type='text' value={state.test} onChange={e => setState({...state, test:e.target.value})}/>
        {/*
        <input type='number' value={state.age } onChange={e => setState({...state, age:e.target.value})}/>
        */}
        <br></br>안녕하세요! 제 이름은 <b>{props.name}</b> 입니다.
      </div>
    );
}

Mytest.defaultProps = {
    name: '연습중이에요!'
}

const getTest = () => {
  try{
    return axios.get('http://192.249.18.232:8080/');
  } catch(error){
    console.error(error);
  }
}
const getTder = () =>{
  const breeds = getTest()
                .then(response => {
                  if(response.data){
                    console.log(response.data.myCollection);
                  }
                  else
                    console.log('no result');
                })
                .catch(error => {
                  console.log(error);
                })
};


export default Mytest;