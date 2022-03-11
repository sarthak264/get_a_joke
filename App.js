import React from 'react';
import {JokeProvider} from './context/JokeContext';
import Main from './screens/Main';

const App = () => {
  return (
    <JokeProvider>
      <Main />
    </JokeProvider>
  );
};

export default App;
