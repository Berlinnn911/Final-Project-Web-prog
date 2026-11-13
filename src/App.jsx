import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home1";
import News from "./pages/News1";
import Analysis from "./pages/Analysis1";
import Navbar from "./components/Navbar1";

function App() {
  return (
  

    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;