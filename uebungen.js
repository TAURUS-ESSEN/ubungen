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
        return "gute-nacht.png"
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