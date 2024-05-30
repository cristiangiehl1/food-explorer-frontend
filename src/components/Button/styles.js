import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    
    
    border: none;
    border-radius: .5rem;
    background-color: ${({ theme, color }) => color ? theme.COLORS[color] : theme.COLORS.TINTS_TOMATO_300};

    padding: 1.2rem 0;


    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
`;