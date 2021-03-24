import styled from "styled-components";

export const ReviewCardContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  img {
    width: 80px;
    height: 100px;
    object-fit: scale-down;
    display: block;
    margin: 0 auto;
  }
`;
