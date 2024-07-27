import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorite } from "./pages/Favorite/Favorite";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
