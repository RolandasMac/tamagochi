import {btnList, mainGamePage, animalPage, progres } from "./constants.js";

// console.log("test")
export let test:string = "test Main Game";
// console.log(progres);
// action
progres[0].style.width = "100%";
progres[1].style.width = "100%";
progres[2].style.width = "100%";
let feedCount = Number((Array.from(progres[1].style.width)).slice(0,-1).join(""));
let funyCount = Number((Array.from(progres[2].style.width)).slice(0,-1).join(""));
let liveCount = Number((Array.from(progres[0].style.width)).slice(0,-1).join(""));
console.log(funyCount);

btnList[2].addEventListener('click', (event)=>{
    mainGamePage.classList.add('d-none');
    animalPage.classList.remove('d-none');
})
btnList[0].addEventListener('click', (event)=>{
    progres[1].style.width = "100%";
    feedCount = 100;
})
btnList[1].addEventListener('click', (event)=>{
    progres[2].style.width = "100%";
    funyCount = 100;
})




console.log(Number((Array.from(progres[1].style.width)).slice(0,-1).join("")))

startGame();
function startGame():void{

    setInterval(()=>{
        hungry()
        angry()
        // console.log(feedCount);
        if(feedCount===0||funyCount===0){
            live()
        }
    },1000)
}

function hungry(){
    if(feedCount>0){
        feedCount -= 10;
        progres[1].style.width = `${feedCount}%` ;
    }
}
function angry(){
    if(funyCount>0){
        funyCount -= 10;
        progres[2].style.width = `${funyCount}%` ;
    }
}
function live(){
    if(liveCount>0){
        liveCount -= 10;
        progres[0].style.width = `${liveCount}%` ;
    }
}