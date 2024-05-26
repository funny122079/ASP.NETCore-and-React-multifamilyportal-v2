import ProtoTypes from "prop-types";
function SingleList({ listing, place, img, link }) {
  return (
    <div>
      <a href={link}>
        <img src={img} alt="#" />
        <div className="homec-overlay homec-listing__overlay"></div>
        <h4 className="homec-listing__title">
          <span>{listing}+ Listing</span>
          {place}
        </h4>
      </a>
    </div>
  );
}

SingleList.propTypes = {
  listing: ProtoTypes.string.isRequired,
  place: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  link: ProtoTypes.string.isRequired,
};

export default SingleList;
