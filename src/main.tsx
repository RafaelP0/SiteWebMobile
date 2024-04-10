import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Menu from "./components/menu";
import LogProf from "./components/logProf";
// import Navbar from "./components/navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="navbar">
      <div>
        <Menu />
        <LogProf nome="naoLogado" />
        <div>
          <div className={"logado"}>
            <a href="/Perfil">
              <button>Perfil</button>
            </a>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
    <App />
    <div className="barraBaixo"></div>
  </React.StrictMode>,
);
