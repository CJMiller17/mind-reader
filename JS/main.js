let header = document.querySelector("h5");
console.log(1)
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn")
    prevBtn.style.display = "none";
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");

let i = 0;
console.log(2);

let stateArray = [];
let viewState = stateArray[0];
console.log(4);

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);
resetBtn.addEventListener("click", reset);
console.log(3);

function next() {
    i++;
    viewState = stateArray[i];
    console.log("view state incremented once")
};
console.log(5);

function previous() {
    i--;
    viewState = stateArray[i];
    console.log("view state decremented once")
};
console.log(6);
function reset() {
    viewState = stateArray[0];
    console.log("set to first page")
};
console.log(7);

stateArray = [
    {   state: 0,  
        image: null,
        header: "Your thoughts are so obvious.",
        p: "I bet I can read you mind, you simpleton.",
        prev: null,
        next: next(),
        reset: reset(),
    },
     {  state: 1,  
        image: null,
        header: "I know it's hard for you, but think.",
        p: "Think of a whole number between 1-100.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 2,  
        image: null,
        header: "Knowing you, you'll need a calculator for this.",
        p: "Double the number you chose.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 3,  
        image: null,
        header: "This next part should be easy. Then again... it's you...",
        p: "Add 'insert random EVEN number' to your number.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 4,  
        image: null,
        header: "Try not to use your fingers and toes...",
        p: "Divide your number by 2.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 5,  
        image: null,
        header: "Make sure you know how to subtract. Geesh...",
        p: "Subtract your original number from you new number.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 6,  
        image: null,
        header: "Here comes the icing on the cake...",
        p: "Now add 'random number here'.",
        prev: null,
        next: next(),
        reset: reset(),
    },
    {   state: 7,  
        image: null,
        header: "You made it too easy...",
        p: "Is this your number? 'display answer' ",
        prev: null,
        next: null,
        reset: reset(),
    }
];
console.log(8);

//I feel like somehow I can use the spread operator to update the object values. 
