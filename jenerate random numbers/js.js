const btn = document.querySelector('#btn');

function addParagraph() {
  const randomNum = Math.floor(Math.random() * 100);
  const pContent = 'The random is:' + randomNum;

  const newElement = document.createElement('p');
  newElement.textContent = pContent;
  document.body.appendChild(newElement);
}

btn.onclick = addParagraph;

//Нахождение html тега
document.querySelector('button');
document.querySelector('#1');
document.getElementById('1');

//Написание строк из js на html
const elementNode = document.createElement('p');

const textNode = document.createTextNode('Content');

const attributeNode = document.createAttribute('class');

elementNode.appendChild(textNode);

attributeNode.value = "some-class";

elementNode.setAttributeNode(attributeNode);

document.body.appendChild(elementNode);



