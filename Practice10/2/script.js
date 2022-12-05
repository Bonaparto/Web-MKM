const question = document.getElementById("question");
const answerList = document.getElementById("answers");

const quiz = [
  {
    question: '0 + 0',
    variant: [1, 0, "00"],
    answer: 0,
  },
  {
    question: "3 * 3",
    variant: [9, 6, 3],
    answer: 9,
  },
  {
    question: "1 + 5",
    variant: [6, 1, 3],
    answer: 6,
  },
];

let question_index = 0;
let user_answers = []; 

const endQuiz = () => {
  answerList.innerHTML = '';
  const correctAnsAmount = quiz.filter((question, ind) => {
    return question.answer == user_answers[ind];
  }).length;

  question.innerHTML = `Вы набрали ${correctAnsAmount} из ${quiz.length}`
}

const submit = () => {
  answerList.childNodes.forEach((li) => {
    const radio = li.childNodes[1];
    if (radio.checked) user_answers.push(radio.value);
  })
  if (question_index === 2) {
    endQuiz();
    return;
  }
  questionNumber++;
  answerList.innerHTML = '';
  next_question();
};

const next_question = () => {
  question.innerText = quiz[questionNumber].question;
  quiz[questionNumber].variant.forEach((ansVar) => {
    const label = document.createElement("label");
    const div = document.createElement('div');
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";
    radio.value = ansVar;
    radio.id = ansVar;
    label.htmlFor = ansVar;
    label.appendChild(document.createTextNode(ansVar));
    div.appendChild(label);
    div.appendChild(radio);
    answerList.appendChild(div);
  });
};

const start = () => {
  question_index = 0;
  user_answers = [];
  answerList.innerHTML = '';
  next_question();
};
