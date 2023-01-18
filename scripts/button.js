function Button(x, y, t, f){
	this.tempX = x;
	this.x = 0;
	this.y = y;
	this.t = t;
	this.fSize = 30;
	this.w = 0;
	this.h = this.fSize + 10;
	this.isHover = false;
	this.isClick = false;
	this.game = f;
	
	this.hover = function(){
		if(mouseX > this.x && mouseX < this.x + this.w){
			if(mouseY > this.y && mouseY < this.y + this.h){
				this.isHover = true;
			}else{
				this.isHover = false;				
			}
		}else{
			this.isHover = false;
		}
	}
	
	this.click = function(){
	
		if(this.isHover){
			this.game.reset();
			this.isClick = true;
		}
		
	}
	
	this.clearClickEffect = function(){
		this.isClick = false;
	}
	this.render = function(){
		this.w = textWidth( t ) + 20;
		this.x = this.tempX - (this.w/2);
		this.hover();
		if(this.isHover && !this.isClick){
			fill(255);
			stroke(255);
			strokeWeight(3);
			rect(this.x, this.y, this.w, this.h);
			fill(40);
			noStroke();
			textSize(this.fSize);
			text(this.t, this.x+10, this.y + this.fSize + 2);	
		}else if(this.isClick){
			noFill();
			stroke(255);
			strokeWeight(3);
			rect(this.x, this.y, this.w, this.h);
			fill(255);
			noStroke();
			textSize(this.fSize);
			text(this.t, this.x+10, this.y + this.fSize + 2);
		}else{
			noFill();
			stroke(255);
			strokeWeight(3);
			rect(this.x, this.y, this.w, this.h);
			fill(255);
			noStroke();
			textSize(this.fSize);
			text(this.t, this.x+10, this.y + this.fSize + 2);
		}
	
		
	}
	
	
}