import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    span{
        color: var(--white);
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        font-size: 12px;
        font-family: 'Inter', sans-serif;
    }

    input{
        width: 16.541rem;
        height: 2.406rem;
        border: 0 none;
        color: var(--white);
        background-color: var(--secondary-gray);
        border: 1.2182px solid var(secondary-gray);
        border-radius: 4px;
        text-indent: 1rem;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
    }
`;