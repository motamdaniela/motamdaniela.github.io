let crclCursor = document.querySelector('.cursor__circle');
let workImg = document.querySelector('#showingImg');
let img = document.querySelector('.coverImg');
//!let filter = document.querySelector('.filter');
let content = document.querySelector('.coverContent');
let opts = document.querySelectorAll('.coverOpt');
let blurcontent = document.querySelectorAll('.blurover');
let navLinks = document.querySelector('.navLinks');
let navBtn = document.querySelector('#navBtn');

let hmoves = document.querySelectorAll('.hmove');
let hmoves2 = document.querySelectorAll('.hmove2');

let works = document.querySelectorAll('.works');


let originalImgW = img.offsetWidth;
let originalImgH = img.offsetHeight;

let scrollListener = 0;



// workImg.style.display = 'none';


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
    img.style.right = (window.innerWidth/2 - img.innerWidth/2)+"px";
    img.style.bottom = (window.innerHeight/8)+"px";

    document.body.addEventListener('mousemove', function(e){
        // for the cursor
        crclCursor.style.left = e.clientX -32 +'px';
        crclCursor.style.top = e.clientY-32 +'px';

        workImg.style.left = e.clientX +32 +'px';
        workImg.style.top = (window.innerHeight - e.clientY +32) +'px';

        workImg.style.top = e.clientY -150 +'px';

        //? for when the scrolling begins (space for the img to stop being interactable and grow)
        if(window.scrollY > 0){
            img.style.right = ((1.5*window.innerWidth/4) - img.style.innerWidth)+"px";
            img.style.bottom = ((window.innerHeight/8) - img.style.innerHeight)+"px";

        }
        else{  
            img.style.height = 2 + 'em';
            img.style.width = 2 + 'em'; 
            // for the cover image
            // img.style.right = 
            // // filter.style.right = 
            // (e.clientX - (window.innerWidth/2 - img.width/2))+"px";
            // img.style.bottom = 
            // // filter.style.bottom = 
            // (e.clientY - (window.innerHeight/2 - img.height/2))+"px";
    
            img.style.right = (e.clientX - ( originalImgW/1.5 - window.innerWidth/2))+"px";
            img.style.bottom = (e.clientY - (3*originalImgH/2 - window.innerHeight/2))+"px";
        
            content.style.left = (e.clientX - (window.innerWidth/2 ))/40+"px";
            content.style.top = (e.clientY - (window.innerHeight/2 ))/40+"px";
        
        }
    });

    // for mobile devices (non-interactable)
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
    // img.style.width = '60vw';
}


//for the cover opts
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

// document.body.addEventListener('mouseleave', function(){
//     //* crclCursor.style.scale = 0;
// })
// document.body.addEventListener('mouseenter', function(){
//     //* crclCursor.style.scale = 1;
// })


//collapsable navbar
window.addEventListener('scroll', ScrollAnims)
window.addEventListener('resize', ScrollAnims)

//for the school animations
function ScrollAnims(){
    const htmlElement = document.documentElement
     const percentScroll = htmlElement.scrollTop / htmlElement.clientHeight
     htmlElement.style.setProperty("--scroll", Math.min(percentScroll*100, 100))


    //  const num = -1%*(max(var(Math.min(percentScroll*100, 100)), 25)-25)*100/75
    // htmlElement.style.translate = (Math.min(percentScroll*100, 100) 0).toString()
     
     hmoves.forEach(hmove => {
        // const curPos = hmove.style.left;
             hmove.style.left = (percentScroll -4)*30+"%"
     });

     hmoves2.forEach(hmove => {
        // const curPos = hmove.style.left;
             hmove.style.right = (percentScroll -4)*30+"%"
     });

     
     //! LISTENER P QUANDO O SCROLL VAI DE <100 P 100 - menu navs + coverimg
    if (window.scrollY > 0) {
        
        // img.style.bottom = ((window.innerHeight/2) - img.innerHeight/2)+"px";
        
        // img.style.right = ((window.innerWidth/2) - img.innerWidth/2)+"px";
        // img.style.height = originalImgH - Math.abs(window.scrollY /2) + "%";
        // img.style.width = originalImgW - Math.abs(window.scrollY/2) + "%";

        img.style.height = Math.abs(window.scrollY /2) + "%";
        img.style.width = Math.abs(window.scrollY/2) + "%";
        
        img.style.bottom = ((window.innerHeight/2) - img.innerHeight/2) + "px";
        img.style.right = ((window.innerWidth/2) - img.innerWidth/2) + "px";

    }else{
        //? to go back to the original size and position
        img.style.height = originalImgH + "em";
        img.style.width = originalImgW + "em";

        img.style.right = ((window.innerWidth/2) - img.style.innerWidth)+"px";
        img.style.bottom = ((window.innerHeight/8) - img.style.innerHeight)+"px";

    }

    
    if (window.scrollY > 100) {
        navLinks.style.animation = 'close 0.3s ease-in both';
        navLinks.style.animationDirection = 'normal';
        navBtn.style.display = 'flex';
        // navLinks.style.display = 'none';~
    }else{
    navBtn.style.display = 'none';
    navLinks.style.animation = 'close 0.3s ease-in both';
    navLinks.style.animationDirection = 'reverse';
    // navLinks.style.display = 'flex';
    }

    // scrollListener = window.scrollY;
}

document.addEventListener('scrollend', function(){
    hmoves.forEach(hmove => {
        // hmove.classList.remove('anim')
    });
})

function OnHoverShowImg() {
    // workImg.classList.add('invisible');
    workImg.style.display = "block";
}

function OnHoverHideImg() {
    // workImg.classList.add('invisible');
    workImg.style.display = "none";
}


// works.forEach(work => function(){
//     work.addEventListener('mouseenter', function(){
//         workImg.style.display = "block";

//         work.style.display = "none";
//         crclCursor.style.display = "none";
//         console.log("hereee");
//     })

//     work.addEventListener('click', function(){
//         workImg.style.display = "block";

//         work.style.display = "none";
//         crclCursor.style.display = "none";
//         console.log("hereee");
//     })

//     work.addEventListener('mouseleave', function(){
//         workImg.style.display = "none";
//         crclCursor.style.display = "fixed";
//     })
// })





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