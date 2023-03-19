import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <Routes>
        
          <Route path="profile/username" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<Home /> }>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router> 
  )
}

export default App;
