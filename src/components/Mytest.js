import React, { Component, useEffect, useState } from 'react';

function Mytest(props){
    const [state, setState] = useState({name:"",age:0});

    useEffect( () => {
        document.title = `이름은 : ${state.name}`;
    });
    return (
      <div>
        <p> {`name is ${state.name}`}</p>
        <p> {`age is ${state.age}`}</p>
        <input type='text' value={state.name} onChange={e => setState({...state, name:e.target.value})}/>
        <input type='number' value={state.age } onChange={e => setState({...state, age:e.target.value})}/>
        
        <br></br>안녕하세요! 제 이름은 <b>{props.name}</b> 입니다.
      </div>
    );
}

Mytest.defaultProps = {
    name: 'rlqhsdlfma'
}

export default Mytest;