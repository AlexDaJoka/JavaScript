const htmlH1 = document.querySelector('h1');
let count = 0;
function Count(num){
count += num;
htmlH1.innerHTML = count;
}