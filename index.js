let M=document.querySelector('#minus');
let D=document.querySelector('#data');
let P=document.querySelector('#plus');
M.addEventListener('click',function(){
    let curr=D.innerHTML;
    curr=Number.parseInt(curr);
    curr--;
    D.innerHTML=curr;
});
P.addEventListener('click',function(){
    let curr=D.innerHTML;
    curr=Number.parseInt(curr);
    curr++;
    D.innerHTML=curr;
});