import './LogIn.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export  function LogIn() {
 
    const navigate = useNavigate();
    let url1 = "http://localhost:5789/users/";
    let [formInfo, setFormInfo] = useState({
        
        userName:"",
        password: "",

    })

    function textWasChanged(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        whichField: string) {

        let newObj = {
            ...formInfo,
            ...{
                [whichField]: e.target.value
            }
        };

        setFormInfo(newObj);
    }

    function f3(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formInfo);
    }
            
url1 = url1+formInfo.userName
axios.get(url1)
    .then(response => {
        console.log(response);

        let users = response.data;
      
       
        
        if (users.userName === formInfo.userName) {
            alert("This userName is already exist")
        }
        else {
            
const url = "http://localhost:5789/users/"
            axios.post(url, formInfo)
                .then(response1 => {
                    console.log(response1);

                    navigate('/Profile')
                })
        }
    })
  return (

    <div className='backGround'>
        <div className='title1'>
            <h1>..LogIn..</h1>
        </div>
         
        <div className='LogIn'>
        
        <form onSubmit={(e)=> {f3(e)}}>
        <label>Username</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "userName") }}  type="text" id="userName" name="userName" placeholder="@gmail.com"/><br />
        

        <label >Password</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "password") }}  type="password" id="password" name="password"/><br />

<input type="submit" value="submit"/>

        </form>
    </div></div>
  )
}
