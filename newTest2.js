Pts.namespace(this);
var space = new CanvasSpace("#canvasTest").setup({ bgcolor: "#1f2833" });
var form = space.getForm();
var pts = new Group();

space.add({
    start:  (bound) => { pts = Create.distributeRandom( space.innerBound, 500);
        console.log("pts1:",pts)

        },
    animate: (time,ftime) =>{
        
            for(let i=0; i<pts.length;i++){
                form.fillOnly("whitesmoke").point(pts[i], 1);
            }
        
    }
        
});

