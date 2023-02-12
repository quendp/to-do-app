import styled from "styled-components";

export const Card = styled.li`
  background-color: ${(props) => props.color};
  min-height: 10rem;
  max-width: 21rem;
  width: 90%;
  border-radius: 1rem;
  padding: 2rem;
  margin: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 5px 5px 10px -10px var(--clr-black-300);
  transition: box-shadow 400ms ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 5px 5px 10px -5px var(--clr-black-300);
  }
`;

export const CardStatus = styled.div`
    color: var(--clr-white-900);
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 800;
    border-radius: 0.7rem;
    padding: 0.4rem 1rem;
    letter-spacing: 0.8px;
    margin-bottom: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export const CardTitle = styled.h3`
    font-weight: 600;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    color: var(--clr-black-300);
`;

export const CardMeta = styled.div`
    color: var(--clr-black-200);
    background-color: ${(props) => props.accent};
    text-transform: uppercase;
    font-size: 0.8rem;
    border-radius: 0.7rem;
    width: 100%;
    padding: 1rem;
    letter-spacing: 0.8px;
    font-weight: 700;

    & p:nth-child(1) {
        margin-bottom: 0.5rem;
    }

    & span {
        font-weight: 500;
    }

    & p span:nth-child(1) {
        margin-right: 1rem;
        font-weight: 500;
    }
`;