let flag = 0;

function controller(x){
    flag = flag+x;

    //left x=-1
    //flag=2+(-1)=1
    //right x=1
    //flag=2+(1)=3
    slideshow(flag);
}

slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag=slides.length-1;
        num=slides.length-1;
    }

    for(let y of slides){
        y.style.display ="none";

    }

    slides[num].style.display = "block";
    
}


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});