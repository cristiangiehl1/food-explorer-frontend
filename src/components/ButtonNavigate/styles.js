import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    
    > button {            
        font-size: 1.4rem;
        

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        background-color: transparent;
        border: none;
    }

    

`;