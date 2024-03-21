/* eslint-disable react-refresh/only-export-components */
import Spinner from "../assets/Spinner";
import QuestionCard from "../components/QuestionCard";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  // const response = await fetch("https://opentdb.com/api.php?amount=10");
  // const quests = await response.json();
  // return quests.results;

  return [
    {
      id: 1,
      question: "What is the capital city of Australia?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Perth"],
      difficulty: "Easy",
    },
    {
      id: 2,
      question: "Who wrote the play 'Romeo and Juliet'?",
      correct_answer: "William Shakespeare",
      incorrect_answers: ["Jane Austen", "Charles Dickens", "Mark Twain"],
      difficulty: "Easy",
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      correct_answer: "Jupiter",
      incorrect_answers: ["Saturn", "Neptune", "Mars"],
      difficulty: "Medium",
    },
    {
      id: 4,
      question: "In what year did the Titanic sink?",
      correct_answer: "1912",
      incorrect_answers: ["1905", "1925", "1935"],
      difficulty: "Medium",
    },
    {
      id: 5,
      question: "Who painted the famous artwork 'Starry Night'?",
      correct_answer: "Vincent van Gogh",
      incorrect_answers: ["Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      difficulty: "Hard",
    },
    {
      id: 6,
      question:
        "What is the term for a persistent feeling of sadness and loss of interest, often accompanied by a lack of energy?",
      correct_answer: "Depression",
      incorrect_answers: ["Anxiety", "Schizophrenia", "Bipolar Disorder"],
      difficulty: "Easy",
    },
    {
      id: 7,
      question:
        "Which neurotransmitter is often associated with feelings of pleasure and reward in the brain?",
      correct_answer: "Dopamine",
      incorrect_answers: ["Serotonin", "Norepinephrine", "GABA"],
      difficulty: "Easy",
    },
    {
      id: 8,
      question:
        "What is the term for a mental health condition characterized by extreme mood swings, including episodes of mania and depression?",
      correct_answer: "Bipolar Disorder",
      incorrect_answers: [
        "Schizophrenia",
        "Borderline Personality Disorder",
        "Major Depressive Disorder",
      ],
      difficulty: "Medium",
    },
    {
      id: 9,
      question:
        "What does the acronym PTSD stand for in the context of mental health?",
      correct_answer: "Post-Traumatic Stress Disorder",
      incorrect_answers: [
        "Panic Disorder",
        "Obsessive-Compulsive Disorder",
        "Generalized Anxiety Disorder",
      ],
      difficulty: "Medium",
    },
    {
      id: 10,
      question:
        "What is the primary goal of cognitive-behavioral therapy (CBT) in the treatment of mental health conditions?",
      correct_answer:
        "To identify and change negative thought patterns and behaviors",
      incorrect_answers: [
        "To prescribe medication",
        "To explore past traumas",
        "To enhance self-esteem",
      ],
      difficulty: "Hard",
    },
  ];
}

export default function Quiz() {
  const questions = useLoaderData();
  console.log(questions);
  const questionCards = questions.map((question, ind) => {
    const options = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(options);
    return (
      <QuestionCard
        key={ind}
        num={ind + 1}
        question={question.question}
        correct={question.correct_answer}
        options={options}
        dif={question.difficulty}
      />
    );
  });

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return questions?.length === 0 ? (
    <Spinner />
  ) : (
    <article>
      <section className="px-12 flex flex-col gap-6 my-8">
        {questionCards}
      </section>
    </article>
  );
}
