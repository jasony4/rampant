// setup
// add pts to global scope 
Pts.namespace(this);
// create space using new CanvasSpace(element)
// can split to space.setup({bg-color})
var space = new CanvasSpace("#canvasTest").setup({ bgcolor: "#1f2833" });
//init form (pen)
var form = space.getForm(space);
var pts=[];
// animation
space.add( (time) => {

    var pts = [];
 


  
      // init with 500 random points 
      start: (bound) => { pts = Create.distributeRandom( space.innerBound, 250); };
  
      animate: (time, ftime) => {
        
  
  
        
        // check if each point is within circle's range
        for (let i=0, len=pts.length; i<len; i++) {
  
  
            form.fillOnly("whitesmoke").point(pts[i], 0.5);
          
  
        }
      }
      
;
    
    //// ----
    
    
    space.bindMouse().bindTouch().play();
    

    console.log(pts)
});

space.play().bindMouse();
