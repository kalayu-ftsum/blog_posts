
import { Routes, Route } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
    <Layout>
  <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Layout>
    </>
  );
}

export default App;
