import Menu from "./menu";
import LogProf from "./logProf";
import Link from "next/link";
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Menu />
        <LogProf nome="naoLogado" />
        <div>
          <div className={styles.logado}>
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
