import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import './App.css'
import Navbar from "./common/navbar/Navbar";
import E_learning from "./components/e_learning/E_learning";
import Footer from "./components/footer/Footer";
import SelectedCourse from "./components/selectedCourse/SelectedCourse";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/elearning" element={<E_learning />} />
          <Route path="/selectedCourse/:id" element={<SelectedCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
