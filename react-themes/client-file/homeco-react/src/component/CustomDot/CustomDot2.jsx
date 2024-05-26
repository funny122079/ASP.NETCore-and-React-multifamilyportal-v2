function CustomDot({ ...rest }) {
  const { next, active } = rest;
  return (
    <button
      className={active ? "round-dot2 round-dot2-active" : "round-dot2"}
      aria-label="active img"
      onClick={() => next()}
    >
      <span></span>
    </button>
  );
}

export default CustomDot;
