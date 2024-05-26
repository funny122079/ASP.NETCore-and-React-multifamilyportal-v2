import FunfactCard from "../Cards/FunfactCard";

function FunFactV2() {
  return (
    <section className="pd-top-40 pd-btm-120">
      <div className="container">
        <div className="row">
          <FunfactCard
            img="img/funfact-icon1.svg"
            count={435}
            title="Happy Customer"
            standard="K"
            v2={true}
          />
          <FunfactCard
            img="img/funfact-icon2.svg"
            count={123}
            title="Co-agent"
            v2={true}
            standard="K"
          />
          <FunfactCard
            img="img/funfact-icon3.svg"
            count={120}
            v2={true}
            title="Branches around"
          />
          <FunfactCard
            img="img/funfact-icon3.svg"
            count={150}
            title="Built Hose"
            v2={true}
            standard="K"
          />
        </div>
      </div>
    </section>
  );
}

export default FunFactV2;
