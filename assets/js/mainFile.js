//* let crclCursor = document.querySelector('.cursor__circle');
let img = document.querySelector('.coverImg');
//!let filter = document.querySelector('.filter');
let content = document.querySelector('.coverContent');
let opts = document.querySelectorAll('.coverOpt');
let blurcontent = document.querySelectorAll('.blurover');
let navLinks = document.querySelector('.navLinks');
let navBtn = document.querySelector('#navBtn');

let hmoves = document.querySelectorAll('.hmove');


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  }
//infoContent
//hlInfo
//coverInfo
//navbar

// id="optfront
// id="optweb">
// id="optdig">
// id="optint">

// let opts = document.querySelector('.CoverOpt');
// const $hover = document.querySelectorAll('a');

// filter.style.right = img.style.right
// filter.style.bottom = img.style.bottom

// function MouseInteractions(){}
if(window.innerWidth > 800){
    img.style.right = 
    // filter.style.right =
     (2*window.innerWidth/4)+"px";
    img.style.bottom = 
    // filter.style.bottom = 
    (window.innerHeight/8)+"px";

    document.body.addEventListener('mousemove', function(e){
        //for the cursor
        //* crclCursor.style.left = e.clientX -32 +'px';
        //* crclCursor.style.top = e.clientY-32 +'px';
    
        // for the cover image
        img.style.right = 
        // filter.style.right = 
        (e.clientX - (window.innerWidth/1.8 - img.width*1.5))+"px";
        img.style.bottom = 
        // filter.style.bottom = 
        (e.clientY - (window.innerHeight/2 - img.height/3))+"px";
    
        content.style.left = (e.clientX - (window.innerWidth/2 ))/40+"px";
        content.style.top = (e.clientY - (window.innerHeight/2 ))/40+"px";
    
    });
}else{
    // img.style.right = 
    // // filter.style.right = 
    // (1.5*window.innerWidth/6)+"px";
    // img.style.bottom = 
    // // filter.style.bottom = 
    // (window.innerHeight/2)+"px";
    // img.style.width = 
    // // filter.style.width = 
    // '60vw';

    img.style.right = (6*window.innerWidth)+"rem";
    img.style.bottom = (window.innerHeight)+"rem";
    img.style.width = '60vw';
}


//for the cover opts
opts.forEach((opt) => {
    opt.addEventListener('mouseenter', function(){
        blurcontent.forEach(el => {
            el.style.filter = 'blur(10px)';
        })
        opts.forEach(option => {
            option.style.filter = 'blur(10px)';
            //!if(option.id != opt.id){
            //!    document.querySelector(`#${option.id}`).style.filter = 'blur(10px)';
            //!}
            //! else{
            //!     switch(option.id){
            //!         case 'optfront':
            //!             document.querySelector('.coverImg').src = '/assets/img/portfolio/tw.png';
            //!             break;
            //!         case 'optweb':
            //!             document.querySelector('.coverImg').src = '/assets/img/portfolio/evergreen.png';
            //!             break;
            //!         case 'optdig':
            //!             document.querySelector('.coverImg').src = '/assets/img/portfolio/video.png';
            //!             break;
            //!         case 'optint':
            //!             document.querySelector('.coverImg').src = '/assets/img/portfolio/eco-meow2.png';
            //!             break;
            //!     }
            //! }
            // if(option.id == optfront){
            //     document.querySelector('.coverImg').src = '/assets/img/portfolio/tw.png';
            // }
        })
        opt.style.filter = 'blur(0px)';
        // document.querySelector(`#${opt.id}`).style.filter = 'blur(0px)';
        //!img.style.filter = 'contrast(80%) saturate(40%) grayscale(10%) brightness(1.1) blur(0px)';
        //!filter.style.filter ='blur(0px)';
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

// document.body.addEventListener('mouseleave', function(){
//     //* crclCursor.style.scale = 0;
// })
// document.body.addEventListener('mouseenter', function(){
//     //* crclCursor.style.scale = 1;
// })


//collapsable navbar
window.addEventListener('scroll', ScrollAnims)
window.addEventListener('resize', ScrollAnims)

function ScrollAnims(){
    const htmlElement = document.documentElement
     const percentScroll = htmlElement.scrollTop / htmlElement.clientHeight
     htmlElement.style.setProperty("--scroll", Math.min(percentScroll*100, 100))


    //  const num = -1%*(max(var(Math.min(percentScroll*100, 100)), 25)-25)*100/75
    // htmlElement.style.translate = (Math.min(percentScroll*100, 100) 0).toString()
     
     hmoves.forEach(hmove => {
        const curPos = hmove.style.left;
        console.log(hmove.style.left);
        // var position = element.getBoundingClientRect();
        // if(position.top >= 0 && position.bottom <= window.innerHeight){
             hmove.style.left = (percentScroll -4)*30+"%"
        // }
     });
    
     //! LISTENER P QUANDO O SCROLL VAI DE <100 P 100
    if (window.scrollY > 100) {
        navLinks.style.animation = 'close 0.3s ease-in both';
        navLinks.style.animationDirection = 'normal';
        navBtn.style.display = 'flex';
        // navLinks.style.display = 'none';
    }else{
        navBtn.style.display = 'none';
        navLinks.style.animation = 'close 0.3s ease-in both';
        navLinks.style.animationDirection = 'reverse';
        // navLinks.style.display = 'flex';
    }
}

document.addEventListener('scrollend', function(){
    hmoves.forEach(hmove => {
        // hmove.classList.remove('anim')
    });
})

// navBtn.addEventListener('mouseover', () => {
//     navLinks.style.animation = 'close 0.3s ease-in both';
//     navLinks.style.animationDirection = 'reverse';
//     // navBtn.style.display = 'none';
// });

// navBtn.addEventListener('mouseleave', () => {
//     navLinks.style.animation = 'close 0.3s ease-in both';
//     navLinks.style.animationDirection = 'normal';
//     navBtn.style.display = 'flex';
// });


// list of projects -----------
let projects = [
    {
        name: 'Training Wheels',
        category: 'Web app',
        description: 'a web app for tutorials on rules on the road',
        photo: '/assets/img/portfolio/eco-meow2.png',
        video: '',
        codeLink: '',
        designLink: '',
        // videoLink: '',
    }
]