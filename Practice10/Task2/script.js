const questionP = document.getElementById("question");
const answerList = document.getElementById("answers");

const quiz = [
  {
    question: '"1" + "1"',
    variant: ["11", "1", "2"],
    answer: "11",
  },
  {
    question: "Javascript is language for?",
    variant: ["geniuses", "super smart people", "high iqs"],
    answer: "geniuses",
  },
  {
    question: "We will, we will ...",
    variant: ["get retake", "go to BHB on Friday", "rock you <3"],
    answer: "rock you <3",
  },
];

let questionNumber = 0;
let answersList = []; 

const endQuiz = () => {
  answerList.innerHTML = '';
  const correctAnsAmount = quiz.filter((question, ind) => question.answer === answersList[ind]).length; 
  questionP.innerHTML = `Вы ответили на ${correctAnsAmount} из ${quiz.length} вопросов правильно`
}

const submitAnswer = () => {
  answerList.childNodes.forEach((li) => {
    const radio = li.childNodes[1];
    if (radio.checked) answersList.push(radio.value);
  })
  if (questionNumber === 2) {
    endQuiz();
    return;
  }
  questionNumber++;
  answerList.innerHTML = '';
  changeQuestion();
};

const changeQuestion = () => {
  questionP.innerText = quiz[questionNumber].question;
  quiz[questionNumber].variant.forEach((ansVar) => {
    const checkBox = document.createElement("input");
    checkBox.type = "radio";
    checkBox.name = "radio";
    checkBox.value = ansVar;
    checkBox.id = ansVar;
    const label = document.createElement("label");
    label.htmlFor = ansVar;
    label.appendChild(document.createTextNode(ansVar));
    const li = document.createElement("li");
    li.appendChild(label);
    li.appendChild(checkBox);
    answerList.appendChild(li);
  });
};

const startQuiz = () => {
  questionNumber = 0;
  answersList = [];
  answerList.innerHTML = '';
  changeQuestion();
};
