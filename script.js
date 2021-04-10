const canvas = document.getElementById("myCanvas");

const head = canvas.getContext("2d");
const body = canvas.getContext("2d");
const leftArm = canvas.getContext("2d");
const rightArm = canvas.getContext("2d");
const leftLeg = canvas.getContext("2d");
const rightLeg = canvas.getContext("2d");
const gallowsPoleOne = canvas.getContext("2d");
const gallowsPoleTwo = canvas.getContext("2d");

const roof = document.getElementById("myCanvasRoof");
const roofHouseOne = roof.getContext("2d");
const roofHouseTwo = roof.getContext("2d");

let inputSecretWord = document.querySelector(".input__make");
let guessSecretWord = document.querySelector(".input__guess");
let confirmButton = document.querySelector(".button__confirm");
let checkButton = document.querySelector(".button__check");
let questionMark = document.querySelector(".secret__word");

let secretWord = "";
let inputWordArr;
let lineSpaceWord;
let newLineSpaceWord;
let secretWordArr;
let counting = 6;

//  C   A   N   V   A   S

gallowsPoleOne.moveTo(166, 11);
gallowsPoleOne.lineTo(0, 11);
gallowsPoleOne.stroke();
gallowsPoleTwo.moveTo(166, 11);
gallowsPoleTwo.lineTo(166, 40);
gallowsPoleTwo.stroke();

roofHouseOne.moveTo(0, 200);
roofHouseOne.lineTo(180, 100);
roofHouseOne.stroke();

roofHouseTwo.moveTo(1390, 760);
roofHouseTwo.lineTo(180, 100);
roofHouseTwo.stroke();

// CONFIRM SECRET WORD PRESSING BUTTON

confirmButton.addEventListener("click", function () {
  inputWordArr = inputSecretWord.value.split("");

  lineSpaceWord = inputWordArr.map((value) => (value === " " ? " " : "-"));

  questionMark.classList.remove("hidden");

  questionMark.textContent = lineSpaceWord;
  secretWord = inputSecretWord.value;
  console.log(typeof secretWord);
  inputSecretWord.classList.add("hidden");
  confirmButton.classList.add("hidden");
  document.querySelector(".make__word").classList.add("hidden");
  document.querySelector(".enter__word").classList.add("hidden");

  document.querySelector(".guess__word").classList.remove("hidden");
  checkButton.classList.remove("hidden");
  guessSecretWord.classList.remove("hidden");

  console.log(counting);
});

//CHECK YOUR ANSWER

checkButton.addEventListener("click", function () {
  secretWordArr = secretWord.split("");

  for (let i = 0; i < secretWordArr.length; i++) {
    if (secretWordArr[i] === guessSecretWord.value) {
      console.log("da");
      lineSpaceWord[i] = guessSecretWord.value;
      console.log(secretWordArr);
    }
  }
  if (secretWordArr.includes(guessSecretWord.value)) {
    console.log("da da da");
  } else {
    console.log("ne ne ne");
    counting--;
    console.log(counting);
  }

  questionMark.textContent = lineSpaceWord;
  guessSecretWord.value = "";

  switch (counting) {
    case 5:
      head.beginPath();
      head.arc(165, 80, 40, 0, 2 * Math.PI);
      head.stroke();
      break;
    case 4:
      body.moveTo(166, 255);
      body.lineTo(166, 120);
      body.stroke();
      break;
    case 3:
      leftArm.moveTo(114, 200);
      leftArm.lineTo(166, 120);
      leftArm.stroke();
      break;
    case 2:
      rightArm.moveTo(214, 200);
      rightArm.lineTo(166, 120);
      rightArm.stroke();
      break;
    case 1:
      leftLeg.moveTo(166, 255);
      leftLeg.lineTo(66, 320);
      leftLeg.stroke();
      break;
    case 0:
      rightLeg.moveTo(166, 255);
      rightLeg.lineTo(266, 320);
      rightLeg.stroke();
      document.querySelector(".guess__word").textContent = "YOU LOST";
      guessSecretWord.classList.add("hidden");
      checkButton.classList.add("hidden");
      break;
  }

  if (questionMark.textContent === secretWordArr.toString()) {
    console.log("yeees");
    document.querySelector(".guess__word").textContent =
      "C O N G R A T U L A T I O N S";
    guessSecretWord.classList.add("hidden");
    checkButton.classList.add("hidden");
  }
});
