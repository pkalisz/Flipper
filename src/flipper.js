F = {
	//canvas width
	width: 0,
	
	//canvas height
	height: 0,
	
	//new starting point x coordinate
	fx:0,
	
	//new starting point y coordinate
	fy:0,
	
	//method sets all of properties, needs be invoked
	init: function(width, height, nx, ny){
		this.width = width;
		this.height = height;
		
		this.fx = 0;
		this.fy = 0;
		
		if(nx != undefined){
			this.fx = nx;
		}
		
		if(ny != undefined){
			this.fy = ny;
		}
	},
	
	//transforms original x coordinate to x in a new coordinate system
	x: function(ox){
		return(this.fx + ox);
	},

	//transforms original y coordinate to y in a new coordinate system	
	y: function(oy){
		return (this.height - this.fy - oy)
	}
} 