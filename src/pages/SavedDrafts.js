import { deleteQuiz, loadQuizzes } from "../utils/storage";

export default function SavedDrafts(){
  const quizzes = loadQuizzes();

  function handleDelete(id){
    if(!window.confirm("Delete this quiz?")) return;
    deleteQuiz(id);
    window.location.reload();
  }

  function exportJson(q){
    const blob = new Blob([JSON.stringify(q, null, 2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=`quiz-${q.title}.json`; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="container">
      <div className="panel">
        <h1 className="h1">Saved Drafts</h1>
        <p className="muted">Quizzes stored in your browser.</p>

        <div className="spacer" />
        {quizzes.length === 0 ? (
          <p className="muted">Nothing here yet.</p>
        ) : (
          <ul>
            {quizzes.map(q => (
              <li key={q.id} style={{marginTop:10}}>
                <strong>{q.title}</strong> &nbsp;
                <a href={`/quiz?quizId=${q.id}`}>Start</a> &nbsp;•&nbsp;
                <button className="btn ghost" onClick={()=>exportJson(q)}>Export</button> &nbsp;
                <button className="btn ghost" onClick={()=>handleDelete(q.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
