import "../perfil.css";
import "../../LogReg/LogReg.css";

function NovaMeta() {
  return (
    <div>
      <h1>
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Nova meta
        </h1>
        Aqui você pode cadastrar uma nova meta ;)
      </h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
        }}
        className="back"
      >
        <div>
          Nome:
          <input className="box" />
          Descrição:
          <input className="box" />
          Prazo:
          <input className="box" />
        </div>
        <div>
          <div
            className="box"
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
  );
}

export default NovaMeta;
