import { useState, useContext, createContext, ReactNode } from 'react';


type NavbarContextType = {
  open: boolean;
  toggleOpen: (status: boolean) => void;
}

const defaultValues: NavbarContextType = {
  open: false,
  toggleOpen: (status: boolean) => { },
}

export const NavbarContext = createContext<NavbarContextType>(defaultValues);
export const useNavbarContext = () => useContext(NavbarContext);


export default function NavbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultValues.open);
  const toggleOpen = (status: boolean) => {
    setOpen(status);
  };
  return (
    <NavbarContext.Provider
      value={{
        open,
        toggleOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

