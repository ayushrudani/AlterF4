import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
}

export default App;
