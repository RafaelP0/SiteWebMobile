import styles from "./goal.module.css"
import Link from "next/link"
import { getGoals, getGoalsByName, getGoalById, addGoal, updateGoal, deleteGoal } from "../utils/api.js"
import { useEffect, useState } from "react";

export default function Goal({goal}){
    const [goals, setGoals] = useState(null)
    const [box, setBox] = useState(false)
    
    function handleUpdateGoal(){
        event.preventDefault()
        let id = goal.id
        let meta = goal.meta
        let dataMes= goal.dataMes
        let dataAno = goal.dataAno
        changeBox()
        let q = { id, meta, dataMes, dataAno, box }

        updateGoal(q).then( (status)=>{
          if(status == 200) {
            getGoals()
              .then( (data) => setGoals(data) )
          }
        } )
      }


      function changeBox() {
        setBox((prevBox) => !prevBox); 
      }
    
    function handleDeleteGoal(){
        deleteGoal(goal.id).then( (status) => {
          if(status == 200){
            getGoals()
              .then( (data) => setGoals(data) )
          }
        } )
      }


    function mostraCheck(){
      if (goal.box == true){
        return(
          <>
          <input type="checkbox" checked onClick={handleUpdateGoal}/>
          Finalizado
          </>
        )
      }else{
        return(
          <>
          <input type="checkbox" checked={false} onClick={handleUpdateGoal}/>
          Em andamento
          </>
        )
      }
      
    }
    
    return (
        <div >
        
        <article className={styles.quote}>
        {mostraCheck()}
        <div>
            {/* <p><strong>{goal.nome}</strong></p> */}
            <p><strong className={styles.quadrosMaiores}>{goal.meta}</strong></p>
            <p><small>{goal.dataMes}</small>/<small>{goal.dataAno}</small></p>
            <p><small>ID: {goal.id}</small></p>
        </div>
            <button onClick={handleDeleteGoal}><img style={{backgroundColor:"red"}}src={"https://super.so/icon/dark/trash-2.svg"}/></button> 
            
        </article>

        </div>
        

    )
}


