import './App.css';
import Navbar from './Components/Navbar';
import { About, Contact, Home, Blog, Price, Service } from "./pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/price' element={<Price />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
