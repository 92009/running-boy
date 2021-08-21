var boy,boy_run;
var pathImage;
var energy;
var bomb;

function preload()
{
  //pre-load images
  pathImage=loadImage("path.png");
  boy_run=loadAnimation("runner-1.png","runner-2.png");
  energyImage=loadImage("energyDrink.png");
  bombImage=loadImage("bomb.png");
  powerImage=loadImage("power.png");
}

function setup()
{
  createCanvas(400,800);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.scale=1.2
 
  invisibleTrack=createSprite(10,200,70,1200)
  invisibleTrack.visible=false;
  invisibleTrack2=createSprite(400,200,70,1200)
  invisibleTrack2.visible=false;

  boy=createSprite(200,700,200,400);
  boy.addAnimation("boy",boy_run);
  boy.scale=0.1;
 
 
  energy=createSprite(200,90,200,400);
  energy.addImage("energy",energyImage);
  energy.scale=0.1

  bomb=createSprite(300,1)
  bomb.addImage("bomb",bombImage)
  bomb.scale=0.1;
  power=createSprite(200,200);
  power.scale=0.5
}

function draw() 
{
   
   boy.velocityX=2; 
   path.velocityY=10;
   energy.velocityY=9;
   bomb.velocityY=3;
   boy.x=mouseX
   
    if (path.y>800)
    {
      path.y=width/2
    } 

    if (energy.y>900)
    {
      energy.y=width/7
    }

    if (boy.isTouching(energy))
    {
      energy.destroy();
      boy.velocityY=-10
   
      
      power.addImage("power",powerImage);
    
    }

    if (boy.y<300)
    {    
      boy.velocityY=-2;
      
    } 

    if (boy.isTouching(power))
    {
      power.destroy();
    }
    if (boy.y<80)
    {
      boy.y=700;
      boy.velocityY=0;
    }

    if (boy.isTouching(bomb))
    {
      boy.destroy();
      bomb.velocityY=0;    
    }

   boy.collide(invisibleTrack);
   boy.collide(invisibleTrack2);

  drawSprites();

}
