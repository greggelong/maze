class Cell {
    constructor(i,j){
        //i and j are values in grid
        //x and y are values on canvas mult by cell width
        this.i =i;
        this.j=j;
        this.walls =[true,true,true,true]
        this.visited = false;
        this.x = i*w;
        this.y = j*w;
    }

    showCell(){
        
        stroke(255);
        if (this.walls[0]) {
        line(this.x, this.y, this.x + w, this.y);
        }
        if (this.walls[1]) {
        line(this.x + w, this.y, this.x + w, this.y + w);
        }
        if (this.walls[2]) {
        line(this.x + w, this.y + w, this.x, this.y + w);
        }
        if (this.walls[3]) {
        line(this.x, this.y + w, this.x, this.y);
        }

        if (this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(this.x, this.y, w, w);
        }
    

    }
}