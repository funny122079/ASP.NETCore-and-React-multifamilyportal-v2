import DownloadApp from "../DownloadApp";
import Footer from "../Footer";
import HistoryLinks from "../Breadcrumbs/HistoryLinks";
import Breadcrumbs from "../Breadcrumbs";
import BlogMetaList from "./BlogMetaList";
import Header from "../Header";
import GoTopBtn from "../Button/GoTopBtn";
import BlogDetails from "./BlogDetails";
import DetailsBar from "./DetailsBar";
import CommentCard from "../Cards/CommentCard";
import Comment from "../Form/Comment";
import SidebarSearch from "./SidebarSearch";
import LatestBlog from "./LatestBlog";
import BlogCategories from "./BlogCategories";
import SidebarTags from "./SidebarTags";
import FollowUs from "./FollowUs";
import Preloader from "../Loader";
import { useEffect, useState } from "react";

function NewsSingle() {
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
        <Breadcrumbs title="Blog Details">
          <HistoryLinks link="/home" text="Home" />
          <HistoryLinks
            link="/blog-single"
            text="Blog Details"
            isActive={true}
          />
        </Breadcrumbs>
        <section className="blog-single pd-top-70 pd-btm-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mg-top-30">
                <BlogMetaList
                  info={[
                    { img: "img/user-icon.svg", link: "#", name: "By Admin" },
                    { img: "img/calendar.svg", name: "31 May 2022" },
                    { img: "img/comment.svg", name: "20 Comment" },
                  ]}
                />
                <BlogDetails />
                <DetailsBar
                  tags={[
                    { name: "House Sell", link: "#" },
                    { name: "House Rent", link: "#" },
                    { name: "House Building", link: "#" },
                  ]}
                  social={{
                    linkedin: "#",
                    twitter: "#",
                    youtube: "#",
                    facebook: "#",
                  }}
                />
                {/* comment section start */}
                <div className="row">
                  <div className="col-12 mg-top-60">
                    <div className="homec-blog-comments">
                      <h2 className="homec-blog-detail__title">03 Comments</h2>
                      <CommentCard
                        img="https://placehold.co/84x84"
                        name="Michel Holder"
                        date="June 1, 2022 at 11:27 AM"
                        comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erators on the Internet tend to repeat predefined chunks."
                        first={true}
                      />
                      <CommentCard
                        img="https://placehold.co/84x84"
                        name="Michel Holder"
                        date="June 1, 2022 at 11:27 AM"
                        comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erators on the Internet tend to repeat predefined chunks."
                        reply={true}
                      />
                      <CommentCard
                        img="https://placehold.co/84x84"
                        name="Michel Holder"
                        date="June 1, 2022 at 11:27 AM"
                        comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erators on the Internet tend to repeat predefined chunks."
                      />
                      <CommentCard
                        img="https://placehold.co/84x84"
                        name="Michel Holder"
                        date="June 1, 2022 at 11:27 AM"
                        comment="Sure there isn't anything embarrassing hidden in the middles of text. All into a Some this erators on the Internet tend to repeat predefined chunks."
                      />
                    </div>
                  </div>
                </div>
                {/* comment section end  */}
                <Comment />
              </div>
              <div className="col-lg-4 col-12">
                <div className="homec-sidebar">
                  <SidebarSearch />
                  <LatestBlog
                    posts={[
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                      {
                        img: "https://placehold.co/92x92",
                        title: "Panels with websites  city connections",
                        date: "31 May 2022 ",
                      },
                    ]}
                  />
                  <BlogCategories
                    categories={[
                      { title: "New Budling", link: "#", blogs: "232" },
                      { title: "Rant House", link: "#", blogs: "343" },
                      { title: "Selling House", link: "#", blogs: "4564" },
                      { title: "Styles Property", link: "#", blogs: "343" },
                      { title: "Famous Rant", link: "#", blogs: "8374" },
                    ]}
                  />
                  <SidebarTags
                    tags={[
                      "Car Services",
                      "Wash",
                      "Oli",
                      "Over hit",
                      "Bracking System",
                      "Interior Polish",
                      "Head Light Set",
                      "Color",
                      "Car wash",
                    ]}
                  />
                  <FollowUs />
                </div>
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

export default NewsSingle;
