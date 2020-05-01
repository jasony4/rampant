function rotateLogo(){
    anime({
    targets: '.bottomImg',
    rotate: 360,
    duration: 1000,
    delay: 1000,
    easing: 'easeInOutSine'
})};

rotateLogo();