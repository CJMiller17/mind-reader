let header = document.querySelector("h5");
console.log(1)
let nextBtn = document.getElementById("nextBtn");
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");
let icon = '<i class="fa-solid fa-rotate-left"></i>';
let i = 0;
console.log(2);

let stateArray = [
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
    reset: resetBtn.style.display,
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
console.log("We made it through the array thingy!!")

function updateView() {
    header.textContent = stateArray[i].header;
    nextBtn.textContent = stateArray[i].next;
    paragraph.textContent = stateArray[i].p;
    resetBtn.textContent = stateArray[i].reset;
    console.log("The state array stuff looks good")
    nextBtn.addEventListener("click", /*stateArray[i].*/next);
    console.log("The next button stuff looks good");
    console.log("The previous button stuff looks good");
    resetBtn.addEventListener("click", /*stateArray[i].*/reset);
    console.log("The reset button stuff looks good");
}
console.log("Function looks good!");
updateView();
console.log("Updated!");


function next() {
    i++;
    updateView(i);
    console.log("view state incremented once")
};
console.log(5);

function previous() {
    i--;
    updateView(i);
    console.log("view state decremented once")
};
console.log(6);

function reset() {
    i = 0;
    updateView(i);
    console.log("set to first page")
};
console.log(7);

nextBtn.addEventListener("click", next);
console.log("The ext button stuff looks good");
console.log("The previous button stuff looks good");
resetBtn.addEventListener("click", reset);
console.log("The reset button stuff looks good");
 
