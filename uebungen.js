'use strict';
const themeToggler = document.getElementById("theme-toggle");
themeToggler.addEventListener("click", () => {
    document.body.dataset.theme = document.body.dataset.theme === "1" ? "2" : "1";
});

// Übung 16
let actuellerZeitraum = new Date;
let stunden = actuellerZeitraum.getHours()
const u16ResultFoto = document.getElementById('u16resultFoto');
u16ResultFoto.src = `./img/`+zeigenZeitraumFoto(stunden);

function zeigenZeitraumFoto(stunden) {
    if (stunden >=22 ||  stunden < 6) {
        return "gute-nacht.jpg"
    }
    else if ((stunden >=6) && (stunden < 12)) {
        return "guten-morgen.jpg"
    }
    else if ((stunden >=12) && (stunden < 17)) {
        return "guten-tag.jpg"
    }
    else if ((stunden >=17) && (stunden < 22)) {
        return "guten-abend.jpg"
    }
}


// Übung 17
const u17Form = document.getElementById('ubung17');
const u17result = document.getElementById('u17result');
const u17button = u17Form.querySelector("button");
u17button.addEventListener("click", () => {
    
    u17result.innerHTML = '';
    lottozahlengenerator() 
})
function lottozahlengenerator() {
    const gewinnNummers = [];
    for (let i=1; i<=6; i++) {
        let zufallNummer = Math.floor(Math.random() * 49)+ 1;
        let result = gewinnNummers.includes(zufallNummer)
        if (result) {
            i--;
        }
        else {
            gewinnNummers.push(zufallNummer);
            u17result.innerHTML += `<span class="lottoball">${zufallNummer}</span>` 
        }
    }
    // return gewinnNummers
}

// Übung 18  
const u18result = document.getElementById("u18result");

function showTime() {
let jetzt = new Date()
let date = jetzt.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});

let time = jetzt.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})

let string = `${date}, ${time}`;
return string
}

setInterval(function() {
    u18result.textContent = showTime();
}, 1000);


// Übung 19
const u19Form = document.getElementById('ubung19');
const u19result = document.getElementById("u19result");
const u19input = u19Form.querySelector("input");
const u19button = u19Form.querySelector("button");
u19button.addEventListener("click", () => {
    u19result.textContent =  fizzBuzz(u19input.value);
})

function fizzBuzz(anzahl) {
    let str = '';
    for (let i = 1; i <= anzahl; i++) {
        str += i % 3 === 0 ? "Fizz " : i % 5 === 0 ? "Buzz " : i+" ";
    }
    console.log(str)
    return str;
}



// Übung 20
const followers = [
    { likes: 0, name: "Klaus", message: "Klaus mag das"},
    { likes: 1, name: ['Alexandra', 'Maria'], message: "Klaus mag das" },
    { likes: 2, name: ['Max', 'Johannes', 'Mark'], message: "Max, Johannes und Mark mögen das" },
    { likes: 3, name: ['Alexandra', 'Maria', 'Mark', 'Max'] , message: "Alexandra, Maria und 2 weitere mögen das" }  
]

const u20Form = document.getElementById('ubung20');
const u20result = document.getElementById("u20result");
const u20output = u20Form.querySelector("output");
const u20button = u20Form.querySelector("button");
let likesCounter = '';
u20button.addEventListener("click", () => {
    if (likesCounter <= 3) {
    u20output.textContent = ++likesCounter;
    u20result.innerHTML +=  '<br>' + showLikes();
    }
})

function showLikes() {
    let currentMessage = '';
    if (likesCounter < 4) {
        followers.filter(follower => {
            if (follower.likes === likesCounter) 
            {
                currentMessage += follower.message 
            }
        })
    }
    return currentMessage
}


// Übung 22
const u22Form = document.getElementById('ubung22');
const u22result = document.getElementById("u22result");
const quadrat = u22Form.querySelector(".quadrat");
const u22button = u22Form.querySelector("button");
u22button.addEventListener("click", () => {
    blinken();
})

function blinken() {
    quadrat.style.backgroundColor = "green";
    let randomZeit = Math.floor(Math.random() * 5)+ 1; 
    setTimeout ( () => {
        quadrat.style.backgroundColor = "red";
    }, randomZeit*1000)
}

quadrat.addEventListener("click", () => {
    u22result.textContent = calculieren();
})

function calculieren() {
    if (quadrat.style.backgroundColor === "red") {
        return  "click"
    }
    else {
        return "früh"
    }
}

// Übung 25
const imgContainer = document.getElementById("hangman");
const suchwordContainer = document.getElementById("suchwordContainer");
const fehlerImgArray = ['hm0.jpg', 'hm1.jpg', 'hm2.jpg','hm3.jpg','hm4.jpg','hm5.jpg','hm6.jpg', 'hm7.jpg'];
const currentWord = [];
let imageIndex = 0;
console.log(imgContainer)
import { worte } from "./big-projekts/hangman/worte.js";
console.log(worte[0])
const suchwortIndex = Math.floor(Math.random()*91859);
console.log(suchwortIndex);
const suchwort = worte[suchwortIndex].toLowerCase();
console.log(suchwort)
console.log(suchwort.length)

draw(suchwort)

document.addEventListener('keydown', function(event) {
    const taste = event.key.toLowerCase();  
    if (/^[a-z]$/.test(taste)) { // проверяем, что это именно одна латинская буква
        console.log('Gedrückte Taste:', taste);
        // здесь можно проверить, есть ли буква в загаданном слове
        compare(taste);
      }
    })
  

function draw() {
    suchwordContainer.textContent = '';
    for (let i=0; i<suchwort.length; i++) {
    suchwordContainer.textContent += " _ " 
    }
}

function compare(taste) {
    console.log("была нажата клавиша "+taste)
    console.log("слово было " +suchwort)
    suchwort.split("").forEach(buch => {
        if (buch === taste) {
            console.log("УГАДАЛ")
        }
        // else {
        //     falsheAntwort();
        // }
    })
}

function falsheAntwort() {
    imageIndex++;
    imgContainer.src=`./big-projekts/hangman/img/${fehlerImgArray[imageIndex]}`
}