import { Container } from "./styles";
import { IoMdClose } from "react-icons/io";


export function UserMesssage({ 
    message, 
    background, 
    isMessage, 
    isConfirmOrCancel, 
    onConfirmation, 
    onClose 
}) {
    const confirmOrCancelClass = isConfirmOrCancel ? "confirm-or-cancel" : 'hidde-confirm-or-cancel';

    const handleConfirmationClick = (confirmation) => {
        onConfirmation(confirmation);
    };

    const closeMenu = (closemsg) => {
        onClose(closemsg);
    };

    return (
        <Container 
            $background={background}
            $isMessage={isMessage}
            $isConfirmOrCancel={isConfirmOrCancel}
            id="user-message" 
        >
            <button className="close-message" onClick={() => closeMenu("")}><IoMdClose size={15}/></button>
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