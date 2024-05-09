"use client"

import { useEffect, useState } from "react";
import styles from "./drugs.module.css";

export default function Drugs() {
  const [weather, setWeather] = useState(null);
  const urlBase =
    "https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20240508]&count=patient.reaction.reactionmeddrapt.exact";

  function getData() {
    try {
      fetch(urlBase)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const content =
    weather === null ? (
      <p>Carregando...</p>
    ) : (
      <>
        {/* Renderize os dados da API aqui */}
        {weather.results.map((result)  => (
          <div key={result.term}>
            <p>Reação: {result.term}</p>
            <p>Contagem: {result.count}</p>
          </div>
        ))}
      </>
    );

  return <article className={styles.widget}>{content}</article>;
}

