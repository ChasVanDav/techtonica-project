import React, { useState, useEffect } from 'react';
// import './TriviaGame.css';

function TriviaGame() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/questions')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched Data:', data); // Log the data to verify
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
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

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (questions.length === 0) {
    return <p>No questions available</p>;
  }

  return (
    <div className="trivia-game">
      <h1>Trivia Game</h1>
      <form>
        {questions.map((question, index) => {
          // Parse the incorrect_answers from a string to an array
          let incorrectAnswers = [];
          try {
            incorrectAnswers = JSON.parse(question.incorrect_answers);
          } catch (e) {
            console.error('Error parsing incorrect_answers:', e);
          }

          // Combine correct and incorrect answers
          const allAnswers = [question.correct_answer, ...incorrectAnswers].sort();

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


