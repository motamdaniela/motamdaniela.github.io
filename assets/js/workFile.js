// list of projects -----------
let projects = [
    {
        code: 'kendir',
        name: 'Educational Games for Kendir.',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'exUnity',
        name: 'Collection of mini-games.',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'video',
        name: 'Animation Video Clips.',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'evergreen',
        name: 'Evergreen.',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'eco-meow2',
        name: 'Eco Meow 2.0.',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'eco-meow',
        name: 'Eco Meow',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'tw',
        name: 'Training Wheels',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    },
    {
        code: 'aframe',
        name: 'A-frame 3D Exercise',
        description: 'a web app for tutorials on rules on the road',
        projectLink: '',
        codeLink: '',
        designLink: '',
    }
]

let projectTitle = document.querySelector('#projectTitle');
let projectVideo = document.querySelector('#projectVideo');
let projectDesc = document.querySelector('#projectDesc');
let projectImg = document.querySelector('#projectImg');
let projectImg2 = document.querySelector('#projectImg2');

const urlParams = new URLSearchParams(window.location.search);
const project = urlParams.get('project');


let curProject = projects.find(element => element.code === project)

projectTitle.innerHTML = curProject.name;
projectVideo.src = '/assets/videos/' + project + '.mp4'
projectDesc.innerHTML = curProject.description;

projectImg.src = '/assets/img/portfolio/' + project + '.png'
// projectImg2.src = '/assets/images/portfolio/' + project + '2.png'


function NextProject() {
    let curIndex = projects.indexOf(curProject);
    if(curIndex == projects.length - 1){
        //to go back to the 1st project
      curIndex = -1  

      //to go back to the home page
      window.location.replace('/new.html#mywork');
      
    }
    let nextProject = projects[curIndex + 1].code;
    console.log(nextProject);
    //
    window.location.replace('./mywork.html?project=' + nextProject);
}