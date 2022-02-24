import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home.js";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
