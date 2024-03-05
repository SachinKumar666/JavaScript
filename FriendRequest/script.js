
var friendStatus = document.querySelector("h5");
var btn = document.querySelector("button");

var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
    friendStatus.innerHTML = "Friends"
    btn.innerHTML = "Unfollow"
    btn.style.backgroundColor = "rgb(182, 182, 182)"
    btn.style.color = "red"
    
    flag = 1
    }else{
        friendStatus.innerHTML = "Stranger";
        btn.innerHTML = "Follow"
        btn.style.backgroundColor = "rgb(129, 221, 255)"
        btn.style.color = "green"
        flag = 0
    }
});