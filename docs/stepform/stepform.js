const slidePage = document.querySelector(".slidePage");
const firstNextBtn = document.querySelector('.nextBtn');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
let max = 4;
let current = 1;

/* NextBtnPart Start */
firstNextBtn.addEventListener('click', () =>{
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
});
nextBtnSec.addEventListener('click', () =>{
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
});
nextBtnThird.addEventListener('click', () =>{
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
});
/* NextBtnPart END */
/* submitBtn START */
submitBtn.addEventListener('click', () =>{
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
    setTimeout(() => {
        alert("申請成功");
        location.reload();
    }, 800);
});
/* submitBtn END */
/* PrevBtnPart Start */
prevBtnSec.addEventListener('click', () =>{
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});
prevBtnThird.addEventListener('click', () =>{
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});
prevBtnFourth.addEventListener('click', () =>{
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});
/* PrevBtnPart END */
