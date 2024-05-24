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
  const [goal, setGoal] = useState("Descrição-Meta")
  const [dataMes, setDataMes] = useState("Mes")
  const [dataAno, setDataAno] = useState("Ano")
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
    let box = goal.box

    let q = { id, meta, dataMes, dataAno, box }

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
          EDITAR META
        </div>
        <div>
        &nbsp;Aqui você pode editar a sua meta
        </div>
        &nbsp;&nbsp;&nbsp;Apenas coloque o ID dela a baixo para poder mudar ela
      </h1>
      <Link href="/Perfil/Metas" style={{ color: "black" }}>
              <button className={styles.botaozin} >&nbsp;Voltar&nbsp;</button>
      </Link>
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
          <p>ID: <br/><input type="text" className={styles.box} onChange={changeID}/></p>
          
          
        {/* <p >Nome: <br/><input className={styles.box}  type="meta" onChange={changeName} /></p> */}
        <p >Nova descrição: <br/><input className={styles.box}  type="meta" onChange={changeGoal} /></p>
        <p>Novo prazo:   (mês/ano) <br/><input className={styles.boxmini} type="meta" onChange={changeMes} /> /  <input className={styles.boxmini} type="meta" onChange={changeAno} /></p>
        <div>
          
            &nbsp;
            <Link href="/Perfil/Metas" style={{ color: "black" }}>
              <button onClick={ handleUpdateGoal } className={styles.botaozin} >&nbsp;ATUALIZAR INFRORMAÇÕES&nbsp;</button>
            </Link>
              &nbsp;&nbsp;
              <Link href="/Perfil/Metas" style={{ color: "black" }}><button onClick={ handleDeleteGoal } className={styles.botaozin}>&nbsp;REMOVER A META COM ESSE ID&nbsp;</button></Link>
            
         
        </div>
        <section className={styles.quadrosMaiores}>

            { goals 
                ? ( goals.map( (q) =><> <Goal goal={q} /> </>) ) 
                : (<p>Loading...</p>) }
              
         </section>

        </div>
        
      </div>
    </div>
    {/* <div className={styles.barraBaixo}></div> */}

    </main>
  );
}

