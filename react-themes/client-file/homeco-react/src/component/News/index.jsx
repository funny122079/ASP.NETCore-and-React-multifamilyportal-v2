import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import Header from "../Header";
import GoTopBtn from "../Button/GoTopBtn";
import BlogCard from "../Cards/BlogCard";
import Pagination from "../Pagination";
import Preloader from "../Loader";
import { useEffect, useState } from "react";
import blogs from "../../data/blog";

function News() {
  // handle page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 24;

  const handelPage = (page) => {
    if (page === "prev") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (page === "next") {
      if (currentPage < totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      setCurrentPage(page);
    }
  };
  // handle loader
  const [isLoading, setisLoadingg] = useState(true);
  useEffect(() => {
    setisLoadingg(false);
  }, []);

  let component = undefined;
  if (isLoading) {
    component = <Preloader />;
  } else {
    component = (
      <>
        <Header />
        <Breadcrumbs title="Blogs" titlePosition="bottom">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks link="/blogs" text="Blogs" isActive={true} />
        </Breadcrumbs>
        <section id="blog" className="blog-area pd-top-90 pd-btm-120">
          <div className="blog-bg-pattern">
            <div className="container">
              <div className="row">
                {blogs?.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blogLink={blog.blogLink}
                    blogImg={blog.blogImg}
                    date={blog.date}
                    author={blog.author}
                    title={blog.title}
                  />
                ))}
                <Pagination
                  totalPage={totalPage}
                  handlePage={handelPage}
                  currentPage={currentPage}
                />
              </div>
            </div>
          </div>
        </section>

        <DownloadApp />
        <Footer />
        <GoTopBtn />
      </>
    );
  }
  return component;
}

export default News;
