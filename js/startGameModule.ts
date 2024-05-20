import {animalsArr, animalPage, mainGamePage, livestock, mainLiveStock} from "./constants.js";


// let arrr:string[] = [
//     "gaidys", "višta", "žąsinas", "arklys"
// ]
// testas
export let testStartGameModule:string = "veikia"

// action
createAnimalPage(livestock)





function createAnimalPage(arr:string[][]):void{
    arr.map((oneAnimal:string[])=>{
        const oneAnimalContainer:HTMLDivElement = document.createElement("div");
        oneAnimalContainer.classList.add("animal");
        // oneAnimalContainer.innerHTML = oneAnimal;
        const img:HTMLImageElement = document.createElement('img');
        img.addEventListener('click', chooseAnimal)
        img.src=`./css/images/${oneAnimal[0]}`;
        img.style.top = `-${oneAnimal[1]}px`;
        img.style.left = `${oneAnimal[2]}px`
        oneAnimalContainer.appendChild(img);
        animalPage.appendChild(oneAnimalContainer);
    })

}


function chooseAnimal(event:MouseEvent):void{
    // console.log(event.target as HTMLImageElement);
    // console.log(mainLiveStock)
    mainLiveStock.src=`${(event.target as HTMLImageElement).src}`
    mainLiveStock.style.top=`-${(event.target as HTMLImageElement).style.top}px`
    console.log(mainLiveStock.style.top);
    animalPage.classList.add("d-none");
    mainGamePage.classList.remove('d-none');
}







