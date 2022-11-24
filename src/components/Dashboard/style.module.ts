import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 8.188rem;
    border: 1px solid var(--tertiary-gray);
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
    
    h2{
        color: var(--base-gray);
        font-size: 18px;
        font-weight: 700;
        font-family: 'Inter';
        padding-bottom: 0.625rem;
    }

    p{
        color: var(--primary-gray);
        font-size: 12px;
        font-family: 'Inter';
    }

    @media only screen and (min-width: 426px) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        
        div{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            padding: 0;
            margin: 0;
        }
    }
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.625rem auto;
    }

    h2{
        color: var(--base-gray);
        font-weight: 600;
        font-size: 16px;
        font-family: 'Inter';    
    }

    button{
        width: 2rem;
        height: 2rem;
        border-radius: 4px;
        border-style: none;
        background-color: var(--tertiary-gray);
        cursor: pointer;
    }

    button:hover{
        background-color: var(--secondary-gray);
    }
`

export const List = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .centralize-container{
        width: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: var(--tertiary-gray);
        font-family: 'Inter'; 
        border-radius: 4px;
    }

    .centralize-context{
        width: 100%;
    }

    li{
        width: 83%;
        height: 2rem;
        background-color: var(--quaternary-gray);
        margin: 0.875rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Inter';    
        padding: 0.75rem;
        border-radius: 4px;
    }

    li:hover{
        background-color: var(--secondary-gray);
    }

    h2{
        color: var(--base-gray);
        font-size: 14px;
        font-weight: 700;
    }

    p{
        color: var(--base-gray);
        font-size: 12px;
        font-weight: 400;
    }

    .centralize-status{
        display: flex;
        align-items: center;


    }

    .trash{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    @media only screen and (min-width: 767px) {
        li{
            width: 92%;
        }
    }

    @media only screen and (min-width: 1023px) {
        li{
            width: 95%;
        }
    }
`
