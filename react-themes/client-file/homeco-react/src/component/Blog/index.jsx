import BlogCard from "../Cards/BlogCard";
import blogs from "../../data/blog";
function Blog() {
  return (
    <section
      id="blog"
      className="blog-area homec-bg-cover section-padding"
      style={{ backgroundImage: "url('img/bg-shape-two.svg')" }}
    >
      <div className="blog-bg-pattern">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
              <div className="homec-section__head text-center mg-btm-30">
                <span
                  className="homec-section__badge homec-primary-color homec-section__badge--small m-0"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  Get our Information
                </span>
                <h2
                  className="homec-section__title"
                  data-aos="fade-in"
                  data-aos-delay="400"
                >
                  Our Latest News
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs?.map(
              (blog) =>
                blog.id < 4 && (
                  <BlogCard
                    key={blog.id}
                    blogLink={blog.blogLink}
                    blogImg={blog.blogImg}
                    date={blog.date}
                    author={blog.author}
                    title={blog.title}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
