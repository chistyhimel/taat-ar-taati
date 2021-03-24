import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  z-index: 2;
  position: sticky;
  top: 0;
  & > * {
  }

  img {
    margin: 0 auto;
    display: block;
  }
`;

export const NavbarIconsContainer = styled.div`
  font-size: 22px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  & > * {
    margin-left: 25px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const NavItemsContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  p {
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      margin-top: 15px;
      width: 0;
      height: 2.2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
