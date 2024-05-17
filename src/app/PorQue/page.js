import Link from "next/link";
import Navbar from "../../components/navbar";
import styles from "./page.module.css";
import Drugs from "../../components/drugs";
const think =
  "https://th.bing.com/th/id/OIP.8FHAaiPW77VYj94SUgxuZAHaH7?rs=1&pid=ImgDetMain";
function PorQue() {
  return (
    <main className={styles.bg}>
      <Navbar />
    <div>
      <div style={{ display: "flex", alignItems: "center", color: "black" }}>
        <img style={{ width: "30%" }} src={think} />
        <div>
          <h1>
            <strong> Objetivo do Projeto</strong>
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "hsl(0, 3%, 55%)",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Por que fazemos isso?
        </h1>
        <h2>
          Projeto criado para reforçar a prevenção e o tratamento do abuso de
          substâncias na comunidade de alunos da Universidade Presbiteriana
          Mackenzie, incluindo o abuso de drogas entorpecentes e uso nocivo do
          álcool.
        </h2>
      </div>
      
      
      <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
        Fato importante
      </h1>
        <div>
          Você sabia que, além das drogas ilicitas, as drogas licitas também podem causar reações negativas e lhe afetar negativamente?
          Abaixo, vemos um grafico que mostra reações causadas por essas drogas licitas, disponibilizado pela "Food and Drug Administration" (Admistração de alimentos e drogas dos Estados Unidos)
        <Drugs />
        <Link href="https://www.fda.gov/">
          <div style={{ color: "black", fontSize: "1.2em", backgroundColor: "white",width: "20%" }}>
            <div>Clique aqui para acessar o site da FDA</div>
          </div>
        </Link>
        
        </div>
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
        Descrição
      </h1>
      <h2>
        Projeto pautado no objetivo 3.5 dos Objetivos de Desenvolvimento
        Sustentável da Organização das Nações Unidas - ONU.
      </h2>
      <div>
        &nbsp;
        <Link href="https://sdgs.un.org/goals">
          <div style={{ color: "black", fontSize: "1.2em", backgroundColor: "white",width: "20%" }}>
            <div>Clique aqui para saber mais</div>
          </div>
        </Link>
        &nbsp;
      </div>
    </div>
    <div className={styles.barraBaixa}></div>
    </main>
  );
}

export default PorQue;
