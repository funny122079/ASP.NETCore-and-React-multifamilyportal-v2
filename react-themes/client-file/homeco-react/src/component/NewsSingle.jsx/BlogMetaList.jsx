import ProtoTypes from "prop-types";

function BlogMetaList({ info }) {
  return (
    <div className="homec-blog-meta">
      <ul className="homec-blog-meta__list list-none">
        {info?.map((item, index) => (
          <li key={item.name + index}>
            <img src={item.img} alt="#" />
            {item.link ? <a href={item.link}>{item.name}</a> : item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

BlogMetaList.propTypes = {
  info: ProtoTypes.array.isRequired,
};

export default BlogMetaList;
