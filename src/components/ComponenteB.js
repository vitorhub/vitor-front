// https://github.com/vitorhub/vitor-front.git

import React, { Component, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

export const sum = (a, b) => {
  return a + b;
};
const ComponenteB = () => {
  let url = "http://localhost:3001/user/auth/login";

  const [tokenId, setTokenId] = useState({});
  /* axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
    // JSON.stringfy(data)
  }) */

  function login() {
    axios
      .post(url, {
        email: "joaofalcao.35@outlook.com",
        password: "123456",
      })
      .then((response) => {
        setTokenId({ token: response.data.token, id: response.data.id });
      })
      .catch((error) => console.log(error));
  }
  function cria() {
    axios.post("http://localhost:3001/user/", {
        name: "vitor beina",
        email: "joaofalcao.35@outlook.com",
        password: "123456",
        repeatpassword: "123456",
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="App">
        <button
          onClick={() => {
            login();
          }}
        >
          {" "}
          Retorna id e token{" "}
        </button>
        <p> {tokenId.token}</p> <br />
        <p>{tokenId.id}</p> <br />
        <p>{sum(2, 2)}</p>
      </div>
      
      <button onClick={()=>cria()}>cria usuario</button>

      <form action="http://localhost:3001/user/" method="POST">
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
        <label htmlFor="email">email</label>
        <input type="text" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
        <label htmlFor="repeatpassword">repeat</label>
        <input type="password" name="repeatpassword" />
        <input type="submit" value={"enviar"} />
      </form>
    </>
  );
};

export default ComponenteB;
