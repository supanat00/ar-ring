import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Home, Vto, BareFootVTO, ObjectManip, Navigation } from './page';

const App = () => {
  return (
    <Router>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barefoot-vto" element={<BareFootVTO />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/objectManip" element={<ObjectManip />} />
          <Route path="/vto" element={<Vto />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
