import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss'
import Nav from './components/Nav'
import Start from './components/Start';
import loading from './images/loading.svg'

function App() {

   let [loading, setLaoding] = useState(true)
   useEffect(() =>{
      setLaoding(false)
   },[])

  return (
    <BrowserRouter>
     <div className="App">
       
       <Nav />
        <div className="tab-container">
        <Start />
        </div>
      
       {loading &&  <span className="loading">
             <img src={loading} alt=""/>
        </span>}
    </div>
    </BrowserRouter>
   
  );
}

export default App;
