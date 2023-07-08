import { Route, Routes } from "react-router-dom";
//import Navbar from "./components/navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>

      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<Contact />}/>


    </Routes>

    
    
    </div>
  );
}

export default App;
