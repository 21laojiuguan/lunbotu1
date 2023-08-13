// let lis = document.querySelectorAll('ul li');
// let index = 0;

// function showLi(){
//     for(let i=0; i<lis.length; i++){
//         lis[i].style.display = 'none';
//         nav[i].style.background = "green";
//     }
//     lis[index].style.display = 'block';
//     nav[index].style.background = "red";
// }

// function $(select){
//     return document.querySelector(select)
// }

// var leftbtn = $('.leftbtn');
// leftbtn.onclick = function(){
//     if(index == 0){
//         index = lis.length;
//     }
//     index--;
//     showLi();
// }

// var rightbtn = $('.rightbtn')
// rightbtn.onclick = function(){
//     index++;
//     if(index == lis.length){
//         index = 0;
//     }
//     showLi();
// }

// let nav = document.querySelectorAll('.nav span')
// for(let i =0; i<nav.length; i++){
//     nav[i].onclick = function(){
//         index = i;
//         showLi()
//     }
// }

let lis = document.querySelectorAll('ul li');
let index = 0;

function showli(){
    for(let i=0; i<lis.length; i++){
        lis[i].style.display = 'none';
        nav[i].style.background= 'green';
    }
    lis[index].style.display = 'block';
    nav[index].style.background= 'red';
}


function $(select){
    return document.querySelector(select);
}

var leftbtn = $('.leftbtn');
leftbtn.onclick = function(){
    if(index == 0){
        index = lis.length;
    }
    index--;
    showli()
}


var rightbtn = $('.rightbtn');
rightbtn.onclick = function(){
    index++;
    if(index == lis.length){
        index = 0;
    }
    showli();
}

var nav = document.querySelectorAll('.nav span')
for(let i=0; i<nav.length; i++){
    nav[i].onclick = function(){
        index = i;
        showli();
    }
}