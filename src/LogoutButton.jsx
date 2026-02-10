function LogoutButton({ setEstaLogueado, className }) {
  return (
    <button className={className} onClick={() => setEstaLogueado(false)}>
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
