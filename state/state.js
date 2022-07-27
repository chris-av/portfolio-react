import { useState, createContext, useContext } from 'react';


const AppContext = createContext();
export const AppWrapper = ({ children }) => {
	const [open, toggleOpen] = useState(false);
  let sharedState = { open, toggleOpen };

  return (
    <AppContext.Provider value={sharedState}>
      { children }
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}

