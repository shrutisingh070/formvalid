import "./App.css"
import { useState } from "react";

export default function Accordian() {
  let [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: "What is your name?",
      answer: "I am Shruti Singh.",
    },
    {
      question: "Which is your favourite pet?",
      answer: "I like dogs.",
    },
    {
      question: "What is your favorite food?",
      answer: "I like litthi chukha.",
    },
    {
      question: "What is your best friend’s name?",
      answer: "Her name is Muskan.",
    },
    {
      question: "What is your age?",
      answer: "I am 21 years.",
    },
  ];

  return (
    <div className="container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            <div onClick={() => toggle(i)} style={{ cursor: "pointer" }}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
