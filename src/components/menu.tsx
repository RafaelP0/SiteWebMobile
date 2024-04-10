import "./menu.css";
import "../App.css";
import LogProf from "./logProf";
("use client");
import { useState } from "react";

function Menu() {
  let [name, setName] = useState("nada");

  function clickAdd() {
    setName((name = "menu"));
  }
  function clickSub() {
    setName((name = "nada"));
  }
  // const name = "menu";
  if (name == "nada") {
    return (
      <div>
        <div className={name}>
          <button onClick={clickAdd}>Menu</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={name}>
          <div className="nada">
            <button onClick={clickSub}>Fechar menu</button>
          </div>
          <div className={name} style={{ marginTop: "7%" }}>
            <a href="/">Home</a>&nbsp;
            <a href="/sobre">Sobre</a>&nbsp;
            <a href="/PorQue">Por que fazemos isso?</a>&nbsp;
            <a href="/Atualize">Motivação</a>&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
