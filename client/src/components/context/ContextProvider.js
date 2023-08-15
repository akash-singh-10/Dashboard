import React, { createContext, useState } from 'react'

export const addData = createContext("");
export const updateData = createContext("");
export const deleteData = createContext("");

const ContextProvider = ({ children }) => {
    const [userData, setUData] = useState("");
    const [upData, setUpData] = useState("");
    const [dltData, setDltData] = useState("");
    return (
        <addData.Provider value={{userData, setUData}}>
        <updateData.Provider value={{upData, setUpData}}>
        <deleteData.Provider value={{dltData, setDltData}}>
            {children}
        </deleteData.Provider>
        </updateData.Provider> 
        </addData.Provider>
    )
}

export default ContextProvider;
