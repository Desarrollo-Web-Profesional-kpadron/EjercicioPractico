import { useState } from "react";
import CounterButton from "./CounterButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  // Estado compartido 
  const [count, setCount] = useState(0);
  // Estado login
  const [estaLogueado, setEstaLogueado] = useState(false);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1>Ejercicio Práctico</h1>

      <h2>Contador compartido</h2>
      <h2>{count}</h2>

      <CounterButton
        texto="Botón 1"
        incrementar={incrementar}
        className="btn-counter"
      />
      <CounterButton
        texto="Botón 2"
        incrementar={incrementar}
        className="btn-counter"
      />

      <hr />

      {estaLogueado ? (
        <LogoutButton
          setEstaLogueado={setEstaLogueado}
          className="btn-logout"
        />
      ) : (
        <LoginButton
          setEstaLogueado={setEstaLogueado}
          className="btn-login"
        />
      )}
    </div>
  );
}

export default App;
