
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
    <Layout>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
