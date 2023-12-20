let opinions = [
    " Yes, of course",
" Of course yeah",
" Sure",
" Yes, absolutely",
" You can trust",

" As I see , yes",
" With high potential",
" Outlook is good",
" Yeah",
" Looks like yes",

" Try again late",

" Not sure",
" can't say now",
" Concentrate and ask again",

" Do not trust",
" My answer is no",
" My potential says no",
" Very poethic"
];


let btn = document.querySelector("button");




btn.addEventListener("click", ()=>{
    opinions.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML = opinions[0];
    document.getElementById("response").style.fontSize = "40px";
    setTimeout(timeup, 4000);
    function timeup(){
        document.getElementById("response").innerHTML = "yana sorashingiz mumkin...";
        document.getElementById("response").innerHTML.style.fontSize = "18px";
        document.getElementById("clear").value = "";
    };
})


// let randomIndex = Math.floor(Math.random() * opinions.length);
// let randomWord = opinions[randomIndex];
// console.log(randomWord);


// let p = document.querySelector(".result")
// let input = document.querySelector("#clear")

// function myFunction(){
//     opinions.sort(function(a,b){return 0.5 - Math.random()});
//     document.getElementById("response").innerHTML = opinions[0];
//     document.getElementById("response").style.fontSize = "40px";
//     setTimeout(timeup, 4000);

//     function timeup(){
//         document.getElementById("response").innerHTML = "ask me again please...";
//         document.getElementById("response").innerHTML.style.fontSize = "18px";
//         document.getElementById("clear").value = "";
//     }
// }
