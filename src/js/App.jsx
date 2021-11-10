import '../css/App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import React from "react";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
