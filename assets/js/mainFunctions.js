let crclCursor = document.querySelector('.cursor__circle');

// let img = document.querySelector('.coverImg');
//!let filter = document.querySelector('.filter');
// let content = document.querySelector('.coverContent');
let opts = document.querySelectorAll('.coverOpt');
let blurcontent = document.querySelectorAll('.blurover');


window.addEventListener('mousemove', function(e){
    // for the cursor
    crclCursor.style.left = e.clientX -32 +'px';
    crclCursor.style.top = e.clientY-32 +'px';
});


//for the blur effect
opts.forEach((opt) => {
    opt.addEventListener('mouseenter', function(){
        blurcontent.forEach(el => {
            el.style.filter = 'blur(10px)';
        })
        opts.forEach(option => {
            option.style.filter = 'blur(10px)';
        })
        opt.style.filter = 'blur(0px)';
    });
    
    opt.addEventListener('mouseleave', function(){
        // content.style.filter = 'blur(0px)';
        blurcontent.forEach(el => {
            el.style.filter = 'blur(0px)';
        })
        opts.forEach(option => {
            option.style.filter = 'blur(0px)';
        //!    document.querySelector(`#${option.id}`).style.filter = 'blur(0px)';
        //!    // document.querySelector(`.${option.id}`).style.backgroundImage = '';
        })
        //!img.style.filter = 'contrast(80%) saturate(40%) grayscale(10%) brightness(1.1) blur(10px)';
        //!filter.style.filter ='blur(10px)';
        // document.querySelector('.coverImg').src = '/assets/img/portfolio/eco-meow2.png';
    });
});