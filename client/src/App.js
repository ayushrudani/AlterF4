import { Route, Routes } from "react-router-dom";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
}

export default App;
