import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.5);

    .modal-box{
        width: 18.5rem;
        min-height: 18.125rem;
        max-height: 20rem;
        background-color: var(--tertiary-gray);
        border-radius: 3px;
        margin-top: 9rem;
        margin-bottom: 100vh;
        position: relative;

        .yup-notification{
            width: 16.5rem;
            display: flex;
            align-items: left;
            padding-top: 0.5rem;
            color: var(--primary-gray);
            font-family: 'Inter';
            font-size: 10px;

            p{
                padding: 0;
            }
        }

        .modal-centralize-main{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: var(--secondary-gray);
            height: 40px;
            padding-left: 16px;

            .modal-name-register{
            color: var(--base-gray);
            font-size: 14px;
            font-weight: 700;
            font-family: 'Inter';
            }

            .close-button{
            position: absolute;
            top: 12.8px;
            left: 265px;
            border: none;
            background-color: transparent;
            cursor: pointer;
            }
        }

        .centralize-context{
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            .modal-input{
                color: var(--base-gray);
                font-weight: 400;
                font-size: 12px;
                font-family: 'Inter';
                background-color: var(--secondary-gray);
                border: 2px solid var(--base-gray);
                border-radius: 4px;
                width: 16.5rem;
                height: 2.406rem;
                border: none;
            }

            #modal-input{
                text-indent: 10px;
            }

            .modal-select{
                color: var(--base-gray);
                font-weight: 400;
                font-size: 12px;
                font-family: 'Inter';
                background-color: var(--secondary-gray);
                border: 2px solid var(--base-gray);
                border-radius: 4px;
                width: 16.875rem;
                height: 2.406rem;
            }

            .modal-title, .modal-status{
                color: var(--base-gray);
                font-size: 12px;
                font-weight: 700;
                padding-top: 15px;
                padding-bottom: 15px;
                font-family: 'Inter';
            }

            .centralize-button-register{
                width: 92%;
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                align-items: flex-start;
                justify-content: center;
                padding-top: 16px;
                padding-bottom: 1rem;
            }

            .modal-register-button{
                color: var(--base-gray);
                background-color: var(--color-primary);
                width: 16.244rem;
                height: 2.406rem;
                border-radius: 4px;
                border-style: none;
                cursor: pointer;
            }

            .modal-register-button:hover{
                background-color: var(--color-primary-focus);
            }
        }
    }
`
