import Menu from "./menu";
import LogProf from "./logProf";
import Link from "next/link";
import "../app/App.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Menu />
        <LogProf nome="naoLogado" />
        <div>
          <div className={"logado"}>
            <Link href="/Perfil">
              <button>Perfil</button>
            </Link>
            &nbsp;
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
