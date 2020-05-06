// add Pts to global scope
Pts.namespace( window );
var run = Pts.quickStart("#canvasTest", "#66FCF1");
run( function(time,ftime){
    //create rectangle from center of space with size being half the spaces size
    // Rectangle.fromCenter(center, size) : stores a group of 2 pts (top-left, bottom-right)
var rect = Rectangle.fromCenter(space.center, space.size.$divide(4));
// create a polygon by taking rects corners and creating 4 pts (,,,)
var poly = Rectangle.corners( rect );
// use the shear 2d function to shear the polygon at the spaces center
// amount of shearing cycles between -0.5 to 0.5 every 5 seconds
// shape.shearfunction(cycle , shear from)
poly.shear2D(Num.cycle(time%5000/5000)-0.5, space.center);
//fill polygon in gold
form.fillOnly("#fcf923").polygon(poly);
//stroke rectangle 
form.strokeOnly("#fff", 3).rect( rect );


});

