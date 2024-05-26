import ProtoTypes from "prop-types";

function CommentCard({ img, name, date, comment, reply, first }) {
  return (
    <div
      className={`homec-blog-comments__single ${
        reply && "homec-blog-comments__single--reply"
      } ${!first && "mg-top-30"}`}
    >
      <img src={img} alt="#" />
      <div className="homec-blog-comments__detail">
        <h4 className="homec-blog-comments__title">
          {name}
          <span>
            <i className="fa-solid fa-clock"></i> {date}
          </span>
        </h4>
        <p className="homec-blog-comments__text">{comment}</p>
        <a className="homec-blog-comments__button" href="#">
          Reply
        </a>
      </div>
    </div>
  );
}

CommentCard.propTypes = {
  img: ProtoTypes.string.isRequired,
  name: ProtoTypes.string.isRequired,
  date: ProtoTypes.string.isRequired,
  comment: ProtoTypes.string.isRequired,
  reply: ProtoTypes.bool,
  first: ProtoTypes.bool,
};

export default CommentCard;
