"use client"

import styles from "./menu.module.css";
import "../app/App.css";

import Link from "next/link";


import { useState } from "react";

function Menu() {
  let [name, setName] = useState(styles.nada);

  function clickAdd() {
    setName(styles.menu);
  }
  function clickSub() {
    setName(styles.nada);
  }
  // const name = "menu";
  if (name == styles.nada) {
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
            <Link href="/Atualize">Se Atualize</Link>
            &nbsp;

          </div>
          <div className={styles.nada}>
            <button onClick={clickSub}>Fechar menu</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
