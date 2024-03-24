
import React from 'react';
import Navbar from './navbar';
import Home from './home';
import BestSelling from './bestSelling';
import OurCollection from './ourCollection';
import Review from './Review';
import Contact from './contact';
import Footer from './footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <BestSelling />
      <OurCollection />
      <Review />
      <Contact />
      <Footer />
      <button onClick={scrollToTop} id="btnTop">Back to Top</button>
    </div>
  );
}


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default App;
