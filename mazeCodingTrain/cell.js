class Cell {
    constructor(i,j){
        //i and j are values in grid
        //x and y are values on canvas mult by cell width
        this.i =i;
        this.j=j;
        this.walls =[true,true,true,true]
        this.visited = false;
        this.x = i*w;
        this.j = j*w;
    }

    showCell(){
        
        stroke(255);
        if (this.walls[0]) {
        line(x, y, x + w, y);
        }
        if (this.walls[1]) {
        line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
        line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
        line(x, y + w, x, y);
        }

        if (this.visited) {
        noStroke();
        fill(255, 0, 255, 100);
        rect(x, y, w, w);
        }
    

    }
}