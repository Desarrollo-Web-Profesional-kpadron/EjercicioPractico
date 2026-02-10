function CounterButton({ texto, incrementar }) {
  return (
    <button onClick={incrementar} style={{ margin: "10px" }}>
      {texto}
    </button>
  );
}

export default CounterButton;
