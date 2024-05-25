import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    
    border: none;
    border-radius: .5rem;
    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    padding: 1.2rem 0;


    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
`;