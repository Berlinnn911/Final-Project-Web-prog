
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Analysis from "./pages/Analysis";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
