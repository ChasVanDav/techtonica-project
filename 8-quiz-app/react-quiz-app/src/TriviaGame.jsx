import React, { useState, useEffect } from 'react';
//imported he libarary to handle decoding data that have html entities
import he from 'he';

function TriviaGame() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/questions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Decode HTML entities in questions and answers
        const decodedQuestions = data.map(question => ({
          ...question,
          question: he.decode(question.question),
          correct_answer: he.decode(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map(answer => he.decode(answer))
        }));
        setQuestions(decodedQuestions);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  if (error && !questions.length) {
    return <p>Error: {error}</p>;
  }

  if (questions.length === 0) {
    return <p>No questions available</p>;
  }

  return (
    <div className="trivia-game">
      <form>
        {questions.map((question, index) => {
          const allAnswers = [question.correct_answer, ...question.incorrect_answers].sort();

          return (
            <div key={index} className="question">
              <p><strong>Question {index + 1}:</strong> {question.question}</p>
              {allAnswers.map((answer, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={answer}
                    checked={answers[index] === answer}
                    onChange={() => handleAnswerChange(index, answer)}
                  />
                  {answer}
                </label>
              ))}
            </div>
          );
        })}
        <button type="button" onClick={handleSubmit}>Submit Answers</button>
      </form>
      {score !== null && (
        <div className="score">
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      )}
    </div>
  );
}

export default TriviaGame;

