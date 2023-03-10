import styled from "styled-components";

export const ButtonSet = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  & button {
    margin: 0.3rem;
    font-size: 1rem;
  }
`;

export const SubmitBtn = styled.button`
  background-color: var(--clr-black-100);
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  color: var(--clr-white-000);

  &:hover,
  &:active {
    background-color: var(--clr-black-000);
  }
`;

export const CancelBtn = styled.button`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  color: var(--clr-black-100);

  &:hover,
  &:active {
    text-shadow: 0 0 18px var(--clr-glass-bg);
  }
`;
