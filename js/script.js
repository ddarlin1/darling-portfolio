// nav menu
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

toggle.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

// contact form - clear text upon submission
const btn = document.querySelector('.btn');
const messageForm = document.getElementById('message');

btn.addEventListener('click', setTimeout);

setTimeout(resetForm, 1000);

console.log(messageForm.value);

function resetForm() {
    messageForm.value = '';
}