import AboutShapeImg from "../About/AboutShapeImg";
import DownloadAppBtn from "../Button/DownloadAppBtn";

function DownloadApp() {
  return (
    <section
      className="download-app homec-bg-cover homec-bg-primary-color pd-top-15 pd-btm-15"
      style={{ backgroundImage: "url('img/download-vector.svg')" }}
    >
      <div className="homec-shape">
        <AboutShapeImg img="img/anim-shape-10.svg" design="homec-shape-11" />
        <AboutShapeImg img="img/anim-shape-10.svg" design="homec-shape-12" />
        <AboutShapeImg img="img/anim-shape-10.svg" design="homec-shape-13" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="download-app__middle">
              <div className="download-app__content">
                <div
                  className="homec-section__head section-white mg-btm-30"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2 className="homec-section__title">
                    Download Our Mobile App
                  </h2>
                  <p className="sec-head__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered into the find to
                    amke it alteration.
                  </p>
                </div>
                {/* App Download Button  */}
                <div
                  className="download__app-button"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <DownloadAppBtn
                    link="#"
                    download="DOWNLOAD ON THE"
                    location="App Store"
                  />
                  <DownloadAppBtn
                    link="#"
                    download="GET IT ON"
                    location="Google Play"
                  />
                </div>

                {/* End App Download Button */}
              </div>
              {/* Download Image */}
              <div
                className="download-app__img"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <img src="https://placehold.co/425x425" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
