const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const rest = document.getElementById("resetBtn");
const  countLabel = document.getElementById("countLabel");

let count = 0;


increase.onclick = function (){
    count ++;
    countLabel.textContent = count;
}

decrease.onclick = function (){
    count --;
    countLabel.textContent = count;
}

rest.onclick = function () {
    countLabel.textContent = 0;
}



