class Runner {
    constructor(i,j, colr){
        //i and j are values in grid
        // 
        this.i = i;
        this.j = j;
         
        this.colr = colr;
         
    }

    moveRunner(){
        //turn off runner// dont need  to turn off an on as they are not in the grid but over the grid
        
        // move and change runner
        let options = grid[this.j][this.i].connected  // get the options from the grid a
        let move = random(options);
        // move the runner coords
        if (move === 'north'){
            this.j -=1; //  
        }
        else if (move === 'south'){
           this.j +=1;
        }
        else if (move === 'east'){
            this.i +=1;
        }
        else if (move === 'west'){
            this.i -=1
        }
    
    }


    showRunner(){

        noStroke();
        fill(this.colr);
        rect(this.i*w, this.j*w, w-2, w-2);

    }

}