import { useState } from "react";

export default function CreateQuiz(){
  const [title,setTitle] = useState("");
  const [timeLimit,setTimeLimit] = useState(0);
  const [shuffle,setShuffle] = useState(false);

  return (
    <div className="container">
      <div className="panel">
        <h1 className="h1">Create Quiz</h1>
        <p className="muted">Add a title, questions, and options. Edit or delete as you go.</p>

        <div className="spacer" />
        <label>Quiz Title</label>
        <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g., CIS 376 Midterm Prep" />

        <div className="spacer" />
        <div className="row">
          <div style={{flex:"1 1 220px"}}>
            <label>Time Limit (minutes)</label>
            <input className="input" type="number" min="0" value={timeLimit} onChange={e=>setTimeLimit(+e.target.value)} />
          </div>
          <div style={{flex:"1 1 220px"}}>
            <label>Randomize Questions</label>
            <select className="select" value={shuffle?"yes":"no"} onChange={e=>setShuffle(e.target.value==="yes")}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>

        <div className="spacer" />
        <QuestionBuilder />

        <div className="spacer" />
        <div className="row">
          <button className="btn">Save Quiz</button>
          <button className="btn ghost">Preview</button>
        </div>
      </div>
    </div>
  );
}

function QuestionBuilder(){
  const [type,setType] = useState("mcq");
  return (
    <div className="panel" style={{padding:16,marginTop:12}}>
      <div className="h-spread">
        <strong>Add Question</strong>
        <select className="select" style={{maxWidth:220}} value={type} onChange={e=>setType(e.target.value)}>
          <option value="mcq">Multiple Choice</option>
          <option value="tf">True / False</option>
        </select>
      </div>

      <div className="spacer" />
      <label>Question Text</label>
      <textarea className="textarea" rows="3" placeholder="Type your question..." />

      {type==="mcq" ? (
        <>
          <div className="spacer" />
          <label>Options</label>
          <div className="row">
            <input className="input" placeholder="Option A" />
            <input className="input" placeholder="Option B" />
          </div>
          <div className="row">
            <input className="input" placeholder="Option C" />
            <input className="input" placeholder="Option D" />
          </div>
          <div className="spacer" />
          <label>Correct Option</label>
          <select className="select"><option>A</option><option>B</option><option>C</option><option>D</option></select>
        </>
      ) : (
        <>
          <div className="spacer" />
          <label>Correct Answer</label>
          <select className="select"><option>True</option><option>False</option></select>
        </>
      )}

      <div className="spacer" />
      <button className="btn">Add Question</button>
    </div>
  );
}
