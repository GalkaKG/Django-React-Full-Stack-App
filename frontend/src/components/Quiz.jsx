// src/components/Quiz.js
import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleSubmit = () => {
    // Send answers to backend API for saving or evaluation
    setCompleted(true);
  };

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.text}</h3>
          <div>
            {question.options.map(option => (
              <label key={option}>
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  onChange={() => handleAnswerChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!completed && <button onClick={handleSubmit}>Submit Quiz</button>}
      {completed && <p>Your answers have been submitted!</p>}
    </div>
  );
};

export default Quiz;
