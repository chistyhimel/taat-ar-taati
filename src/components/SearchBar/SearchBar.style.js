import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  transform: ${({ searchBarOpen }) =>
    searchBarOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
`;

export const SearchBarContentWrap = styled.div`
  font-size: 25px;
  display: flex;
  /* background-color: red; */
  align-items: center;
  padding: 15px 0;
  .icon {
    width: 5%;
    cursor: pointer;
  }
  input {
    width: 90%;
    height: 8vh;
    font-size: 20px;
    border: none;
    outline: none;
  }
`;
