import React, { useState } from "react";

function PaymentOptions({ price }) {
  const paymentMethod = [
    { name: "payment-1", image: "https://placehold.co/115x30", type: "online" },
    { name: "payment-2", image: "https://placehold.co/115x30", type: "online" },
    { name: "payment-3", image: "https://placehold.co/115x30", type: "online" },
    { name: "payment-4", image: "https://placehold.co/115x30", type: "online" },
    { name: "payment-5", image: "https://placehold.co/115x30", type: "bank" },
    {
      name: "payment-6",
      image: "https://placehold.co/115x30",
      type: "credit-card",
    },
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(false);

  return (
    <div className="col-lg-4 col-12">
      <div className="homec-payment-method">
        <div
          className={`payment-popup__top payment-popup__top--digital ${
            selectedPaymentMethod === "credit-card" && "active"
          }`}
        >
          {/* Payment Popup  */}
          <div
            className="payment-popup"
            onBlur={() => setSelectedPaymentMethod(false)}
          >
            <h4 className="payment-popup__title">Payment stripe</h4>
            <div className="payment-popup__inner">
              <div className="payment-popup__header">
                <h4 className="payment-popup__heading">
                  Total <b>${price}</b>
                </h4>
              </div>
              {/* Sign in Form  */}
              <form className="ecom-wc__form-main p-0" method="post">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group homec-form-input">
                      <input
                        className="ecom-wc__form-input"
                        type="text"
                        name="number"
                        placeholder="Number"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group homec-form-input">
                      <input
                        className="ecom-wc__form-input"
                        type="text"
                        name="credit"
                        placeholder="mm/dd/yyyy"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group homec-form-input">
                      <input
                        className="ecom-wc__form-input"
                        type="text"
                        name="CVV"
                        placeholder="CVV"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group homec-form-input">
                      <input
                        className="ecom-wc__form-input"
                        type="text"
                        name="holder"
                        placeholder="Card Holder"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12 mg-top-20">
                    <button
                      type="submit"
                      className="homec-btn homec-btn__second  homec-btn--payment"
                    >
                      <span>Payment Now</span>
                    </button>
                  </div>
                </div>
              </form>
              {/* End Sign in Form  */}
            </div>
          </div>
          {/* End Payment Popup  */}
        </div>
        <div
          className={`payment-popup__top payment-popup__top--bank ${
            selectedPaymentMethod === "bank" && "active"
          }`}
          onBlur={() => setSelectedPaymentMethod(false)}
        >
          {/* Payment Popup  */}
          <div className="payment-popup">
            <h4 className="payment-popup__title">Bank Payment</h4>
            <div className="payment-popup__inner">
              <div className="payment-popup__header">
                <h4 className="payment-popup__heading">
                  Total <b>${price}</b>
                </h4>
              </div>
              <ul className="payment-popup__bank-list">
                <li>
                  <span>Bank Name:</span> Your bank name{" "}
                </li>
                <li>
                  <span>Account Number: </span> Your bank account num
                </li>
                <li>
                  <span>Routing Number:</span> Bank routing number{" "}
                </li>
                <li>
                  <span>Bank Name:</span> Your bank name{" "}
                </li>
                <li>
                  <span>Branch:</span> Your bank branch name{" "}
                </li>
              </ul>
              {/* Sign in Form  */}
              <form className="ecom-wc__form-main p-0" method="post">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group homec-form-input">
                      <textarea
                        className="ecom-wc__form-input"
                        type="text"
                        name="holder"
                        placeholder="Note"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="payment-popup__error">
                      Could not find Payment Information
                    </div>
                  </div>
                  <div className="col-12 mg-top-20">
                    <button
                      type="submit"
                      className="homec-btn homec-btn__second  homec-btn--payment"
                    >
                      <span>Payment Now</span>
                    </button>
                  </div>
                </div>
              </form>
              {/* End Sign in Form  */}
            </div>
          </div>
          {/* End Payment Popup  */}
        </div>
        <ul className="homec-payment-method__list">
          {paymentMethod.map((method, index) => (
            <li
              key={method.name + index}
              onClick={() => {
                setSelectedPaymentMethod(method.type);
              }}
            >
              <a href="#">
                <input
                  className="form-check-input "
                  type="radio"
                  value=""
                  id={method.name}
                  name="payment-method"
                />
                <label
                  className="form-check-label homec-payment-method__label"
                  htmlFor={method.name}
                >
                  <img src={method.image} />
                </label>
              </a>
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="homec-btn homec-btn__second  homec-btn--payment"
        >
          <span>Payment Now</span>
        </button>
      </div>
    </div>
  );
}

export default PaymentOptions;
