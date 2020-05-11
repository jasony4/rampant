function stars(){

Pts.quickStart( "#canvasTest", "#1f2833" );
(function() {
  
var pts = new Group();

space.add( { 

    // init with 500 random points 
    start:  (bound) => { pts = Create.distributeRandom( space.innerBound, 500);
                  console.log("pts1:",pts)

                  },
    
    animate: (time, ftime) => {


        
        for (let i=0, len=pts.length; i<len; i++) {
            form.fillOnly("whitesmoke").point(pts[i], 0.5);
          } 

          
          
      
      
    },

    
    
  });
  //// ----
  
  
  space.bindMouse().bindTouch().play();
  
})();
}
stars();
$(window).resize(function(){
    space.removeAll();
    $('canvas').remove();
    stars();
  });