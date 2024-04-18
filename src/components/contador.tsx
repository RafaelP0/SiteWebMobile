// export default function Contador({ num }) {
//   return <div className="cardContador"> {num} </div>;
// }

"use client";
import { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);

  function clickAdd() {
    setNum(num + 1);
  }
  function clickSubtract() {
    setNum(num - 1);
  }

  return (
    <div className={"cardContador"}>
      <h2>{num} Bebidas tomadas!</h2>
      <div>
        <button onClick={clickAdd}> + </button>
        <button onClick={clickSubtract}> - </button>
      </div>
    </div>
  );
}
