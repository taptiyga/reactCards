import { useEffect, useState } from "react";
import { QuestionCard } from "../../components/QuestionCard";
import { API_URL } from "../../constants";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/react`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      {questions.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}
    </>
  );
};
