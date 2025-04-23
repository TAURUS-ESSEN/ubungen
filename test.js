'use strict';
let ausnahmen = [  {mouse: "mice"}, {Sheep: "Sheep"}, {Goose: "Geese"  }];
let word = "sheep";

let result = ausnahmen.forEach(value =>  check (value))

function check(value) {
    for (let key in value) {
        if (key.toLowerCase() === word.toLowerCase()) {
            console.log(key +" = " + word)
            return value[key]
        }
    }
}