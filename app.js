function rotateLogo(){
    anime({
    targets: '.bottomImg',
    rotate: 360,
    duration: 1000,
    delay: 1000,
    easing: 'easeInOutSine'
})};

rotateLogo();
window.onscroll = function(ev) {
    var footer = document.getElementsByTagName("footer")[0];
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block";
    }
    else{
        footer.style.display = "none";
    }
};
