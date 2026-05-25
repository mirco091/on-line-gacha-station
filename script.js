const state = {
  connected:false, sol:0, points:0, inventory:[], shipments:[],
  boxes:[
    {name:'Genesis Community Box', seller:'alpha_seller.sol', price:1200, fee:96, stock:84, top:'PSA10 Premium Card', odds:'SSR 1.2% / SR 8% / R 90.8%', theme:'VX'},
    {name:'Solana Luxury Pack', seller:'solana_cards.sol', price:2500, fee:200, stock:36, top:'Limited NFT + Physical Card', odds:'SSR 2% / SR 12% / R 86%', theme:'SOL'},
    {name:'Creator Collab Drop', seller:'creator_dao.sol', price:800, fee:64, stock:210, top:'Signed Collectible', odds:'SSR 0.8% / SR 6% / R 93.2%', theme:'DAO'},
  ],
  prizes:[
    {name:'PSA10 Premium Card', rarity:'SSR', value:38000, ship:true},
    {name:'Limited NFT Badge', rarity:'SR', value:8500, ship:false},
    {name:'Anime Rare Card', rarity:'SR', value:6200, ship:true},
    {name:'Vault Point Ticket', rarity:'R', value:900, ship:false},
    {name:'Common Collectible Card', rarity:'R', value:400, ship:true},
  ]
};
const $ = (q)=>document.querySelector(q);
const $$ = (q)=>document.querySelectorAll(q);
function save(){localStorage.setItem('vaultx-flow',JSON.stringify(state));}
function load(){try{const s=JSON.parse(localStorage.getItem('vaultx-flow')); if(s) Object.assign(state,s);}catch(e){}}
function update(){
 $('#walletLabel').textContent=state.connected?'7xK...Vault':'未接続';
 $('#solBalance').textContent=state.sol.toFixed(2);
 $('#pointBalance').textContent=state.points.toLocaleString();
 $('#inventoryCount').textContent=state.inventory.length;
 $('#shippingCount').textContent=state.shipments.length;
 renderBoxes(); renderInventory(); renderShipments(); save();
}
function nav(view){$$('.view').forEach(v=>v.classList.remove('active')); $('#'+view).classList.add('active'); $$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.view===view)); scrollTo(0,0);}
$$('.nav').forEach(b=>b.onclick=()=>nav(b.dataset.view));
document.addEventListener('click',e=>{if(e.target.dataset.jump) nav(e.target.dataset.jump)});
$('#connectBtn').onclick=()=>{state.connected=true; update(); addFeed('ウォレット接続完了','7xK...Vault');};
$$('.deposit-option').forEach(btn=>btn.onclick=()=>{
 if(!state.connected){alert('先にウォレット接続してください');return;}
 const sol=Number(btn.dataset.sol); const pts=Math.round(sol*15000);
 state.sol+=sol; state.points+=pts; addFeed('入金反映',`${sol} SOL → ${pts.toLocaleString()}pt`); update();
});
function renderBoxes(){
 $('#boxGrid').innerHTML=state.boxes.map((b,i)=>`<article class="box-card"><div class="box-art">${b.theme}</div><span class="badge">COMMUNITY BOX</span><h3>${b.name}</h3><p class="meta">出品者 ${b.seller}</p><p class="meta">目玉：${b.top}</p><p class="meta">確率：${b.odds}</p><p class="meta">在庫 ${b.stock} / 手数料 ${b.fee}pt</p><div class="price-row"><span class="price">${b.price.toLocaleString()}pt</span><button class="open-btn" onclick="openBox(${i})">引く</button></div></article>`).join('');
}
function pickPrize(){
 const r=Math.random()*100;
 if(r<1.6) return state.prizes[0];
 if(r<12) return state.prizes[Math.floor(Math.random()*2)+1];
 return state.prizes[Math.floor(Math.random()*2)+3];
}
window.openBox=(i)=>{
 const box=state.boxes[i];
 if(state.points<box.price){alert('ポイント不足です。入金してください。'); nav('deposit'); return;}
 state.points-=box.price; box.stock=Math.max(0,box.stock-1);
 $('#openingModal').classList.remove('hidden'); $('#openingTitle').textContent='OPENING...'; $('#resultCard').classList.add('hidden'); $('#closeModal').classList.add('hidden');
 setTimeout(()=>{
  const p={...pickPrize(), id:Date.now(), box:box.name, hash:'0x'+Math.random().toString(16).slice(2,10)+Math.random().toString(16).slice(2,10), status:'保管中'};
  state.inventory.unshift(p);
  $('#openingTitle').textContent='RESULT';
  $('#resultCard').innerHTML=`<div class="rarity">${p.rarity}</div><h2>${p.name}</h2><p>推定還元 ${p.value.toLocaleString()}pt</p><small>Proof Hash: ${p.hash}</small>`;
  $('#resultCard').classList.remove('hidden'); $('#closeModal').classList.remove('hidden');
  addFeed('ガチャ結果',`${p.rarity} ${p.name}`); update();
 },1600);
}
$('#closeModal').onclick=()=>{$('#openingModal').classList.add('hidden');nav('inventory')};
function renderInventory(){
 const el=$('#inventoryList');
 if(!state.inventory.length){el.innerHTML='<div class="panel glass"><h3>まだ入手品がありません</h3><p>入金後、ガチャを引くとここに保存されます。</p></div>';return;}
 el.innerHTML=state.inventory.map((it,idx)=>`<article class="item-card"><div class="item-thumb">${it.rarity}</div><div><h3>${it.name}</h3><p class="meta">BOX: ${it.box}</p><p class="meta">Proof: ${it.hash}</p><p class="meta">状態: ${it.status}</p><b>${it.value.toLocaleString()}pt相当</b><div class="item-actions"><button class="ghost ship" onclick="shipItem(${idx})">発送依頼</button><button class="ghost refund" onclick="refundItem(${idx})">ポイント還元</button></div></div></article>`).join('');
}
window.shipItem=(idx)=>{
 const it=state.inventory.splice(idx,1)[0]; it.status='発送申請済み'; it.requestedAt=new Date().toLocaleString('ja-JP'); state.shipments.unshift(it); addFeed('発送依頼',it.name); update(); nav('shipments');
}
window.refundItem=(idx)=>{
 const it=state.inventory.splice(idx,1)[0]; const refund=Math.floor(it.value*0.82); state.points+=refund; addFeed('ポイント還元',`${it.name} → ${refund.toLocaleString()}pt`); update();
}
function renderShipments(){
 const el=$('#shipmentList');
 if(!state.shipments.length){el.innerHTML='<div class="panel glass"><h3>発送申請はありません</h3><p>入手品から発送依頼を行うとここに表示されます。</p></div>';return;}
 el.innerHTML=state.shipments.map(it=>`<article class="item-card"><div class="item-thumb">📦</div><div><h3>${it.name}</h3><p class="meta">申請日時: ${it.requestedAt}</p><p class="meta">配送ステータス: 受付済み → 検品中 → 発送準備</p><p class="meta">住所入力・本人確認・送料決済は本番実装項目</p></div></article>`).join('');
}
$('#createBox').onclick=()=>{
 const name=$('#sellerBoxName').value.trim()||'User Generated Box'; const price=Number($('#sellerPrice').value)||1000; const prize=$('#sellerPrize').value.trim()||'Mystery Prize';
 state.boxes.unshift({name,seller:'new_seller.sol',price,fee:Math.floor(price*.08),stock:50,top:prize,odds:'SSR 1% / SR 9% / R 90%',theme:'NEW'});
 addFeed('新規BOX作成',name); update(); nav('gacha');
}
const feedSeeds=['0.5 SOL入金が反映されました','Genesis BoxからSRが排出','出品者 alpha_seller.sol に売上分配','PSA10カードの発送依頼が作成','Proof Hashを検証しました'];
function addFeed(title,detail){
 const feed=JSON.parse(localStorage.getItem('vaultx-feed')||'[]'); feed.unshift({title,detail,time:new Date().toLocaleTimeString('ja-JP',{hour:'2-digit',minute:'2-digit'})}); localStorage.setItem('vaultx-feed',JSON.stringify(feed.slice(0,9))); renderFeed();
}
function renderFeed(){
 let feed=JSON.parse(localStorage.getItem('vaultx-feed')||'[]');
 if(!feed.length) feed=feedSeeds.map((x,i)=>({title:x,detail:'platform event',time:`12:0${i}`}));
 $('#liveFeed').innerHTML=feed.map(f=>`<div class="feed-item"><div><b>${f.title}</b><p class="meta">${f.detail}</p></div><span>${f.time}</span></div>`).join('');
}
setInterval(()=>{ if(Math.random()<.45) addFeed('Live Update',feedSeeds[Math.floor(Math.random()*feedSeeds.length)]);},6000);
load(); renderFeed(); update();
