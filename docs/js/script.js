let Navbar1 = document.querySelector('.navbar-one');
let Navbar2 = document.querySelector('.navbar-two');
let Burgerbtn = document.querySelector('header #burger-btn');
let Crossbtn = document.querySelector('#cross-btn');
let Underlist = document.querySelector('header .navbar-two ul');
// let Navlink = document.querySelector('header .navbar-two ul li a');
let comicon = document.querySelector("header .logo .com-icon");
let comname = document.querySelector("header .logo .com-name");
let ctrlBtns = document.querySelector("header .control-btns");
let logo = document.querySelector("header .logo");
let Glassbtn = document.querySelector('header #glass-btn');

Burgerbtn.onclick = () =>{
    Navbar1.classList.toggle("active-navbar-one")
    Navbar2.classList.toggle("active-navbar-two")
    Burgerbtn.classList.toggle("hide-burger")
    Crossbtn.classList.toggle("show-cross")
    Underlist.classList.toggle("unorder-list")
    comicon.classList.toggle("comicon-big")
    comname.classList.toggle("comname-big")
    ctrlBtns.classList.toggle("ctrl-btns")
    logo.classList.toggle("show-logo")
    Glassbtn.classList.toggle("show-glass")
    // Navlink.classList.toggle("nav-list")
};
Crossbtn.onclick = () =>{
    Navbar1.classList.toggle("active-navbar-one")
    Navbar2.classList.toggle("active-navbar-two")
    Burgerbtn.classList.toggle("hide-burger")
    Crossbtn.classList.toggle("show-cross")
    Underlist.classList.toggle("unorder-list")
    comicon.classList.toggle("comicon-big")
    comname.classList.toggle("comname-big")
    ctrlBtns.classList.toggle("ctrl-btns")
    logo.classList.toggle("show-logo")
    Glassbtn.classList.toggle("show-glass")
    // Navlink.classList.toggle("nav-list")
}
/* *****START 按#burger-btn後scrollbar停用***** */
const burgerBtn = document.querySelector('header #burger-btn');
const crossbtn = document.querySelector('#cross-btn');
// 獲取body元素
const body = document.querySelector('body');
const header = document.querySelector('header');
const headermain = document.querySelector('header .header-main');
// const comicon = document.querySelector("header .logo .com-icon");
// const comname = document.querySelector("header .logo .com-name");
// 監聽header #burger-btn的點擊事件
burgerBtn.addEventListener('click', function() {
// 切換 body 元素的 overflow 屬性，使用 style.overflow 寫法
    // body.classList.toggle('hide-scrollbar');   
    if (body.style.overflow === 'hidden') {
    body.style.overflow = 'auto';
    } else {
    body.style.overflow = 'hidden';
    }
    // 切換 header 元素的 change-header 類別
    header.classList.toggle('change-header');
    headermain.classList.toggle('change-headermain');
    // comicon.classList.toggle("comicon-big")
    // comname.classList.toggle("comname-big")
});
crossbtn.addEventListener('click', function() {
  // 切換 body 元素的 overflow 屬性，使用 style.overflow 寫法
    // body.classList.toggle('hide-scrollbar');
    if (body.style.overflow === 'hidden') {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }  
    // 切換 header 元素的 change-header 類別
    header.classList.toggle('change-header');
    headermain.classList.toggle('change-headermain');
    // comicon.classList.toggle("comicon-big")
    // comname.classList.toggle("comname-big")
  });
  
/* *****END 按#burger-btn後scrollbar停用***** */


/* ****START 監聽scroll事件，並根據scroll的方向來切換header的顯示或隱藏**** */
var Header = document.querySelector("header");
var Comicon = document.querySelector("header .logo .com-icon");
var Comname = document.querySelector("header .logo .com-name");
var Burger = document.querySelector("header #burger-btn");
var spans = document.querySelectorAll("header .logo span");  // 選擇所有的span元素
var navbar1Word = document.querySelectorAll('header .navbar-one ul li a');
var Logo = document.querySelector("header .logo");
var CtrlBtns = document.querySelector("header .control-btns");
var glassBtn = document.querySelector("header #glass-btn");
// 設定一個變量來記錄上一次的scroll位置
var lastScrollTop = "0";

