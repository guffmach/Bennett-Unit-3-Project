let title=document.querySelector(".title");
let bat=document.querySelector(".bat");
let supe=document.querySelector(".supe");
let one=document.querySelector(".option-one-end");
let two=document.querySelector(".option-two-end");
let opening=document.querySelector(".story-opening");
let three=document.querySelector(".open-one-end");
let four=document.querySelector(".open-two-end");
let lol=document.querySelector(".lol");

title.onclick=function(){
    bat.style.display="block";
    supe.style.display="block";
    title.style.display="none";
    opening.style.display="none";
    lol.style.display="none";
};
bat.onclick=function(){
 one.style.display="block";
    bat.style.display="none";
    supe.style.display="none";
};

supe.onclick=function(){
two.style.display="block";
    supe.style.display="none";
    bat.style.display="none";
};


one.onclick=function(){
one.style.display="none";
    two.style.display="none";
    three.style.display="block";
};
two.onclick=function(){
one.style.display="none";
    two.style.display="none";
    four.style.display="block";
};