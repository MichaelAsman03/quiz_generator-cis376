import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="container">
      <section className="panel">
        <h1 className="h1">Build. Share. Test.</h1>
        <p className="muted">
          Create multiple-choice or true/false quizzes in minutes. No accounts. No fuss.
          Save locally, time your sessions, and export results to PDF.
        </p>

        <div className="spacer" />
        <div className="row">
          <Link to="/create" className="btn">Create a Quiz</Link>
          <Link to="/quiz" className="btn secondary">Take a Quiz</Link>
        </div>
      </section>

      <div className="spacer" />
      <section className="panel">
        <div className="row">
          <Feature title="Multiple question types" text="Use MCQ or True/False with per-question correctness." />
          <Feature title="Timer & shuffle" text="Add a countdown and randomize order to reduce memorization." />
          <Feature title="Offline friendly" text="Everything saves to your browser via localStorage." />
        </div>
      </section>
    </div>
  );
}

function Feature({title, text}){
  return (
    <div style={{flex:"1 1 280px"}}>
      <h3 style={{margin:"0 0 6px"}}>{title}</h3>
      <p className="muted" style={{margin:0}}>{text}</p>
    </div>
  );
}
