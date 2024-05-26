import ProtoTypes from "prop-types";

function LatestBlog({ posts }) {
  return (
    <div className="homec-sidebar__single recent-post">
      <h3 className="homec-sidebar__title">Latest Blog</h3>

      {posts?.map((post, index) => (
        <div className="homec-sidebar__post" key={post.title + index}>
          <div className="homec-sidebar__img">
            <img src={post.img} alt="#" />
          </div>
          <div className="homec-sidebar__content">
            <h5 className="homec-sidebar__content--title">
              <a href={post.link}>{post.title}</a>
            </h5>
            <div className="homec-sidebar__content--date">
              <img src="img/calendar.svg" alt="#" />
              {post.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

LatestBlog.propTypes = {
  posts: ProtoTypes.array.isRequired,
};

export default LatestBlog;
