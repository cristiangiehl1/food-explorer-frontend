import { createContext, useContext, useState } from "react";

const OrderContext = createContext({});


function CartProvider({ children }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <OrderContext.Provider value={{ quantity, setQuantity }}>
            {children}
        </OrderContext.Provider>
    )
}

function useCart() {
    const context = useContext(OrderContext);

    return context;
}

export { CartProvider, useCart };