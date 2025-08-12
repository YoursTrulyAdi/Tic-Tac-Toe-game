//initializing items
let box = document.querySelectorAll(".box");
let latestPlay = "❌";
let playCount = 0;

let winArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


//functions
let chkWin = () => {
    if(playCount > 8){
        alert("This is a DRAW! 🤝")
        return;
    }

    for(let arr of winArray){
        let n1 = box[arr[0]].innerText;
        let n2 = box[arr[1]].innerText;
        let n3 = box[arr[2]].innerText;

        if(n1 === "❌" && n2 === "❌" && n3 === "❌"){
            alert("Cross-❌ Wins!")
        }
        else if(n1 === "⭕" && n2 === "⭕" && n3 === "⭕"){
            alert("Circle-⭕ Wins!")
        }
    }
}

let playPlr = (element) =>{
    if (latestPlay === "⭕"){
        latestPlay = "❌";
    }
    else{
        latestPlay = "⭕";
    }
    element.innerText = latestPlay;
}

//event listeners

box.forEach((element, index) => {
    element.addEventListener("click", () => {
        if(!element.classList.contains("attempted-box")){
            element.classList.toggle("attempted-box");
            playPlr(element);
            playCount++;

            console.log(index);
            chkWin();
        }
    })
});