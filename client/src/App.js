import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import MainLayout from "./Layout/MainLayout";
import CropInformation from "./Pages/Crop/CropInformation";
import QuestionAnswerAddEdit from "./Pages/QuestionAnswer/QuestionAnswerAddEdit";
import { CropProvider } from "./Context/CropContext";
import CropDetail from "./Pages/Crop/CropDetail";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h1>Home</h1>} />

        <Route
          path="crop/information"
          element={
            <CropProvider>
              <CropInformation />
            </CropProvider>
          }
        />
        <Route
          path="crop/information/detail/:id"
          element={
            <CropProvider>
              <CropDetail />
            </CropProvider>
          }
        />
        <Route
          path="community/QuestionAnswer/post"
          element={<QuestionAnswerAddEdit />}
        />
      </Route>
    </Routes>
  );
}

export default App;
