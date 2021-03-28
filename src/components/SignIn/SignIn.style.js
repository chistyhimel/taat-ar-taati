import styled from "styled-components";

export const SignInContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInFormContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
  }
  p {
    text-align: center;

    span {
      font-weight: 600;
      cursor: pointer;
    }
  }
  form {
    margin: 20px 0;

    .input__wrap {
      position: relative;

      span {
        position: absolute;
        display: block;
        top: 50%;
        right: 10px;
        transform: translate(0%, -50%);
        font-size: 13px;
        cursor: pointer;
      }
    }
    label {
      cursor: pointer;
      text-align: left;
      background-color: #fff;
      position: absolute;
      top: -10px;
      left: 10px;
      padding: 0 8px;
      font-size: 14px;
    }
    input {
      display: block;
      height: 46px;
      width: 400px;
      border: 1px solid lightgray;
      margin-bottom: 20px;
      padding: 10px;
      font-size: 14px;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        background-color: #e8f0fe;
      }
    }
    div {
      width: 100%;
      text-align: center;
    }
  }
`;
