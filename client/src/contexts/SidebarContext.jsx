import React, { createContext, useContext, useState } from 'react'

// Create Context
export const SidebarContext = createContext();


const SidebarContextProvider = ({children}) => {

    // Sidebar state
    const [isOpen, setisOpen] = useState(false);

    const handleClose = () => {
        setisOpen(false);
    };


  return (
    <SidebarContext.Provider value={{isOpen, setisOpen, handleClose}}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider