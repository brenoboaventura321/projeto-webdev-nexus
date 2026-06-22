const products = {
  g1:[
    {e:'⚔️',t:'t1',cat:'RPG',name:'Elden Chronicles',price:'R$79,90',old:'R$199',badge:'sale',pct:'-60%'},
    {e:'🚀',t:'t2',cat:'Ação',name:'Stellar Breach',price:'R$149,90',badge:'new'},
    {e:'🧙',t:'t4',cat:'Aventura',name:'Arcane Realm IV',price:'R$89,90',old:'R$129',badge:'sale',pct:'-31%'},
    {e:'🔫',t:'t6',cat:'FPS',name:'Neon Gunner',price:'R$59,90'},
    {e:'🏎️',t:'t3',cat:'Racing',name:'TurboX Pro 2026',price:'R$59,40',old:'R$99',badge:'sale',pct:'-40%'},
  ],
  g2:[
    {e:'🌸',t:'t5',cat:'Indie',name:'Sakura Drift',price:'R$44,90',badge:'new'},
    {e:'🌊',t:'t2',cat:'Estratégia',name:'Deep Command',price:'R$89,90',badge:'new'},
    {e:'🦇',t:'t1',cat:'Horror',name:'Shadow Hollow',price:'R$69,90'},
    {e:'🤖',t:'t4',cat:'Plataforma',name:'BotWorld X',price:'R$54,90',badge:'new'},
    {e:'🐉',t:'t6',cat:'RPG',name:'Dragon Nexus',price:'R$119,90'},
  ],
  g3:[
    {e:'⚽',t:'t3',cat:'Esportes',name:'UltraGoal 2026',price:'R$199,90'},
    {e:'🏹',t:'t2',cat:'RPG',name:'Forest Hunter',price:'R$62,30',old:'R$89',badge:'sale',pct:'-30%'},
    {e:'🎸',t:'t1',cat:'Ritmo',name:'Beat Overdrive',price:'R$39,90'},
    {e:'🧠',t:'t4',cat:'Puzzle',name:'Mind Maze Pro',price:'R$29,90'},
    {e:'🛸',t:'t6',cat:'Sci-Fi',name:'Orbit Wars',price:'R$74,90'},
  ]
};

// ── RENDER CARDS ──────────────────────────────────────────
Object.entries(products).forEach(([id,list])=>{
  const el=document.getElementById(id);
  list.forEach(p=>{
    el.innerHTML+=`<div class="card">
      <div class="thumb ${p.t}">${p.e}${p.badge?`<span class="badge ${p.badge}">${p.badge==='new'?'Novo':p.pct}</span>`:''}</div>
      <div class="card-b">
        <div class="cat">${p.cat}</div>
        <div class="name">${p.name}</div>
        <div class="foot">
          <div>${p.old?`<div class="old">${p.old}</div>`:''}<div class="price">${p.price}</div></div>
          <button class="cbtn" onclick="openChat('${p.name}')">Chat</button>
        </div>
      </div>
    </div>`;
  });
});

// ── SLIDER ────────────────────────────────────────────────
let cur=0;
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
function goTo(n){
  slides[cur].classList.remove('on');dots[cur].classList.remove('on');
  cur=(n+slides.length)%slides.length;
  slides[cur].classList.add('on');dots[cur].classList.add('on');
}
function slide(d){goTo(cur+d)}
dots.forEach((d,i)=>d.addEventListener('click',()=>goTo(i)));
setInterval(()=>goTo(cur+1),5000);

// ── THEME ─────────────────────────────────────────────────
document.getElementById('themeBtn').addEventListener('click',()=>{
  const d=document.documentElement;
  const dark=d.getAttribute('data-theme')==='dark';
  d.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('themeBtn').textContent=dark?'☀️':'🌙';
});

// ── CHAT ──────────────────────────────────────────────────
const panel=document.getElementById('chatPanel');
const msgsEl=document.getElementById('msgs');
const ci=document.getElementById('ci');
const main=document.querySelector('.main');

function openChat(name){
  panel.classList.add('open');
  main.classList.add('main-open');
  if(name)ask('Me fale sobre '+name);}
