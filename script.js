const like = document.getElementById("like")
let turn0 = true

like.addEventListener("click",()=>{
    if(turn0 === true){
        turn0 = false;
        like.classList.add('like')
    }else{
        turn0 = true;
        like.classList.remove('like')
    }
})