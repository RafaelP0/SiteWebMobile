const urlImg = "https://www.ssp.sc.gov.br/images/Imagens/Programas-PROERD.png";
import "./perfil.css";
import Navbar from "../../components/navbar";
import Link from "next/link";
import "../App.css";
function Atualize() {
  return (
    <main className="bg">
      <Navbar />
    <div>
      <h1>
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Se atualize!
        </h1>
        Confira vídeos, testes e artigos sobre conscientização do uso de
        substâncias!
      </h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aquAi</div>
              </div>
            </Link>
            &nbsp;
          </div>{" "}
          &nbsp;
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aqui</div>
              </div>
            </Link>
            &nbsp;
          </div>{" "}
          &nbsp;
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aqui</div>
              </div>
            </Link>
            &nbsp;
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aquAi</div>
              </div>
            </Link>
            &nbsp;
          </div>{" "}
          &nbsp;
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aqui</div>
              </div>
            </Link>
            &nbsp;
          </div>{" "}
          &nbsp;
          <div>
            &nbsp;
            <Link href="https://sdgs.un.org/goals">
              <div className="balao">
                <div>Preview aqui</div>
              </div>
            </Link>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
      <div className="barraBaixo"></div>
    </main>
  );
}

export default Atualize;
