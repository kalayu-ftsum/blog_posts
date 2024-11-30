
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Layout>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
