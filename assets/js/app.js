(()=>{'use strict';
const WHATSAPP='919908516488';
const products=[
{id:1,name:'Monstera Deliciosa',category:'Indoor',price:499,tag:'Customer favourite',image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85'},
{id:2,name:'Snake Plant',category:'Indoor',price:299,tag:'Easy care',image:'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85'},
{id:3,name:'Peace Lily',category:'Indoor',price:349,tag:'Airy & elegant',image:'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85'},
{id:4,name:'Pink Rose',category:'Flowering',price:180,tag:'Bright blooms',image:'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=700&q=85'},
{id:5,name:'Marigold',category:'Flowering',price:65,tag:'Sunny favourite',image:'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=700&q=85'},
{id:6,name:'Tulsi',category:'Herbs',price:80,tag:'Traditional herb',image:'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=700&q=85'},
{id:7,name:'Aloe Vera',category:'Outdoor',price:150,tag:'Low maintenance',image:'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85'},
{id:8,name:'Terracotta Planter',category:'Pots',price:120,tag:'Hand-finished look',image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85'}
];
let selected='All',cart=[];
const $=id=>document.getElementById(id),money=n=>'₹'+n.toLocaleString('en-IN');
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(message){const t=$('toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function renderProducts(){const q=$('search').value.trim().toLowerCase();const list=products.filter(p=>(selected==='All'||p.category===selected)&&(p.name+' '+p.category).toLowerCase().includes(q));$('products').innerHTML=list.length?list.map(p=>'<article class="product-card"><div class="product-image"><img loading="lazy" src="'+p.image+'" alt="'+safe(p.name)+'"><span class="tag">'+safe(p.tag)+'</span></div><div class="product-info"><small>'+safe(p.category)+'</small><h3>'+safe(p.name)+'</h3><div class="product-bottom"><span class="price">'+money(p.price)+'</span><button class="add-button" data-add="'+p.id+'">Add to bag +</button></div></div></article>').join(''):'<div class="empty">No plants found. Try another search.</div>'}
function renderCart(){const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>s+x.price*x.qty,0);$('bagCount').textContent=count;$('cartCount').textContent='('+count+')';$('total').textContent=money(total);$('cartLines').innerHTML=cart.length?cart.map(x=>'<div class="cart-row"><div><b>'+safe(x.name)+'</b><small>'+money(x.price)+' each</small></div><div class="qty"><button data-qty="'+x.id+'" data-delta="-1" aria-label="Decrease">−</button><b>'+x.qty+'</b><button data-qty="'+x.id+'" data-delta="1" aria-label="Increase">+</button></div></div>').join(''):'<div class="empty">Your bag is waiting for a little green.</div>'}
function openCart(open){$('cart').classList.toggle('show',open);$('shade').classList.toggle('show',open)}
function openModal(open){$('modalShade').classList.toggle('show',open)}
function messageForOrder(data){const lines=cart.map(x=>'- '+x.name+' × '+x.qty+' = '+money(x.price*x.qty));const total=cart.reduce((s,x)=>s+x.price*x.qty,0);return ['Hello GreenLeaf! I would like to place an order.','',...lines,'','Estimated subtotal: '+money(total),'','Customer: '+data.name,'Mobile: '+data.phone,'Address: '+data.address,data.note?'Note: '+data.note:'','Please confirm availability, delivery charges and payment details.'].filter(Boolean).join('\n')}
document.addEventListener('click',e=>{const add=e.target.closest('[data-add]');if(add){const p=products.find(x=>x.id===Number(add.dataset.add));const line=cart.find(x=>x.id===p.id);if(line)line.qty++;else cart.push({...p,qty:1});renderCart();toast(p.name+' added to your bag');return}const qty=e.target.closest('[data-qty]');if(qty){const line=cart.find(x=>x.id===Number(qty.dataset.qty));if(line){line.qty+=Number(qty.dataset.delta);if(line.qty<=0)cart=cart.filter(x=>x.id!==line.id)}renderCart()}});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;selected=b.dataset.category;document.querySelectorAll('.category').forEach(x=>x.classList.toggle('active',x===b));renderProducts()});
$('search').addEventListener('input',renderProducts);
$('bagOpen').addEventListener('click',()=>openCart(true));$('bagClose').addEventListener('click',()=>openCart(false));$('continue').addEventListener('click',()=>openCart(false));$('shade').addEventListener('click',()=>openCart(false));
$('checkout').addEventListener('click',()=>{if(!cart.length){toast('Add a plant to your bag first');return}openCart(false);openModal(true)});
$('modalClose').addEventListener('click',()=>openModal(false));$('modalShade').addEventListener('click',e=>{if(e.target===$('modalShade'))openModal(false)});
$('orderForm').addEventListener('submit',e=>{e.preventDefault();if(!cart.length){openModal(false);toast('Your bag is empty');return}const data=Object.fromEntries(new FormData(e.currentTarget));const url='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(messageForOrder(data));window.open(url,'_blank','noopener');cart=[];renderCart();openModal(false);e.currentTarget.reset()});
$('menuOpen').addEventListener('click',()=>{const nav=document.querySelector('.site-header nav');const open=nav.style.display==='flex';nav.style.cssText=open?'':'display:flex;position:absolute;top:70px;left:0;right:0;background:white;padding:20px 7%;flex-direction:column;gap:18px;border-bottom:1px solid #e5eae4'});
$('year').textContent=new Date().getFullYear();renderProducts();renderCart();
})();