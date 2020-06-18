import React, { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA'
import Counter from './Component/Counter/Counter';
import PocA from './Component/Pokemon/PocA';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Shop from './Component/Shop/Shop';
import { Route, Switch } from 'react-router-dom';
import Error from './Component/Error/Error';
import Navbar from './Component/Navbar/Navbar';


const FirstName = createContext();
const LastName = createContext();

const App = () => {

  
  const Name = () => {
    return (
      <div>
        This is Name Component page
      </div>
    );
  };
  
  

  return (
    <>
    <Navbar />
    <Switch>
    <Route path="/" component={Home} exact />
    <Route exact path="/about" component={About} />
    <Route path="/about/name" component={Name} /> 
    <Route path="/shop" component={Shop} />
    


<Route path="/poca" component={PocA} />
<Route path="/counter" component={Counter} />
    
    
      <FirstName.Provider value={"Mohsin"}>
      <LastName.Provider value ={"Bohra Cycle Wala"}>
      <Route path="/coma" component={ComA} /> 
      </LastName.Provider>
      </FirstName.Provider>

      
      <Route component={Error} />
      </Switch>
      
    </>
  );
}

export default App;
export {FirstName,LastName};

