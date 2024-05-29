import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    

    > textarea {
        width: 100%;
        height: 17rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
        border: none;
        border-radius: 8px;
        padding: 1.6rem 1.4rem;

        resize: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        line-height: 2rem;

        &:focus-within {
            outline: 2px solid ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        }

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
        }

    }

`;