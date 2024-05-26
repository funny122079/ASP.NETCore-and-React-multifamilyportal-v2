import ProtoTypes from "prop-types";

function LogoCard({ link, img }) {
  return (
    <div className="swiper-slide">
      <div className="homec-cl-logo">
        <a href={link}>
          <img src={img} alt="Client Logo" />
        </a>
      </div>
    </div>
  );
}

LogoCard.propTypes = {
  link: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
};

export default LogoCard;
