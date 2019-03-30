// Write your code here!

// let doc = document.getElementById('main');

// document.body.appendChild('h1')

const main = document.querySelector('main')

main.remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory");

newHeader.innerText = "She is the champion";
