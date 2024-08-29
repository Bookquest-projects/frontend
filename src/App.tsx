import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import { SearchPage } from "@/pages/search/SearchPage.tsx";
import { IndexPage } from "@/pages";
=======
import IndexPage from "@/pages/index";
import { Login } from "@/pages/Login.tsx";
import AuthProvider from "@/auth/AuthProvider.tsx";
>>>>>>> cdce760 (feat: add login/logout logic)

const App = () => {
  return (
<<<<<<< HEAD
    <Routes>
      <Route element={<IndexPage />} path="/bookquest/" />
      <Route element={<SearchPage />} path="/bookquest/search" />
    </Routes>
=======
    <AuthProvider>
      <Routes>
        <Route element={<IndexPage />} path="/frontend/" />
        <Route element={<Login />} path="/frontend/login" />
      </Routes>
    </AuthProvider>
>>>>>>> cdce760 (feat: add login/logout logic)
  );
};

export default App;
