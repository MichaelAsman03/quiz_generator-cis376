import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/create", label: "Create Quiz" },
    { to: "/quiz", label: "Take Quiz" },
    { to: "/results", label: "Results" },
    { to: "/drafts", label: "Saved Drafts" }
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <span className="brand">Quiz Generator</span>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
