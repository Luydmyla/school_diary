import styled from "styled-components";
import img from "./modal.png";
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

export const Content = styled.div`
  @media screen and (min-width: 320px) {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    opacity: 1;
    transition: transform 1250ms, opacity 500ms;
    transform: translate(-50%, -50%) scale(1);
    /* width: 50vw;
    height: 25vw; */
    padding: 10px;
    padding-top: 50px;
    background-color: #fff;
    background-image: url(${img});
    /* width: 200px;
  height: 200px; */
    background-repeat: no-repeat;
    background-size: cover;
    /* background: linear-gradient(lightblue, lightyellow); */
    border: 2px solid orange;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
  @media screen and (min-width: 1200px) {
    width: 80%;
    height: 80%;
    /* width: 100%; */
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    opacity: 1;
    transition: transform 1250ms, opacity 500ms;

    transform: translate(-50%, -50%) scale(1);

    /* max-width: 600px; */
    /* height: fit-content;
  width: fit-content; */
    width: 50vw;
    height: 30vw;
    padding-top: 50px;
    background-color: #fff;
    background-image: url(${img});
    /* width: 200px;
  height: 200px; */
    background-repeat: no-repeat;
    background-size: cover;
    /* background: linear-gradient(lightblue, lightyellow); */
    border: 4px solid orange;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
