/*//Examples on types of data in JavaScript
//number data type
var num = 78;
console.log(num);
//string data type
var name = "Sahaj"
console.log(name);
//boolean data type
var bool= false;
console.log(bool);
//undefined data type
var x;
console.log(x);
//reassinging the same undefined x to null
//null data type
x=null;
console.log(x);
//array - to store multiple values
var arr1 =[12,24,36,48,60];
console.log(arr1);
var arr2 = [34, "Sahaj", 49.5, true, null, 46];
console.log(arr2);
//length of the array
console.log(arr1.length);
//access the first element of the array
console.log(arr2[0]);
console.log(arr2[4]);
//array inside an array
var arr3 = ["apple", "banana", "orange",[1,2,3,4,5,6,7,8]]
console.log(arr3.length);
console.log(arr3[3]);
console.log(arr3[3][5]);
//push function
arr1.push(34,56,7,8,99);
console.log(arr1);
//pop function
arr1.pop();
console.log(arr1);*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState="onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    
    if(gameState!== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState= "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}