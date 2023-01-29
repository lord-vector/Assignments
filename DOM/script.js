const quizData = [
  {
    question: "What year was JS Launched?",
    option_1: "1996",
    option_2: "1995",
    option_3: "1994",
    option_4: "none of the above",
    correct: "1996",
  },
  {
    question: "Which type of JavaScript language is ___",
    option_1: "Object-Oriented",
    option_2: "Object-Based",
    option_3: "Assembly-language",
    option_4: "High-level",
    correct: "Object-Based",
  },
  {
    question:
      "Which one of the following also known as Conditional Expression:",
    option_1: "Alternative to if-else",
    option_2: "Switch statement",
    option_3: "If-then-else statement",
    option_4: "immediate if",
    correct: "immediate if",
  },
  {
    question: "In JavaScript, what is a block of statement?",
    option_1: "Conditional block",
    option_2:
      "block that combines a number of statements into a single compound statement",
    option_3: "both conditional block and a single statement",
    option_4: "block that contains a single statement",
    correct: "both conditional block and a single statement",
  },
];

const quizeFun = (quesNumber) => {
  const heading = document.getElementById("title");
  const questionDes = document.getElementsByClassName("question");
  const options = document.getElementsByClassName("list");

  heading.innerText = `You have attempted ${quesNumber} no. of questions | Question ${
    quesNumber + 1
  }/${quizData.length} `;
  questionDes[0].innerText = quizData[quesNumber].question;
  for (let i = 0; i < options.length; i++) {
    const inputValue = document.getElementById(`answer-${i + 1}`);
    const optionValue = document.getElementsByTagName("label");
    inputValue.setAttribute("value", quizData[quesNumber][`option_${i + 1}`]);
    optionValue[i].innerText = quizData[quesNumber][`option_${i + 1}`];
  }
};

let countClick = 0;
quizeFun(countClick);

const submitButtonClick = () => {
  countClick += 1;
  if (countClick === 4) {
    countClick = 0;
  }
  quizeFun(countClick);
};

console.log(countClick);
