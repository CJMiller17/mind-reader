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
    State 0: {
        image: null,
        header: "Your thoughts are so obvious.",
        p: "I bet I can read you mind, you simpleton.",
        prev: 
        next: null;
        reset: 
    }
    State 3: {
        image: IMG / srfnxbjdnb.png
        header:
        p:
        prev:
        next: null;
        reset: 
    }
    State 4: {
        image: IMG / srfnxbjdnb.png
        header:
        p:
        prev:
        next: null;
        reset: 
    }
    State 5: {
        image: IMG / srfnxbjdnb.png
        header:
        p:
        prev:
        next: null,
        reset: 
    }
    State 6: {
        image: IMG / srfnxbjdnb.png
        header:
        p:
        prev:
        next: null;
        reset: 
    }
    State 7: {
        image: IMG / srfnxbjdnb.png
        header:
        p:
        prev:
        next: null;
        reset: 
    }
];
let myArray = [
  {id: 0, name: "Jhon"},
  {id: 1, name: "Sara"},
  {id: 2, name: "Domnic"},
  {id: 3, name: "Bravo"}
],

//Update object's name property.
myArray[objIndex].name = "Laila"
