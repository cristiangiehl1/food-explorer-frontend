import { createContext, useContext, useState } from "react";

const OrderContext = createContext({});


function OrderProvider({ children }) {
    const [order, setOrder] = useState([]);

    return (
        <OrderContext.Provider value={{ order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

function useOrder() {
    const context = useContext(OrderContext);

    return context;
}

export { OrderProvider, useOrder };