import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from "./pages/SingleProduct";
import About from './pages/About';
import Contact from './pages/Contact';
import ElectricalLoader from "./components/Loader";

export default function App() {
  return (
    <Router>
      <ElectricalLoader />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
           <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
     
  );
}
