// theme toggle (light / dark)
(function(){
  const root=document.documentElement,btn=document.getElementById('themeToggle');
  function apply(t){root.setAttribute('data-theme',t);if(btn){var l=t==='light'?'Включить тёмную тему':'Включить светлую тему';btn.setAttribute('aria-label',l);btn.setAttribute('title',l);}var m=document.querySelector('meta[name="theme-color"]');if(m){var bg=getComputedStyle(root).getPropertyValue('--bg').trim();if(bg)m.setAttribute('content',bg);}}
  let cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
  apply(cur);
  if(btn)btn.addEventListener('click',()=>{cur=cur==='light'?'dark':'light';try{localStorage.setItem('pl-theme',cur);}catch(e){}apply(cur);});
})();

// nav scroll state
const nav=document.getElementById('nav');
if(nav)addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10));
// mobile menu
const tog=document.getElementById('navToggle'),links=document.getElementById('navLinks');
if(tog&&links){
  tog.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
// reveal on scroll
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
