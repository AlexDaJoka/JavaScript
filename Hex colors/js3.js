const htmlButton = document.querySelector('button');
const htmlBody = document.querySelector('body');
const htmlSpan= document.querySelector('span');

function ChangeColor(){
const colors = ['#ff0000', '#ab24a6', '#4e3cb5', '#0af2fa', '#5efa0a'];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColors = colors[randomIndex];

htmlBody.style.backgroundColor = randomColors;

htmlSpan.innerHTML = randomColors;

}
htmlButton.onclick = ChangeColor;

