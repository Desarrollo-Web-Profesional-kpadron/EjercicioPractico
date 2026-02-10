function LogoutButton({ setEstaLogueado }) {
  return (
    <button onClick={() => setEstaLogueado(false)}>
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
