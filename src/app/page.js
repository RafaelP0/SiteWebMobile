// Nome: Giulia Barbieri Quajliano

// RA: 10338326

// Nome: Jenifer Mathias dos Santos

// RA: 10376743

// Nome: Rafael Junqueira Pezeiro

// RA: 10374627


import React from "react";
import "./App.css";
import Navbar from "../components/navbar";
import Link from "next/link";



const urlImg = "https://www.ssp.sc.gov.br/images/Imagens/Programas-PROERD.png";

export default function Home() {
  return (
    <main className="bg">
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
                Nosso projeto visa conscientizar alunos da faculdade mackenzie
              </h2>
              <h2>bla bla bla</h2>
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
      <div className="barraBaixo"></div>
    </main>
  );
}
