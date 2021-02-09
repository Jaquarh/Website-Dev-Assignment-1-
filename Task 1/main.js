let btnRace = documet.getElementById('race');
let canvas = documet.getElementById('canvas');
let ctx = canvas.getContext("2d");
btnRace.AddEventListener('click',race);

function race() {
    if (ctx) {
        console.log("Race")
    }
}

canvas.width = window.innerWidth -4;
canvas.height = window.innerHeight -80;