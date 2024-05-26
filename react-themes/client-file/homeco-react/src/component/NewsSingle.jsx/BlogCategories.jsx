import ProtoTypes from "prop-types";

function BlogCategories({ categories }) {
  return (
    <div className="homec-sidebar__single">
      <h3 className="homec-sidebar__title">Blog Categories</h3>
      <ul className="homec-sidebar__category list-none">
        {categories?.map((category, index) => (
          <li key={category.title + index}>
            <a href={category.link}>
              {category.title}
              <span>({category.blogs})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

BlogCategories.propTypes = {
  categories: ProtoTypes.array.isRequired,
};

export default BlogCategories;
