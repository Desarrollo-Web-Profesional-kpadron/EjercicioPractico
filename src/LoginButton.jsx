function LoginButton({ setEstaLogueado, className }) {
  return (
    <button className={className} onClick={() => setEstaLogueado(true)}>
      Iniciar Sesión
    </button>
  );
}

export default LoginButton;
