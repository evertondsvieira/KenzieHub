import styled from "styled-components";

export const Container = styled.form`
  width: 18.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--tertiary-gray);
  border-radius: 8px;

  h2 {
    color: var(--base-gray);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    padding-top: 2.625rem;
    padding-bottom: 1.375rem;
  }

  p {
    color: var(--primary-gray);
    font-family: "Inter", sans-serif;
    font-size: 12px;
  }

  label {
    color: var(--base-gray);
    font-size: 12px;
    font-family: "Inter", sans-serif;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  select {
    width: 16.541rem;
    height: 48px;
    color: var(--primary-gray);
    background-color: var(--secondary-gray);
  }

  button {
    width: 15.25rem;
    height: 3rem;
    border-radius: 4px;
    border: 1.2182px solid var(--color-primary-negative);
    border-radius: 4px;
    font-size: 16px;
    color: var(--base-gray);
    background: var(--color-primary-negative);
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }

  .yup-notification {
    width: 16.5rem;
    display: flex;
    align-items: left;
    padding-top: 0.5rem;
  }

  .centralize-button {
    padding-top: 1.25rem;
    padding-bottom: 1.75rem;
  }


  a{
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Header = styled.header`
  width: 18.5rem;
  margin-top: 2.375rem;
  margin-bottom: 2.375rem;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    background-color: #343B41;
  }

  a{
    color: var(--base-gray);
    text-decoration: none;
  }
`;
