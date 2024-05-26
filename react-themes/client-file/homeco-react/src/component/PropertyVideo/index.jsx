import ProtoTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

function PropertyVideo({ isActive, text, img }) {
  const [videoModal, setVideoModal] = useState(false);
  const customStyles = {
    content: {
      background: "transparent",
      zIndex: "9999",
    },
  };
  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab3"
      role="tabpanel"
    >
      {/* modal start  */}
      <Modal
        isOpen={videoModal}
        onRequestClose={() => setVideoModal(false)}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <div
          className="modal-video"
          tabIndex="1"
          role="dialog"
          aria-label="You just openned the modal video"
          id="LJQMTBMOJ0PPL"
          onClick={(e) => {
            e.target.role === "dialog" && setVideoModal(false);
          }}
        >
          <div className="modal-video-body">
            <div
              className="modal-video-inner"
              id="modal-video-inner-LJQMTBMOJ0PPL"
            >
              <div
                className="modal-video-movie-wrap"
                style={{ paddingBottom: "56.25%" }}
              >
                <button
                  className="modal-video-close-btn js-modal-video-dismiss-btn"
                  aria-label="Close the modal by clicking here"
                  onClick={() => setVideoModal(false)}
                ></button>
                <iframe
                  width="460"
                  height="230"
                  src="//www.youtube.com/embed/FzcfZyEhOoI?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=null&amp;mute=0&amp;origin=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false"
                  frameBorder="0"
                  allowfullscreen="true"
                  tabIndex="-1"
                  allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* modal end  */}
      <div className="homec-pdetails-tab__inner" style={{ zIndex: "0" }}>
        <p>{text}</p>
        {/* <!-- Homec Features --> */}
        <div className="homec-ptdetails-video">
          <div className="homec-overlay"></div>
          <img src={img} alt="#" />
          <div className="homec-ptdetails-video__video">
            <a
              data-video-id="FzcfZyEhOoI"
              className="js-video-btn homec-btn homec-btn__second homec-btn__video"
              onClick={() => setVideoModal(true)}
            >
              <div className="homec-btn__inside">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 45.6001C35.9293 45.6001 45.6001 35.9296 45.6001 24C45.6001 12.0707 35.9296 2.39995 24 2.39995C12.0707 2.39995 2.39995 12.0707 2.39995 24C2.39995 35.9293 12.0707 45.6001 24 45.6001ZM24 48C37.2547 48 48 37.2547 48 24C48 10.7451 37.2547 0 24 0C10.7451 0 0 10.7451 0 24C0 37.2547 10.7451 48 24 48Z"
                    fill="#111111"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M30.2363 24L19.1998 16.6424V31.3579L30.2363 24ZM32.4661 22.6023C33.4637 23.2673 33.4637 24.733 32.4661 25.3981L19.4115 34.1013C18.2951 34.8456 16.7996 34.0451 16.7996 32.7033V15.297C16.7996 13.9552 18.2951 13.1549 19.4115 13.8993L32.4661 22.6023Z"
                    fill="#111111"
                  />
                </svg>
                <span>Play Video</span>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- End Homec Features --> */}
      </div>
    </div>
  );
}

PropertyVideo.propTypes = {
  isActive: ProtoTypes.bool.isRequired,
  text: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
};

export default PropertyVideo;
