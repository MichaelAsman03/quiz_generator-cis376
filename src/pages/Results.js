import { loadLastResult } from "../utils/storage";
import { exportResultsToPdf } from "../utils/pdf";

export default function Results(){
  const res = loadLastResult();
  if(!res) {
    return (
      <div className="container">
        <div className="panel">
          <h1 className="h1">No results yet</h1>
          <p className="muted">Take a quiz to see your score here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="panel">
        <h1 className="h1">Results – {res.quizTitle}</h1>
        <div className="spacer" />
        <div className="row">
          <Stat label="Score" value={`${res.correct} / ${res.total}`} />
          <Stat label="Percent" value={`${res.percent}%`} />
        </div>

        <div className="spacer" />
        <div className="row">
          <button className="btn" onClick={()=>exportResultsToPdf(res)}>Download</button>
          <a className="btn secondary" href="/quiz">Retake</a>
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
