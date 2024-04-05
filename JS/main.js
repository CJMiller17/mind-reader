let header = document.querySelector("h5");
let nextBtn = document.getElementById("nextBtn");
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");
let icon = '<i class="fa-solid fa-rotate-left"></i>';

let i = 0;                          //iterator that helps keeps state

let stateArray = [                  //this is an array filled with objects      
  {
    state: 0,
    image: null,
    header: "I can read your mind",
    p: "",
    next: "NEXT",
  },
  {
    state: 1,
    image: null,
    header: "Pick a number from 01-99",
    p: "when you have your number click next",
    next: "NEXT",
    reset: null,
  },
  {
    state: 2,
    image: null,
    header: "Add both digits together to get a new number",
    p: "Ex: 14 is 1 + 4 = 5 click next to proceed",
    next: "NEXT",
    reset: "",
  },
  {
    state: 3,
    image: null,
    header: "Subtract your new number from the original number",
    p: "Ex: 14 - 5 = 9",
    next: "NEXT",

  },
  {
    state: 4,
    image: null,
    header: "0 - & 1- @ 2 - $ 3 - B ...",
    p: "Find your new number. Note the symbol beside the number",
    next: "REVEAL",
  },
  {
    state: 5,
    image: null,
    header: "&",
    p: "Your symbol is: &",
    next: "",
  },
];

function updateView() {             //function that updates each element with object values
    header.textContent = stateArray[i].header;
    nextBtn.textContent = stateArray[i].next;
    paragraph.textContent = stateArray[i].p;
    resetBtn.textContent = stateArray[i].reset;
    
    nextBtn.addEventListener("click", next);
    resetBtn.addEventListener("click", reset);
    divisibleByNine();
}

updateView();

function next() {
    i++;
    updateView(i);
};

function reset() {
    i = 0;
    updateView(i);
};

nextBtn.addEventListener("click", next);
resetBtn.addEventListener("click", reset);
 
function divisibleByNine() {
let symbolArray = ["!", "@", "#", "$", "%", "^", "=", "*", "(", ")", "+", "-"];
let symbolList = document.getElementById("symbolUl");
  for (let i = 0; i < 100; i++) {
    let newLi = document.createElement("li");
    if (i % 9 == 0) {
      symbolList.textContent = `${i} : &`;
    } else {
      let randomSymbol = [Math.floor(Math.random() * symbolArray.length)]
      symbolList.textContent = `${i} : ${}`;
      newLi.textContent = symbolSign;
    }
    symbolList.appendChild(newLi);
  }
}