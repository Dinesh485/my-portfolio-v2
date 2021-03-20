import { BrowserRouter } from 'react-router-dom';
import './App.scss'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <Nav />
    </div>
    </BrowserRouter>
   
  );
}

export default App;
