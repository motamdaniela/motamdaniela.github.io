//* let crclCursor = document.querySelector('.cursor__circle');
let img = document.querySelector('.coverImg');
let filter = document.querySelector('.filter');
let content = document.querySelector('.coverContent');
let opts = document.querySelectorAll('.coverOpt');
let blurcontent = document.querySelectorAll('.blurover');

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

if(window.innerWidth > 800){
    img.style.right = filter.style.right = (2*window.innerWidth/6)+"px";
    img.style.bottom = filter.style.bottom = (window.innerHeight/8)+"px";

    document.body.addEventListener('mousemove', function(e){
        //for the cursor
        //* crclCursor.style.left = e.clientX -32 +'px';
        //* crclCursor.style.top = e.clientY-32 +'px';
    
        // for the cover image
        img.style.right = filter.style.right = (e.clientX - (window.innerWidth/2 - img.width/2))+"px";
        img.style.bottom = filter.style.bottom = (e.clientY - (window.innerHeight/2 - img.height/2))+"px";
    
        content.style.left = (e.clientX - (window.innerWidth/2 ))/40+"px";
        content.style.top = (e.clientY - (window.innerHeight/2 ))/40+"px";
    
    });
}else{
    img.style.right = filter.style.right = (1.5*window.innerWidth/6)+"px";
    img.style.bottom = filter.style.bottom = (window.innerHeight/2)+"px";
    img.style.width = filter.style.width = '60vw';
}


//for the cover opts
opts.forEach((opt) => {
    opt.addEventListener('mouseenter', function(){
        blurcontent.forEach(el => {
            el.style.filter = 'blur(10px)';
        })
        opts.forEach(option => {
            if(option.id != opt.id){
                document.querySelector(`#${option.id}`).style.filter = 'blur(10px)';
            }
            else{
                switch(option.id){
                    case 'optfront':
                        document.querySelector('.coverImg').src = '/assets/img/portfolio/tw.png';
                        break;
                    case 'optweb':
                        document.querySelector('.coverImg').src = '/assets/img/portfolio/evergreen.png';
                        break;
                    case 'optdig':
                        document.querySelector('.coverImg').src = '/assets/img/portfolio/video.png';
                        break;
                    case 'optint':
                        document.querySelector('.coverImg').src = '/assets/img/portfolio/eco-meow2.png';
                        break;
                }
            }
            // if(option.id == optfront){
            //     document.querySelector('.coverImg').src = '/assets/img/portfolio/tw.png';
            // }
        })
        // document.querySelector(`#${opt.id}`).style.filter = 'blur(0px)';
        img.style.filter = 'contrast(80%) saturate(40%) grayscale(10%) brightness(1.1) blur(0px)';
        filter.style.filter ='blur(0px)';
    });
    
    opt.addEventListener('mouseleave', function(){
        // content.style.filter = 'blur(0px)';
        blurcontent.forEach(el => {
            el.style.filter = 'blur(0px)';
        })
        opts.forEach(option => {
            document.querySelector(`#${option.id}`).style.filter = 'blur(0px)';
            // document.querySelector(`.${option.id}`).style.backgroundImage = '';
        })
        img.style.filter = 'contrast(80%) saturate(40%) grayscale(10%) brightness(1.1) blur(10px)';
        filter.style.filter ='blur(10px)';
        // document.querySelector('.coverImg').src = '/assets/img/portfolio/eco-meow2.png';
    });
});

// document.body.addEventListener('mouseleave', function(){
//     //* crclCursor.style.scale = 0;
// })
// document.body.addEventListener('mouseenter', function(){
//     //* crclCursor.style.scale = 1;
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