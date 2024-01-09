const image = document.querySelector("#myPicture"); 
const text = document.querySelector("h2"); 

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two"); 

buttonOne.addEventListener("click", vacation);
buttonTwo.addEventListener("click", alone);

function vacation() {
    image.setAttribute("src", "france.jpeg"); 
    text.textContent = "Will mom of Kevin join them?";
    buttonOne.textContent = "YES"; 
    buttonTwo.textContent = "NO"; 

    buttonOne.addEventListener("click", brokenChristmas);
    buttonTwo.addEventListener("click", reunion);
}

function brokenChristmas() {
    image.setAttribute("src", "mom.webp"); 
    text.textContent = "She will stuck in the airport before Christmas";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function reunion() {
    image.setAttribute("src", "family.jpeg"); 
    text.textContent = "She is going back home to find Kevin!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function alone() {
    image.setAttribute("src", "kevin.jpeg"); 
    text.textContent = "Does Kevin going to have fun home alone?";
    buttonOne.textContent = "YES"; 
    buttonTwo.textContent = "NO"; 
    
    buttonOne.addEventListener("click", fun);
    buttonTwo.addEventListener("click", bored); 
}

function fun() {
    image.setAttribute("src", "marv-tree.jpeg"); 
    text.textContent = "He will manage to protect the house!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function bored() {
    image.setAttribute("src", "catch.jpeg"); 
    text.textContent = "Marv and Harry cought Kevin!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}