import React from 'react';
import { useState } from 'react';

const Content = () => {
    const [name,setName] = useState("arun")
    console.log("arun")
    function nameChange(){
        const names = ["arun","mani","laddu"];
        const num= Math.floor(Math.random()*3);
        setName(names[num]);
    }

    // useState - an data changeing with its original form while interaction with user without refreshing the page 
    // const btnclick = () => {
    //     alert("Hello! I am an alert box!!");
    // }
    // const btnclick2 = (name) => {
    //     alert(`Hello! I am an alert box!! ${name}`);
    // }
    // use diferent useState for all different obj comming 
    // const[count,setCount]=useState(99)
    // function btnclick2(name){
    //     alert(`Hello! I am an alert box!! ${name}`)
    // }
  
    // const[name,setName]=useState(() => namee("arun"))
    // const[name,setName]=useState(name()) cannot use like this this will run b4 the event starts and execute with other
    // event also without calling it

    // function add() {
    //     setCount(count+1);
    // }
    // function sub() {
    //     setCount(count-1);
    // }
  return (
    <div>
       <p>hii this is {name} </p>
       <button onClick={() => nameChange()}>click me</button>
       {/* <button onClick={() => {btnclick2("arun")} }>click me</button> */}
       {/* <button onClick={sub}>-</button>
       <span>{count}</span>
       <button onClick={add}>+</button> */}

    </div>
  )
}

export default Content