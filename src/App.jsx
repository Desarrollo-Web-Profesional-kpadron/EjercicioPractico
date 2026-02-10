import { useState } from "react";
import CounterButton from "./CounterButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  // Estado compartido 
  const [count, setCount] = useState(0);

  // Estado para login 
  const [estaLogueado, setEstaLogueado] = useState(false);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ejercicio Practico</h1>

      
      <h2>Contador compartido: {count}</h2>
      <CounterButton texto="Botón 1" count={count} incrementar={incrementar} />
      <CounterButton texto="Botón 2" count={count} incrementar={incrementar} />

      <hr />

    
      {estaLogueado ? (
        <LogoutButton setEstaLogueado={setEstaLogueado} />
      ) : (
        <LoginButton setEstaLogueado={setEstaLogueado} />
      )}
    </div>
  );
}

export default App;
