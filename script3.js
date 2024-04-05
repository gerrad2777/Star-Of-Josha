const wordBox = document.getElementById("dialogue");
const outputWord = document.getElementById("that");
const whoIsTalking = document.getElementById("speaker");
const image = document.getElementById("image");



let avatar = [
    "assets/images/narrator.png",
    "assets/images/buttonBlue.png",
    "assets/images/buttonRed.png",
    "assets/images/buttonYellow.png",
    "assets/images/buttonGreen.png",
    "assets/images/nothing.png",
    "assets/images/star1.png"
]

let discussion = [
    "(Guiding Light fading? Curious about who's behind this...)",
    "We can't hold much longer!...",
    "Wind is blowing from the North! It might disrupt our guide!",
    "<b>Star of Josha</b> , Be careful... The winds are taking control",
    "(Fun! The wind is affecting them! Hopefully this goes well for them)"
]

let imagesN = [
    avatar[0],
    avatar[3],
    avatar[2],
    avatar[4],
    avatar[0]
];

let gods = [
    "Narrator",
    "Immortal Yellow Light",
    "Immortal Red Light",
    "Immortal Green Light",
    "Narrator"
];

let bgSound = new Audio()
let index = 0;
let gameLoose = new Audio()
let jumpSound = new Audio();

function tellStory(){
    clickSound[Math.floor(Math.random() * clickSound.length) ].play()
    outputWord.innerHTML = discussion[index];
    image.src = imagesN[index];
    whoIsTalking.innerHTML = gods[index];

    if(index === discussion.length - 1){
        index = 0;
        wordBox.style.opacity = 0.5;
        wordBox.removeEventListener("click", tellStory, false)
        setTimeout(function(){
            wordBox.style.display = "none";
            game.style.visibility = "visible"
            bgSound.play()
            gameStart()
            requestAnimationFrame(allGameLoop);
        
        }, 3000);

        return;
    }
    index++;
}

let clickSound;

window.onload = () => {
wordBox.addEventListener("click", tellStory, false);

    const allSound = document.getElementsByTagName("audio");
// console.log(allSound)
    clickSound = [
        allSound[0],
        allSound[1]
    ]
    bgSound = allSound[2];
    jumpSound = allSound[3];
    jumpSound.volume = 0.4;
    gameLoose = allSound[4];
    gameLoose.volume - 0.6;
    bgSound.volume = 0.5;

    gameWin = allSound[5];
    gameWin.volume = 0.7;
    bgSound.loop = true;

    tellStory();
}