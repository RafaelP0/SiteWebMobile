
import Navbar from "../../../components/navbar";
import "../../App.css";
function Analise() {
  return (
    <main className="bg">
      <Navbar />
    <div>
      <h2>
      
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Análise e desempenho
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
          Por aqui você pode acompanhar o seu progresso!
        </div>
      </h2>
    </div>
    <div className="barraBaixo"></div>
    </main>
  );
}

export default Analise;
