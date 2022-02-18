// NAV MENU
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

toggle.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));