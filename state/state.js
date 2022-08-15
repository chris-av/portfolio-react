import { useState, createContext, useContext, useRef } from 'react';


const AppContext = createContext();
export const AppWrapper = ({ children }) => {
	const [open, toggleOpen] = useState(false);
  const messageRef = useRef();

  let sharedState = { open, toggleOpen, messageRef };

  return (
    <AppContext.Provider value={sharedState}>
      { children }
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}

