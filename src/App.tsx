import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from "@/pages/login/login";
import SignupPage from "@/pages/login/signup";
import ProfilePage from "@/pages/profile/profile";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/frontend/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LoginPage />} path="/frontend/login" />
      <Route element={<SignupPage />} path="/frontend/signup" />
      <Route element={<ProfilePage />} path="/frontend/profile" />
    </Routes>
  );
}

export default App;
