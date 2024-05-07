const urlImg = "https://www.ssp.sc.gov.br/images/Imagens/Programas-PROERD.png";

import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "./page.module.css";
function Perfil() {
  return (
    <main className={styles.bg}>
      <Navbar />
    <div
      style={{
        backgroundImage: `url("https://cdn.falauniversidades.com.br/wp-content/uploads/2019/09/mackenzie-1200x800.jpg")`,
      }}
    >
      <h1>Perfil</h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 55%, 0.3)",

          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "30%", borderRadius: "50%" }}
          src={urlImg}
          alt="Mackenzie"
        />
        <div className={styles.info}>
          &nbsp;
          <h2>SEU NOME</h2>
          <h2>SEU TIA/RA</h2>
          <h2>NOME DO CURSO</h2>
          &nbsp;
        </div>
      </div>
      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%, 0.7)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          &nbsp;
          <Link href="/Perfil/Metas">
            <div className={styles.balao} style={{ width: "200px", height: "200px" }}>
              <div>Minhas Metas</div>
            </div>
          </Link>
          &nbsp;
        </div>
        <div>
          &nbsp;
          <Link href="/Perfil/Analise">
            <div className={styles.balao} style={{ width: "200px", height: "200px" }}>
              <div>Analise de desempenho</div>
            </div>
          </Link>
          &nbsp;
        </div>
        <div>
          &nbsp;
          <Link href="/Atualize">
            <div className={styles.balao} style={{ width: "200px", height: "200px" }}>
              <div>Se atualize!</div>
            </div>
          </Link>
          &nbsp;
          <div className={styles.box} style={{ height: "100%", width: "40%" }}>
            <Link href="/" style={{ color: "black" }}>
              Sair:{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.barraBaixo}></div>
    </main>
  );
}

export default Perfil;
