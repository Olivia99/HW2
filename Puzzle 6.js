right();
var firstColor=getColor();
	if(getColor()=="red"){
	up();
  up();
  up();
	direction=0
}else{
  down();
  down();
  down();
  direction=1
}
var secondColor=getColor();
if(getColor()=="blue"){
  right();
}if(getColor()=="red"){
  left();
}
if("direction=0"){
  up();
}if("direction=1"){
  down();
}
