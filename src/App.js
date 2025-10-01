import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Entertainment from "./Component/Entertainment/Entertainment";
// import Business from './Component/Sport/Sport';
import Business from "./Component/Business/Business";
import Technology from "./Component/Technology/Technology";
// import Page404 from './Component/Page/Page404';
import Page404 from "./Component/ErrorPage/Page404";
import Home from "./Component/Home/Home";
import Health from "./Component/Health/Health";
import Footer from "./Component/Footer/Footer";
import Slider from './Component/Slider/Slider'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Health" element={<Health />} />
          {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
