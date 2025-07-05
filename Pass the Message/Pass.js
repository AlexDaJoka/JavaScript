const inputHtml = document.querySelector('input');
const ButHtml = document.querySelector('button');
const PHtml = document.querySelector('p');

inputHtml.addEventListener("keydown", function(event){
if(event.key == "Enter")
SendMessage();
})

function SendMessage(){
PHtml.innerHTML = inputHtml.value;
inputHtml.value = '';
}

ButHtml.onclick = SendMessage;