import "../App.css";
import "./logProf.css";

("use client");
import { useState } from "react";

function Menu({ nome }) {
  let [name, setName] = useState(nome);

  function clickAdd() {
    setName((name = "logado"));
  }
  function clickSub() {
    setName((name = "naoLogado"));
  }
  // const name = "menu";
  if (name == "naoLogado") {
    return (
      <div className={name}>
        <div>
          <a href="/Log">
            <button>Logar</button>
          </a>
          &nbsp;&nbsp;
          <a href="/Registrar">
            <button>Registrar</button>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={"naoLogado"}>
          <a href="/Perfil">
            <button>Perfil</button>
          </a>
          &nbsp;
        </div>
      </div>
    );
  }
}

export default Menu;
