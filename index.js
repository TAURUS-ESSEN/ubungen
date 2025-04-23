'use strict';

let date = new Date();
let heutigeJahr  = date.getFullYear();
let alter = 0;

// Übung 6
let geburtsJahr = 0;
const u6Form = document.getElementById('ubung6');
const u6result = document.getElementById('u6result');
const u6input = u6Form.querySelector("input");
const u6button = ubung6.querySelector("button");
u6button.addEventListener("click", ()=> {
    alter = heutigeJahr - u6input.value;
    u6result.textContent = `Im Jahr ${heutigeJahr} bin ich ${alter-1} oder ${alter} Jahre alt.`;
    ubung7()
})

// Übung 7
    const u7result = document.getElementById('u7result');
    const product = [
        { productName: "Beutel Tee ", protag: 2 }, 
        { productName: "Spaghetti ", protag: 0.5 }
    ]
    

    function ubung7() {
        let bisHundred  = 0;
        let anzahlProducts = [];
        bisHundred  = (100 -Number(alter))*364;
     
        u7result.innerHTML = `Dein Alter ist ${alter}, ${bisHundred} bleibd dir bis zum 100 (eigentlich nicht viel, das Leben is leider kurz)und du brauchst mindestens: <br>`;
        for (let i=0; i<product.length; i++) {
            anzahlProducts = bisHundred * product[i].protag; 
            u7result.innerHTML += `<br> ${product[i].productName} :  ${anzahlProducts} (${product[i].protag} pro Tag)`
        }
        
    } 