import { useEffect, useMemo, useState } from "react";
import { loadQuizzes, saveLastResult } from "../utils/storage";
import { shuffle as shuffleFn } from "../utils/shuffle";
import { scoreQuiz } from "../utils/scoring";

function useQuery() {
  return new URLSearchParams(window.location.search);
}

export default function TakeQuiz(){
  const qs = useQuery();
  const quizzes = loadQuizzes();
  const [quizId,setQuizId] = useState(qs.get('quizId') || (quizzes[0]?.id ?? ''));
  const [started,setStarted] = useState(false);

  const selected = useMemo(
    ()=> quizzes.find(q => q.id === quizId),
    [quizId, quizzes]
  );

  return (
    <div className="container">
      <div className="panel">
        <div className="h-spread">
          <h1 className="h1">Take a Quiz</h1>
        </div>

        {!started ? (
          <>
            <div className="spacer" />
            <label>Select a quiz</label>
            <select className="select" value={quizId} onChange={e=>setQuizId(e.target.value)}>
              {quizzes.map(q => <option key={q.id} value={q.id}>{q.title}</option>)}
            </select>

            <div className="spacer" />
            <button className="btn" disabled={!selected} onClick={()=>setStarted(true)}>Start Quiz</button>
            {!quizzes.length && <p className="muted">No quizzes saved yet. Create one first.</p>}
          </>
        ) : (
          <QuizRunner quiz={selected} />
        )}
      </div>
    </div>
  );
}

function QuizRunner({quiz}){
  const [order,setOrder] = useState([]);
  const [idx,setIdx] = useState(0);
  const [answers,setAnswers] = useState({});
  const [timeLeft,setTimeLeft] = useState( (quiz.timeLimit||0) * 60 ); // seconds

  // build order (with shuffle)
  useEffect(()=>{
    const ids = quiz.questions.map((_,i)=>i);
    setOrder(quiz.shuffle ? shuffleFn(ids) : ids);
  },[quiz]);

  // timer
  useEffect(()=>{
    if(!timeLeft) return;
    if(quiz.timeLimit<=0) return;
    const t = setInterval(()=> setTimeLeft(s => s>0 ? s-1 : 0), 1000);
    return ()=> clearInterval(t);
  },[timeLeft, quiz.timeLimit]);

  useEffect(()=>{
    if(timeLeft === 0 && quiz.timeLimit>0){
      handleSubmit();
    }
    // eslint-disable-next-line
  },[timeLeft]);

  if(!order.length) return null;

  const q = quiz.questions[order[idx]];

  function choose(val){
    setAnswers(prev => ({...prev, [order[idx]]: val}));
  }

  function handleSubmit(){
    const res = scoreQuiz(quiz.questions, answers);
    saveLastResult({
      quizId: quiz.id,
      quizTitle: quiz.title,
      ...res,
      answers
    });
    window.location.href = "/results";
  }

  const mm = Math.floor(timeLeft/60).toString().padStart(2,'0');
  const ss = Math.floor(timeLeft%60).toString().padStart(2,'0');

  return (
    <>
      <div className="h-spread">
        <strong>{quiz.title}</strong>
        {quiz.timeLimit>0 && <span className="muted">Time left: {mm}:{ss}</span>}
      </div>

      <div className="spacer" />
      <div className="panel" style={{background:"#f8fbff"}}>
        <strong>Q{idx+1}.</strong> {q.text}
        <div className="spacer" />
        <div className="row">
          {(q.type === "mcq" ? q.options : ["True","False"]).map((opt,i)=>(
            <button
              key={i}
              className={"btn " + (String(answers[order[idx]])===String(q.type==="mcq"?i:opt) ? "" : "ghost")}
              onClick={()=>choose(q.type==="mcq" ? i : opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="spacer" />
      <div className="h-spread">
        <button className="btn ghost" disabled={idx===0} onClick={()=>setIdx(i=>i-1)}>Previous</button>
        <div className="row">
          {idx < order.length-1
            ? <button className="btn secondary" onClick={()=>setIdx(i=>i+1)}>Next</button>
            : <button className="btn" onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
    </>
  );
}
