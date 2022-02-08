import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {


    return (
        <div>
            <GlobalContext.Provider value={GlobalContext}>
                {children}
            </GlobalContext.Provider>
        </div>
    )
}