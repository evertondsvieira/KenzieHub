import styled from "styled-components"

export const Container = styled.div`
    width: 18.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--tertiary-gray);
    border-radius: 8px;

    header{
        width: 18.5rem;
        height: 7.9rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-color: var(--quaternary-gray);
        padding-bottom: 1.188rem;
    }

    h2{
        color: var(--base-gray);
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        padding-top: 2.063rem;
        font-family: 'Inter', sans-serif;
    }
    
    p{
        color: var(--primary-gray);
        font-size: 12px;
        text-align: center;
        padding-top: 1.703rem;
        padding-bottom: 1.103rem;
        font-family: 'Inter', sans-serif;
    }

    .centralize-button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.7rem;
    }

    .button-login{
        width: 16.188rem;
        height: 2.406rem;
        color: var(--base-gray);
        background-color: var(--color-primary);
        font-family: 'Inter', sans-serif;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .button-login:hover{
        background-color: var(--color-primary-focus);
    }

    a{
        text-decoration: none;
        color: var(--base-gray);
    }

    .centralize-button-register{
        padding-bottom: 2rem;
    }

    .button-register{
        background-color: var(--primary-gray);
        cursor: pointer;
        width: 16.188rem;
        height: 2.406rem;
        color: var(--base-gray);
        font-family: 'Inter', sans-serif;
        border: none;
        border-radius: 4px;
    }

    .button-register:hover{
        background-color: var(--secondary-gray);
    }

    .yup-notification{
        width: 16.5rem;
        display: flex;
        align-items: left;
        padding-top: 0.5rem;

        p{
            padding: 0;
            text-align: justify;
            color: var(--primary-gray);
        }
    }

    .show-content{
        width: 10px;
        height: 17px;
        position: relative;
        background-color: transparent;
        left: 240px;
        top: -28px;
        border: none;
        cursor: pointer;
    }
`