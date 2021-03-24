import styled from "styled-components";

export const CartSidebarContainer = styled.div`
  height: 100vh;
  width: 400px;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  box-shadow: 2px 0 10px rgb(54 54 54 / 20%), -2px 0 10px rgb(54 54 54 / 20%);
  transform: ${({ cartSidebarOpen }) =>
    cartSidebarOpen ? "translateX(0)" : "translateX(140%)"};
  transition: transform 0.3s ease-in-out;
`;

export const CartSidebarTopSection = styled.div`
  height: 70vh;
  overflow: hidden;

  h1 {
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 6% 6%;
    cursor: pointer;
  }

  small {
    font-size: 15px;
    text-align: center;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    display: block;
    padding: 8px 0;
  }
`;

export const CartProductWrap = styled.div`
  margin-top: 20px;
  overflow-y: scroll;
  height: 52vh;
  padding: 0 6%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CartSidebarBottomSection = styled.div`
  height: 30vh;
  width: 100%;
  background: transparent;
  padding: 6% 6%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid lightgray;
  .whatsapp_contact {
    display: flex;
    justify-content: space-between;
    input {
      width: 50%;
    }
  }
  div {
    width: 100%;
    text-align: center;
  }
`;
