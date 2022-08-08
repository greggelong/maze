class Cell {
    constructor(i,j){
        //i and j are values in grid
        //x and y are values on canvas mult by cell width w is global
        this.i =i;
        this.j=j;
        this.walls ={north:true,south:true,west:true,east:true}
        this.visited = false;
        this.x = i*w;
        this.y = j*w;
        this.connected = [];
        this.onpath = false; // for longest path
        this.distance=0;
    }


    doBinary(){
        // pic north or eastern wall and erase
        // if top row erase eastern wall
        // if eastern col erase top
        // else pick east or north
        
        
        if (this.j == 0){
            // if the cell is the top row and not the far east
            // erase the east wall of this and west wall of eastern neighbor
            if (this.i<cols-1){
                this.walls.east = false;
                grid[this.j][this.i+1].walls.west = false;
                //add connection to the east
                this.connected.push("east")
                grid[this.j][this.i+1].connected.push("west")
            }
        }

        else if (this.i == cols-1){
            this.walls.north = false;
            grid[this.j-1][this.i].walls.south = false;
            this.connected.push("north")
            grid[this.j-1][this.i].connected.push("south")
        }
        
        else{
            let flip = random(["heads", "tails"])
            //print(flip)

            if (flip ==="heads"){
                //erase north and south of above
                this.walls.north = false;
                grid[this.j-1][this.i].walls.south = false;
                this.connected.push("north")
                grid[this.j-1][this.i].connected.push("south")
            }else{
                this.walls.east = false;
                grid[this.j][this.i+1].walls.west = false;
                this.connected.push("east")
                grid[this.j][this.i+1].connected.push("west")
            }
        }

         
        // have a working neighbors list
  
    }

    showCell(){
        
        stroke(0);
        //stroke(0,0,255)
        strokeWeight(map(w,10,120,1,20))
        if (this.walls.north) {
        line(this.x, this.y, this.x + w, this.y);
        }
        if (this.walls.east) {
        line(this.x + w, this.y, this.x + w, this.y + w);
        }
        if (this.walls.south) {
        line(this.x + w, this.y + w, this.x, this.y + w);
        }
        if (this.walls.west) {
        line(this.x, this.y + w, this.x, this.y);
        }

        if (this.visited) {
        noStroke();
        fill(0, 0,255,this.distance*3);
        rect(this.x, this.y, w, w);
        }
        if (this.onpath) {   // show path in red
            noStroke();
            fill(255, 0,0, 100);
            rect(this.x, this.y, w, w);
            }
        //stroke(255);
        noStroke();
        //fill(0,255,0)
        fill(0);
        textSize(w/2)
        if(mouseX<width/2){
        text(words[this.distance],this.x+w/2, this.y+w/2);
        } else{
        text(this.distance,this.x+w/2, this.y+w/2);
        }
    

    }
/*
    dijkstra(){
        
        if (this.rootI === this.i && this.rootJ === this.j){
            this.distance = 0;
        }else{
            let distCount =1;
            while 
        }

    }
    */
}