function closeChat(){panel.classList.remove('open')}

const kb={
  'ofertas':'🔥 Ofertas ativas:\n• Elden Chronicles — 60% OFF → R$79,90\n• Arcane Realm IV — 31% OFF → R$89,90\n• TurboX Pro 2026 — 40% OFF → R$59,40\n• Forest Hunter — 30% OFF → R$62,30',
  'rpg':'⚔️ RPGs disponíveis:\n• Elden Chronicles — R$79,90\n• Arcane Realm IV — R$89,90\n• Dragon Nexus — R$119,90\n• Forest Hunter — R$62,30',
  'lançamento':'🆕 Novidades:\n• Stellar Breach • Sakura Drift • Deep Command • BotWorld X',
  'r$50':'💰 Até R$50:\n• Mind Maze Pro — R$29,90\n• Beat Overdrive — R$39,90\n• Sakura Drift — R$44,90',
  'elden chronicles':'⚔️ Elden Chronicles — RPG épico de mundo aberto, +100h de conteúdo. 60% OFF: R$79,90',
  'stellar breach':'🚀 Stellar Breach — Ação sci-fi com co-op online até 4 jogadores. R$149,90',
  'arcane realm':'🧙 Arcane Realm IV — Fantasia, magia e multiplayer. 31% OFF: R$89,90',
  'neon gunner':'🔫 Neon Gunner — FPS cyberpunk competitivo. R$59,90',
  'turbox':'🏎️ TurboX Pro 2026 — Simulador de corrida físico. 40% OFF: R$59,40',
  'sakura drift':'🌸 Sakura Drift — Indie japonês de drift com OST incrível. R$44,90',
  'deep command':'🌊 Deep Command — Estratégia submarina em tempo real. R$89,90',
  'shadow hollow':'🦇 Shadow Hollow — Horror indie atmosférico e puzzles. R$69,90',
  'botworld':'🤖 BotWorld X — Plataforma 2.5D com robôs customizáveis. R$54,90',
  'dragon nexus':'🐉 Dragon Nexus — RPG de dragões em mundo persistente online. R$119,90',
  'ultragoal':'⚽ UltraGoal 2026 — Futebol simulado com IA avançada. R$199,90',
  'forest hunter':'🏹 Forest Hunter — RPG de sobrevivência na floresta. 30% OFF: R$62,30',
  'beat overdrive':'🎸 Beat Overdrive — +200 músicas, suporte a guitarra. R$39,90',
  'mind maze':'🧠 Mind Maze Pro — Puzzles neurais progressivos. R$29,90',
  'orbit wars':'🛸 Orbit Wars — Batalhas espaciais em tempo real. R$74,90',
};
const fallback=['Pode me dizer mais? Posso ajudar com preços, gêneros ou comparar jogos 😊','Não encontrei info específica, mas explore o catálogo ou pergunte sobre um título!'];

function getReply(txt){
  const t=txt.toLowerCase();
  for(const[k,v]of Object.entries(kb))if(t.includes(k))return v;
  return fallback[Math.floor(Math.random()*fallback.length)];
}

function now(){return new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}

function addMsg(txt,role){
  const d=document.createElement('div');
  d.className=`msg ${role}`;
  d.innerHTML=`<div class="bubble">${txt.replace(/\n/g,'<br>')}</div><span class="ts">${now()}</span>`;
  msgsEl.appendChild(d);
  msgsEl.scrollTop=msgsEl.scrollHeight;
}

function showThink(){
  const d=document.createElement('div');d.id='think';d.className='msg bot';
  d.innerHTML='<div class="think"><span></span><span></span><span></span></div>';
  msgsEl.appendChild(d);msgsEl.scrollTop=msgsEl.scrollHeight;
}

function ask(txt){
  if(!panel.classList.contains('open'))panel.classList.add('open');
  addMsg(txt,'usr');ci.value='';
  showThink();
  setTimeout(()=>{
    document.getElementById('think')?.remove();
    addMsg(getReply(txt),'bot');
  },700+Math.random()*500);
}

function send(){if(ci.value.trim())ask(ci.value)}
ci.addEventListener('keydown',e=>{if(e.key==='Enter')send()});
