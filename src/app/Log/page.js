
import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "./page.module.css";
function Logar() {
  return (
    <main className={styles.bg}>
      <Navbar />
    <div>
      <>
        <div
          className={styles.back}
          style={{
            backgroundColor: "hsl(0, 3%, 60%)",

            padding: "20px",

            // marginLeft: "51%",
          }}
        >
          <div>
            <h1> Logar</h1>
            Caso já possua uma conta
            <div>
              <a href="/Logar" style={{ color: "black" }}>
                Ainda não possui uma conta? Clique aqui
              </a>
            </div>
            <div>
              <div>
                <h2> E-MAIL: </h2>
                <input className={styles.box} />
                <h2> SENHA: </h2>
                <input className={styles.box} />
              </div>
            </div>
            <div className={styles.botao}>
              <a href="/Perfil">Logar</a>
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

export default Logar;
