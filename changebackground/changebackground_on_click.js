const htmlBody = document.querySelector('body');
const htmlButton = document.querySelector('button');

const randomClickFunction = function () {
const colors = ["red", "purple", "green", "brown", "orange", "yellow"];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

htmlBody.style.backgroundColor = randomColor;

console.log('The user clicked and set the color to' + randomColor);
}
htmlButton.onclick = randomClickFunction;
