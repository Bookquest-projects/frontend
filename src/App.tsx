import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import SearchPage from "@/pages/search/SearchPage.tsx";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/bookquest/" />
      <Route element={<SearchPage />} path="/bookquest/search" />
    </Routes>
  );
}

export default App;
