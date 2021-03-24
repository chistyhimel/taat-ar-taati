import styled from "styled-components";

export const ProductCategoryContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit,minmax(12rem,1fr)); */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  height: auto;
  /* @media(max-width: 1350px){
    grid-template-columns: repeat(4,1fr);   
} 
@media(max-width: 1060px){
    grid-template-columns: repeat(3,1fr);   
} 
@media(max-width: 560px){
} */
`;
