function setup(){
    createCanvas(windowHeight,windowHeight);
    background(0)
}

function draw(){


    for(let i =0; i<1000;i++){
        let x = random(width);
        let y = random(height);
        //fill((x)%255,(x/2+y*2)%255,y%255)

        //fill((x)%255,(x**(y/500))%255,y%255)
        //fill((x**(y/500))%255,(x)%255,y%255)
        fill((x)%255,y%255,(x**(y/500))%255)
        //fill((x)%255,(x**(y/500))%255,y%255)


        ellipse(x, y, 10,10)
    }
    
}





function showGrid(){
    for (let j =0; j < rows; j++) {
      for (let i =0; i < cols; i++) {
        // set color
        if (grid[j][i]==1) {
          fill(255, 150, 50);  // sand
        } else if (grid[j][i] == 2) {
          fill(10, 140, 250); // water
        } else if (grid[j][i] == 3) {
          fill(170, 163, 163); // rock
        } else {
          fill(0);  // empty
        }
  
        rect(i*sz, j*sz, sz, sz); // whoops!! this is standard x, y
      }
    }
    
    
    
  }
  
  
  
  
  /// make two dim arrays
  
  function twoDarr(rows,cols,data){
    // function returns an array  rows by columns
    let myarr =[];
    for(let j =0; j<rows;j++){
      myarr[j] = [];
     for(let i=0; i<cols;i++){
       myarr[j][i] = data;
     }
    }
    return myarr;
    
  }