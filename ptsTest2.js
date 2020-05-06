// setup
// add pts to global scope 
Pts.namespace(this);
// create space using new CanvasSpace(element)
// can split to space.setup({bg-color})
var space = new CanvasSpace("#canvasTest").setup({ bgcolor: "#fff" });
//init form (pen)
var form = space.getForm();

// animation
space.add( (time) => {

  // rectangle : Rectangle.fromCenter( center , size )
  var rect = Rectangle.fromCenter( space.center, space.size.$divide(2) );
  // polygon from rectangle corners (in the same bounds)
  var poly = Rectangle.corners( rect );
  // shear the polygon between -0.5 to 
  poly.shear2D( Num.cycle( time%5000/5000 ) - 0.5, space.center );
  
  // triangle
  var tris = poly.segments( 2, 1, true );
  tris.map( (t) => t.push( space.pointer ) );
  
  // circle
  var circles = tris.map( (t) => Triangle.incircle( t ) );
  
  // drawing
  form.fillOnly("#123").polygon( poly );
  form.fill("#f03").circles( circles );
  form.strokeOnly("#fff ", 3 ).polygons( tris );
  form.fill("#123").point( space.pointer, 5 );
  
});

space.play().bindMouse();