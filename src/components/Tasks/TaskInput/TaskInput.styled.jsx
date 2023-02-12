import styled from "styled-components";

export const StyledInput = styled.form`
  background-color: var(--clr-form);
  box-shadow: 0px 0px 5px var(--clr-glass-bg);
  max-width: 50rem;
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  & div {
    margin-bottom: 0.5rem;
  }
  & * {
    margin: 0.25rem;
  }

`;

export const TaskTitle = styled.div`
  position: relative;
  & input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--clr-black-300);
    width: 100%;
    height: 3rem;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
  }

  & label {
    position: absolute;
    color: var(--clr-white-900);
    top: ${(props) => (props.enteredTitle.length > 0 ? "-1rem" : "0")};
    letter-spacing: 1px;
    left: 0.5rem;
    transition: top 400ms ease-in-out, font-size 400ms ease-in-out;
    font-size: ${(props) =>
      props.enteredTitle.length > 0 ? "1rem" : "1.7rem"};
  }

  & input:focus ~ label {
    top: -1rem;
    font-size: 1rem;
  }
`;

export const TaskDesc = styled.div`
  & textarea {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    outline: none;
    border: 1px solid var(--clr-black-300);
    width: 100%;
    height: 10rem;
    padding: 1rem;
    font-size: 1rem;
    resize: none;
    border-radius: 1rem;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;

  & > div {
    flex-basis: 100%;
  }

  & label {
    font-weight: 600;
  }
`;

export const InputSelect = styled.div`
  width: 100%;

  & select {
    font-size: 1rem;
    height: 2rem;
    border: 1px solid var(--clr-black-000);
    outline: none;
    border-radius: 1rem;
    padding: 0rem 1rem;
    background-color: ${(props) => "var("+(props.enteredColor) + ")"};
  }
`;

export const InputDate = styled.div`
  width: 100%;

  & input {
    width: 65%;
    font-size: 1rem;
    height: 2rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    background-color: transparent;
  }
`;