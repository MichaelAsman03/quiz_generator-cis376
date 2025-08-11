import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home()  { return <h2>Home OK</h2>; }
function Create(){ return <h2>Create OK</h2>; }
function Quiz()  { return <h2>Quiz OK</h2>; }
function Results(){ return <h2>Results OK</h2>; }

export default function App(){
  return (
    <div style={{padding:20}}>
      <nav style={{display:'flex', gap:12}}>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/results">Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </div>
  );
}
