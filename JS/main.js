let header = document.querySelector("h5");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn").style.display = "none";
let paragraph = document.querySelector("p");
let resetBtn = document.getElementById("resetBtn");

let viewState = 0;

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", previous);
resetBtn.addEventListener("click", reset);

function next() {
    console.log("Yup yup")
};
function previous() {
    console.log("Yeah yeah")
};
function reset() {
    console.log("Yip yip")
};

let stateArray = [
    {   state: 0,  
        image: null,
        header: "Your thoughts are so obvious.",
        p: "I bet I can read you mind, you simpleton.",
        prev: null,
        next: next(),
        reset: reset(),
    }
     {  state: 1,  
        image: null,
        header: "I know it's hard for you, but think.",
        p: "Think of a whole number between 1-100.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 2,  
        image: null,
        header: "Knowing you, you'll need a calculator for this.",
        p: "Double the number you chose.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 3,  
        image: null,
        header: "This next part should be easy. Then again... it's you...",
        p: "Add 'insert random EVEN number' to your number.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 4,  
        image: null,
        header: "Try not to use your fingers and toes...",
        p: "Divide your number by 2.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 5,  
        image: null,
        header: "Make sure you know how to subtract. Geesh...",
        p: "Subtract your original number from you new number.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 6,  
        image: null,
        header: "Here comes the icing on the cake...",
        p: "Now add 'random number here'.",
        prev: null,
        next: next(),
        reset: reset(),
    }
    {   state: 7,  
        image: null,
        header: "You made it too easy...",
        p: "Is this your number? 'display answer' ",
        prev: null,
        next: null,
        reset: reset(),
    }
];

//Update object's name property.
myArray[objIndex].name = "Laila"
