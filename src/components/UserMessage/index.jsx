import { Container } from "./styles";

export function UserMesssage({ message, background, isMessage, isConfirmOrCancel, onConfirmation }) {
    const confirmOrCancelClass = isConfirmOrCancel ? "confirm-or-cancel" : 'hidde-confirm-or-cancel';

    const handleConfirmationClick = (confirmation) => {
        onConfirmation(confirmation); // Chama a função de retorno de chamada com a opção selecionada
    };


    return(
        <Container 
            $background={background}
            $isMessage={isMessage}
            $isConfirmOrCancel={isConfirmOrCancel}
        >
            <div>
                <span>{message}</span>
            </div>
            <div 
                className={confirmOrCancelClass} 
            >
            <button onClick={() => handleConfirmationClick("Sim")}>Sim</button>
                <button onClick={() => handleConfirmationClick("Não")}>Não</button>
            </div>
        </Container>
    )
}