import ProtoTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

function Video({ category, img, title, text, videoId, active }) {
  const [videoModal, setVideoModal] = useState(false);
  const customStyles = {
    content: {
      background: "transparent",
      zIndex: "9999",
    },
  };

  return (
    <div
      className={`tab-pane fade ${active === category && " show active"}`}
      id={category}
      role="tabpanel"
      aria-labelledby={category}
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
      {/* <!-- Gallery Image --> */}
      <div className="homec-image-gallery">
        <div className="homec-overlay"></div>
        <img src={img} alt="#" />
        <div className="homec-image-gallery__bottom">
          <div className="homec-image-gallery__content">
            <h3 className="homec-image-gallery__title">{title}</h3>
            <p className="homec-image-gallery__text">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="19"
                  height="19"
                >
                  <path
                    d="M0 -1.39077e-07H19V19H0V-1.39077e-07Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_2)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.67076 19C9.8551 19 10.0272 18.907 10.1295 18.7521C10.5488 18.1171 11.0278 17.4399 11.5347 16.7232C11.687 16.5079 11.8418 16.289 11.9982 16.0666C12.6715 15.1098 13.3695 14.0966 13.9998 13.0619C15.2485 11.012 16.2868 8.79257 16.2868 6.67969C16.2868 2.99602 13.3193 -1.39077e-07 9.67076 -1.39077e-07C6.02217 -1.39077e-07 3.05469 2.99602 3.05469 6.67969C3.05469 8.79257 4.09301 11.012 5.34176 13.0619C5.97206 14.0966 6.67004 15.1098 7.34329 16.0666C7.49976 16.289 7.65456 16.5079 7.80684 16.7232C8.31374 17.4399 8.79268 18.1171 9.21202 18.7521C9.31427 18.907 9.48642 19 9.67076 19ZM6.28101 12.4787C5.04873 10.4558 4.15737 8.46329 4.15737 6.67969C4.15737 3.61086 6.63116 1.11328 9.67076 1.11328C12.7104 1.11328 15.1842 3.61086 15.1842 6.67969C15.1842 8.46329 14.2928 10.4558 13.0605 12.4787C12.4503 13.4804 11.7699 14.4687 11.0993 15.4219C10.9471 15.6381 10.7951 15.8531 10.6445 16.066C10.3085 16.5411 9.97936 17.0064 9.67076 17.4552C9.36215 17.0064 9.03305 16.5411 8.69702 16.066C8.54641 15.8531 8.3944 15.6381 8.24223 15.4219C7.57159 14.4687 6.89122 13.4804 6.28101 12.4787Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.10938 6.78488C6.10938 8.65612 7.63099 10.1777 9.50223 10.1777C11.3735 10.1777 12.8951 8.65612 12.8951 6.78488C12.8951 4.91363 11.3735 3.39202 9.50223 3.39202C7.63099 3.39202 6.10938 4.91363 6.10938 6.78488ZM9.50223 9.04678C8.25559 9.04678 7.24033 8.03152 7.24033 6.78488C7.24033 5.53824 8.25559 4.52297 9.50223 4.52297C10.7489 4.52297 11.7641 5.53824 11.7641 6.78488C11.7641 8.03152 10.7489 9.04678 9.50223 9.04678Z"
                    fill="white"
                  />
                </g>
              </svg>
              {text}
            </p>
          </div>
          <a
            data-video-id={videoId}
            className="js-video-btn homec-btn homec-btn__second homec-btn__video"
            style={{ zIndex: "0" }}
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
      {/* <!-- End Gallery Image --> */}
    </div>
  );
}

Video.propTypes = {
  category: ProtoTypes.string.isRequired,
  img: ProtoTypes.string.isRequired,
  title: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  videoId: ProtoTypes.string.isRequired,
  active: ProtoTypes.string.isRequired,
};

export default Video;
