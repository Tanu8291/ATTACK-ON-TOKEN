/* ===== CONFIG: real resume details were not supplied. Fill these in; empty values disable the related buttons. ===== */
const C={email:"",phone:"",linkedin:"",location:"",resume:""};
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(matchMedia('(hover:none)').matches)document.body.classList.add('touch');
const toast=m=>{const t=$('#toast');t.textContent=m;t.style.display='block';setTimeout(()=>t.style.display='none',2200)};
/* theme */
$('#theme').onclick=()=>{const r=document.documentElement;r.dataset.theme=r.dataset.theme==='light'?'dark':'light'};
/* boot */
(()=>{const m=["Loading creativity","Compiling ideas","System ready"];let i=0;const t=setInterval(()=>{$('#bi').style.width=(++i/3*100)+'%';$('#bm').textContent=m[i-1];if(i>=3){clearInterval(t);setTimeout(()=>{$('#boot').style.opacity=0;setTimeout(()=>$('#boot').remove(),400)},250)}},350);
$('#boot').onclick=()=>$('#boot').remove()})();
/* router */
function route(){const h=location.hash||'#/';const p=h.startsWith('#/projects')?'projects':'home';
$$('.page').forEach(e=>e.classList.toggle('active',e.id==='p-'+p));
$$('nav a[data-r]').forEach(a=>a.toggleAttribute('aria-current',a.dataset.r===p)||(a.dataset.r===p&&a.setAttribute('aria-current','page')));
$$('nav a[data-r]').forEach(a=>a.dataset.r===p?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
scrollTo(0,0);if(h.endsWith('#contact'))setTimeout(()=>$('#contact').scrollIntoView(),60);obs()}
addEventListener('hashchange',route);
function obs(){const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.1});$$('.reveal').forEach(e=>io.observe(e))}
/* typing */
(()=>{const a="I'm Tanuja Adhav.",b="I turn curiosity into code and ideas into interactive experiences.";let i=0;
if(RM){$('#typed').textContent=a;$('#sub').textContent=b;return}
const t=setInterval(()=>{$('#typed').textContent=a.slice(0,++i);if(i>=a.length){clearInterval(t);let j=0;const u=setInterval(()=>{$('#sub').textContent=b.slice(0,++j);if(j>=b.length)clearInterval(u)},22)}},60)})();
$('#exp').onclick=()=>startGame();
/* modal helpers */
let last=null,openEl=null;
function openM(el){last=document.activeElement;openEl=el;el.classList.add('show');requestAnimationFrame(()=>el.classList.add('vis2'));const f=el.querySelector('button,a');f&&f.focus()}
function closeM(){if(!openEl)return;const e=openEl;e.classList.remove('vis2');setTimeout(()=>e.classList.remove('show'),250);openEl=null;last&&last.focus()}
$$('.ov').forEach(o=>o.addEventListener('mousedown',e=>{if(e.target===o)closeM()}));
addEventListener('keydown',e=>{if(e.key==='Escape')closeM();
if(e.key==='Tab'&&openEl){const f=[...openEl.querySelectorAll('button,a[href],input')].filter(x=>x.offsetParent&&!x.disabled);if(!f.length)return;const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
document.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeM()});
/* secret logo */
let n=0,tm;$('#logo').onclick=()=>{clearTimeout(tm);if(++n>=5){n=0;openM($('#sec'))}else tm=setTimeout(()=>n=0,2500)};
/* tilt */
function tilt(el){if(RM)return;el.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`});el.addEventListener('pointerleave',()=>el.style.transform='')}
tilt($('#idc'));
/* identity scan */
$('#scan').onclick=function(){const o=$('#scanout'),b=$('#beam');if(this.disabled)return;this.disabled=true;b.classList.add('fast');
const L=["> scanning profile…","> education: SSC 91.60% · Diploma IT (94.17%, resume-reported)","> tech: C, C++, Java, Python, HTML, OpenCV, PyQt5, Arduino","> interests: AI/ML, computer vision, robotics, UI design","PROFILE SYNCHRONIZED ✔ (a summary of the resume, not a skill measurement)"];
o.innerHTML='';let i=0;const t=setInterval(()=>{o.innerHTML+=L[i++]+'<br>';if(i>=L.length){clearInterval(t);b.classList.remove('fast');this.disabled=false}},RM?0:700)};
/* constellation */
const SK=[["Python","Used with OpenCV for the real-time 3D object detection system.",[0],["OpenCV","Machine Learning","PyQt5"]],
["OpenCV","Used for segmentation and area calculation (cm²) in the detection project.",[0],["Python","Machine Learning"]],
["Machine Learning","Explored detection/labelling and trained on CSV data in the detection project.",[0],["Python","OpenCV"]],
["PyQt5","Built the multi-screen GUI with Start, Capture, Stop and View.",[0],["Python"]],
["C / C++","Programmed the Arduino system in Arduino IDE.",[1],["Arduino UNO","Sensors"]],
["Arduino UNO","Microcontroller for the mechanical obstacle-detection system.",[1],["C / C++","Sensors","Tinkercad"]],
["Sensors","Ultrasonic and IR sensors for obstacle detection and distance measurement.",[1],["Arduino UNO","Tinkercad"]],
["Tinkercad","Simulated hardware, sensors and movement.",[1],["Arduino UNO","Sensors"]]];
const PN=["Real-Time 3D Object Detection","Arduino-Based Embedded & Robotics System"];
(()=>{const c=$('#cons');let h='<svg id="lines" viewBox="0 0 100 100" preserveAspectRatio="none">';
const pos=SK.map((_,i)=>{const a=i/SK.length*Math.PI*2-Math.PI/2;return[50+38*Math.cos(a),50+38*Math.sin(a)*1.0]});
pos.forEach((p,i)=>h+=`<line x1="50" y1="50" x2="${p[0]}" y2="${p[1]}" stroke="#A78BFA" stroke-opacity=".5" stroke-width=".4" vector-effect="non-scaling-stroke"/>`);
h+='</svg><button class="node core" style="left:50%;top:50%" disabled>Tanuja</button>';
SK.forEach((s,i)=>h+=`<button class="node" data-i="${i}" style="left:${pos[i][0]}%;top:${pos[i][1]}%" aria-pressed="false">${s[0]}</button>`);c.innerHTML=h;
const rst=()=>{$$('.node').forEach(b=>b.className='node'+(b.classList.contains('core')?' core':''));$$('.node[data-i]').forEach(b=>b.setAttribute('aria-pressed','false'));$('#sk-t').textContent='Select a node';$('#sk-d').textContent='Nodes link to the two projects: 3D object detection and the Arduino system.'};
$$('.node[data-i]').forEach(b=>b.onclick=()=>{const s=SK[b.dataset.i];rst();$$('.node[data-i]').forEach(x=>{const nm=SK[x.dataset.i][0];x.classList.add(x===b?'sel':s[3].includes(nm)?'rel':'dim');x.setAttribute('aria-pressed',x===b)});
$('#sk-t').textContent=s[0];$('#sk-d').innerHTML=s[1]+'<br><strong>Project:</strong> '+PN[s[2][0]]});
$('#sk-r').onclick=rst})();
/* projects */
const P=[{t:"Real-Time 3D Object Detection",tags:["Python","OpenCV","PyQt5","Machine learning"],f:"Object detection · image segmentation · area calculation · interactive GUI",
d:"A real-time detection system built with OpenCV and Python. Segmentation is used to calculate object area in square centimetres, and a multi-screen PyQt5 interface offers Start, Capture, Stop and View functions. Machine-learning detection and labelling were explored, with training from CSV data.",
o:"Detect objects in real time and measure their area through a friendly GUI.",w:["Capture frames","Segment the object","Calculate area (cm²)","Detect/label with ML","Show in PyQt5 screens"],
l:"No public demo, repository or screenshots were supplied; the visual is an illustrative simulation. Accuracy figures are not reported.",
v:'<svg viewBox="0 0 200 130" width="100%" height="100%"><rect x="55" y="30" width="90" height="70" fill="none" stroke="#5DEBFF" stroke-width="2"><animate attributeName="stroke-dasharray" values="0 320;320 0" dur="2s" repeatCount="indefinite"/></rect><text x="57" y="26" fill="#5DEBFF" font-size="9">object · area: ? cm² (simulation)</text><rect x="75" y="50" width="50" height="30" fill="#A78BFA" opacity=".4"/></svg>'},
{t:"Arduino-Based Embedded & Robotics System",tags:["Arduino UNO","C/C++","Ultrasonic sensor","IR sensor","Tinkercad"],f:"Obstacle detection · distance measurement · motor control · sensor simulation",
d:"A mechanical system integrated with an Arduino UNO that uses ultrasonic and IR sensors to detect obstacles and measure distance. Programmed in C/C++ in the Arduino IDE; sensor responses and movement were simulated in Tinkercad, applying mechanical design principles such as gear systems and torque balance.",
o:"Sense the surroundings and respond with controlled mechanical movement.",w:["Read ultrasonic / IR sensors","Compute distance","Decide response in C/C++","Drive motor","Simulate in Tinkercad"],
l:"Simulated in Tinkercad per the resume; no real-hardware results, demo or repository were supplied. The visual is an illustration.",
v:'<svg viewBox="0 0 200 130" width="100%" height="100%"><rect x="20" y="50" width="50" height="30" rx="6" fill="#14213D" stroke="#5DEBFF"/><path d="M75 65 Q110 40 140 65 Q110 90 75 65" fill="none" stroke="#A78BFA"><animate attributeName="opacity" values="1;.1;1" dur="1.6s" repeatCount="indefinite"/></path><rect x="150" y="40" width="10" height="50" fill="#FBBF24"/></svg>'}];
$('#pc').innerHTML=P.map((p,i)=>`<button class="card proj tilt reveal" data-p="${i}" aria-haspopup="dialog"><div class="vis">${p.v}</div><span class="mu">PROJECT 0${i+1}</span><h3>${p.t}</h3><div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><p class="mu">${p.f}</p><span class="insp">INSPECT PROJECT →</span></button>`).join('');
$$('.proj').forEach(b=>{tilt(b);b.onclick=()=>{const p=P[b.dataset.p];$('#ovc').innerHTML=`<button class="x" data-close aria-label="Close project">✕</button><h2 id="ovt">${p.t}</h2><p><strong>Objective:</strong> ${p.o}</p><p>${p.d}</p><p><strong>Technologies:</strong> ${p.tags.join(', ')}</p><p><strong>Workflow:</strong></p><ol>${p.w.map(x=>`<li>${x}</li>`).join('')}</ol><p class="mu"><strong>Limitations / notes:</strong> ${p.l}</p>`;openM($('#ov'))}});
/* skill explorer */
const G={Programming:{C:"Core language from my resume.","C++":"Used for the Arduino programming.",Java:"Programming language listed in my resume.",Python:"Used for the object detection system.",HTML:"Web markup language."},
"AI & Computer Vision":{OpenCV:"Segmentation and area calculation.","Object detection":"Real-time detection project.","Machine learning":"Training from CSV data, detection and labelling."},
"Embedded Systems":{"Arduino UNO":"Microcontroller for the sensor system.",Sensors:"Ultrasonic and IR sensors.",Tinkercad:"Hardware and sensor simulation."},
"Interface Development":{PyQt5:"Multi-screen GUI for the detection system.","UI design":"A design interest I enjoy."}};
let grp=null;function chips(sel){$('#groups').innerHTML=Object.keys(G).map(g=>`<button class="chip" data-g="${g}" aria-pressed="${grp===g}">${g}</button>`).join('');
$('#chips').innerHTML=Object.entries(G).flatMap(([g,o])=>Object.keys(o).map(k=>`<button class="chip ${grp&&grp!==g?'off':''}" data-k="${k}" data-gg="${g}" aria-pressed="${sel===k}">${k}</button>`)).join('')}
document.addEventListener('click',e=>{const g=e.target.closest('[data-g]'),k=e.target.closest('[data-k]');
if(g){grp=grp===g.dataset.g?null:g.dataset.g;chips();$('#chipd').textContent=grp?grp+' selected.':'Pick a group or a chip.'}
if(k){chips(k.dataset.k);$('#chipd').innerHTML='<strong>'+k.dataset.k+':</strong> '+G[k.dataset.gg][k.dataset.k]}});
$('#fr').onclick=()=>{grp=null;chips();$('#chipd').textContent='Pick a group or a chip.'};chips();
/* contact */
const has=!!(C.email||C.phone||C.linkedin);
$('#sig').onclick=function(){const b=this;b.innerHTML='<span class="sig"><i></i><i></i><i></i></span>TRANSMITTING…';setTimeout(()=>{b.textContent='SIGNAL SENT ✔';const e=$('#env');
e.innerHTML=`<h3>✉ Contact details</h3>`+(has?`<p>${C.email?'Email: '+C.email:''}</p><p>${C.phone?'Phone: '+C.phone:''}</p><p>${C.location?'Location: '+C.location:''}</p>`:`<p class="mu">Contact details from the resume were not supplied. Add them in the <code>C</code> object at the top of the script and these buttons will activate.</p>`)+
`<div class="row"><button class="btn" id="bm2" ${C.email?'':'disabled'}>EMAIL ME</button><button class="btn" id="bl" ${C.linkedin?'':'disabled'}>VIEW LINKEDIN</button><button class="btn ghost" id="bc" ${has?'':'disabled'}>COPY CONTACT</button></div>`;
e.classList.add('show');
$('#bm2').onclick=()=>location.href='mailto:'+C.email;$('#bl').onclick=()=>window.open(C.linkedin,'_blank','noopener');
$('#bc').onclick=()=>copy([C.email,C.phone,C.linkedin,C.location].filter(Boolean).join('\n'))},RM?0:1400)};
function copy(t){const ok=()=>toast('Copied to clipboard ✔');(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(ok).catch(()=>{const a=document.createElement('textarea');a.value=t;document.body.append(a);a.select();try{document.execCommand('copy');ok()}catch{toast('Copy failed — select manually')}a.remove()})}
/* form */
$('#f').onsubmit=e=>{e.preventDefault();const n=$('#fn').value.trim(),m=$('#fe').value.trim(),g=$('#fm').value.trim();
$('#en').textContent=n?'':'Please enter your name.';$('#ee').textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)?'':'Enter a valid email, e.g. you@example.com.';$('#em').textContent=g.length>=5?'':'Message needs at least 5 characters.';
const b=$('#fb');if($('#en').textContent||$('#ee').textContent||$('#em').textContent){b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');return}
b.classList.add('shake');b.textContent='TRANSMISSION RECEIVED';
setTimeout(()=>{const r=$('#fres');r.style.display='block';
const mail=C.email?`<a class="btn" style="display:inline-block;text-decoration:none" href="mailto:${C.email}?subject=${encodeURIComponent('Message from '+n)}&body=${encodeURIComponent(g+'\n\n— '+n+' ('+m+')')}">SEND VIA EMAIL APP</a>`:'<span class="mu">Email address not configured yet.</span>';
r.innerHTML=`<strong>Your signal has reached my digital universe.</strong><p class="mu">Local demo: this was <u>not</u> delivered anywhere. Your message is preserved below.</p><p style="white-space:pre-wrap">${g.replace(/</g,'&lt;')}</p><div class="row">${mail}<button class="btn ghost" id="cm">COPY MESSAGE</button></div>`;$('#cm').onclick=()=>copy(g);b.textContent='SUBMIT TO THE VOID'},RM?0:700)};
/* resume */
$('#cv').onclick=()=>{if(C.resume){const a=document.createElement('a');a.href=C.resume;a.download='Tanuja_Adhav_Resume.pdf';a.click()}else $('#cvn').textContent='Resume file not linked yet: set C.resume to its path in the project assets.'};
/* final secret */
$('#unl').onclick=()=>{const s=$('#fin');s.classList.add('glitch');setTimeout(()=>{s.classList.remove('glitch');$('#fint').style.display='block'},RM?0:500)};
$('#finx').onclick=()=>$('#fint').style.display='none';
route();
/* ===== SPARKLE FX: trail + per-element click effects ===== */
const cv=$('#fx'),cx=cv.getContext('2d');let ps=[],raf=0,fxOn=!RM;
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();addEventListener('resize',rs);
const COL=['#5DEBFF','#A78BFA','#F1F5F9'];
function add(p){if(!fxOn)return;ps.push(p);if(!raf)raf=requestAnimationFrame(tick)}
function burst(x,y,n,cols,sp){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=(Math.random()+.3)*sp;add({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,d:.025,c:cols[i%cols.length],s:2+Math.random()*3})}}
function ring(x,y,c){add({x,y,ring:1,r:4,l:1,d:.03,c})}
function tick(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.l>0);
for(const p of ps){p.l-=p.d;cx.globalAlpha=Math.max(p.l,0);
if(p.ring){p.r+=4;cx.strokeStyle=p.c;cx.lineWidth=2;cx.beginPath();cx.arc(p.x,p.y,p.r,0,6.28);cx.stroke()}
else if(p.t){p.y+=p.vy;cx.fillStyle=p.c;cx.font='14px monospace';cx.fillText(p.t,p.x,p.y)}
else{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;cx.fillStyle=p.c;cx.shadowColor=p.c;cx.shadowBlur=8;cx.fillRect(p.x,p.y,p.s,p.s);cx.shadowBlur=0}}
cx.globalAlpha=1;raf=ps.length?requestAnimationFrame(tick):0}
let lt=0;addEventListener('pointermove',e=>{const n=performance.now();if(n-lt<35)return;lt=n;
add({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1.2,vy:Math.random()*.8,l:1,d:.04,c:COL[Math.random()*3|0],s:2+Math.random()*3})});
function pos(e){if(e.clientX||e.clientY)return[e.clientX,e.clientY];const r=e.target.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]}
document.addEventListener('click',e=>{const[x,y]=pos(e),t=e.target;
if(t.closest('.logo')){for(let i=0;i<14;i++)add({x:x+(Math.random()-.5)*80,y,vy:2+Math.random()*2,t:Math.random()<.5?'0':'1',c:'#34D399',l:1,d:.02})}
else if(t.closest('.chip,.node')){ring(x,y,'#FBBF24');burst(x,y,10,['#FBBF24','#5DEBFF'],3)}
else if(t.closest('.proj,.card')){ring(x,y,'#5DEBFF');setTimeout(()=>ring(x,y,'#A78BFA'),120)}
else if(t.closest('button,.btn,a')){burst(x,y,28,COL,5)}
else burst(x,y,8,COL,2.5)});
document.addEventListener('focusin',e=>{if(e.target.matches('input,textarea')){const r=e.target.getBoundingClientRect();burst(r.left+8,r.top+r.height/2,12,['#A78BFA','#5DEBFF'],2)}});
$('#fxt').onclick=function(){fxOn=!fxOn;this.setAttribute('aria-pressed',fxOn);if(!fxOn){ps=[]}toast(fxOn?'Sparkles on':'Sparkles off')};
$('#fxt').setAttribute('aria-pressed',fxOn);

/* ===== MULTI-GAME ARCADE ===== */
const gc=$('#gc'),g=gc.getContext('2d'),SKL=['Python','OpenCV','C++','Java','ML','Arduino','PyQt5','HTML'];
const STK=[['🤡','You did great. The bugs are still laughing.'],['🥳','Skill unlocked: dramatic victory dance!'],['🐢','Fast as a snail on a Monday!'],['🧠','Brain.exe is still loading…'],['🙈','No bugs were harmed. Mostly.'],['🏆','Participation trophy (laminated)!'],['🤖','Beep boop: a robot is proud of you.']];
let run=0,gx=240;const st=t=>$('#gs').textContent=t;
function showView(v){const m={gmenu:'flex',gc:'block',gwhack:'grid',gmem:'grid'};for(const k in m)$('#'+k).style.display=k===v?m[k]:'none'}
function menu(){run++;showView('gmenu');st('Pick a game');$('#gtitle').textContent='CHOOSE A GAME'}
function startGame(){openM($('#gm'));$('#gstk').classList.remove('show');menu()}
function finish(){run++;const[e,c]=STK[Math.random()*STK.length|0],w=$('#gstk');
w.innerHTML=`<div><div class="stk" aria-hidden="true">${e}</div><h3>${c}</h3><div class="row" style="justify-content:center"><button class="btn ghost" id="gagain">PLAY ANOTHER GAME</button><button class="btn" id="gend">ENTER THE LAB →</button></div></div>`;w.classList.add('show');
$('#gagain').onclick=()=>{w.classList.remove('show');menu()};$('#gend').onclick=()=>{closeM();location.hash='#/projects'};
const r=$('#gm .card').getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,60,COL,6);$('#gend').focus()}
const live=id=>id===run&&openEl&&openEl.id==='gm';
$$('[data-game]').forEach(b=>b.onclick=()=>{const k=b.dataset.game;$('#gtitle').textContent=b.dataset.t;showView(k==='catch'?'gc':k==='whack'?'gwhack':'gmem');({catch:catcher,whack,mem})[k]()});
$('#gback').onclick=menu;$('#gskip').onclick=()=>{run++;closeM();location.hash='#/projects'};
$('#exp').onclick=startGame;
/* game 1 */
function drawG(it,x){g.fillStyle='#0B1020';g.fillRect(0,0,480,300);g.font='13px Inter';g.textAlign='center';
for(const i of it){g.fillStyle=i.bug?'#FBBF24':'#5DEBFF';g.fillText(i.bug?'🐞 BUG':i.t,i.x,i.y)}
const gr=g.createLinearGradient(x-40,0,x+40,0);gr.addColorStop(0,'#5DEBFF');gr.addColorStop(1,'#A78BFA');g.fillStyle=gr;g.fillRect(x-40,280,80,10)}
gc.addEventListener('pointermove',e=>{const r=gc.getBoundingClientRect();gx=(e.clientX-r.left)/r.width*480});
addEventListener('keydown',e=>{if(openEl&&openEl.id==='gm'){if(e.key==='ArrowLeft')gx-=24;if(e.key==='ArrowRight')gx+=24;gx=Math.max(40,Math.min(440,gx))}});
function catcher(){const id=++run;let it=[],sc=0,li=3,t=20,sp=0,last=performance.now();gx=240;
const loop=n=>{if(!live(id))return;const dt=(n-last)/1000;last=n;t-=dt;sp-=dt;
if(sp<=0){sp=.55;it.push({x:30+Math.random()*420,y:-10,v:90+Math.random()*80+(20-t)*5,bug:Math.random()<.28,t:SKL[Math.random()*SKL.length|0]})}
for(const i of it){i.y+=i.v*dt;if(i.y>270&&i.y<295&&Math.abs(i.x-gx)<48&&!i.hit){i.hit=1;if(i.bug){li--;gc.classList.add('shake');setTimeout(()=>gc.classList.remove('shake'),400)}else sc++}}
it=it.filter(i=>!i.hit&&i.y<300);drawG(it,gx);st(`Score ${sc} · Lives ${li} · Time ${Math.max(0,Math.ceil(t))} · mouse, touch or ← → keys`);
if(t<=0||li<=0){finish();return}requestAnimationFrame(loop)};requestAnimationFrame(loop)}
/* game 2 */
function whack(){const w=$('#gwhack'),id=++run;w.innerHTML=Array.from({length:9},(_,i)=>`<button class="hole" aria-label="Hole ${i+1}">🕳️</button>`).join('');
let sc=0,t=15;const hs=[...w.children];hs.forEach(h=>h.onclick=()=>{if(h.dataset.on){h.dataset.on='';h.textContent='💥';sc++}});
st('Squash the bugs! 15 seconds');const tm=setInterval(()=>{if(!live(id)){clearInterval(tm);return}t-=.7;hs.forEach(h=>{h.dataset.on='';h.textContent='🕳️'});
const h=hs[Math.random()*9|0];h.dataset.on=1;h.textContent='🐞';st(`Bugs squashed ${sc} · Time ${Math.max(0,Math.ceil(t))}`);if(t<=0){clearInterval(tm);finish()}},700)}
/* game 3 */
function mem(){const m=$('#gmem'),id=++run,d=['Python','OpenCV','C++','Arduino'],c=[...d,...d].sort(()=>Math.random()-.5);
m.innerHTML=c.map((v,i)=>`<button class="mc" data-v="${v}" aria-label="Card ${i+1}">❓</button>`).join('');let a=null,lock=0,left=4,mv=0;st('Match the skill pairs');
[...m.children].forEach(b=>b.onclick=()=>{if(lock||b.dataset.f)return;b.dataset.f=1;b.textContent=b.dataset.v;if(!a){a=b;return}mv++;st(`Moves ${mv}`);
if(a.dataset.v===b.dataset.v){a=null;if(--left===0)setTimeout(()=>id===run&&finish(),500)}else{lock=1;const p=a;a=null;setTimeout(()=>{p.textContent=b.textContent='❓';p.dataset.f=b.dataset.f='';lock=0},700)}})}
/* ===== CONTACT GATE ===== */
let auto=false;function gate(a){auto=a;openM($('#cg'))}
$('#navc').onclick=e=>{e.preventDefault();gate(false)};$('#est').onclick=()=>gate(true);
$('#cgo').onclick=()=>{closeM();const on=location.hash==='#/projects#contact';location.hash='#/projects#contact';if(on)setTimeout(()=>$('#contact').scrollIntoView(),60);if(auto)setTimeout(()=>$('#sig').click(),800)};
/* ===== SKILL TRAVEL ===== */
const VEH=[['🐂','Bull cart',7,'Slow and steady. Arrives after chai break.'],['🚲','Bicycle',4,'Eco-friendly, with a cheerful ding-ding.'],['🛵','Scooter',2.5,'Weaving through traffic like a pro.'],['🚀','Rocket',1.2,'Overkill, but it looks cool.']];let tvT;
function openTravel(name,info,proj){$('#tvt').textContent='Travel plan: '+name;$('#tvd').textContent=info;$('#tvm').textContent='';const v=$('#veh');v.style.transition='none';v.style.left='0';v.textContent='';
$('#tvb').innerHTML=VEH.map((x,i)=>`<button class="chip" data-vh="${i}">${x[0]} ${x[1]}</button>`).join('');
$$('#tvb .chip').forEach(b=>b.onclick=()=>{const i=+b.dataset.vh,x=VEH[i];clearTimeout(tvT);v.style.transition='none';v.style.left='0';v.textContent=x[0];v.style.transform=i<3?'scaleX(-1)':'rotate(45deg)';void v.offsetWidth;const d=RM?0:x[2];
v.style.transition=`left ${d}s linear`;v.style.left='calc(100% - 44px)';$('#tvm').textContent=`${x[1]} is carrying "${name}"…`;
tvT=setTimeout(()=>{$('#tvm').textContent=`Arrived at ${proj||'the Innovation Lab'}! ${x[3]}`;const r=v.getBoundingClientRect();burst(r.left,r.top,18,COL,4)},d*1000)});openM($('#tv'))}
document.addEventListener('click',e=>{const n=e.target.closest('.node[data-i]');if(n){const s=SK[n.dataset.i];openTravel(s[0],s[1],PN[s[2][0]]);return}
const k=e.target.closest('[data-k]');if(k)openTravel(k.dataset.k,G[k.dataset.gg][k.dataset.k])});
