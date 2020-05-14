// setup
// add pts to global scope 
Pts.namespace(window);
// create space using new CanvasSpace(element)
// can split to space.setup({bg-color})
var space = new CanvasSpace("#canvasTest").setup({ bgcolor: "#fff" });
//init form (pen)
var form = space.getForm();
// variables
var pts = [];
var colors = ["#0b0c10", "#1f2833", "#c5c6c7", "#66fcf1", "#45a29e"];
var i = 0;
var len = pts.length;
// animation
space.add( () => {
    start: (bound) => {pts = Create.distributeRandom( space.innerBound, 1000);}
    animate: (time) => {
        let r = Math.abs( space.pointer.x-space.center.x)/space.center.x * 150 + 70;
        for (i; i < len; i++){
            if(Circle.withinBound(range, pts[i])){
                let dist = (r-pts[i].$subtract(space.pointer).magnitude())/r;
                let p = pts[i].$subtract(space.pointer).scale(1+dist).add(space.pointer);
                form.fillOnly( colors[i]).point(p, dist*20, "circle");
            }
            else{
                form.fillOnly("#c5c6c7").point(pts[i], 0.5);
            }
        }
    }

});

space.bindMouse().bindTouch().play();
