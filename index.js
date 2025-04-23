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
    alter = heutigeJahr - u6input.value;
    u6result.textContent = `Im Jahr ${heutigeJahr} bin ich ${alter-1} oder ${alter} Jahre alt.`;
    ubung7();
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
    const tempCelsius = ((u8input.value - 32) * 5 / 9).toFixed(1);
    u8result.textContent = `${u8input.value}°F ist ${tempCelsius }°C`;
    u8input.value = '';
})