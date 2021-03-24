import styled from "styled-components";

export const CartProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 15px;
  .left {
    width: 120px;
    height: 160px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h6 {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 400;
    }
  }
`;
