import React, { Component } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

const ComponenteB = () => {
    let url = "http://localhost:3001/user/auth/login";
    
  /* axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
    // JSON.stringfy(data)
  }) */
  function login(){
      axios.post(url, {
          "email": "joaofalcao.35@outlook.com",
          "password": "123456"
          /* headers: {
              'Access-Control-Allow-Origin': true,
            }, */
      }).then(response => { console.log("tudocerto")})
      .catch( error => console.log(error))
  }
  
    return (
      <div className="App">
        <button onClick={()=>{login()}}>  post </button>
      </div>
    );
  }
  
  export default ComponenteB;