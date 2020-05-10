Pts.namespace(this);
var space = new CanvasSpace("#canvasTest").setup({ bgcolor: "#1f2833" });

var pts = new Group();
var x = 0;
space.add({
    start:  (bound) => { pts = Create.distributeRandom( space.innerBound, 500);
        console.log("pts1:",pts)

        },
    animate: (time,ftime) =>{
        
            for(x;x<pts.length;x++){
                form.fillOnly("whitesmoke").point(pts[x], 0.5);
            }
        
    }
        
});

