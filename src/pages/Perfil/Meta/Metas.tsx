import "../perfil.css";
import Checkbox from "../checkbox/checkbox";

import { useState } from "react";

function Metas() {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <h1>
        <h1 style={{ display: "flex", alignItems: "center", color: "black" }}>
          Minhas metas
        </h1>
        Aqui você acompanha suas metas e objetivos para diminuir o consumo de
        drogas lícitas!
      </h1>

      <div
        style={{
          backgroundColor: "hsl(0, 3%, 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          marginRight: "20px",
          flexDirection: "column",
        }}
      >
        <div>
          &nbsp;
          <div>
            <div className="quadrosMaiores">
              <Checkbox
                label="Fumar apenas 1 cigarro por semana"
                alsuu="Prazo: 05/03/2024"
              />
            </div>
          </div>
          &nbsp;
        </div>
        <div>
          <div>
            <div className="quadrosMaiores">
              <Checkbox
                label="Não beber durante 3 semanas"
                alsuu="Concluida em: 23/03/2024"
              />
            </div>
          </div>
          &nbsp;
        </div>
      </div>
      <div
        style={{
          width: "100%",

          backgroundColor: "white",
          border: "2px solid #333",
        }}
      >
        <a
          href="/NovaMeta"
          style={{ display: "flex", alignItems: "center", color: "black" }}
        >
          &nbsp; &nbsp; Cadastrar meta
        </a>
      </div>
    </div>
  );
}

export default Metas;
