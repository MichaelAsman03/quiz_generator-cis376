export function scoreQuiz(questions, answers) {
  let correct = 0;
  questions.forEach((q, i) => {
    if (answers[i] !== undefined && String(answers[i]) === String(q.correct)) {
      correct++;
    }
  });
  const percent = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  return { correct, total: questions.length, percent };
}
