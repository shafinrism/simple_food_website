import "./App.css";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div id="home">
          <Home></Home>
        </div>
        <div id="dishes">
          <Dishes></Dishes>
        </div>
        <div id="about">
          <About></About>
        </div>
        <div id="menu">
          <Menu></Menu>
        </div>
        <div id="reviews">
          <Reviews></Reviews>
        </div>
        
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
