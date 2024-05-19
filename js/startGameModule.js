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
        img.src = `../css/images/${oneAnimal}`;
        oneAnimalContainer.appendChild(img);
        animalPage.appendChild(oneAnimalContainer);
    });
}
function chooseAnimal(e) {
    console.log(e.target);
    // console.log(mainLiveStock)
    mainLiveStock.src = `${e.target.src}`;
    animalPage.classList.add("d-none");
    mainGamePage.classList.remove('d-none');
}
