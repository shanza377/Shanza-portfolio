import { Analytics } from '@vercel/analytics/react';


const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

if(document.body.classList.contains('dark-mode')) {
    themeBtn.innerText = 'Light Mode';
} else {
    themeBtn.innerText = 'Dark Mode';
}
});
<Analytics/>