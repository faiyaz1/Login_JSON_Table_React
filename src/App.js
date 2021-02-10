import React, {useState} from 'react'
import LoginForm from './components/LoginForm';
import EmpData from './components/EmpData';
function App()  {
    const adminUser = {
        email: "hruday@gmail.com",
        password: "hruday123"
    }
    const [user, setUser] =useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email === adminUser.email && details.password === adminUser.password){
          console.log("Logged In");
          setUser({
            name:details.name,
            email:details.email
          });
      } else {
          console.log("Details Do not Matched!");
          setError("Details Do not Matched!");
      }
    }

   

    const Logout = () => {
      setUser({ name:"",email:""});
    }
    
    return (
        <div className="App">
          {(user.email !== "") ? (
            <div className="welcome">
              <h2>Employee Data</h2>
              <ul>
                <li>ID</li>
                <li>Name</li>
                <li>Age</li>
                <li>Gender</li>
                <li>Email</li>
                <li>Phone No</li>
              </ul>
              
              <EmpData />
              <button onClick={Logout}>Logout</button>
            </div>
          ) : (
             <LoginForm  Login={Login} error={error} /> 
          )}
            
        </div>
    )
}

export default App; 
