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
import RoleManagement from "./COMPONENTS/Role-Management";
import EpaperPreview from "./COMPONENTS/EpaperPreview";
import EditDraft from "./COMPONENTS/EditDraft";
import EditArticle from "./COMPONENTS/EditArticle";
import  Categorys from "./COMPONENTS/Categorys";
import Tags from "./COMPONENTS/Tags";
import  Location  from "./COMPONENTS/Location";
import RoleBasedUserList from "./COMPONENTS/RoleBasedUserList";
import VendorRegistrationList from "./COMPONENTS/VendorRegistrationList"
import ManageVendorAdvertisementPermission from "./COMPONENTS/ManageVendorAdvertisementPermission";
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
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/location" element={<Location />} />
        <Route path="/vendorregistrationlist" element={<VendorRegistrationList />} />
        <Route path="/rolebaseduserlist" element={<RoleBasedUserList />} />
        <Route path="/RoleManagement" element={<RoleManagement />} />
        <Route path="/EpaperPreview" element={<EpaperPreview />} />
        <Route path="ManageVendorAdvertisementPermission" element={<ManageVendorAdvertisementPermission/>}/>
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
