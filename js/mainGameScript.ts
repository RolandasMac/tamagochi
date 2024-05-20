import {btnList, mainGamePage, animalPage, progres, mainLiveStock, leftPosition, mainWindow} from "./constants.js";

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

mainWindow.addEventListener('click', (event)=>{
    // console.log((event.target) as HTMLElement);
    // console.log(event.clientX, event.clientY);
    let top:number = 0;
    if(event.clientY>550){
        top=435;
    }else{
        top = event.clientY-115;
    }

    (mainLiveStock.parentElement as HTMLElement).style.top = `${top}px`
    // mainLiveStock.style.top=`${event.clientY}px`;
})

btnList[0].addEventListener('click', (event)=>{
    progres[1].style.width = "100%";
    feedCount = 100;
})
btnList[1].addEventListener('click', (event)=>{
    progres[2].style.width = "100%";
    funyCount = 100;
})



// console.log(Number((Array.from(progres[1].style.width)).slice(0,-1).join("")))

startGame();
function startGame():void{
    let position = leftPosition;
    // let positionTop = topPosition;
    setInterval(()=>{
        hungry()
        angry()
        // console.log(feedCount);
        if(feedCount===0||funyCount===0){
            live()
        }
    },1000)
    setInterval(()=>{
        mainLiveStock.style.left=`-${position}px`;
        position +=100;
        if(position===800){position=leftPosition}
    },200)
}

function hungry(){
    if(feedCount>0){
        feedCount -= 1;
        progres[1].style.width = `${feedCount}%` ;
    }
}
function angry(){
    if(funyCount>0){
        funyCount -= 1;
        progres[2].style.width = `${funyCount}%` ;
    }
}
function live(){
    if(liveCount>0){
        liveCount -= 1;
        progres[0].style.width = `${liveCount}%` ;
    }else{mainLiveStock.src=""}
}