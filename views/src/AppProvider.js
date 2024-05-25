import { createContext, useState } from "react";
//context to provide shortUrl from App to ShortUrl component as there is no link between them
//To change the context outside of the Provider component, useState setMethod is used
const AppContext = createContext({ shortUrl: "", setShortUrl: null });
//new provider component as root to provide this context to all components, since adding it in App can't provide context to ShortUrl comp
const AppProvider = ({ children }) => {
  const [shortUrl, setShortUrl] = useState();
  return (
    <AppContext.Provider value={{ shortUrl, setShortUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
