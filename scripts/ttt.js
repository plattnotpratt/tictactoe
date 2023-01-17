function ttt(grid){
	this.grid = grid;
	this.gridDisp = [];
	this.turnCount = 0;
	this.winStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	this.xWins = false;
	this.oWins = false;
	this.tie = false;
	this.gameOver = 0;
	var r = this.reset;
	this.resetButton = new Button(windowWidth/2,windowHeight/2+85,"Reset!", this);
	
	this.turn = function(pos){
		if(pos > 9 || pos < 0)
		{
			//this should never happen!
		}
		else
		{
			if(this.turnCount % 2 == 0){
				if(this.grid[pos] == 0){
					this.grid[pos] = 2;
					this.turnCount++;
				}
			}
			else{
				if(this.grid[pos] == 0){
					this.grid[pos] = 1;
					this.turnCount++;
				}
			}
		}
	}
	
	this.reset = function(){
		for(var i = 0; i < this.grid.length; i++)
		{
			this.grid[i] = 0;
		}
		this.gameOver = 0;
		this.turnCount = 0;
		this.xWins = false;
		this.oWins = false;
		this.tie = false;
	}
	
	this.render = function(){
		this.resetButton.render();
		strokeWeight(4);
		noFill();
		stroke(255);
		var k = 0;
		if(this.gridDisp.length == 0){
			for(var i = 0; i < this.grid.length; i++){
				if(i % 3 == 0 && i != 0)
				{
					k += 1;
				}
				r = rect((i%3)*50+windowWidth/2-75,k*50+windowHeight/2-75,50,50);
				this.gridDisp[i]= [(i%3)*50+windowWidth/2-75,k*50+windowHeight/2-75,50] ;
			}
		}
		k = 0;
		for(var i = 0; i < this.grid.length; i++){
			if(i % 3 == 0 && i != 0)
			{
				k += 1;
			}
			rect((i%3)*50+windowWidth/2-75,k*50+windowHeight/2-75,50,50);
			var r = this.gridDisp[i];
			if(this.grid[i] == 1){
				ellipse(r[0]+r[2]/2, r[1]+r[2]/2,40,40);
			}else if(this.grid[i] == 2){
				line(r[0], r[1], r[0]+r[2], r[1]+r[2]);
				line(r[0]+r[2], r[1],r[0], r[1]+r[2]);
			}else{
				//do nothing
			}
		}
		if(this.xWins){
			noStroke();
			fill(255);
			text("X Wins!", windowWidth/2 - textWidth("X Wins!")/2, windowHeight/2-85);
		}else if(this.oWins){
			noStroke();
			fill(255);
			text("O Wins!", windowWidth/2 - textWidth("O Wins!")/2, windowHeight/2-85);
		}else if(this.tie){
			noStroke();
			fill(255);
			text("Tie!", windowWidth/2 - textWidth("Tie!")/2, windowHeight/2-85);
		}else{
			//do nothing!
		}
		
		
		
	}
	
	this.checkWin = function(){
		for(var i = 0; i < this.winStates.length; i++){
			var c1 = this.winStates[i][0];
			var c2 = this.winStates[i][1];
			var c3 = this.winStates[i][2];
			
			if(this.grid[c1] == 1 && this.grid[c2] == 1 && this.grid[c3] == 1){
				//console.log("O Wins");
				//console.log("Game Over");
				this.oWins = true;
				this.gameOver = 1;
			
			}else if(this.grid[c1] == 2 && this.grid[c2] == 2 && this.grid[c3] == 2){
				//console.log("X Wins");
				//console.log("Game Over");
				this.xWins = true;
				this.gameOver = 1;
			
			}else{
				if(this.turnCount > 8){
					//console.log("Cats Game!");
					//console.log("Game Over");
					this.tie = true;
				}
				//do nothing
			}
		}
	}
	
	this.takeTurn = function(x, y){
		if(this.gameOver == 0){
			for(var i = 0; i < this.gridDisp.length; i++){
				var r = this.gridDisp[i];
				if(x > r[0] && x < r[0]+r[2]){
					if(y > r[1] && y < r[1]+r[2]){
						this.turn(i);
					}
					else{
						//do nothing
					}
				}
				else{
					//do nothing
				}
			}
		this.checkWin();
		}else{
			//console.log("Game Over");
		}
	}
	
	this.mousePressed = function(x, y){
		this.takeTurn(x, y);
		
	}	
}