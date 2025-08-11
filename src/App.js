import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import Results from "./pages/Results";
import SavedDrafts from "./pages/SavedDrafts";
import './global.css';


export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/quiz" element={<TakeQuiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/drafts" element={<SavedDrafts />} />
        </Routes>
      </div>
    </Router>
  );
}
