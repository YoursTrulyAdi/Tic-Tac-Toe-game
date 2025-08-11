//initializing items
let box = document.querySelectorAll(".box");
let latestPlay = "❌";

//functions
let playPlr = (element) =>{
    if (latestPlay === "⭕"){
        latestPlay = "❌";
    }
    else{
        latestPlay = "⭕";
    }
    element.innerText = latestPlay;
}

//event listener
box.forEach(element => {
    element.addEventListener("click", () => {
        playPlr(element);
    })
});