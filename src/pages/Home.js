import { Link } from "react-router-dom";
import { loadQuizzes } from "../utils/storage";

export default function Home(){
  const quizzes = loadQuizzes();
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

      <div className="spacer" />
      {quizzes.length > 0 && (
        <section className="panel">
          <strong>Recently saved</strong>
          <ul>
            {quizzes.slice(0,3).map(q => (
              <li key={q.id}>
                <Link to={`/quiz?quizId=${q.id}`}>{q.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
