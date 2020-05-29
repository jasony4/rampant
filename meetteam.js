$(document).ready(function(){
    
        
    flag=1;
     $("#nex").click(function(){
        if(flag==0)
         {
             $("#side1").css("z-index","999");
             $("#side2").css("z-index","9");
             $("#side3").css("z-index","9");
             $("#side1").css("transform","translateX(0px) scale(1.5)");
             $("#side2").css("transform","translateX(-200px) scale(1)");
             $("#side3").css("transform","translateX(200px)");
             /* $("#jay-contact-bar").css("display","inline-block");
             $("#alex-contact-bar").css("display","none");
             $("#jaysballie-contact-bar").css("display","none"); */
             $("#jay-contact-bar").css("opacity","1");
             $("#alex-contact-bar").css("opacity","0");
             $("#jaysballie-contact-bar").css("opacity","0");
             flag=1;
         }
         else if(flag==1)
         {
             $("#side3").css("z-index","999");
             $("#side2").css("z-index","9");
             $("#side1").css("z-index","9");
             $("#side3").css("transform","translateX(0px) scale(1.5)");
             $("#side1").css("transform","translateX(-200px) scale(1)");
             $("#side2").css("transform","translateX(200px)");
             /* $("#jay-contact-bar").css("display", "none");
             $("#alex-contact-bar").css("display","none");
             $("#jaysballie-contact-bar").css("display","inline-block"); */
             $("#jay-contact-bar").css("opacity","0");
             $("#alex-contact-bar").css("opacity","0");
             $("#jaysballie-contact-bar").css("opacity","1");
             flag=2;
         }
         else if(flag==2)
         {
             $("#side2").css("z-index","999");
             $("#side3").css("z-index","9");
             $("#side1").css("z-index","9");
             $("#side2").css("transform","translateX(0px) scale(1.5)");
             $("#side3").css("transform","translateX(-200px) scale(1)");
             $("#side1").css("transform","translateX(200px)");
             /* $("#jay-contact-bar").css("display", "none");
             $("#alex-contact-bar").css("display","inline-block");
             $("#jaysballie-contact-bar").css("display","none"); */
             $("#jay-contact-bar").css("opacity","0");
             $("#alex-contact-bar").css("opacity","1");
             $("#jaysballie-contact-bar").css("opacity","0");
             flag=0;
         }
     });
     $("#pre").click(function(){
        if(flag==0)
         {
             $("#side3").css("z-index","999");
             $("#side2").css("z-index","9");
             $("#side1").css("z-index","9");
             $("#side3").css("transform","translateX(0px) scale(1.5)");
             $("#side1").css("transform","translateX(-200px) scale(1)");
             $("#side2").css("transform","translateX(200px)");
             $("#jay-contact-bar").css("opacity","0");
             $("#alex-contact-bar").css("opacity","0");
             $("#jaysballie-contact-bar").css("opacity","1");
             flag=2;
         }
         else if(flag==1)
         {
             $("#side2").css("z-index","999");
             $("#side3").css("z-index","9");
             $("#side1").css("z-index","9");
             $("#side2").css("transform","translateX(0px) scale(1.5)");
             $("#side3").css("transform","translateX(-200px) scale(1)");
             $("#side1").css("transform","translateX(200px)");
             $("#jay-contact-bar").css("opacity","0");
             $("#alex-contact-bar").css("opacity","1");
             $("#jaysballie-contact-bar").css("opacity","0");
             flag=0;
         }
         else if(flag==2)
         {
             $("#side1").css("z-index","999");
             $("#side2").css("z-index","9");
             $("#side3").css("z-index","9");
             $("#side1").css("transform","translateX(0px) scale(1.5)");
             $("#side2").css("transform","translateX(-200px) scale(1)");
             $("#side3").css("transform","translateX(200px)");
             $("#jay-contact-bar").css("opacity","1");
             $("#alex-contact-bar").css("opacity","0");
             $("#jaysballie-contact-bar").css("opacity","0");
             flag=1;
             
         }
     }); 
     
        
        
 });
 var interval;
 var timer = function(){
 interval = setInterval(function(){ 

    $("#nex").click();
 },3000);
};
timer();
$("#nex").click(function(){
    clearInterval(interval);
    timer();
});