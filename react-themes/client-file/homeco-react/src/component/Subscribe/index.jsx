function SubscribeForm() {
  return (
    <div className="homec-form mg-top-100">
      <div className="homec-form__content">
        <span className="homec-form__label">For Rant house offer</span>
        <h3 className="homec-form__title">Join Homec Community</h3>
      </div>
      <form className="homec-form__form">
        <input
          type="email"
          name="Email"
          placeholder="Enter your email address"
          required=""
        />
        <button type="submit" className="homec-btn">
          <span>Subscribe Now</span>
        </button>
      </form>
    </div>
  );
}

export default SubscribeForm;
