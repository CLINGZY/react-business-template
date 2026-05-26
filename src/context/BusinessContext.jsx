import { createContext } from "react";

export const BusinessContext = createContext();

export function BusinessProvider({ children }) {

  const business = {
    name: "Aura Spa",
    phone: "+234 000 000 0000",
    email: "contact@auraspa.com",

    whatsapp: "2340000000000",
    instagram: "https://instagram.com/yourpage",
    facebook: "https://facebook.com/yourpage"
  };

  return (
    <BusinessContext.Provider value={business}>
      {children}
    </BusinessContext.Provider>
  );
}