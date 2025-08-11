const KEY = 'qg_quizzes';
const RESULT_KEY = 'qg_last_result';

export function loadQuizzes() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function saveQuizzes(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function upsertQuiz(quiz) {
  const list = loadQuizzes();
  const idx = list.findIndex(q => q.id === quiz.id);
  if (idx >= 0) list[idx] = quiz; else list.push(quiz);
  saveQuizzes(list);
}

export function deleteQuiz(id) {
  saveQuizzes(loadQuizzes().filter(q => q.id !== id));
}

export function saveLastResult(result) {
  localStorage.setItem(RESULT_KEY, JSON.stringify(result));
}
export function loadLastResult() {
  try { return JSON.parse(localStorage.getItem(RESULT_KEY)); }
  catch { return null; }
}
