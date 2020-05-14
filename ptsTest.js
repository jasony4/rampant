

window.demoDescription = "A circle moves in a field of random points. If a point intersects with the circle, it grows bigger and moves slightly toward the circle's center.";

Pts.quickStart( "#canvasTest", "#1f2833" );

//// Demo code starts (anonymous function wrapper is optional) ---

(function() {
  
  var pts = new Group();
  var pts2 = new Group();
  var pts3 = new Group();
  var pts4 = new Group();
  var pts5 = new Group();
  var pts6 = new Group();
  var pts7 = new Group();
  var pts8 = new Group();
  var pts9 = new Group();
 

  space.add( { 

    // init with 500 random points 
         start:  (bound) => { pts = Create.distributeRandom( space.innerBound, 100);
                              pts2 = Create.distributeRandom( space.innerBound, 200);
                            pts3 = Create.distributeRandom( space.innerBound, 200);
                          pts4 = Create.distributeRandom( space.innerBound, 200);
                        pts5 = Create.distributeRandom( space.innerBound, 200);
                        pts6 = Create.distributeRandom( space.innerBound, 200); 
                        pts7 = Create.distributeRandom( space.innerBound, 2); 
                        pts8 = Create.distributeRandom( space.innerBound, 300);
                        pts9 = Create.distributeRandom( space.innerBound, 200);
                       

                  },
    
    animate: (time, ftime) => {



      
      // check if each point is within circle's range
      for (let i=0, len=pts8.length; i<len; i++) {


          form.fillOnly("whitesmoke").point(pts[i], 1);
          form.fillOnly("white").point(pts2[i], 0.5);
          form.fillOnly("whitesmoke").point(pts3[i], 0.5);
          form.fillOnly("whitesmoke").point(pts4[i], 0.5);
          form.fillOnly("whitesmoke").point(pts5[i], 1.5);
          form.fillOnly("#fcf923").point(pts6[i], 0.5);
          form.fillOnly("#fcf923").point(pts7[i], 1);
          form.fillOnly("#1f2833").point(pts8[i], 10);
          form.fillOnly("#fcf923").point(pts9[i], 0.5);
          
          
           

      }
      pts.rotate2D( 0.0002, space.center);
      pts2.rotate2D( 0.00035, space.center);
      pts3.rotate2D( 0.00025, space.center);
      pts4.rotate2D( -0.00005, space.center);
      pts5.rotate2D( -0.00000, space.center);
      pts6.rotate2D( -0.00003, space.center);
      pts7.rotate2D( -0.0005, space.center);
      pts8.rotate2D( -0.75, space.center);
      pts9.rotate2D(0.00015, space.center);
      
      
    }
    
  });
  
  //// ----
  
  
  space.bindMouse().bindTouch().play();
  
})();
