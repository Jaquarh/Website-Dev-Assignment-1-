let c;
console.log("linked")
let btnRace = document.getElementById('race');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
btnRace.addEventListener('click', test);
 
/* function draw() {
    if (ctx) {
        //Body
        ctx.fillStyle= "red";
        ctx.fillRect(200,200,300,150);
        //roof
        ctx.fillStyle= "red";
        ctx.fillRect(275,100,150,100);
        //(x,y length, height)

        //window one 
        ctx.fillStyle="blue";
        ctx.beginPath();
        ctx.moveTo(200,200);
        ctx.lineTo(275,100);
        ctx.lineTo(275,200);
        ctx.fill();

    }
} */



class Car{
    constructor(p){
        this.x = (p && p.x) || 0;
        this.y= (p && p.y) || 0;
        this.windowsColour=(p && p.windowsColour) || "blue";
        this.directionX = (p && p.directionX) || 15;
        this.directionY = 15;

        this.speed = Math.floor(Math.random() * 6 + 1);
        this.colour=(p && p.colour) ||"purple";;


        }
       
        draw() {


            console.log("we linked" );
            //window one
            ctx.fillStyle = this.windowsColour;
            ctx.fillRect(this.x + 44, this.y + 40,50,55)
             //roof   141 along x 40 down from y
            ctx.fillStyle = this.colour;
            ctx.fillRect(this.x + 90, this.y + 40,110,55)

            // window two 360 from x 40 from y
            ctx.fillStyle = this.windowsColour;
            ctx.fillRect(this.x + 170, this.y + 40,42.5,55)
        

            //Body 44 from x 161 from y
            ctx.fillStyle = this.colour;
            ctx.fillRect(this.x + 31, this.y + 80,200,50)

            ctx.fillStyle="black";
            this.drawWheel(this.x+60, this.y+125, 30)
            ctx.fillStyle="black";
            this.drawWheel(this.x+200, this.y+125, 30)
             
        
        }

        
       drawWheel(x,y, size){
             //wheel 1 
             
             ctx.beginPath();
             ctx.arc(x,y,size,0,2 * Math.PI);
             ctx.fill();
             //ctx.arc(this.x+160, this.y+357, 0,89 *Math.PI);
             //ctx.fill();
       }

        move(){
        this.x += this.directionX;  
        console.log("we be movin");

      
      }
}

//TODO work out why cars appear in same location
function createCar(){
    c = new Car({x: 0,y: 150,windowsColour: "red",colour:"yellow",directionX:200});
}
function test(){


c.draw();
c.move();
requestAnimationFrame(test);
}
/* function race(){
    if (ctx) {
//let firstCar = new Car(1,2,"blue","red");
//firstCar.draw();

var firstCar = new Car({x: 0,y: 150,windowsColour: "red",colour:"yellow"});
console.log(firstCar);
firstCar.draw();
firstCar.move();
var secondCar = new Car({x: 0,y: 300,windowsColour: "black",colour:"green"});
console.log(secondCar);
secondCar.draw();

var thirdCar = new Car({x: 0,y: 450,windowsColour: "blue",colour:"red"});
console.log(thirdCar);
thirdCar.draw();



let fourthCar = new Car(1,2,"blue","purple");
fourthCar.draw();
requestAnimationFrame(race);

    }

} */



