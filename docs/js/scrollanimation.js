/* 即時的start animation part */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenLeft = document.querySelectorAll('.hidden-left');
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll('.hidden-right');
hiddenRight.forEach((el) => observer.observe(el));

const hiddenUp = document.querySelectorAll('.hidden-up');
hiddenUp.forEach((el) => observer.observe(el));

const hiddenDown = document.querySelectorAll('.hidden-down');
hiddenDown.forEach((el) => observer.observe(el));

const hiddenRotate = document.querySelectorAll('.hidden-rotate');
hiddenRotate.forEach((el) => observer.observe(el));

const underlineMove = document.querySelectorAll('.underline');
underlineMove.forEach((el) => observer.observe(el));
/* END animation part */