import React, { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA'
import Counter from './Component/Counter/Counter';
import PocA from './Component/Pokemon/PocA';


const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
    <PocA />
    <Counter />
      <FirstName.Provider value={"Mohsin"}>
      <LastName.Provider value ={"Bohra Cycle Wala"}>
      <ComA />
      </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName,LastName};

