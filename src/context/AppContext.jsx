import { createContext } from 'react';
import { doctors } from '../assets/assets_frontend/assets';

export const AppContext = createContext({
  doctors: [],
  currencySymbol: '$',
});

const AppContextProvider = ({ children }) => {
  const currencySymbol = '$';

  const value = {
    doctors,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
