// https://github.com/vitorhub/vitor-front.git

import React, { Component, useState } from 'react';
import axios, {isCancel, AxiosError} from 'axios';

export const sum = (a, b) => {
return a + b;
}
const ComponenteB = () => {
    let url = "http://localhost:3001/user/auth/login";

    const [tokenId , setTokenId ] = useState({})
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
      }).then(response => { setTokenId({ token: response.data.token, id: response.data.id })})
      .catch( error => console.log(error))
  }
  
    return (
      <div className="App">
        <button onClick={()=>{login()}}>  post </button>
        <p> {tokenId.token}</p> <br/>
        <p>{tokenId.id}</p> <br/>
        <p>{sum(2,2)}</p>
      </div>
    );
  }
  
  export default ComponenteB;