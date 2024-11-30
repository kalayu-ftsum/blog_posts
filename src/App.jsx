
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
    <Layout>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
