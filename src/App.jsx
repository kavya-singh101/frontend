import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import UserState from "./context/user/UserState";
import ForgotPassword from "./components/ForgotPassword"
import Landing from "./components/Landing";
function App() {


  const [userId, setUserId] = useState("");

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <UserState showAlert={showAlert}>
          <Alert alert={alert} />
          <div className="">
            <Routes>
              {/* add the route to / to landing page when its built */}
              <Route exact path="/" element={<Profile showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/register" element={<Register showAlert={showAlert} />} />
              <Route exact path="/forgotPassword" element={<ForgotPassword showAlert={showAlert} />} />
              <Route exact path="/landing" element={<Landing showAlert={showAlert} />} />
            </Routes>
          </div>
        </UserState>
      </Router>
    </>
  );
}

export default App;
