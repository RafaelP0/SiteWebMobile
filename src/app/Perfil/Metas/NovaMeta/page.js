

import Navbar from "../../../../components/navbar";
import styles from "./page.module.css";

function NovaMeta() {
  return (
  <main className={styles.bg}>
  <Navbar />
    <div>
      <h2>
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Nova meta
        </h1>
        Aqui você pode cadastrar uma nova meta ;)
      </h2>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
        }}
        className={styles.back}
      >
        <div>
          Nome:
          <input className={styles.box} />
          Descrição:
          <input className={styles.box} />
          Prazo:
          <input className={styles.box} />
        </div>
        <div>
          <div
            className={styles.box}
            style={{
              backgroundColor: "#4CAF50",
              color: "black",
            }}
          >
            <a href="/Metas" style={{ color: "black" }}>
              Confirmar:{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.barraBaixo}></div>

    </main>
  );
}

export default NovaMeta;
