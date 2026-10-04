(function(){
var P=[["index","Home"],["about","About"],["experience","Experience"],["services","Services"],["real-estate","Real Estate"],["expertise","Other Expertise"],["contact","Contact"]];
var cur=document.body.dataset.page;
var nav='<div class="wrap nav"><a class="logo" href="index.html">MKB Corporation<small>Research. Evaluate. Invest better.</small></a><nav aria-label="Main"><button class="burger" aria-expanded="false" aria-controls="menu">Menu</button><ul id="menu">'+P.map(function(p){return '<li><a href="'+p[0]+'.html"'+(p[0]==cur?' aria-current="page"':'')+'>'+p[1]+'</a></li>'}).join('')+'</ul></nav></div>';
var h=document.createElement('header');h.innerHTML=nav;document.body.prepend(h);
var f=document.createElement('footer');
f.innerHTML='<div class="wrap"><p class="quote">Your money deserves research before it deserves a destination.</p><div class="fg"><div><b>MKB Corporation</b>Real estate investment and wealth advisory.</div><div><b>Pages</b>'+P.map(function(p){return '<a href="'+p[0]+'.html">'+p[1]+'</a>'}).join('')+'</div><div><b>Principal</b>Ankit Bhan<br>Founder &amp; Director<br>Civil &amp; structural engineer</div></div><p class="fine">MKB Corporation is a research-led advisory firm. It is not a bank, deposit-taking institution, private equity fund or retail broker. Project details are shared on direct inquiry. Past execution experience is not a guarantee of future returns. &copy; MKB Corporation. All rights reserved.</p></div>';
document.body.append(f);
var b=h.querySelector('.burger'),u=h.querySelector('ul');
b.onclick=function(){var o=u.classList.toggle('open');b.setAttribute('aria-expanded',o)};
function s(){h.classList.toggle('solid',scrollY>40||!document.querySelector('.hero.img'))}s();addEventListener('scroll',s,{passive:true});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
document.querySelectorAll('form').forEach(function(fm){fm.onsubmit=function(e){e.preventDefault();var o=fm.querySelector('.ok');if(o)o.classList.add('show');fm.reset()}});
/* progress bar */
var bar=document.createElement('div');bar.className='prog';h.append(bar);
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,hero=document.querySelector('.hero'),tick=false;
function sc(){bar.style.transform='scaleX('+Math.min(scrollY/(document.documentElement.scrollHeight-innerHeight||1),1)+')';if(hero&&!rm&&scrollY<innerHeight)hero.style.setProperty('--py',(scrollY*.12)+'px');tick=false}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(sc)}},{passive:true});sc();
/* counters */
function fmt(n){return Math.round(n).toLocaleString('en-IN')}
var co=new IntersectionObserver(function(en){en.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var f=x.target,el=f.querySelector('[data-count]'),t=+el.dataset.count,sx=el.dataset.suffix||'';f.classList.add('in');
if(rm){el.innerHTML=fmt(t)+'<i>'+sx+'</i>';return}
var d=1800,t0=performance.now();(function st(n){var p=Math.min((n-t0)/d,1),e=1-Math.pow(1-p,4);el.innerHTML=fmt(t*e)+'<i>'+sx+'</i>';if(p<1)requestAnimationFrame(st)})(t0)})},{threshold:.5});
document.querySelectorAll('.fig').forEach(function(f){co.observe(f)});
/* chain sequence */
document.querySelectorAll('.chain').forEach(function(c){c.classList.add('seq');c.querySelectorAll('li').forEach(function(l,i){l.style.transitionDelay=(i*.14)+'s'});
new IntersectionObserver(function(e,o){if(e[0].isIntersecting){c.classList.add('in');o.disconnect()}},{threshold:.6}).observe(c)});
/* project filter */
var pj=document.querySelector('[data-filter]');
if(pj){var map={Regalia:'Residential plots',ELARIS:'Residential plots','Pride Prime':'Commercial',Aerox:'Industrial and logistics','RSC 175':'Industrial and logistics'};
var cards=[].slice.call(pj.querySelectorAll('.card'));cards.forEach(function(c){c.dataset.t=map[c.querySelector('h3').textContent]||'Other'});
var cats=['All'].concat(Object.keys(map).map(function(k){return map[k]}).filter(function(v,i,a){return a.indexOf(v)==i}));
var ch=document.createElement('div');ch.className='chips';ch.setAttribute('role','group');ch.setAttribute('aria-label','Filter properties');
cats.forEach(function(c,i){var b=document.createElement('button');b.type='button';b.textContent=c;b.setAttribute('aria-pressed',i==0);b.onclick=function(){ch.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});cards.forEach(function(k){k.classList.toggle('off',c!='All'&&k.dataset.t!=c)})};ch.append(b)});
pj.parentNode.insertBefore(ch,pj)}
})();
