import "./LogReg.css";
import LogProf from "../../components/logProf";
function Registrar() {
  const handleRegistrarClick = () => {
    <LogProf nome="Logado" />;
  };
  return (
    <div>
      <>
        <div
          className="back"
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
                <input className="box" />
                <h2> E-MAIL: </h2>
                <input className="box" />
                <h2> REPETIR E-MAIL: </h2>
                <input className="box" />
                <h2> SENHA: </h2>
                <input className="box" />
                <h2> REPETIR SENHA: </h2>
                <input className="box" />
              </div>
            </div>
            <div className="botao">
              <a href="/Perfil" onClick={handleRegistrarClick}>
                Registrar
              </a>
              &nbsp;
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Registrar;
