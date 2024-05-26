import Title from "../Title";
import ReviewCard from "../Cards/ReviewCard";
import Carousel from "react-multi-carousel";
import { responsiveHeroSlider } from "../../utils/responsiveSlider";
import CustomDotRound from "../CustomDot/CustomDotRound";
import reviews from "../../data/reviews";

function CustomerReview() {
  return (
    <section
      className="homec-bg-third-color homec-bg-cover pd-top-120 pd-btm-120"
      style={{ backgroundImage: "url('https://placehold.co/1920x750')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Section TItle --> */}
            <Title
              firstText="CUSTOMER REVIEWS"
              secondText="What’s Our Customer Say"
              marginSize="60"
            />
          </div>
        </div>
        <div className="row mg-top-10">
          <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-12">
            {/* <!-- Testimonial Slider --> */}

            <Carousel
              responsive={responsiveHeroSlider}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              removeArrowOnDeviceType={[
                "superLargeDesktop",
                "desktop",
                "tablet",
                "mobile",
              ]}
              customDot={<CustomDotRound />}
            >
              {reviews?.map((review) => (
                <ReviewCard
                  key={review.id}
                  rating={review.rating}
                  text={review.text}
                  authorName={review.authorName}
                  authorPosition={review.authorPosition}
                  img="https://placehold.co/190x310"
                />
              ))}

              <ReviewCard
                rating={5}
                text="“There are many variations of passages of Lorem Ipsum
                      into the available, majority have into the find end to
                      find to suffered passages of Lorem Ipsum available."
                authorName="Arnold Burner"
                authorPosition=" Senior Designer"
                img="https://placehold.co/190x310"
              />
              <ReviewCard
                rating={5}
                text="“There are many variations of passages of Lorem Ipsum
                    into the available, majority have into the find end to
                    find to suffered passages of Lorem Ipsum available."
                authorName="Arnold Burner"
                authorPosition=" Senior Designer"
                img="https://placehold.co/190x310"
              />
            </Carousel>
          </div>
          {/* <!-- End Testimonial Slider --> */}
          {/* <!-- Slider Pagination --> */}
          <div className="swiper-pagination swiper-pagination__testimonial"></div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReview;
