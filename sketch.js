var dog,happyDog,dogImg;
var foodS,foodStock,database;

function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(400,350,50,50);
  dog.addImage(dogImg)
  dog.scale=0.2;
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,239,87);
if(keyWentDown(UP_ARROW)){
 
writeStock(foodS);
dog.addImage(happyDog);
}
  drawSprites();
  textSize(32);
  fill(255);
  stroke(2)
text("Note:Press UP_ARROW key to feed Drago Milk",60,30)
text("foodRemaining " + foodS,100,100)
}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
database.ref("/").update({
  Food : x
})
}




