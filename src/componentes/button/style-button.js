import styled from "styled-components";

export const But = styled.button`
    padding: 13px;
    font-size: 20px;
    font-weight: 400;
    border-radius: 10px;
    background-color: #DAA520;
    border: 0;
    cursor: pointer;
    @media(max-width: 780px) {
        margin-bottom: 30px;
    }
    @media (max-width: 490px) {
        font-size: 16px;
    }
`