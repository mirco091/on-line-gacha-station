const boxes=[
 {name:'Premium Card Vault #018',price:1000,left:214,seller:'CardLab_88',rate:'5%',icon:'💎'},
 {name:'Streamer Battle Box',price:700,left:91,seller:'KiraTrade',rate:'5%',icon:'⚡'},
 {name:'Solana Collector Pack',price:1200,left:340,seller:'Web3Seller',rate:'5%',icon:'🟣'},
 {name:'Beginner Lucky Pack',price:300,left:800,seller:'OpenMarket',rate:'5%',icon:'🎁'},
 {name:'High Roller Vault',price:3000,left:62,seller:'VaultMaster',rate:'5%',icon:'👑'},
 {name:'Point Back Rush',price:500,left:510,seller:'PointHub',rate:'5%',icon:'🔁'}
];
const prizes=[
 {name:'PSA10 Premium Card',value:'48,000pt',type:'発送可能'},
 {name:'Rare Card Pack',value:'12,000pt',type:'発送可能'},
 {name:'Vault Point Back',value:'2,500pt',type:'ポイント還元'},
 {name:'Standard Card',value:'800pt',type:'発送可能'},
];
let inventory=[{name:'Rare Card Pack',value:'12,000pt',type:'発送可能'},{name:'Vault Point Back',value:'2,500pt',type:'ポイント還元'}];
function yen(n){return Number(n).toLocaleString('ja-JP')+'pt'}
function renderBoxes(){boxGrid.innerHTML=boxes.map((b,i)=>`<article class="box-card"><div class="box-art">${b.icon}</div><h3>${b.name}</h3><div class="box-meta"><span>1回 ${yen(b.price)}</span><span>残り ${b.left}口</span></div><div class="box-meta"><span>出品者 ${b.seller}</span><span>還元 ${b.rate}</span></div><button class="primary" data-tab="gacha">このBOXを引く</button></article>`).join('')}
function renderActivity(){const names=['0xA91','mika','sol_king','cardman','nft88','rookie'];activity.innerHTML=Array.from({length:6},(_,i)=>`<div class="activity-row"><span>${names[i]} が ${boxes[i%boxes.length].name}</span><b>${i%2?'発送選択':'ポイント還元'}</b></div>`).join('')}
function renderInventory(){inventoryList.innerHTML=inventory.map((p,i)=>`<div class="item"><h3>${p.name}</h3><p>価値: ${p.value}</p><p>${p.type}</p><div class="item-actions"><button class="primary" onclick="alert('発送申請デモ：住所入力画面へ')">発送</button><button class="secondary" onclick="alert('ポイント還元デモ：残高に反映')">還元</button></div></div>`).join('')}
function switchTab(id){document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));document.getElementById(id)?.classList.add('active');document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===id));scrollTo({top:0,behavior:'smooth'})}
document.addEventListener('click',e=>{const tab=e.target.dataset?.tab;if(tab)switchTab(tab)});
drawBtn.onclick=()=>{orb.classList.add('spin');drawStatus.textContent='抽選中... Proof Hash生成中';setTimeout(()=>{const p=prizes[Math.floor(Math.random()*prizes.length)];inventory.unshift(p);resultCard.innerHTML=`<h3>排出結果</h3><div class="prize"><h2>${p.name}</h2><p>推定価値 ${p.value}</p><p>${p.type}</p><small>Proof: 0x${Math.random().toString(16).slice(2,10)}...${Math.random().toString(16).slice(2,8)}</small></div><button class="primary" data-tab="inventory">獲得品を見る</button>`;drawStatus.textContent='残高 11,500pt / 抽選完了';orb.classList.remove('spin');renderInventory()},900)};
calcBtn.onclick=()=>{const price=+boxPrice.value||0,lots=+boxLots.value||0,total=price*lots;sales.textContent=yen(total);sellerFee.textContent=yen(total*.05)};
publishBtn.onclick=()=>publishStatus.textContent='審査申請を受け付けました。景品確認後、マーケットに公開されます。';
walletBtn.onclick=()=>walletBtn.textContent='接続済み: 7xK...p9Q';
renderBoxes();renderActivity();renderInventory();setInterval(renderActivity,5000);
