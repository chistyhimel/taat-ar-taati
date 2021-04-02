import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100vw;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  position: fixed;
  z-index: 5;
  transform: ${({ searchBarOpen }) =>
    searchBarOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  border-bottom: 1px solid lightgray;
`;

export const SearchBarContentWrap = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  padding: 15px 0;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 10px 0;
  }
  @media (max-width: 560px) {
    padding: 5px 0;
  }
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
    @media (max-width: 1100px) {
      padding-left: 20px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
