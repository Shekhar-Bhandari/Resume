import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage.js";
import Contact from "./pages/Contact/Contact.js";

function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
       
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
