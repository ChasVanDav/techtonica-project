import React, { useState, useEffect } from 'react';

function TriviaGame() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  // Fetch questions from the backend API
  useEffect(() => {
    fetch('http://localhost:4000/api/questions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  // Handle answer changes
  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: answer,
    });
  };

  // Handle submission and score calculation
  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="trivia-game">
      <h1>Trivia Game</h1>
      {questions.length === 0 ? (
        <p>No questions available</p>
      ) : (
        <form>
          {questions.map((question, index) => {
            // Parse incorrect answers from string to array
            const incorrectAnswers = JSON.parse(question.incorrect_answers);
            const allAnswers = [question.correct_answer, ...incorrectAnswers].sort();

            return (
              <div key={index} className="question">
                <p><strong>Question {index + 1}:</strong> {question.question}</p>
                {allAnswers.map((answer, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={answer}
                      checked={userAnswers[index] === answer}
                      onChange={() => handleAnswerChange(index, answer)}
                    />
                    {answer}
                  </div>
                ))}
              </div>
            );
          })}
          <button type="button" onClick={handleSubmit}>Submit Answers</button>
          {score !== null && (
            <div className="score">
              <h2>Your Score: {score}/{questions.length}</h2>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default TriviaGame;


