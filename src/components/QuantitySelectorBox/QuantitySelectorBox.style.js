import styled from "styled-components";

export const QuantitySelectorWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const QuantitySelectorBoxContainer = styled.div`
  width: 100px;
  height: 45px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    width: 33%;
  }
  button {
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 26px;
  }
  span {
    text-align: center;
    font-size: 16px;
  }

  u {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
