import { createContext, useState } from "react";

export const IdContext = createContext()

export const IdContextProvider = ({children}) => {

    const [modal, setModal] = useState(false);

    return <IdContext.Provider value={{modal, setModal}}>{children}</IdContext.Provider>
}