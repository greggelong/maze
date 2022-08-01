class Cell {
    constructor(i,j){
        //i and j are values in grid
        //x and y are values on canvas mult by cell width w is global
        this.i =i;
        this.j=j;
        this.walls ={up:true,down:true,left:true,right:true}
        this.visited = false;
        this.x = i*w;
        this.y = j*w;
    }


    visitNeighbor(){
        // check for valid free neighbors 
        // move
        // need to convert grid 1 d to two d array
        // use an index() function that also checks if it is valid
        // in bounds
        let vfn = [];  //valid free neighbor
        // only in bounds
        let bottom, top, left, right;
        if (this.j >0){

            top = grid[this.j-1][this.i];
            if (!top.visited){
                vfn.push(top)
            }
        }

        if (this.j<rows-1){
            print("bing",  grid[this.j+1][this.i])
            bottom = grid[this.j+1][this.i];
            if (!bottom.visited){
                vfn.push(bottom)
            }
        }

        if (this.i > 0){
            left = grid[this.j][this.i-1]
            if (!left.visited){
                vfn.push(left)
            }
        }
        if (this.i<cols-1){
            right = grid[this.j][this.i+1]
            if (!right.visited){
                vfn.push(right)
            }
        }

        print("neighbors",vfn)

        // have a working neighbors list
  
    }

    showCell(){
        
        stroke(255);
        if (this.walls.up) {
        line(this.x, this.y, this.x + w, this.y);
        }
        if (this.walls.right) {
        line(this.x + w, this.y, this.x + w, this.y + w);
        }
        if (this.walls.down) {
        line(this.x + w, this.y + w, this.x, this.y + w);
        }
        if (this.walls.left) {
        line(this.x, this.y + w, this.x, this.y);
        }

        if (this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(this.x, this.y, w, w);
        }
    

    }
}