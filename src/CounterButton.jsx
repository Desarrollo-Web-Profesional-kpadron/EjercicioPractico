function CounterButton({ texto, incrementar, className }) {
  return (
    <button className={className} onClick={incrementar}>
      {texto}
    </button>
  );
}

export default CounterButton;
