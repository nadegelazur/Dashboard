import { createContext } from 'react'
import { useState } from 'react';

export const ApiContext = createContext();

function ApiContextProvider({children}) {
    const [fetch, setFetch] = useState('api');

    function toggleFetch() {
        setFetch(fetch === 'api'? 'mock': 'api')
    }
    
    return(
        <ApiContext.Provider value={{fetch, toggleFetch}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider