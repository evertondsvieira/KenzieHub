import styled from "styled-components"

export const Container = styled.header`
    width: 100%;
    height: 7.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--quaternary-gray);

    @media only screen and (min-width: 426px) {
        width: 100vw;
       display: flex;
       align-items: center;
       justify-content: center;
       margin-left: 331px;
       margin-right: 331px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }

    button{
        width: 4.9rem;
        height: 2rem;
        border-radius: 4px;
        color: var(--base-gray);
        background-color: var(--tertiary-gray);
        font-size: 12px;
        font-family: 'Inter', sans-serif;
        border: none;
        cursor: pointer;
    }

    button:hover{
        background-color: var(--secondary-gray);
    }

    a{
        text-decoration: none;
        color: white;
    }
`;