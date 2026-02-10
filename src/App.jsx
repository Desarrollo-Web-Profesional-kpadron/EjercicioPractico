import { useState } from "react";
import CounterButton from "./CounterButton";


function App() {
  // Estado compartido 
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ejercicio Practico</h1>

      
      <h2>Contador compartido: {count}</h2>
      <CounterButton texto="Botón 1" count={count} incrementar={incrementar} />
      <CounterButton texto="Botón 2" count={count} incrementar={incrementar} />

     

    </div>
  );
}

export default App;
