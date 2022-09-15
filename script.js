let large = document.getElementById('large');
let pics = document.getElementsByClassName('pic')

for(let i = 0; i < 5; i = i + 1){
    pics[i].onclick = function(){
        // console.log(i);
        large.src = pics[i].src
    }
    // pics[i].style.border = "1px solid black"
}



// console.log(pics);

// for(let i = 5; i < 11; i = i + 1){
//     console.log(i);
// }


// for(let i = 999; i > 987; i = i - 3){
//     console.log(i);
// }

// for(let i = "xa"; i.length < 8; i = i + "xa"){
//     console.log(i);
// }