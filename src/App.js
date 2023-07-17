import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Product from './Components/Product';
import Input from './Components/Input';

function App() {



  const [state, setState] = useState(true)

  const closeFooterHandler=() => {
    setState((prevState) => !prevState)
  }

  function inpdata(data){
    
  }


 
  return (
    <div className="App">
      <Header text={state}  login={closeFooterHandler}/>

      {state ===true ? <Footer/> : <Product/>}
      <br/>
      <Input/>
    </div>
  );
}

export default App;
