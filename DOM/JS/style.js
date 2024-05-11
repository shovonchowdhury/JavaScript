const sectionstyle=document.querySelectorAll('section');
console.log(sectionstyle);

for(let secstyle of sectionstyle)
    {
        secstyle.style.border='2px solid blue';
        secstyle.style.backgroundColor='grey';
        secstyle.style.marginBottom='20px';
        secstyle.style.borderRadius='10px';
        secstyle.style.padding='20px';
    }

const firstSection=document.querySelector('section');
firstSection.classList.add('text-center','yo-bro');

const dialogue=document.getElementById('shahrukh-dialogue');
console.log(dialogue);
const li=document.createElement('li');
li.innerText='eeeee anjali';

dialogue.appendChild(li);
