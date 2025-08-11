import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">Quiz Generator</NavLink>
        <NavLink to="/create">Create Quiz</NavLink>
        <NavLink to="/quiz">Take Quiz</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/drafts">Saved Drafts</NavLink>
      </div>
    </header>
  );
}
