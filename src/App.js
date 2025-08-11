import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import Results from "./pages/Results";
import SavedDrafts from "./pages/SavedDrafts";

export default function App(){
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateQuiz/>} />
        <Route path="/quiz" element={<TakeQuiz/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="/drafts" element={<SavedDrafts/>} />
      </Routes>
    </>
  );
}
