import logo from './logo.svg';
import './App.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx'
import Signup from './compo/Signup.jsx'
import {BrowserRouter , Routes , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
    
     <Nav/>  


     <Routes>

      <Route path="/" element={<h1>Product</h1>}/>
      <Route path="/add" element={<h1>Add Product</h1>}/>
      <Route path="/update" element={<h1>Update Product</h1>}/>
      <Route path="/logout" element={<h1>Logout Product</h1>}/>
      <Route path="/profile" element={<h1>Profile</h1>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
     </BrowserRouter>


     <Footer/>
    </div>
  );
}

export default App;
