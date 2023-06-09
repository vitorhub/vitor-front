// https://github.com/vitorhub/vitor-front.git

import React, { Component, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";

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

  const [stateCria, setStateCria] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  });
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  function cria() {
    axios
      .post("http://localhost:3001/user/", stateCria)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response.data));
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
      </div>
      <button onClick={() => cria()}>cria usuario</button>
      <form onSubmit={()=>cria()}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setStateCria({ ...stateCria, name: e.target.value })}
          value={stateCria.nome}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setStateCria({ ...stateCria, email: e.target.value })
          }
          value={stateCria.email}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setStateCria({ ...stateCria, password: e.target.value })
          }
          value={stateCria.password}
        />
        <label htmlFor="repeatpassword">repeat</label>
        <input
          type="password"
          name="repeatpassword"
          onChange={(e) =>
            setStateCria({ ...stateCria, repeatpassword: e.target.value })
          }
          value={stateCria.repeatpassword}
        />
        <input type="submit" value={"enviar"} />
      </form>
      {stateCria.name} <br />
      {stateCria.email} <br />
      {stateCria.password} <br />
      {stateCria.repeatpassword}
    </>
  );
};

export default ComponenteB;
