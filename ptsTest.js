Pts.namespace( window );

var run = Pts.quickStart( "#hello", "#fff", true );

// quickStart returns a function wrapper for use in animation loop, eg:
run( function(time, ftime) { 
    space.add( (time , ftime) => {
        var rect = Rectangle.fromCenter( space.center, space.size.$divide(2));
        var poly = Rectangle.corners( rect );
        poly.shear2D(Num.cycle( time%5000/5000 ) - 0.5, space.center );
        form.fillOnly("#1f2833").polygon( poly );
        form.strokeOnly("#45A29E ",3).rect( rect );
    });
} );
