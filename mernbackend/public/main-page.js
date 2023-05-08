const slideContainer = document.querySelector('.banner-container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;


let slides = document.querySelectorAll('.slide');
let index = 1;
let  slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

// console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
const startSlide = () => {
   slideId = setInterval(() => {
      moveToNextSlide();
    },interval )
}

const getSlides = ()=> document.querySelectorAll('.slide');

slide.addEventListener('transitionend', ()=>{
  slides = getSlides();
  if(slides[index].id === firstClone.id){
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if(slides[index].id === lastClone.id){
    slide.style.transition = 'none';
    index = slides.length-2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = ()=>{
  slides = getSlides();
  if(index >= slides.length -1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '.7s';

}

const moveToPreviousSlide = ()=>{
  if(index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = '.7s';
}

slideContainer.addEventListener('mouseenter',()=>{
    clearInterval(slideId);
})

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPreviousSlide)

startSlide();

const userName = document.getElementById('uname').innerText;
const userEmail =  document.getElementById('Email').innerText;

localStorage.setItem('uname', userName);
localStorage.setItem('email', userEmail)
localStorage.getItem('uname');
localStorage.getItem('email')

function handleSubmit() {
  const from = document.getElementById('form').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const select = document.getElementById('select').value;
  

  // to set into local storage
  /* localStorage.setItem("NAME", name);
  localStorage.setItem("SURNAME", surname); */

  localStorage.setItem("from", from);
  localStorage.setItem("to", to);
  localStorage.setItem("date", date);

  localStorage.setItem("select", select);

  return;
}
