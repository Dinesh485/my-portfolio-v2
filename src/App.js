import { BrowserRouter } from 'react-router-dom';
import './App.scss'
import Nav from './components/Nav'
import Start from './components/Start';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <div className="outer-wrapper">
       <Nav />
        <div className="tab-container">
        <Start />
        </div>
       </div>
 
    </div>
    </BrowserRouter>
   
  );
}

export default App;
