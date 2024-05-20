export const animalsArr = [
    "🐶",
    "🐵",
    "🐺",
    "🐱",
    "🦁",
    "🐯",
    "🐮",
    "🐷",
    "🐗",
    "🐭",
    "🐹",
    "🐰",
    "🐻",
    "🐨"
]
export const livestock:string[][] = [
    // 'bull.png',
    // 'cow.png',
    // 'goat.png',
    // 'cow1.png',
    // 'cow2.png',
    // '7897057.jpg',
    ['SeekPng.png',  '303','0'],
    ['SeekPng.png',  '406','0'],
    ['SeekPng.png',  '509','0']
]


export const animalPage = document.querySelector('#choseAnimal') as HTMLElement;
export const btnList = document.querySelectorAll('.btns') as NodeListOf<HTMLElement>;
export const mainGamePage = document.querySelector('#mainGamePage') as HTMLElement;
export const progres = document.querySelectorAll('.progressLine') as NodeListOf<HTMLElement>;
export const mainLiveStock = document.querySelector('#mainLiveStock') as HTMLImageElement;
export let leftPosition = 0;
export let topPosition = 0;

