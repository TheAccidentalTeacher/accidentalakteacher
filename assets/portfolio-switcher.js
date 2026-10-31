(()=>{
 const bar=document.querySelector('[data-design-switcher]');
 if(!bar)return;
 const updateLinks=()=>{
  const current=new URL(location.href);
  for(const link of bar.querySelectorAll('[data-design-choice]')){
   const target=new URL(link.getAttribute('href'),location.href);
   target.search=current.search;target.hash=current.hash;link.href=target.pathname+target.search+target.hash;
  }
  const chooser=bar.querySelector('[data-design-chooser]');
  if(chooser){const target=new URL(chooser.getAttribute('href'),location.href);for(const [key,value] of current.searchParams){if(key!=='page')target.searchParams.set(key,value);}target.hash=current.hash;chooser.href=target.pathname+target.search+target.hash;}
 };
 const updateHeight=()=>document.documentElement.style.setProperty('--portfolio-switcher-height',bar.getBoundingClientRect().height+'px');
 updateLinks();updateHeight();
 window.addEventListener('hashchange',updateLinks);
 window.addEventListener('pageshow',updateLinks);
 if(window.ResizeObserver)new ResizeObserver(updateHeight).observe(bar);else window.addEventListener('resize',updateHeight);
})();
