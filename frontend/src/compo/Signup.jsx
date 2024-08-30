import React,{ useState} from 'react';
import './signup.css';

function Signup() {



const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");

const collectData =()=>{

console.warn(name,email,password)

}




  return (
    <div className="signup">
      <form className="signup-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" 
          value={name}
          onChange={(e)=>setName(e.target.value)}required />

        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" 
value={email}
          onChange={(e)=>setEmail(e.target.value)}required />


        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" 
          
          value={password}
          onChange={(e)=>setPassword(e.target.value)} required />

        </div>
        <button onClick={collectData} type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;


