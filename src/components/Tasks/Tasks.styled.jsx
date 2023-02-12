import styled, { keyframes } from "styled-components";

export const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    padding: 1rem 1rem;
`;

export const FormBackground = styled.div`
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const CardBackground = styled.div`
  background-color: transparent;
  width: 60vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  z-index: 9;
`;