Header.style.transition = "background 1s ease-in-out";
Header.style.transition = "top 1s ease-in-out";
Header.style.transition = "height 0.5s ease-in-out";

window.addEventListener("scroll", function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

    

  if (window.innerWidth >= 1025) {
  
  if (scrollTop > lastScrollTop) {
    setTimeout(function() {
    Header.style.top = "-12vh";  // 現在這行會有過渡效果 
    // Header.style.display = "none";
    }, 100);  // 延遲1秒後執行
     // 當滾動條向下移動超過10vh時，設定所有span的背景為透明或隱藏
    for (var i = 0; i < spans.length; i++) {
    spans[i].style.display = "none"; 
    }
  } else {
    Header.style.top = "0";
    Header.style.height = "8vh";
    Header.style.background = "var(--bg-color)";
    Header.style.display = "flex";
    navbar1Word.forEach(a => a.classList.add('blue-text'));
    Burger.style.color = "var(--text2-color)";
    // glassBtn.style.cssText = "color: var(--text2-color) !important;"; 
    glassBtn.style.color = "var(--text2-color)";
    // 如果滾動到頂部，則延遲1秒後將背景設置為透明
    if (scrollTop === 0) {
      setTimeout(function() {
        Header.style.background = "transparent";
        Header.style.height = "12vh";
        navbar1Word.forEach(a => a.classList.remove('blue-text'));
        Burger.style.color = "var(--text1-color)";
        glassBtn.style.color = "var(--text1-color)";
        for (var i = 0; i < spans.length; i++) {
          spans[i].style.display = "block";  // 顯示元素
          spans[i].style.opacity = "0";  // 初始透明度設為0
          spans[i].style.transition = "opacity 1s ease-in-out";  // 添加過渡效果
          setTimeout(function(span) {
            span.style.opacity = "1";  // 將透明度設為1
          }, 100, spans[i]);
        }
      }, 1000 );  // 延遲時間為1000毫秒（1秒）
    }
  }

  lastScrollTop = scrollTop;
 };

/* ****@media(max-width:1024px)**** */

 if (window.innerWidth <= 1024) {

  var vhInPx = window.innerHeight / 100;  // 計算1vh等於多少像素
  if ((scrollTop - lastScrollTop) >= 0 * vhInPx)  {
    setTimeout(function() {
      Logo.style.display = "none";
      Header.style.background = "transparent";
      Header.style.top = "0";
      Header.style.height = "6vh";
      Burger.style.color = "var(--text1-color)";
      CtrlBtns.style.background = "var(--text2-color)";
      glassBtn.style.cssText = "display: none !important;"; 
    }, 100);  // 延遲1秒後執行
     // 當滾動條向下移動超過10vh時，設定所有span的背景為透明或隱藏
    for (var i = 0; i < spans.length; i++) {
    spans[i].style.display = "none"; 
    }
  } else {
    Logo.style.display = "flex";
    CtrlBtns.style.background = "transparent";

    Header.style.top = "0";
    Header.style.height = "5vh";
    Header.style.background = "var(--bg-color)";
    Header.style.display = "flex";
    Burger.style.fontSize = "5vmin";
    Comicon.style.width = "6%";
    Comname.style.fontSize = "5vmin";
    glassBtn.style.cssText = "display: block;"; 
    Burger.style.color = "var(--text2-color)";
    // glassBtn.style.cssText = "color: var(--text2-color) !important;"; 
    glassBtn.style.color = "var(--text2-color)";
    

    // 如果滾動到頂部，則延遲1秒後將背景設置為透明
    if (scrollTop === 0) {
      setTimeout(function() {
        CtrlBtns.style.background = "transparent";
        Header.style.background = "transparent";
        Header.style.height = "10vh";
        Burger.style.color = "var(--text1-color)";
        glassBtn.style.color = "var(--text1-color)";
        for (var i = 0; i < spans.length; i++) {
          spans[i].style.display = "block";  
          spans[i].style.opacity = "0";  
          spans[i].style.transition = "opacity 1s ease-in-out";  
          setTimeout(function(span) {
            span.style.opacity = "1";  
          }, 100, spans[i]);
        }
      }, 100 );  
    }
  }
  lastScrollTop = scrollTop;
};

});
