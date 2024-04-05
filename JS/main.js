let header = document.querySelector("h5");
let nextBtn = document.getElementById("nextBtn");
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");
let symbolList = document.getElementById("symbolUl");
let icon = '<i class="fa-solid fa-rotate-left"></i>';

let symbolArray = ["!", "@", "#", "$", "%", "^", "=", "*", "(", ")", "+", "-"];
let specialIcon = randomIcon();

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
    header: "",
    p: "Find your new number. Note the symbol beside the number",
    next: "REVEAL",
  },
  {
    state: 5,
    image: null,
    header: specialIcon,
    p: "Your symbol is:",
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
  // header.innerHTML = (i === 4 ? symbolList : header.innerHTML);
  if (i === 4) {
    symbolList.classList.remove("d-none");
  } else {
    symbolList.classList.add("d-none");
  }
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
  
  for (let i = 0; i < 100; i++) {
    let newLi = document.createElement("li");
    if (i % 9 == 0) {
      newLi.textContent = `${i} : ${specialIcon}`;
    } else {
      let randomSymbol = randomIcon();
      newLi.textContent = `${i} : ${randomSymbol}`;
      // newLi.textContent = symbolSign;
    }
    symbolList.appendChild(newLi);
  }
}
function randomIcon() {
  return symbolArray[Math.floor(Math.random() * symbolArray.length)];
}  
divisibleByNine();