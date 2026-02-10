function LoginButton({ setEstaLogueado }) {
  return (
    <button onClick={() => setEstaLogueado(true)}>
      Iniciar Sesión
    </button>
  );
}

export default LoginButton;