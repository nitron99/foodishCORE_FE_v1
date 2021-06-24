import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/pages/homepage/homepage';

function hello(){
  return(
    <div className="navbar">
      <Navbar />
      <Home />
      <Footer />
      
    </div>  
  );
}
export default hello;