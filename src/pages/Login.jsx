import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(email === "test@test.com" && password === "123456"){
        navigate("/projects");
    } else {
        alert("Invalid credentials");
    }
  }

  return (
        <div className="container">

      <div className="card">
<header>
       <h1 className="login-title">Construction Management Login</h1>

</header>
      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login;