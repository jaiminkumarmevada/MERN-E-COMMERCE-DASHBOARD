import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx'
import {BrowserRouter , Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <h1>E-dashboard</h1>
     <Nav/>  


     <Routes>

      <Route path="/" element={<h1>Product</h1>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
