
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
        {weather.results.map((result) => (
          <div key={result.term} style={{
            backgroundColor: "hsl(0, 3%, 60%, 0.7)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}>
            <div className={styles.able}>
            <p>Reação: {result.term}</p>
            {/* <p>Contagem: {result.count}</p> */}
            
            <div className={styles.barChart}>
              <div
                key={result.term}
                className={styles.bar}
                style={{ width: `${result.count / 1100}px` }}
              >
                
                {result.count}
            </div>
            </div>
          
        </div>
          </div>
        ))}
        
      </>
    );

  return <article className={styles.widget}>{content}</article>;
}
