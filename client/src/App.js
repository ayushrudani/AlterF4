import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import MainLayout from "./Layout/MainLayout";
import CropInformation from "./Pages/Crop/CropInformation";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h1>Home</h1>} />
        <Route path="crop/information" element={<CropInformation />} />
      </Route>
    </Routes>
  );
}

export default App;
