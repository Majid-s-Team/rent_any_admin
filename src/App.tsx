import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/Auth/login";
import Forgotpassword from "./app/Auth/forgot-password";
import Otp from "./app/Auth/otp";
import Resetpassword from "./app/Auth/reset-password";
import Dashboard from "./app/Home";
import ListofSubscribers from "./app/ListofSubscribers";
import User from "./app/User";
import ProductAds from "./app/ProductAds";
import Resquest from "./app/Resquest";
import CategoriesManagement from "./app/CategoriesManagement";
import Subscription from "./app/Subscription";
import BoostRequests from "./app/BoostRequests";
import Queries from "./app/Queries";
import Faqs from "./app/Faqs";
import StaticContent from "./app/StaticContent";
import ProfileDetails from "./app/ProfileDetails";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/otp/:email" element={<Otp />} />
        <Route
          path="/reset-password/:reset_password_token"
          element={<Resetpassword />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list-of-subscribers" element={<ListofSubscribers />} />
        <Route path="/users" element={<User />} />
        <Route path="/product-ads" element={<ProductAds />} />
        <Route path="/requests" element={<Resquest />} />
        <Route path="/categories" element={<CategoriesManagement />} />
        <Route path="/boost-packages" element={<Subscription />} />
        <Route path="/boost-requests" element={<BoostRequests />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/static-content" element={<StaticContent />} />
        <Route path="/users/details/:id" element={<ProfileDetails />} />
      </Routes>
    </>
  );
};

export default App;
