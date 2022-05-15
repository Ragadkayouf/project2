import './SignUp.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from 'inspector';

export  function SignUp() {
    const navigate = useNavigate();
    let url1 = "http://localhost:5789/users/";
    let [formInfo, setFormInfo] = useState({
        flName: "",
        userName:"",
        password: "",
        confirmPassword:"",
        phoneNumber:"",

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

    function f2(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(formInfo);
        
url1 = url1+formInfo.userName
        axios.get(url1)
            .then(response => {
                console.log(response);

                let users = response.data;
              
               
                
                if (users.userName === formInfo.userName) {
                    alert("This userName is already exist , please choose another userName")
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
         



    }

     
 
  
    return (
        <div className='background'>
       <div className='title'> <h1>..SignUp..</h1></div>       
        <div className='SignUp'>
            
        
            <form onSubmit={(e)=> {f2(e)}}>

            <label>Full Name</label>
            
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "flName") }} 
                        type="text" id="flName" name="flName" placeholder="Ragad Kayouf"/><br />
           
        <label>Choose your username</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "userName") }}  type="text" id="userName" name="userName" placeholder="@gmail.com"/><br />
        

        <label >Create a password</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "password") }}  type="password" id="password" name="password"/><br />
        

        <label >Confirm your password</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "confirmPassword") }} type="password" id="confirmPassword" name="confirmPassword"/><br />


<label >Phone Number</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        textWasChanged(e, "phoneNumber") }} type="phoneNumber" id="phoneNumber" name="phoneNumber"/><br />                
        

        <input type="submit" value="submit"/>
        
         </form>
         </div>   
        </div>
    );
}

