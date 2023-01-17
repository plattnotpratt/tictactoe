function Game(){
	this.grid = [];
	this.ttt 
	this.init = function(){
		for(var i = 0; i < 9; i++){
			this.grid.push(0);
		}
		this.ttt = new ttt(this.grid);
		console.log(this.grid);
	}
	
	this.load = function(){
				
	}
	
	this.store = function(){	
			
	}
	
	this.render = function(){
		this.ttt.render();
	}
}