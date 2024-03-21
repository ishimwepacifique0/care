import { useState } from "react";

/* eslint-disable react/prop-types */
export default function QuestionCard({ num, question, correct, options, dif }) {
  const [correctStyles, setcorrect] = useState("");
  const [wrongStyles, setWrong] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const answerCards = options.map((answer, ind) => (
    <button
      key={ind}
      className={`py-2 px-8 border rounded ${
        answer === correct ? correctStyles : wrongStyles
      }`}
      onClick={handleAnswering}
    >
      {answer}
    </button>
  ));

  function handleAnswering() {
    if (!isAnswered) {
      setIsAnswered(true);
      setcorrect("border-green-500 text-green-500");
      setWrong("border-red-500 text-red-500");
    }
  }

  return (
    <section className="border border-light-200 p-4 flex flex-col gap-4">
      <p>
        <span className="font-bold text-xl">Question {num}</span> . Difficulty:{" "}
        {dif}
      </p>
      <p>
        <span className="font-bold text-xl">Q: </span>
        {question}
      </p>
      <div className="flex gap-6">{answerCards}</div>
    </section>
  );
}
