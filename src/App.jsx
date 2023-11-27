import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import './App.css'
import Navbar from "./common/navbar/Navbar";
import E_learning from "./components/e_learning/E_learning";
import Footer from "./common/footer/Footer";
import SelectedCourse from "./components/selectedCourse/SelectedCourse";
import AboutUs from "./components/aboutus/AboutUs";
import Careers from "./components/careers/Careers";
import OutSourcing from "./components/outSourcing/OutSourcing";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elearning" element={<E_learning />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/outsourcing" element={<OutSourcing />} />
          <Route path="/selectedCourse/:id" element={<SelectedCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;