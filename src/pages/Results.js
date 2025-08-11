export default function Results(){
  return (
    <div className="container">
      <div className="panel">
        <h1 className="h1">Your Results</h1>
        <p className="muted">Nice work! Here’s how you did.</p>

        <div className="spacer" />
        <div className="row">
          <Stat label="Score" value="8 / 10" />
          <Stat label="Percent" value="80%" />
          <Stat label="Time" value="09:41" />
        </div>

        <div className="spacer" />
        <div className="panel" style={{background:"#f8fbff"}}>
          <strong>Breakdown</strong>
          <ul>
            <li>Q1 – Correct</li>
            <li>Q2 – Incorrect</li>
            <li>Q3 – Correct</li>
          </ul>
        </div>

        <div className="spacer" />
        <div className="row">
          <button className="btn">Download PDF</button>
          <button className="btn secondary">Retake Quiz</button>
        </div>
      </div>
    </div>
  );
}

function Stat({label,value}){
  return (
    <div className="panel" style={{flex:"1 1 220px", textAlign:"center"}}>
      <div className="muted" style={{marginBottom:6}}>{label}</div>
      <div style={{fontSize:28,fontWeight:800}}>{value}</div>
    </div>
  );
}
