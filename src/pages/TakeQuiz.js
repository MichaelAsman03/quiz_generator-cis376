export default function TakeQuiz(){
  return (
    <div className="container">
      <div className="panel">
        <div className="h-spread">
          <h1 className="h1">Take a quiz</h1>
          <span className="muted">Time left: 09:58</span>
        </div>

        <div className="spacer" />
        <div className="panel" style={{background:"#f8fbff"}}>
          <strong>Q1.</strong> What is the output of 2 + 2?
          <div className="spacer" />
          <div className="row">
            <button className="btn ghost">3</button>
            <button className="btn ghost">4</button>
            <button className="btn ghost">5</button>
            <button className="btn ghost">22</button>
          </div>
        </div>

        <div className="spacer" />
        <div className="h-spread">
          <button className="btn ghost">Previous</button>
          <div className="row">
            <button className="btn secondary">Next</button>
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
