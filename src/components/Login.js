import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  // Realiza login a partir do email e senha corretos %%%%%%%% YELLOW %%%%%%%%%%
  const [advertencia2, setAdvertencia2] = useState();
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
  // Realiza login a partir do email e senha corretos %%%%%%%% YELLOW %%%%%%%%%%

  // Sessão privada valida a partir do id e do token com validade 60 segundos !!!!!!! CINZA !!!!!!!!
  const [advertencia3, setAdvertencia3] = useState();
  const validaSessaoPrivada = () => {
    if (tokenId.id && tokenId.token) {
      axios
        .get(`http://localhost:3001/user/private/${tokenId.id}`, {
          headers: {
            Authorization: `Bearer ${tokenId.token}`,
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  // Sessão privada valida a partir do id e do token com validade 60 segundos !!!!!!! CINZA !!!!!!!!

  // Delete a partir do email e senha *************** brown *************
  const [advertencia4, setAdvertencia4] = useState();
  const deletarUsuarioInformado = () => {
    if (tokenId.id) {
      axios
        .delete(`http://localhost:3001/user/deletar/${tokenId.id}`, emailPass)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };
  // Delete a partir do email e senha *************** brown *************

  // UPDATE ---------------------------- green
  const [ advertencia5, setAdvertencia5] = useState()
  const [updateUser, setUpdateUser] = useState({
    name: "",
    email: "",
    password: "",
    newPassword: "",
  });
  const atualiza = (e) => {
    e.preventDefault()
    if(tokenId.id){
      axios
      .patch(`http://localhost:3001/user/update/${tokenId.id}`, updateUser)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }else{
      setAdvertencia5("Chamar id primeiro")
    }
  };
// UPDATE ---------------------------- green

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>
        <h1> Retorna id e token </h1>
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
        <p> Id: {tokenId.id}</p>
        <p> Token: {tokenId.token}</p>
        <small style={{ backgroundColor: "red", color: "#FFF" }}>
          {advertencia2}
        </small>
      </div>
      <div style={{ backgroundColor: "grey" }}>
        <h1>Valida sessão privada</h1>
        <button onClick={() => validaSessaoPrivada()}>
          Valida Sessão privada
        </button>
        <small style={{ backgroundColor: "red", color: "#FFF" }}>
          {advertencia3}
        </small>
      </div>
      <div style={{ backgroundColor: "brown" }}>
        <h1>Deleta usuario apartir da id retornada</h1>
        <button onClick={deletarUsuarioInformado}> Deletar usuario </button>
        <br />
        {emailPass.email} <br />
        {emailPass.password}
        <small style={{ backgroundColor: "red", color: "#FFF" }}>
          {advertencia4}
        </small>
      </div>
      <div style={{ backgroundColor: "green" }}>
        <h1> Atualiza com nova senha </h1>
        <form onSubmit={atualiza}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value }) }
            value={updateUser.name}
          />
          <label htmlFor="email"> Email </label>
          <input
            type="text"
            name="email"
            onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value }) }
            value={updateUser.email}
          />
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setUpdateUser({ ...updateUser, password: e.target.value }) }
            value={updateUser.password}
          />
          <label htmlFor="newPassword"> newPassword</label>
          <input
            type="password"
            name="newPassword"
            onChange={(e) => setUpdateUser({ ...updateUser, newPassword: e.target.value }) }
            value={updateUser.newPassword}
          />
          <button type="submit">Atualiza</button>
        </form>
        <small style={{ backgroundColor: "red", color: "#FFF" }}>
          {advertencia5}
        </small>
      </div>
    </>
  );
};

export default Login;
