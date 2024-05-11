function makeBlue(){

    document.body.style.backgroundColor='blue';
}

const yellow=document.getElementById('yellow');
yellow.onclick= makeYellow;

function makeYellow(){

    document.body.style.backgroundColor='yellow';
}


const green=document.getElementById('green');
green.onclick=function makeyellow(){

    document.body.style.backgroundColor='green';
}

const pink=document.getElementById('pink');
pink.addEventListener('click', makepink);

function makepink(){
    document.body.style.backgroundColor='pink'
}