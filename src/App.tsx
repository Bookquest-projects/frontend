import { Route, Routes } from "react-router-dom";

import { SearchPage } from "@/pages/search/SearchPage.tsx";
import { IndexPage } from "@/pages";

const App = () => {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/bookquest/" />
      <Route element={<SearchPage />} path="/bookquest/search" />
    </Routes>
  );
};

export default App;
