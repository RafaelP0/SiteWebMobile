// Nome: Giulia Barbieri Quajliano

// RA: 10338326

// Nome: Jenifer Mathias dos Santos

// RA: 10376743

// Nome: Rafael Junqueira Pezeiro

// RA: 10374627


import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import styles from "./page.module.css";


const urlImg = "https://unitape.com.br/wp-content/uploads/2018/10/59edbc68fcade3b1ebff1023ea1ea46c.png";

export default function Home() {
  return (
    <main className={styles.bg}>
        <Navbar />
      <div
        style={{
          backgroundImage: `url("https://cdn.falauniversidades.com.br/wp-content/uploads/2019/09/mackenzie-1200x800.jpg")`,
        }}
      >
        <div
          style={{
            backgroundColor: "hsl(0, 3%, 60%,0.6)",
          }}
        >
          <h1>Projeto Desperta Jovem</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            
            <img style={{ width: "40%" }} src={urlImg} alt="Mackenzie" />
            <div>
              <h2>
                Nosso projeto visa conscientizar alunos da faculdade mackenzie a respeito do abuso de substâncias
              </h2>
              <h2>Objetivo 3 da ONU: Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades.
                Meta 3.5: Reforçar a prevenção e o tratamento do abuso de substâncias, incluindo o abuso de drogas entorpecentes
                e uso nocivo do álcool</h2>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "hsl(0, 3%, 60%,0.9)",
            width: "100%",
            height: "100%",
          }}
        >
          <h1> Aqui pra digitar abaixo da imagem</h1>

          <Link href="/Atualize">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="imagem"
                src={
                  "https://i0.wp.com/blog.elartedesabervivir.com/wp-content/uploads/2018/01/Bebidas-da%C3%B1inas.jpg?fit=900%2C601&ssl=1"
                }
              />
              <div>Sabia que o uso de drogas/ bebidas faz mal?</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                className="imagem"
                src={
                  "https://th.bing.com/th/id/OIP.QpW0Hjg_wLD8RH9EaTTWogAAAA?rs=1&pid=ImgDetMain"
                }
              />
              <div>Clique aqui e saiba mais!</div>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.barraBaixo}></div>
    </main>
  );
}
