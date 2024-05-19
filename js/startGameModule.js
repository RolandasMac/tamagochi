import { animalPage, mainGamePage, livestock, mainLiveStock } from "./constants.js";
let arrr = [
    "gaidys", "višta", "žąsinas", "arklys"
];
// testas
export let testStartGameModule = "veikia";
// action
createAnimalPage(livestock);
function createAnimalPage(arr) {
    arr.map((oneAnimal) => {
        const oneAnimalContainer = document.createElement("div");
        oneAnimalContainer.classList.add("animal");
        // oneAnimalContainer.innerHTML = oneAnimal;
        const img = document.createElement('img');
        img.addEventListener('click', chooseAnimal);
        img.src = `../../css/images/${oneAnimal}`;
        console.log(img.src);
        oneAnimalContainer.appendChild(img);
        animalPage.appendChild(oneAnimalContainer);
    });
}
function chooseAnimal(event) {
    // console.log(event.target as HTMLImageElement);
    // console.log(mainLiveStock)
    mainLiveStock.src = `${event.target.src}`;
    animalPage.classList.add("d-none");
    mainGamePage.classList.remove('d-none');
}
