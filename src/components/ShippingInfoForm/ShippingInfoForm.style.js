import styled from "styled-components";

export const ShippingInfoFormContainer = styled.div`
  padding-left: 15%;
  padding-right: 3%;
  padding-bottom: 3%;
  height: auto;
  .contact__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
  }
  img {
    height: 80px;
    width: 80px;
    display: block;
    margin: 0 auto;
    padding-bottom: 25px;
  }
  small {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
  }
  h6 {
    text-align: center;
    padding-bottom: 20px;
    margin: 0 auto;
    width: 250px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    height: 46px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    padding: 15px;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 48%;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    padding: 15px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  select {
    width: 48%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    height: 46px;
    padding: 0 15px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CheckboxWrapper = styled.div`
  input[type="checkbox"] {
    margin-right: 15px;
    width: 15px;
    height: 15px;
  }
  label {
  }
`;

export const ShippingAddress = styled.div`
  small {
    display: inline;
    margin-left: 30px;
  }
`;
