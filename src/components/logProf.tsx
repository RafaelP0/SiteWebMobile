


import "../app/App.css";
import "./logProf.css";
import Link from "next/link";



function LogProf({nome}) {




  // const name = "menu";
  if (nome == "naoLogado") {
    return (
      <div className={nome}>
        <div>
          <Link href="/Log">
            <button>Logar</button>
          </Link>
          &nbsp;&nbsp;
          <Link href="/Registrar">
            <button>Registrar</button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  } 
}

export default LogProf;
