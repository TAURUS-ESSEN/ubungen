'use strict';
let date = new Date();
let heutigeJahr  = date.getFullYear();
let alter = 0;

// Übung 6
let geburtsJahr = 0;
const u6Form = document.getElementById('ubung6');
const u6result = document.getElementById('u6result');
const u6input = u6Form.querySelector("input");
const u6button = u6Form .querySelector("button");
u6button.addEventListener("click", ()=> {
    if (u6input.value !=='') {
    alter = heutigeJahr - u6input.value;
    u6result.textContent = `Im Jahr ${heutigeJahr} bin ich ${alter-1} oder ${alter} Jahre alt.`;
    ubung7();
    }
})

// Übung 7
    const u7result = document.getElementById('u7result');
    const product = [
        { productName: "Beutel Tee, Beutel", protag: 2 }, 
        { productName: "Spaghetti, kg ", protag: 0.5 }
    ]

    function ubung7() {
        let tagsBisHundred  = 0;
        let anzahlProducts = 0;
        tagsBisHundred = Math.round((100 -Number(alter))*365.25);
        u7result.innerHTML = `Du bist <b>${alter}</b> Jahre alt. Es bleiben dir noch etwa <b>${tagsBisHundred}</b> Tage bis zu deinem 100. Geburtstag (nicht viel – das Leben ist leider kurz). Du brauchst mindestens: <br>`;

        for (let i=0; i<product.length; i++) {
            anzahlProducts = (tagsBisHundred * product[i].protag).toFixed(1); 
            u7result.innerHTML += `<br> <b> ${product[i].productName}</b>:  ${anzahlProducts} (${product[i].protag} pro Tag)`
        }
        u7result.innerHTML += `<br><br> … bis du 100 Jahre alt bist. Wenn du heute all diese Produkte kaufst, werden sie früher oder später schlecht, du wirst dich damit vergiften und sterben, ohne 100 Jahre alt zu werden – und die Lösung dieser Aufgabe war dann umsonst`;
    } 

// Übung 8
const u8Form = document.getElementById('ubung8');
const u8result = u8Form.querySelector('output');
const u8input = u8Form.querySelector("input");
const u8button = u8Form.querySelector("button");
u8button.addEventListener("click", ()=> {
    if (u8input.value !=='') {
        const tempCelsius = ((u8input.value - 32) * 5 / 9).toFixed(1);
        u8result.textContent = `${u8input.value}°F ist ${tempCelsius }°C`;
        u8input.value = '';
    }
})

// Übung 9
const u9Form = document.getElementById('ubung9');
const u9result = u9Form.querySelector('output');
const u9input = u9Form.querySelector("input");
const u9button = u9Form.querySelector("button");
u9button.addEventListener("click", ()=> {
    if (u9input.value !=='') {
        let noten = checkPunkte(u9input.value);
        u9result.innerHTML = `${noten}`;
        u9input.value = '';
    }
})

function checkPunkte (punkte) {
    if (punkte >=92 )  {
        console.log('Note: 1');
        return `Note: 1` //nur für Visualisation natürlich
    }
    else if (punkte >=81 ) {
        console.log('Note: 2');
        return `Note: 2`
    }
    else if (punkte >=67 ) {
        console.log('Note: 3');
        return `Note: 3`
    }
    else if (punkte >=50 ) {
        console.log('Note: 4');
        return `Note: 4`
    }
    else if (punkte >=30 ) {
        console.log('Note: 5');
        return `Note: 5`
    }
    else   {
        console.log('Note: 6');
        return `Note: 6`
    }
}

// Übung 10
let greet = hallo(navigator.language);
document.getElementById('u10result').textContent = greet;

function hallo(language) {
    switch (language) {
        case "de-DE":
            return "Hallo Welt!";
        case "en-US":
            return "Hello World!";
        case "es-ES":
            return "¡Hola mundo!";
        case "ru-RU":
            return "Привет Мир!";
        default:
            return "Hallo Welt!";
    }
}

// Übung 11
// Mouse -> Mice, Sheep -> Sheep, Goose -> Geese
let ausnahmen =   { 
    mouse: "mice",
    sheep: "sheep",
    goose: "geese"
}

const u11Form = document.getElementById('ubung11');
const u11ResultField = u11Form.querySelector('output');
const u11input = u11Form.querySelector("input");
const u11button = u11Form.querySelector("button");
u11button.addEventListener("click", ()=> {
    if (/\d/.test(u11input.value)) {
        u11result.textContent = "Keine Zahlen.";
        return;
    }
    u11ResultField.textContent = checkAusnahmen(u11input.value);
    u11input.value = ''
})

function checkAusnahmen(tier) {
    for (let key in ausnahmen) {
        if (key.toLowerCase() === tier.toLowerCase()) {
        return ausnahmen[key]
        }
    }
    return tier+'s'
}

// Übung 13 
const u13Form = document.getElementById('ubung13');
const u13ResultField = u13Form.querySelector('output');
const u13input = u13Form.querySelector("input");
const u13button = u13Form.querySelector("button");
u13button.addEventListener("click", () =>{ 
    if (u13input.value !=='') {
    let result = umkehren(u13input.value);
    u13ResultField.textContent = result; 
    }
})

function umkehren(wort) {
    let result = wort.split("").reverse().join("");
    return result
}

// Übung 14 

const u14Form = document.getElementById('ubung14');
const u14ResultField = u14Form.querySelector('output');
const u14input = u14Form.querySelector("input");
const u14button = u14Form.querySelector("button");
u14button.addEventListener("click", () => { 
    if (u14input.value !=='') {
        let result = istPalindrom(u14input.value);
        u14ResultField.textContent = result; 
        u14input.value = '';
    }
    
})

function istPalindrom(wort) {
    let wortUmgekert = wort.split("").reverse().join("");
    let result = (wort.toLowerCase() === wortUmgekert.toLowerCase()) ? "Ja" : "Nein"
    return result
}

// Übung 15
const u15Form = document.getElementById('ubung15');
const u15ResultField = u15Form.querySelector('output');
const u15input = u15Form.querySelector("input");
const u15button = u15Form.querySelector("button");
const muenzen = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

u15button.addEventListener("click", () =>{ 
    if (u15input.value !=='') {
        let result = inMuenzen(u15input.value);
        u15ResultField.textContent = result; 
        u15input.value = '';
    } else {
        u15ResultField.textContent = 'Input ist leer';
    }
    
})

function inMuenzen(zahl) {
    // let gerundeteZahl = 0;
    let string = `${zahl} Euro sind `;
    for (let i=0; i<muenzen.length; i++) {
        if (muenzen[i] <= zahl) {
            let gerundeteZahl = Math.floor(zahl/muenzen[i]);
            zahl = Number((zahl - gerundeteZahl*muenzen[i]).toFixed(2));
            let muenze = (muenzen[i] >=1) ? muenzen[i] + " Euro": muenzen[i]*100 + " Cent";
            string += `${gerundeteZahl} mal ${muenze} + `
        if (zahl < 0.01) {
            return string.trim().slice(0, -2);
        }
    }
    }
}

 