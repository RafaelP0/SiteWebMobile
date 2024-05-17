"use client"

import Goal from "../../../../components/goal.jsx";
import { getGoals, getGoalsByName, getGoalById, addGoal, updateGoal, deleteGoal } from "../../../../utils/api.js"
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid"
import Navbar from "../../../../components/navbar";
import styles from "./page.module.css";
import Link from "next/link";

function NovaMeta() {
  const [goals, setGoals] = useState(null)
  // const [nome, setName] = useState("")
  const [goal, setGoal] = useState("")
  const [dataMes, setDataMes] = useState("")
  const [dataAno, setDataAno] = useState("")
  const [id, setID] = useState("")
  
  
  useEffect( ()=>{
    getGoals()
    .then( (data) => setGoals(data) )
  }, [] )

  
  function changeName(event){
    setName(event.target.value)
  }

  function changeGoal(event){
    setGoal(event.target.value)
  }

  function changeMes(event){
    setDataMes(event.target.value)
  }

  function changeAno(event){
    setDataAno(event.target.value)
  }

  function handleAddGoal(){
    event.preventDefault()
    let id = uuid()
    let meta = goal


    let q = { id, meta, dataMes, dataAno }

    addGoal(q).then( (status)=>{
      if(status == 201) {
        getGoals()
          .then( (data) => setGoals(data) )
      }
    } )
  }

  function changeID(){
    setID(event.target.value)
  }

  

  function handleDeleteGoal(){
    deleteGoal(id).then( (status) => {
      if(status == 200){
        getGoals()
          .then( (data) => setGoals(data) )
      }
    } )
  }

  return (
  <main className={styles.bg}>
  <Navbar />
    <div>
      <h1>
        <div style={{ display: "flex", alignItems: "center", color: "black" }}>
          Nova meta
        </div>
        Aqui você pode cadastrar uma nova meta ;)
      </h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
        }}
        className={styles.back}
      >
        <div>
          {/* <p >Nome: <br/><input className={styles.box}  type="meta" onChange={changeName} /></p> */}
          <p >Descrição: <br/><input className={styles.box}  type="meta" onChange={changeGoal} /></p>
          <p>Prazo: <br/><input className={styles.boxmini} type="meta" onChange={changeMes} /> /  <input className={styles.boxmini} type="meta" onChange={changeAno} /></p>
        </div>
        <div>
          <div
            className={styles.box}
            style={{
              backgroundColor: "#4CAF50",
              color: "black",
            }}
          >
            <Link href="/Perfil/Metas" style={{ color: "black" }}>
              <button onClick={ handleAddGoal }>Confirmar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.barraBaixo}></div>

    </main>
  );
}

export default NovaMeta;
