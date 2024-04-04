let header = document.querySelector("h5");
console.log(1)
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn")
    prevBtn.style.display = "none";
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");

let i = 0;
console.log(2);

let stateArray = [
    {   state: 0,  
        image: null,
        header: "Your thoughts are so obvious.",
        p: "I bet I can read you mind, you simpleton.",
        prev: null,
        next: "go",
        reset: null,
    },
    {  state: 1,  
        image: null,
        header: "I know it's hard for you, but think.",
        p: "Think of a whole number between 1-100.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 2,  
        image: null,
        header: "Knowing you, you'll need a calculator for this.",
        p: "Double the number you chose.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 3,  
        image: null,
        header: "This next part should be easy. Then again... it's you...",
        p: "Add 'insert random EVEN number' to your number.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 4,  
        image: null,
        header: "Try not to use your fingers and toes...",
        p: "Divide your number by 2.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 5,  
        image: null,
        header: "Make sure you know how to subtract. Geesh...",
        p: "Subtract your original number from you new number.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 6,  
        image: null,
        header: "Here comes the icing on the cake...",
        p: "Now add 'random number here'.",
        prev: null,
        next: "next",
        reset: "symbol",
    },
    {   state: 7,  
        image: null,
        header: "You made it too easy...",
        p: "Is this your number? 'display answer' ",
        prev: null,
        next: null,
        reset: "symbol",
    }
];
console.log("We made it through the array thingy!!")

function updateView() {
    header.textContent = stateArray[i].header;
    nextBtn.textContent = stateArray[i].next;
    prevBtn.textContent = stateArray[i].prev;
    paragraph.textContent = stateArray[i].p;
    resetBtn.textContent = stateArray[i].reset;

    console.log("The state array stuff looks good")
    
    nextBtn.addEventListener("click", /*stateArray[i].*/next);
    console.log("The next button stuff looks good");
    prevBtn.addEventListener("click", /*stateArray[i].*/previous);
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

nextBtn.addEventListener("click", /*stateArray[i].*/ next);
console.log("The ext button stuff looks good");
prevBtn.addEventListener("click", /*stateArray[i].*/ previous);
console.log("The previous button stuff looks good");
resetBtn.addEventListener("click", /*stateArray[i].*/ reset);
console.log("The reset button stuff looks good");
//I feel like somehow I can use the spread operator to update the object values. 
