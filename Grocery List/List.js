const inputHTML = document.querySelector('input');
const ButHtml = document.querySelector('button');
const EnterHTML = document.querySelector('#all-times');
const ListHTML = document.querySelector('.List');

inputHTML.addEventListener("keydown", function(event){
if(event.key == "Enter")
CreateList();
})

ButHtml.addEventListener("click", function(event){
EnterHTML.innerHTML = '';
})

function CreateList(){
let h2 = document.createElement('h2');
h2.innerHTML = "- " + inputHTML.value;

h2.addEventListener("click", function(){
h2.innerHTML = "";
//h2.style.textDecoration = "line-through";
})

EnterHTML.insertAdjacentElement("beforeend", h2);
}

