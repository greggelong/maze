## maze stuff


The absolute best book on mazes 
"mazes for programmers" by Jamis Buck

His clear explanation of the simple binary tree algorithm

and its biases and texture are really instructive.

He gives clear examples. I have followed his draw-by-hand

description from chapter 1 and put it in to javaScript

His code is in ruby and covered in chapter 2.

-----------

https://greggelong.github.io/maze/binaryTree/

https://greggelong.github.io/maze/binaryTreeAscii/

https://greggelong.github.io/maze/binaryTreeAsciiConnect/


ascii animations 

https://greggelong.github.io/maze/binaryTreeAsciiRunners/

only animated one runner in ascii so I don't actually call the ascii show function

6/8/22  d/m/y
I am having trouble doing dijkstra algorithm as a result of my sloppy set up

I need to first check only unvisited neighbors but
'
currently I am checking all neighbors so the root will become overwritten 

need to have a 

--- 
7/8/22 problem solved

Using Dijkstra's algorithm to flood the maze with distances from the root (the center in these images). Brightness of the color is tied to distance. Jamis Buck's book mazes has a great explanation of the algorithm. My implementation felt a bit messy in javaScript but after a nightmare about the algorithm I was able to get it to work. The runners can access the distances or use the algorithm to calculate a different path. And in general I like longest paths. As my maze like life has no exit, or at least one I don't want to take. #maze #javascript #python #creativecoding #p5js #p5xjs #math 

number distances 

https://greggelong.github.io/maze/binaryTreeDijkstra


distances using 1000 character essay

https://greggelong.github.io/maze/binaryTreeDijkstra1000


I added a longest path algorithm but it but it had a problem as I assumed there would only be one longest path but their could be two

so changed algorithm to a while loop and it works see images

-------

Jamis Buck in his book "Mazes" explains that a maze texture and bias arise from the algorithm that generates them. 

The binary tree algorithm uses coin flips that either remove a cells north wall or east wall.

This produces a maze that has the interesting texture of long unbroken north and east corridors. 

These make such a maze trivial to escape if the exit is in that direction. 

But starting from the north east corner and exiting at south west is much less trivial.

This can be an analogy for the mazes of options in our life.  What processes are removing or placing walls or obstacles.  What textures and biases do our problems have. And maybe a change of perspective can help us solve these problems.






other links


https://en.wikipedia.org/wiki/Maze_generation_algorithm

http://www.astrolog.org/labyrnth/algrithm.htm#perfect


http://weblog.jamisbuck.org/2011/2/7/maze-generation-algorithm-recap


http://weblog.jamisbuck.org/2011/1/24/maze-generation-hunt-and-kill-algorithm


maze generation in basic for c64

http://www.defiancestudios.com/2019/03/20/recursive-backtracker-making-the-maze/
