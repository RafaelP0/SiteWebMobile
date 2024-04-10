import Contador from "../components/contador";

const urlBebida =
  "https://thumbs.dreamstime.com/z/young-man-drinking-water-white-background-151266128.jpg";

function Agua() {
  return (
    <div>
      <h1>Contato</h1>
      <img style={{ width: "50%" }} src={urlBebida} />
      <h2>CLIQUE PRA FAZER ELE BEBER!!</h2>
      <Contador />
    </div>
  );
}

export default Agua;
