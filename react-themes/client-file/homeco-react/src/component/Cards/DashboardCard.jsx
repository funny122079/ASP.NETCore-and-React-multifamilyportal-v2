import ProtoTypes from "prop-types";

function DashboardCard({ image, text, count }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="homec-dashboard__single">
        <div className="homec-dashboard__icon">
          <img src={image} alt="#" />
        </div>
        <div className="homec-dashboard__label">{text}</div>
        <div className="homec-dashboard__title">{count}</div>
      </div>
    </div>
  );
}

DashboardCard.propTypes = {
  image: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  count: ProtoTypes.number.isRequired,
};

export default DashboardCard;
