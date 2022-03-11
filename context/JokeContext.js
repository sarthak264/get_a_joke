import React, {useState, createContext} from 'react';

export const JokeContext = createContext();

export const JokeProvider = ({children}) => {
  const [joke, setJoke] = useState("Getting a joke for you.");
  // const [delivery, setDelivery] = useState("Let's get you laughing.");

  return (
    <JokeContext.Provider value={{joke, setJoke}}>
      {children}
    </JokeContext.Provider>
  );
};
