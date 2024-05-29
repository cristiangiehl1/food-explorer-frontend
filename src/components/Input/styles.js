import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > label {
        font-family: "Roboto", sans-serif;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};        
    }

    > .input-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        
        border-radius: .8rem;        

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

        &:focus-within {
            outline: 2px solid ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        }

        input {
            flex: 1;
            padding: 1.6rem 1.4rem;
            border: none;
            background-color: transparent;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-size: 1.4rem;
        
            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_700};
                font-family: "Roboto", sans-serif;
                font-size: 1.4rem;
            }
        }

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
            padding-left: .5rem;            
        }
    }
`;