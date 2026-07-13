// specific functions

// let crclCursor = document.querySelector('.cursor__circle');
let workImg = document.querySelector('#showingImg');
let img = document.querySelector('.coverImg');
// //!let filter = document.querySelector('.filter');
let content = document.querySelector('.coverContent');
// let opts = document.querySelectorAll('.coverOpt');
// let blurcontent = document.querySelectorAll('.blurover');
let navLinks = document.querySelector('.navLinks');
let navBtn = document.querySelector('#navBtn');

let hmoves = document.querySelectorAll('.hmove');
let hmoves2 = document.querySelectorAll('.hmove2');
let abtmeVector = document.querySelector('.abtmeVector');



let works = document.querySelectorAll('.works');


let originalImgW = img.offsetWidth;
let originalImgH = img.offsetHeight;
let originalImgPos = img.style.transform;

let scrollListener = 0;


//collapsable navbar
window.addEventListener('scroll', ScrollAnims)
window.addEventListener('resize', ScrollAnims)
//for the scroll animations
function ScrollAnims(){
    const htmlElement = document.documentElement
     const percentScroll = htmlElement.scrollTop / htmlElement.clientHeight
     htmlElement.style.setProperty("--scroll", Math.min(percentScroll*100, 100))

     hmoves.forEach(hmove => {
             hmove.style.left = (percentScroll -4)*30+"%"
     });

     hmoves2.forEach(hmove => {
             hmove.style.right = (percentScroll -4.3)*30+"%"
     });

    abtmeVector.style.transform = `rotate(${(percentScroll) * 200}deg)`;


     //! LISTENER P QUANDO O SCROLL VAI DE <100 P 100 - menu navs + coverimg
    if (window.scrollY > 0) {

        img.style.height = Math.abs((window.scrollY)/2) + "%";
        img.style.width = Math.abs((window.scrollY)/2) + "%";

        img.style.bottom = 0 +"px";
        img.style.right = -Math.abs((window.scrollY)/6) + "px";

    }else if(window.scrollY < 50){
        //? to go back to the original size and position
        img.style.height = originalImgH + "em";
        img.style.width = originalImgW + "em";

        img.style.right = ((window.innerWidth/2) - img.style.innerWidth)+"px";
        img.style.bottom = ((window.innerHeight/8) - img.style.innerHeight)+"px";

    }

    // para o botao do menu aparecer
    if (window.scrollY > 100) {
        navBtn.style.display = 'flex';

        navbar.classList.add('difference');
        navLinks.style.display = 'none';
    }else{
    navBtn.style.display = 'none';

    navbar.classList.remove('difference');
    navLinks.style.display = 'flex';
    }

}

// workImg.style.display = 'none';
document.body.addEventListener('mousemove', function(e){
        //! i wanna do: if cursor is on one of the titles, then show (this eliminates the need for the mousemove event, making so the image changes when scrolling. )
        // if(e.clientX == ){}

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

            img.style.right = (e.clientX - ( originalImgW/1.5 - window.innerWidth/2))+"px";
            img.style.bottom = (e.clientY - (3*originalImgH/2 - window.innerHeight/2))+"px";

            content.style.left = (e.clientX - (window.innerWidth/2 ))/40+"px";
            content.style.top = (e.clientY - (window.innerHeight/2 ))/40+"px";

        }
    });


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

    // for mobile devices (non-interactable)
}else{
    img.style.right = (6*window.innerWidth)+"rem";
    img.style.bottom = (window.innerHeight)+"rem";
    // img.style.width = '60vw';
}


document.addEventListener('scrollend', function(){
    abtmeVector.style.transition = 'transform 0.7s ease-out';
})

function OnHoverShowImg(path) {
    console.log(path);
    // workImg.classList.add('invisible');
    workImg.src = "assets/img/portfolio/" + path + ".png";
    workImg.style.display = "block";
}

function OnHoverHideImg() {
    // workImg.classList.add('invisible');
    workImg.style.display = "none";
}


//** */ for the skills section


// marqueeLines.forEach((line, index) => {
//     const isRightToLeft = line.classList.contains('right-to-left');
//     let position = isRightToLeft ? 0 : -50;
//     const speed = 0.02; // Adjust for speed
    
//     function animate() {
//         if (isRightToLeft) {
//             position -= speed;
//             if (position <= -50) position = 0;
//         } else {
//             position += speed;
//             if (position >= 0) position = -50;
//         }
//         line.style.transform = `translateX(${position}%)`;
//         requestAnimationFrame(animate);
//     }
//     animate();
// });

//last button to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
}

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