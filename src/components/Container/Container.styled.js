import styled from "styled-components";

export const MainContainer = styled.div`
  /* max-width: 1170px; */

  @media screen and (min-width: 280px) {
    width: 280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 768px) {
    /* width: 618px; */
  }
  @media screen and (min-width: 1200px) {
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
