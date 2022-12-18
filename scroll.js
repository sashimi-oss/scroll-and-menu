const btnDiv = document.getElementById('div1');
const marker = document.getElementById('marker');
const btn = document.getElementById('div2');
const div3 = document.getElementById('div3');
const nav = document.getElementById('nav');

// btnDiv.addEventListener('click', () => {
//   window.scrollTo(0,document.body.scrollHeight);
// })

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
})

btnDiv.addEventListener('click', () => {
  marker.scrollIntoView({behavior:"smooth"});
})

div3.addEventListener('click', () => {
  scrollTo(0,0);
})