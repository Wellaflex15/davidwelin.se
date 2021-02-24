// Canvas code
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

// Logo code
async function animate(e){
    const el = e.currentTarget;
    
    el.firstChild.textContent = 'Utvecklare';
}

const logo = document.querySelector('.logo');
console.log(logo);
logo.addEventListener('click', animate);


