function WhiteCustomDot({ ...rest }) {
  const { onClick, active } = rest;
  return (
    <button
      className={active ? "round-dot2 round-dot2-active" : "round-dot2"}
      aria-label="active img"
      onClick={() => onClick()}
    >
      <span></span>
    </button>
  );
}

export default WhiteCustomDot;
