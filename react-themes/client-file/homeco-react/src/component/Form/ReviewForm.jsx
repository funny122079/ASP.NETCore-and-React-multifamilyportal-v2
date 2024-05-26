function ReviewForm() {
  return (
    <div className="col-12 d-flex justify-content-center mg-top-40">
      <div className="homec-comments-form homec-comments-form--reviews">
        <h2 className="homec-comments-form__title m-0">Sent Review</h2>
        <p className="homec-comments-form__text">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group homec-form-input">
              <input
                className="ecom-wc__form-input"
                type="text"
                name="f_name"
                placeholder="Abdullah Mamun"
                required="required"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="form-group homec-form-input homec-form-input--review">
              <ul className="homec-rating list-none">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group homec-form-input">
              <textarea
                className="ecom-wc__form-input"
                name="f_name"
                placeholder="Write Here"
              ></textarea>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end mg-top-20">
            <button type="submit" className="homec-btn homec-btn__second">
              <span>Submit Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
