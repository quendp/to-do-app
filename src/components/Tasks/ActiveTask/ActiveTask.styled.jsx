import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translate(100%, -50%);
  }
  to {
    transform: translate(0%, -50%);
  }
`;

export const CurrentCard = styled.div`
  background-color: ${(props) => (props.task.color)};
  box-shadow: -5px 0px 15px -5px var(--clr-glass-bg);
  border-radius: 3rem 0 0 3rem;
  width: 50vw;
  height: 80vh;
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 10;
  transform: translate(0%, -50%);
  animation: ${slide} 400ms ease-in-out forwards;
  display: flex;
  flex-direction: column;
  justify-content:start;
  align-items: center;
  padding: 3rem;
  overflow-y: scroll;
  
  & > * {
    margin-bottom: 2rem;
  }

  & form {
    width: 100%;
  }
`;

export const Status = styled.p`
  text-transform: uppercase;
  background-color: var(--clr-black-300);
  color: ${(props) => (props.accent)};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;

`;

export const Title = styled.h3`
  font-size: 1.6rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  background-color: ${(props) => (props.accent)};
  padding: 2rem;
  border-radius: 1rem;
`;

export const Dates = styled.p`
  font-size: 1rem;
  align-self: start;
`;