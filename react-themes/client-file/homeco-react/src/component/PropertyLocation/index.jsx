import ProtoTypes from "prop-types";

function PropertyLocation({ address, text, isActive }) {
  return (
    <div
      className={`tab-pane fade ${isActive && "show active"}`}
      id="homec-pd-tab4"
      role="tabpanel"
    >
      <div className="homec-pdetails-tab__inner m-0">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="homec-location-card mg-top-20">
              <div className="homec-location-card__icon">
                <svg
                  width="31"
                  height="35"
                  viewBox="0 0 31 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.1 22.9899C24.8026 17.1798 24.3372 17.9046 24.4439 17.7531C25.7919 15.8518 26.5044 13.6139 26.5044 11.2814C26.5044 5.09565 21.4848 0 15.291 0C9.11739 0 4.0776 5.08559 4.0776 11.2814C4.0776 13.6124 4.80505 15.9088 6.19728 17.8358L9.48193 22.9899C5.97009 23.5296 0 25.1379 0 28.6791C0 29.9701 0.842569 31.8097 4.85656 33.2433C7.65937 34.2443 11.365 34.7956 15.291 34.7956C22.6324 34.7956 30.582 32.7247 30.582 28.6791C30.582 25.1373 24.6189 23.5307 21.1 22.9899ZM7.90029 16.7144C7.88908 16.6969 7.87739 16.6798 7.86515 16.6629C6.70664 15.0691 6.11641 13.1802 6.11641 11.2814C6.11641 6.18314 10.2216 2.0388 15.291 2.0388C20.3499 2.0388 24.4656 6.18498 24.4656 11.2814C24.4656 13.1833 23.8865 15.0081 22.7907 16.5599C22.6925 16.6894 23.2048 15.8935 15.291 28.3114L7.90029 16.7144ZM15.291 32.7568C7.27213 32.7568 2.0388 30.3997 2.0388 28.6791C2.0388 27.5227 4.72785 25.6213 10.6866 24.8801L14.4313 30.7561C14.6185 31.0499 14.9427 31.2277 15.2909 31.2277C15.6392 31.2277 15.9635 31.0498 16.1506 30.7561L19.8952 24.8801C25.8541 25.6213 28.5432 27.5227 28.5432 28.6791C28.5432 30.3851 23.357 32.7568 15.291 32.7568Z" />
                  <path d="M15.2923 6.18457C12.4818 6.18457 10.1953 8.47109 10.1953 11.2816C10.1953 14.0921 12.4818 16.3786 15.2923 16.3786C18.1028 16.3786 20.3893 14.0921 20.3893 11.2816C20.3893 8.47109 18.1028 6.18457 15.2923 6.18457ZM15.2923 14.3398C13.606 14.3398 12.2341 12.9679 12.2341 11.2816C12.2341 9.59528 13.606 8.22337 15.2923 8.22337C16.9786 8.22337 18.3505 9.59528 18.3505 11.2816C18.3505 12.9679 16.9786 14.3398 15.2923 14.3398Z" />
                </svg>
              </div>
              <h4 className="homec-location-card__title">Address</h4>
              <p className="homec-location-card__desc">{address}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="homec-location-card mg-top-20">
              <p className="homec-location-card__text">{text}</p>
            </div>
          </div>
        </div>
        <div className="homec-gmap-canvas mg-top-30">
          <iframe
            id="homec-gmap-canvas"
            className="homec-gmap-iframe"
            src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

PropertyLocation.propTypes = {
  address: ProtoTypes.string.isRequired,
  text: ProtoTypes.string.isRequired,
  isActive: ProtoTypes.bool.isRequired,
};

export default PropertyLocation;
