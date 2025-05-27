import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Work from "./pages/Work/Work.js";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/work" element={<Work/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
