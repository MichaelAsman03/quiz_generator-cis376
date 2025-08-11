import { useMemo, useState } from "react";
import { upsertQuiz } from "../utils/storage";

const newId = () => crypto.randomUUID?.() || String(Date.now());

export default function CreateQuiz(){
  const [title,setTitle] = useState("");
  const [timeLimit,setTimeLimit] = useState(0);
  const [shuffle,setShuffle] = useState(false);
  const [questions,setQuestions] = useState([]);

  const canSave = useMemo(() =>
    title.trim() && questions.length > 0 && questions.every(q => q.text.trim()), [title, questions]
  );

  function addQuestion(q){
    setQuestions(prev => [...prev, { id:newId(), ...q }]);
  }
  function removeQuestion(id){
    setQuestions(prev => prev.filter(q => q.id !== id));
  }

  function handleSave(){
    const quiz = {
      id: newId(),
      title: title.trim(),
      timeLimit: Number(timeLimit) || 0,
      shuffle,
      questions
    };
    upsertQuiz(quiz);
    alert("Quiz saved locally!");
    // clear
    setTitle(""); setTimeLimit(0); setShuffle(false); setQuestions([]);
  }

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
            <label>Time Limit (minutes, 0 for none)</label>
            <input className="input" type="number" min="0" value={timeLimit} onChange={e=>setTimeLimit(e.target.value)} />
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
        <QuestionBuilder onAdd={addQuestion} />

        <div className="spacer" />
        {questions.length > 0 && (
          <div className="panel" style={{padding:16}}>
            <strong>Questions ({questions.length})</strong>
            <ul>
              {questions.map((q,i)=>(
                <li key={q.id} style={{marginTop:8}}>
                  <span className="muted">Q{i+1}.</span> {q.text}
                  <button className="btn ghost" style={{marginLeft:12}} onClick={()=>removeQuestion(q.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="spacer" />
        <div className="row">
          <button className="btn" disabled={!canSave} onClick={handleSave}>Save Quiz</button>
        </div>
      </div>
    </div>
  );
}

function QuestionBuilder({onAdd}){
  const [type,setType] = useState("mcq");
  const [text,setText] = useState("");
  const [opts,setOpts] = useState(["","","",""]);
  const [correct,setCorrect] = useState("0");

  function add(){
    if(!text.trim()) return;
    if(type==="mcq" && !opts.some(o=>o.trim())) return;

    onAdd({
      type, text: text.trim(),
      options: type==="mcq" ? opts.map(o=>o.trim()) : ["True","False"],
      correct: type==="mcq" ? String(correct) : "True"
    });
    setText(""); setOpts(["","","",""]); setCorrect("0");
  }

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
      <textarea className="textarea" rows="3" value={text} onChange={e=>setText(e.target.value)} placeholder="Type your question..." />

      {type==="mcq" ? (
        <>
          <div className="spacer" />
          <label>Options</label>
          {opts.map((o,idx)=>(
            <input key={idx} className="input" style={{marginTop:8}} value={o}
              onChange={e=>setOpts(prev => prev.map((p,i)=> i===idx ? e.target.value : p))}
              placeholder={`Option ${String.fromCharCode(65+idx)}`} />
          ))}
          <div className="spacer" />
          <label>Correct Option</label>
          <select className="select" value={correct} onChange={e=>setCorrect(e.target.value)}>
            <option value="0">A</option><option value="1">B</option>
            <option value="2">C</option><option value="3">D</option>
          </select>
        </>
      ) : (
        <>
          <div className="spacer" />
          <label>Correct Answer</label>
          <select className="select" value={correct} onChange={e=>setCorrect(e.target.value)}>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </>
      )}

      <div className="spacer" />
      <button className="btn" onClick={add}>Add Question</button>
    </div>
  );
}
