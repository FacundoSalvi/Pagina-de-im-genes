let foto = document.getElementById('imagen');
let cambio = document.getElementById('btn');
let listFot =  ['dinamarca.jpg', 'finlandia.jpg', 'gales.webp', 'inglaterra.webp', 
    'islandia.webp', 'patagonia.jpg', 'suiza.jpg', 'tromso.jpg'];
let i = 0;



cambio.addEventListener('click', (e)=>{
    i= (i+1)% listFot.length;
    foto.src = listFot[i];
});