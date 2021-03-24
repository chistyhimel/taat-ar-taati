import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo.jpg";
import { ShippingInfoFormContainer } from "./ShippingInfoForm.style";
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
        <input type="text" />

        <hr />
        <br />
        <small>Refund policy Privacy policy Terms of service</small>
      </ShippingInfoFormContainer>
    </>
  );
};

export default ShippingInfoForm;
