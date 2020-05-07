

window.demoDescription = "A circle moves in a field of random points. If a point intersects with the circle, it grows bigger and moves slightly toward the circle's center.";

Pts.quickStart( "#canvasTest", "#1f2833" );

//// Demo code starts (anonymous function wrapper is optional) ---

(function() {
  
  var pts = [];
  var colors = ["#0b0c10", "#1f2833", "#c5c6c7", "#66fcf1", "#45a29e"];

  space.add( { 

    // init with 500 random points 
    start: (bound) => { pts = Create.distributeRandom( space.innerBound, 1000 ); },

    animate: (time, ftime) => {
      
      let r = Math.abs( space.pointer.x-space.center.x )/space.center.x * 150 + 70;
      let range = Circle.fromCenter( space.pointer, r );
      
      // check if each point is within circle's range
      for (let i=0, len=pts.length; i<len; i++) {

        if ( Circle.withinBound( range, pts[i] ) ) {

          // calculate circle size
          let dist = (r - pts[i].$subtract(space.pointer).magnitude() ) / r;
          let p = pts[i].$subtract( space.pointer ).scale( 1+dist ).add( space.pointer );
          form.fillOnly( colors[i%4] ).point( p, dist*25, "circle" );
          //rotate points
          pts.rotate2D( Const.one_degree / 10, space.center);
        } else {
          form.fillOnly("#fff").point(pts[i], 0.5);
        }

      }
    }

  });
  
  //// ----
  
  
  space.bindMouse().bindTouch().play();
  
})();
