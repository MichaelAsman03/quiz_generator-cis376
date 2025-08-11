import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="container">
      <section className="panel">
        <h1 className="h1">Build. Share. Test.</h1>
        <p className="muted">
          Create multiple-choice or true/false quizzes in minutes. No accounts. Save locally,
          add timers, shuffle questions, and export results.
        </p>

        <div className="spacer" />
        <div className="row">
          <Link to="/create" className="btn">Create a Quiz</Link>
          <Link to="/quiz" className="btn secondary">Take a Quiz</Link>
        </div>
      </section>
    </div>
  );
}
