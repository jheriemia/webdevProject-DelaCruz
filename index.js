const slideImage = document.querySelector('.imgslide');
const slideshowImage = document.querySelectorAll('.imgslide img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = slideshowImage[0].clientWidth;

slideImage.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', ()=>{
    slideImage.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', ()=>{
    slideImage.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideImage.addEventListener('transitionend', () => {
    if(slideshowImage[counter].id === 'last-image') {
        slideImage.style.transition = "none";
        counter = slideshowImage.length -2 ;
        slideImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(slideshowImage[counter].id === 'first-image') {
        slideImage.style.transition = "none";
        counter = slideshowImage.length -counter ;
        slideImage.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


