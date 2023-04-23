import React from "react";
import About from "./components/About";
import More from "./components/More";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about/:productId" element={<More />} />
      </Routes>
    </div>
  );
}
export default App;
