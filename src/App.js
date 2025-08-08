import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateQuiz from './pages/CreateQuiz';
import TakeQuiz from './pages/TakeQuiz';
import Results from './pages/Results';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quiz" element={<TakeQuiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
