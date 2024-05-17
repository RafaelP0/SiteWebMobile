import styles from "./goal.module.css"
import Checkbox from "./checkbox.tsx";
import Link from "next/link"

export default function Goal({goal}){
        // let a = goal.id
        // console.log({goal})
        
    return (
        
        <article className={styles.quote}>
            {/* <p><strong>{goal.nome}</strong></p> */}
            <p><strong className={styles.quadrosMaiores}>{goal.meta}</strong></p>
            <p><small>{goal.dataMes}</small>/<small>{goal.dataAno}</small></p>
            <p><small>{goal.id}</small></p>
        </article>
        

    )
}


