class Dustbin 
{
    constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.dustbinWidth = 200;
		this.dustbinHeight = 213;
		this.wallThickness = 20;
		
		this.image = loadImage("images/dustbingreen.png")
		this.bottomWall = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWall = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWall = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomWall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall)

	}
	display()
	{
			var posBottom = this.bottomWall.position;
			var posLeft = this.leftWall.position;
			var posRight = this.rightWall.position;

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}
    
}