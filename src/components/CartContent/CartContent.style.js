import styled from "styled-components";

export const CartContentContainer = styled.div`
  width: 60vw;
  margin: 3% auto;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const EstimateShipping = styled.div`
  margin: 10% 0;
  form {
    fieldset {
      border: 1px solid lightgray;
      padding: 5% 5%;
      display: flex;
      justify-content: space-between;
    }
    legend {
      background: #fff;
      padding: 5px 10px;
      font-size: 18px;
    }
    select {
      height: 45px;
      width: 30%;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;
      border: 1px solid lightgray;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
    input {
      height: 45px;
      width: 15%;
      font-size: 16px;
      padding: 10px;
      border: 1px solid lightgray;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
export const CartPageButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  height: 45px;
  padding: 0 20px;
  border: none;
  outline: none;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const ProductCartContainer = styled.div`
  margin: 8% 0;

  .product__table__title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
    margin-bottom: 30px;

    & > :nth-child(1) {
      width: 50%;
      text-align: left;
    }
    & > :nth-child(2) {
      width: 25%;
      text-align: right;
    }
    & > :nth-child(3) {
      width: 25%;
      text-align: right;
    }
  }

  .product__subtotal__section {
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-top: 15px;
    & > * {
      width: 30%;
    }
    section {
      textarea {
        width: 100%;
      }
    }
    & > :nth-child(3) {
      text-align: right;
      p {
        margin-bottom: 15px;
      }
    }
  }
`;

export const CartContentProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  section {
    width: 50%;
    display: flex;
    align-items: center;
    text-align: left;
    img {
      width: 25%;
      margin-right: 5%;
    }
  }
  div {
    margin: 0 auto;
    width: 12%;
    div {
      width: 100%;
    }
    u {
      /* display: none; */
      position: static;
      display: block;
      bottom: 0;
      right: 0;
      font-size: 12px;
      top: 0;
      transform: translateY(0);
      cursor: pointer;
      margin-top: 10px;
    }
  }
`;
