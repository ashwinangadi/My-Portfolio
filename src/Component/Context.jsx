import { createContext, useState } from "react";

export const IdContext = createContext()

export const IdContextProvider = ({children}) => {

    const [componentId, setComponentId] = useState([])

    return <WatchListContext.Provider value={{componentId, setComponentId}}>{children}</WatchListContext.Provider>
}