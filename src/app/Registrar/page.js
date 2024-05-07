import LogProf from "../../components/logProf";
import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "./page.module.css";

function Registrar() {
 
  return (
    <main className={styles.bg}>
      <Navbar />
    <div>
      <>
        <div
          className={styles.back}
          style={{
            backgroundColor: "hsl(0, 3%, 61%)",
          }}
        >
          <div>
            <h1>REGISTRAR</h1>
            Caso queira criar uma conta
            <div>
              <a href="/Log" style={{ color: "black" }}>
                Já possui uma conta? Clique aqui
              </a>
            </div>
            <div>
              <div>
                <h2>NOME: </h2>
                <input className={styles.box} />
                <h2> E-MAIL: </h2>
                <input className={styles.box} />
                <h2> REPETIR E-MAIL: </h2>
                <input className={styles.box} />
                <h2> SENHA: </h2>
                <input className={styles.box} />
                <h2> REPETIR SENHA: </h2>
                <input className={styles.box} />
              </div>
            </div>
            <div className={styles.botao}>
              <a href="/Perfil" >
                Registrar
              </a>
              &nbsp;
            </div>
          </div>
        </div>
      </>
    </div>
    <div className={styles.barraBaixo}></div>
    </main>
  );
}

export default Registrar;
