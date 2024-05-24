
"use client"

import Link from "next/link";
import { getGoals} from "../../../utils/api.js"
import { v4 as uuid } from "uuid"

import Navbar from "../../../components/navbar";
import Goal from "../../../components/goal";

import { useEffect, useState } from "react";

import styles from "./page.module.css";



function Metas() {
  
  const [goals, setGoals] = useState(null)
  const [checked, setChecked] = useState(false);




  useEffect( ()=>{
    getGoals()
    .then( (data) => setGoals(data) )
  })

  const onChange = () => {
    setChecked(!checked);
  };


  return (
    <main className={styles.bg}>
      <Navbar />
    <div>
      <h1>
        <div style={{ display: "flex", alignItems: "center", color: "black" }}>
          Minhas metas
        </div>
        Aqui você acompanha suas metas e objetivos para diminuir o consumo de substancias!
      </h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginRight: "20px",
          flexDirection: "column",
        }}
      >
        
        <div
        className={styles.espacinho}>
        
        &nbsp; &nbsp;
          <Link href={`/Perfil/Metas/AtualizarMeta` }  ><button className={styles.botaozin}>EDITAR META</button></Link>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        <Link href="/Perfil/Metas/NovaMeta">
          
          <button className={styles.botaozin}> CADASTRAR NOVA META </button>
          
        </Link>
        &nbsp; &nbsp;
      </div>
        <section className={styles.quadrosMaiores}>
          { goals 
              ? ( goals.map( (q) =><>   <Goal goal={q} /> </>) ) 
              : (<p>Loading...</p>) }
              
        </section>
      </div>
      
    </div>
    <br/>
    {/* <div className={styles.barraBaixo}></div> */}
    </main>
  );
}

export default Metas;
