import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
    width: 500px;
    padding: 30px;

    box-shadow: 0px 0px 20px #00000055;
    gap: 20px;
    display: flex;
    flex-direction: column;

    > h1 {
        text-align: center;
    }
`;