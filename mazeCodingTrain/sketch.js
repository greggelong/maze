function setup(){
    createCanvas(windowHeight,windowHeight);
    background(0)
}

function draw(){


    for(let i =0; i<1000;i++){
        let x = random(width);
        let y = random(height);
        //fill((x)%255,(x/2+y*2)%255,y%255)

        fill((x)%255,(x**(y/500))%255,y%255)


        ellipse(x, y, 10,10)
    }
    
}