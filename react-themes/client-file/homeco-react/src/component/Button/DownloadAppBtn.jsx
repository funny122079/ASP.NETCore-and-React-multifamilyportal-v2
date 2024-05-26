import Prototypes from "prop-types";

function DownloadAppBtn({ link, download, location }) {
  return (
    <a
      href={link}
      className="homec-btn homec-btn-primary-overlay homec-btn__download"
    >
      <div className="homec-btn__inside">
        <i className="fa-brands fa-apple"></i>
        <div className="btn-content">
          <span>{download}</span>
          <p>{location}</p>
        </div>
      </div>
    </a>
  );
}

DownloadAppBtn.propTypes = {
  link: Prototypes.string.isRequired,
  download: Prototypes.string.isRequired,
  location: Prototypes.string.isRequired,
};

export default DownloadAppBtn;
