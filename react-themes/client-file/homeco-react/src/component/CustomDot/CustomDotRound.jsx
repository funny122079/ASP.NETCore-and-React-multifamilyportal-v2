function CustomDotRound({ ...rest }) {
  const { next, active } = rest;
  return (
    <button
      className={active ? "round-dot round-dot-active" : "round-dot"}
      aria-label="active img"
      onClick={() => next()}
    >
      <span></span>
    </button>
  );
}

export default CustomDotRound;
