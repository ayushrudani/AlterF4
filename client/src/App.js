import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import MainLayout from "./Layout/MainLayout";
import CropInformation from "./Pages/Crop/CropInformation";
import QuestionAnswerAddEdit from "./Pages/Community/QuestionAnswer/QuestionAnswerAddEdit";
import { CropProvider } from "./Context/CropContext";
import CropDetail from "./Pages/Crop/CropDetail";
import QuestionList from "./Pages/Community/QuestionAnswer/QuestionList";
import DiseasesDetection from "./Pages/DiseasesDetection/DiseasesDetection";
import PostDetail from "./Pages/Community/QuestionAnswer/PostDetail";

import Hero from "./Pages/Home/Hero";
import Yojana from "./Pages/Yojana/Yojana";
import FindTree from "./Pages/FindTree/FindTree";
import CropRecommendation from "./Pages/Crop/CropRecommendation";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Hero />} />
        <Route path="disease" element={<DiseasesDetection />} />
        <Route path="crop">
          <Route
            path="information"
            element={
              <CropProvider>
                <CropInformation />
              </CropProvider>
            }
          />
          <Route
            path="information/detail/:id"
            element={
              <CropProvider>
                <CropDetail />
              </CropProvider>
            }
          />
          <Route path="cropRecommendation" element={<CropRecommendation />} />
        </Route>
        <Route path="community">
          <Route
            path="QuestionAnswer/post"
            element={<QuestionAnswerAddEdit />}
          />
          <Route path="QuestionAnswer" element={<QuestionList />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="GroupChat" element={<h1>Group Chat</h1>} />
        </Route>
        <Route path="findTree" element={<FindTree />} />
        <Route path="yojana" element={<Yojana />} />
      </Route>
    </Routes>
  );
}

export default App;
