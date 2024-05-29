import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;   
    gap: 8px; 

    width: 46%;
    
    padding: 8px 10px;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    border-radius: 8px;    

    > button {
        border: none;
        background: transparent;
        display: flex;
        align-items: center;    
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }


    > input {             
        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        background: transparent;     
        border: none;
        width: 100%;
        font-size: 1.2rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            font-family: "Roboto", sans-serif;
            font-size: 1.2rem;
        }
    }
`;