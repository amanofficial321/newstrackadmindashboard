import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personalinfromation from "./COMPONENTS/Personalinfromation";
import Vendorinformation from "./COMPONENTS/Vendorinformation";
import AdminPage from "./COMPONENTS/Admin-page";
import Maindashboard from "./COMPONENTS/Maindashboard";
import NewsApproval from "./COMPONENTS/News-Approval";
import ViewNews from "./COMPONENTS/ViewNews";
import Addnewsarticle from "./COMPONENTS/Addnewsarticle";
import Epaper from "./COMPONENTS/Epaper";
import NewspaperAgencyLogin from "./COMPONENTS/NewspaperAgencyLogin";
import NewsAgencyAddnewsarticle from "./COMPONENTS/NewsAgencyAddnewsarticle";
import Template from "./COMPONENTS/Template";
import Template2 from "./COMPONENTS/Template2";
import Template3 from "./COMPONENTS/Template3";
import NewsAgencyNewsApproval from "./COMPONENTS/NewsAgencyNewsApproval";
import RoleManagement from "./COMPONENTS/Role-Management";
import EpaperPreview from "./COMPONENTS/EpaperPreview";
import EditDraft from "./COMPONENTS/EditDraft";
import EditArticle from "./COMPONENTS/EditArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/dashboard" element={<Maindashboard />} />
        <Route path="/role" element={<Personalinfromation />} />
        <Route path="/vendor" element={<Vendorinformation />} />
        <Route path="/news-approval" element={<NewsApproval />} />
        <Route path="/viewNews" element={<ViewNews />} />
        <Route path="/addNewsArticle" element={<Addnewsarticle />} />
        <Route path="/editDraft" element={<EditDraft />} />
        <Route path="/editArticle" element={<EditArticle />} />
        <Route path="/epaper" element={<Epaper />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/Template2" element={<Template2 />} />
        <Route path="/Template3" element={<Template3 />} />
        <Route path="/RoleManagement" element={<RoleManagement />} />
        <Route path="/EpaperPreview" element={<EpaperPreview />} />
        <Route
          path="/NewsAgencyNewsApproval"
          element={<NewsAgencyNewsApproval />}
        />

        <Route
          path="/NewspaperAgencyLogin"
          element={<NewspaperAgencyLogin />}
        />
        <Route
          path="/NewsAgencyAddnewsarticle"
          element={<NewsAgencyAddnewsarticle />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
