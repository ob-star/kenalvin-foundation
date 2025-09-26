import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WhatIsSickleCellPage from './pages/WhatIsSickleCellPage';
import SickleCellPage from './pages/SickleCellPage';
import HistoryPage from './pages/HistoryPage';
import ResourcesPage from './pages/ResourcesPage';
import MakeADonation from './pages/MakeDonation';
import MothersTail from './pages/MothersTail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-sickle-cell" element={<WhatIsSickleCellPage />} />
            <Route path="/sickle-cell" element={<SickleCellPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/mothers-tail" element={<MothersTail />} />

            <Route path="/make-donations" element={<MakeADonation />} />

          </Routes>
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;