let playerState = 'idle'
const dropdown = document.getElementById("animations");
dropdown.addEventListener('change', (e) => {
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let animationsState = {
    "idle": {
        "row": 0,
        "column": 6
    },
    "jump": {
        "row": 1,
        "column": 6
    },
    "fall": {
        "row": 2,
        "column": 6
    },
    "run": {
        "row": 3,
        "column": 8
    },
    "dizzy": {
        "row": 4,
        "column": 10
    },
    "sit": {
        "row": 5,
        "column": 4
    },
    "roll": {
        "row": 6,
        "column": 6
    },
    "bite": {
        "row": 7,
        "column": 6
    },
    "ko": {
        "row": 8,
        "column": 11
    },
    "getHit": {
        "row": 9,
        "column": 3
    },
}

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 4;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    frameX = spriteWidth * (Math.floor(gameFrame / staggerFrames) % animationsState[playerState]["column"]);
    frameY = animationsState[playerState]["row"] * spriteHeight
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++
    requestAnimationFrame(animate);
}
animate();