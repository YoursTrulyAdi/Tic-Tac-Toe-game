//initializing items
let box = document.querySelectorAll(".box");
let latestPlay = "❌";

let passArray = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let playTrack = [0,0,0];

let playCount = 0;

//functions
let winnerAnnounce = (res) => {
    if(playCount > 8){
        alert(`That's a draw!`);
    }
    else if(playCount <= 8 && res === true){
        alert(`The Winner is : ${latestPlay}`);
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
let chkArr = () => {
    let main = passArray.slice().join("|")
    let sub = playTrack.slice().join(",")

    let res = main.includes(sub);

    // calling announcer
    winnerAnnounce(res);
}

box.forEach((element, index) => {
    element.addEventListener("click", () => {
        if(!element.classList.contains("attempted-box")){
            element.classList.toggle("attempted-box");
            playPlr(element);
            playCount++;

            console.log(index);
        }

        chkArr();
    })
});