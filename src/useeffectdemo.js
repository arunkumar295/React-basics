import React from "react";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const Useeffectdemo=() => {

    const[name,setName]= useState({name: ""})
    useEffect(() => {
        console.log(name)
      }, [name]);
    const[age,setAge]= useState({age: ""})
    useEffect(() => {
        console.log(age)
      }, [age]);
    return (
        <div>
            <h1>Login Form</h1>
            <form>
    <input type="text" value={name.name} className="form" onInput={((e) => setName({name:e.target.value}))}/>
    <input type="number" value={age.age} onInput={((e) => setAge({age:e.target.value}))}/>
    <Button className="btn btn-primary"color="primary">submit</Button>
    </form>
    </div>
    )

}
export default Useeffectdemo
