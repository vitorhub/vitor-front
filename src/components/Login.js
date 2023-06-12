import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  // Sessão privada valida a partir do id e do token com validade 60 segundos !!!!!!!!!!!!!!!!!!
  const validaSessaoPrivada = () => {
    if (tokenId.id && tokenId.token) {
      axios
        .get(`http://localhost:3001/user/private/${tokenId.id}`, {
          headers: {
            Authorization: `Bearer ${tokenId.token}`,
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error.response.data));
    }
  };
  // Sessão privada valida a partir do id e do token com validade 60 segundos !!!!!!!!!!!!!!!!!!

  // Delete a partir do email e senha
  const deletarUsuarioInformado = ()=>{
    if(tokenId.id){
      axios.delete(`http://localhost:3001/user/deletar/${tokenId.id}`,emailPass)
      .then((response)=> console.log(response))
      .catch((error)=> console.log(error.response.data))
    }
  }

  // Realiza login a partir do email e senha corretos %%%%%%%%%%%%%%%%%%%%%%
  let url = "http://localhost:3001/user/auth/login";
  const [tokenId, setTokenId] = useState({});
  const [emailPass, setEmailPass] = useState({
    email: "",
    password: "",
  });
  function retornaIdToken(e) {
    e.preventDefault();
    axios
      .post(url, emailPass)
      .then((response) => {
        setTokenId({ token: response.data.token, id: response.data._id });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
  // Realiza login a partir do email e senha corretos %%%%%%%%%%%%%%%%%%%%%%
  return (
    <>
      <form onSubmit={retornaIdToken}>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          onChange={(e) =>
            setEmailPass({ ...emailPass, email: e.target.value })
          }
          value={emailPass.email}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setEmailPass({ ...emailPass, password: e.target.value })
          }
          value={emailPass.password}
        />
        <button type="submit">Retorna id e token</button>
      </form>
      <p style={{ backgroundColor: "green" }}>{tokenId.id}</p> <br />
      <p style={{ backgroundColor: "red" }}>{tokenId.token}</p> <br />
      <button onClick={() => validaSessaoPrivada()}>
        Valida Sessão privada
      </button> <br/><br/>
      <button onClick={deletarUsuarioInformado}> Deletar usuario </button>
      {emailPass.email} <br/>
      {emailPass.password}
    </>
  );
};

export default Login;
