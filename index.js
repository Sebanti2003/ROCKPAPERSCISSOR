const cc=document.getElementById('comp_choice');
const uc=document.getElementById('user_choice');
const result2=document.getElementById('result');
const possiblechoices=document.querySelectorAll('button');
let usec;
let computer;
let result;

possiblechoices.forEach(possiblechoice=>possiblechoice.addEventListener('click',(e)=>{
    usec=e.target.id;
    uc.innerHTML=usec;
    generatecomputerchoice();
    getresult();
}));
function generatecomputerchoice(){
    const random=Math.floor(Math.random()*3)+1;
    if(random===1){
        computer='rock';
    }
    if(random===2){
        computer='scissors';
    }
    if(random===3){
        computer='paper';
    }
    cc.innerHTML=computer;
}
function getresult(){
    if(computer===usec){
        result='its a draw';
    }
    if(computer==='rock' && usec==='paper'){
        result='you won';
    }
    if(computer==='rock' && usec==='scissors'){
        result='you lose';
    }
    if(computer==='paper' && usec==='scissors'){
        result='you won';
    }
    if(computer==='paper' && usec==='rock'){
        result='you lose';
    }
    if(computer==='scissors' && usec==='rock'){
        result='you won';
    }
    if(computer==='scissors' && usec==='paper'){
        result='you lose';
    }
    result2.innerHTML=result;
}
// result2.innerHTML=getresult();

