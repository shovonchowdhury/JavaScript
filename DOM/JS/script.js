console.log("yo bro")

const list=document.getElementsByTagName('li');
for(let li of list)
    {
        console.log(li.textContent);
    }

const heading=document.querySelector('li');
console.log(heading);

document.getElementById('dip').style.backgroundColor='red';

document.getElementById('dip').setAttribute('title','ami banglar don')

console.log(document.getElementsByTagName('li')[0].innerHTML);



