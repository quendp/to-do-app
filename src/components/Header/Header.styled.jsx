import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: var(--clr-white-100);
    border-radius: 1rem;
`;

export const AddTaskBtn = styled.button`
    padding: 0.5rem 1rem;
    background-color: var(--clr-black-100);
    color: var(--clr-white-000);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
        background-color: var(--clr-white-300);
        color: var(--clr-black-000);
        height: 1.5rem;
        width: 1.5rem;
        display: inline-block;
        border-radius: 50%;
        font-size: 1.5rem;
        line-height: 1.1;
        margin-left: 1rem;
    }

    &:hover, &:active {
    background-color: var(--clr-black-000);

    }
`;