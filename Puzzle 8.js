down();
var number=0
while(number<2){
if(number==0){
  for(olivia=0; olivia<7; olivia++){
    down();
  }
  right();
  right();
}if(number==1){
  for(olivia=0; olivia<7; olivia++){
    up();
  }
  right();
  right();
}

  number=1-number;
}
-----------------------------------------

function repeatSeven(direction) {
  direction();
  direction();
  direction();
  direction();
  direction();
  direction();
  direction();
}

down();
var number=0
while(number<2){
  var direction;
if(number==0){
  direction=down;
}else {
  direction=up;
}
    repeatSeven(direction);
  right();
  right();
  
 number=1-number;
}
------------------------------------

function repeatSeven(direction) {
  direction();
  direction();
  direction();
  direction();
  direction();
  direction();
  direction();
}

down();
var sequence = 0
while ( sequence < 5 ){
  var direction;
  if (sequence % 2 == 0) {
    direction = down;
  } else {
    direction = up;
}
  repeatSeven(direction);
  right();
  right();
  sequence = sequence + 1;
}
right();
--------------------------------



function directiondown(){
  down();
  down();
  down();
  down();
  down();
  down();
  down();
  right();
}
function directionup(){
  up();
  up();
  up();
  up();
  up();
  up();
  up();
  right();

}

down();
directiondown();
right();
directionup();
right();
directiondown();
right();
directionup();
right();
directiondown();

