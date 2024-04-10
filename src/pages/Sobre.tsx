const mack =
  "https://cdn.falauniversidades.com.br/wp-content/uploads/2019/09/mackenzie-1200x800.jpg";
function Sobre() {
  return (
    <div>
      <h1>Sobre o nosso projeto</h1>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img style={{ width: "50%" }} src={mack} alt="Mackenzie" />
        <div>
          <h2>Nosso projeto visa .....</h2>
          <h2>bla bla bla</h2>
        </div>
      </div>
      <h1> Aqui pra digitar abaixo da imagem</h1>
    </div>
  );
}

export default Sobre;
