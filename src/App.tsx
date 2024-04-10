import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Agua from "./pages/Agua";
import PorQue from "./pages/PorQue";
import Motivos from "./pages/Motivos";
import Perfil from "./pages/Perfil/Perfil";
import Registrar from "./pages/LogReg/Registrar";
import Log from "./pages/LogReg/Log";

import Analise from "./pages/Perfil/Analise";
import Atualize from "./pages/Perfil/Atualize";
import Metas from "./pages/Perfil/Meta/Metas";
import NovaMeta from "./pages/Perfil/Meta/NovaMeta";
import LogProf from "./components/logProf";
function App() {
  return (
    <div
      style={{
        backgroundColor: "hsl(0, 3%, 64%)",
        marginTop: "5%",
        width: "100%",
        height: "100%",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/agua" element={<Agua />} />
          <Route path="/PorQue" element={<PorQue />} />
          <Route path="/Motivos" element={<Motivos />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/Log" element={<Log />} />

          <Route path="/Analise" element={<Analise />} />
          <Route path="/Atualize" element={<Atualize />} />
          <Route path="/Metas" element={<Metas />} />
          <Route path="/NovaMeta" element={<NovaMeta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
