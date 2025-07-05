const htmlButton = document.querySelector('button');
const htmlP = document.querySelector('p');
const htmlH3 = document.querySelector('h3');

function GenerateQuote(){

const objQ = {
'Georg3':"Govno",
'Aboba':"Jopa",
'Popa':"Her"
}

const authors = Object.keys(objQ);

let author = authors[Math.floor(Math.random() * authors.length)];

const quotes = objQ[author];

htmlP.innerHTML = quotes;

htmlH3.innerHTML = author;
}

htmlButton.onclick = GenerateQuote;