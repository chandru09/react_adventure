import { React, useState } from "react";
import { questions } from "../data/QuizData";
import "./Quizcomp.css";

function Quizcomp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function clickNext() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log("nextQuestion");
    }
  }
  return (
    <div className="app">
      <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button className="btn_quiz" onClick={() => clickNext}>
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </>
    </div>
  );
}
export default Quizcomp;
