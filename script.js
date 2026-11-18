const menu = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
