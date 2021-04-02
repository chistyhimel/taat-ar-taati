import styled from "styled-components";

export const MenubarContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 250px;
  z-index: 11;
  transform: ${({ mobileMenubar }) =>
    mobileMenubar ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  padding: 18px 24px 0 18px;
  @media (max-width: 768px) {
    display: block;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    width: fit-content;
  }

  p {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    font-size: 15px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const MenubarSocilMediaIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
`;

// ------------------SubmenuBar------------------//

export const SubmenuContainer = styled.div`
  width: 100%;
  display: ${({ openSubMenu }) => (openSubMenu ? "block" : "none")};
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  -ms-transition: 0.2s linear;
  -o-transition: 0.2s linear;
  transition: 0.2s linear;

  p {
    padding-left: 20px;
    border: none;
    margin: 0;
    text-transform: capitalize;
  }
`;

// ------------------ChildmenuBar------------------//

export const ChildMenuContainer = styled.div``;
