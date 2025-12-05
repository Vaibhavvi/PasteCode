import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';
import Paste from './components/Paste';
import Footer from './components/Footer';

// Base URL for GitHub Pages (replace with your repo name if different)
const basename = "/PasteCode";

function App() {
  return (
    <Router basename={basename}>
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/paste" element={<><Navbar /><Paste /><Footer /></>} />
          <Route path="/paste/:id" element={<><Navbar /><ViewPaste /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
