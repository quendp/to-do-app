import styled from "styled-components";

export const ButtonSet = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    & button {
        margin: 0.3rem;
        text-transform: uppercase;
        font-size: 1rem;
    }
`;

export const SubmitBtn = styled.button`
    background-color: var(--j-b);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover, &:active {
        background-color: var(--j-a);
    }
`;

export const CancelBtn = styled.button`
    background-color: transparent;
`;