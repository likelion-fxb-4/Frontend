import styled from "styled-components";

export const Container = styled.div`
    max-width: 400px;
    margin: 5rem auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginText = styled.p`
    font-size: 30px;
    margin-top: 0;
    text-align: center;
    font-weight: 800;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    display: block;
    width: 300px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
`;

export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;