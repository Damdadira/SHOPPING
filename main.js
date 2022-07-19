'use strict';

//navbar 투명하게 하다가, 내려오면 색상 출력
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//navbar에서 선택하면 해당 페이지로 이동(구현X)

//small screen에서 toggle button 작동하게
const navbarMenu = document.querySelector('.navbar__menu-center');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
