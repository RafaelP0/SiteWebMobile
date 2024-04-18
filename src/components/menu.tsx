"use client"

import "./menu.css";
import "../app/App.css";

import Link from "next/link";


import { useState } from "react";

function Menu() {
  let [name, setName] = useState("nada");

  function clickAdd() {
    setName("menu");
  }
  function clickSub() {
    setName("nada");
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
          
          <div className={name} 
          // style={{ marginTop: "7%" }}
          >
            <Link href="/">Home</Link> &nbsp;
            <Link href="/Sobre">Sobre</Link>
            &nbsp;
            <Link href="/PorQue">Por que fazemos isso?</Link>
            &nbsp;
            <Link href="/Motivacao">Motivação</Link>
            &nbsp;

          </div>
          <div className="nada">
            <button onClick={clickSub}>Fechar menu</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
