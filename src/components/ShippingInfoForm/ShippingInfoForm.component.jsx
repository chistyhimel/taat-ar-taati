import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo.svg";
import {
  InputWrap,
  ShippingAddress,
  ShippingInfoFormContainer,
} from "./ShippingInfoForm.style";
const ShippingInfoForm = () => {
  return (
    <>
      <ShippingInfoFormContainer>
        <img src={logo} alt="" />
        <small>
          Cart <FontAwesomeIcon icon={faAngleRight} /> Information{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Shipping{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Payment
        </small>

        <div className="contact__info">
          <h1>Contact information</h1>
          <h6>Already have an account ? Log in</h6>
        </div>

        <InputWrap>
          <input type="text" />
          <input type="checkbox" id="update_confirmation" />
          <label htmlFor="update_confirmation">
            Keep me up to date on news and exclusive offers
          </label>
        </InputWrap>

        <ShippingAddress>
          <h1>Shipping address</h1>
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Apartment, suit, etc." />
          <input type="text" placeholder="City" />
          <div>
            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <input type="text" placeholder="Postal code" />
          </div>
          <input type="text" placeholder="Phone" />
          <input type="checkbox" id="update_confirmation" />
          <label htmlFor="update_confirmation">
            Keep me up to date on news and exclusive offers
          </label>
          <button type="submit">Continue to shipping</button>{" "}
          <small>Return to cart</small>
        </ShippingAddress>
        <hr />
        <br />
        <small>Refund policy Privacy policy Terms of service</small>
      </ShippingInfoFormContainer>
    </>
  );
};

export default ShippingInfoForm;
