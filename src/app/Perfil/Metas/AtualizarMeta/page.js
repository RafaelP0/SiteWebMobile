"use client"

import Goal from "../../../../components/goal.jsx";
import { getGoals, getGoalsByName, getGoalById, addGoal, updateGoal, deleteGoal } from "../../../../utils/api.js"
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid"
import Navbar from "../../../../components/navbar";
import styles from "./page.module.css";
import Link from "next/link";
import Metas from "../page";

export default function AtualizarMeta() {
  const [goals, setGoals] = useState(null)
  const [goal, setGoal] = useState("")
  const [dataMes, setDataMes] = useState("")
  const [dataAno, setDataAno] = useState("")
  const [id, setID] = useState("")



  const onChange = () => {
    setChecked(!checked);
  };

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

  function changeID(){
    setID(event.target.value)
  }



  function handleUpdateGoal(){
    event.preventDefault()
    let meta = goal
    let q = { id, meta, dataMes, dataAno }

    updateGoal(q).then( (status)=>{
      if(status == 200) {
        getGoals()
          .then( (data) => setGoals(data) )
      }
    } )
  }


  function handleDeleteGoal(){
    deleteGoal(id).then( (status) => {
      if(status == 200){
        getGoals()
          .then( (data) => setGoals(data) )
      }
    } )
  }

  function searchById(){
    getGoalById(id).then( (status) => {
      if(status == 200 || status == 201){
        getGoals()
          .then( (data) => setGoals(data) )
      }
    } )
  }

  function call(){          
    return(
      <>
       {/* <p >Nome: <br/><input className={styles.box}  type="meta" onChange={changeName} /></p> */}
      <p >Nova descrição: <br/><input className={styles.box}  type="meta" onChange={changeGoal} /></p>
      <p>Novo prazo: <br/><input className={styles.boxmini} type="meta" onChange={changeMes} /> /  <input className={styles.boxmini} type="meta" onChange={changeAno} /></p>
    <section className={styles.quadrosMaiores}>

          { goals 
              ? ( goals.map( (q) =><> <Goal goal={q} /> </>) ) 
              : (<p>Loading...</p>) }
              
        </section>
        </>)
  }


  useEffect( ()=>{
    
    getGoalById (id)
    
    
    .then( (data) => setGoals(data) )
  } )

  
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
          <div>Por motivos de segurança, por favor digite a seguir o ID do item que você gostaria de editar</div>
          <p>Id: <br/><input type="text" onChange={changeID}/></p>
          
          
        {/* <p >Nome: <br/><input className={styles.box}  type="meta" onChange={changeName} /></p> */}
        <p >Nova descrição: <br/><input className={styles.box}  type="meta" onChange={changeGoal} /></p>
        <p>Novo prazo: <br/><input className={styles.boxmini} type="meta" onChange={changeMes} /> /  <input className={styles.boxmini} type="meta" onChange={changeAno} /></p>
        
        <section className={styles.quadrosMaiores}>

            { goals 
                ? ( goals.map( (q) =><> <Goal goal={q} /> </>) ) 
                : (<p>Loading...</p>) }
              
         </section>
          
          
        </div>
        {/* {call()} */}
        <div>
          <div
            className={styles.box}
            style={{
              backgroundColor: "#4CAF50",
              color: "black",
            }}
          >
            <Link href="/Perfil/Metas" style={{ color: "black" }}>
              <button onClick={ handleUpdateGoal }>Atualizar informações</button>
              <button onClick={ handleDeleteGoal }>Remover a meta com esse ID</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div className={styles.barraBaixo}></div> */}

    </main>
  );
}

