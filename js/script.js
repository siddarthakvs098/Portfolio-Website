const ham = document.querySelector(".hambur");
const nav = document.querySelector(".nav-items");
const header = document.querySelector("header");
const body = document.getElementsByTagName('body')[0];
const nav_item = document.querySelectorAll("li a");

function scrollfunc() {
    let head = document.querySelector('header');
    // let windowPosition = window.scrollY > 0 && window.innerWidth > 600;
    let windowPosition = (window.scrollY > 0  || nav.classList.contains("active"));
    head.classList.toggle('scrolling-nav', windowPosition);
} 
window.addEventListener('scroll', scrollfunc);
document.body.addEventListener('touchmove',scrollfunc);
  

ham.addEventListener('click',()=>{
    nav.classList.toggle('active');
    body.classList.toggle('hide');
    // document.querySelector('header').classList.toggle('scrolling-nav');
    // header.classList.toggle('over-scroll');
    scrollfunc();
    console.log((nav.classList.contains("active")),nav.classList);
});

for(const ele of nav_item){
    ele.addEventListener('click',()=>{
        nav.classList.toggle('active');
        body.classList.toggle('hide');
        scrollfunc();
        // header.classList.toggle('over-scroll');
    })
}

scrollfunc(); //if user is in middle of page during reload then also offset must be checked