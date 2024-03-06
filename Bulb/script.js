 /*NOTE - 4 Pillers of DOM :==>
        1. Selection Of an Element
        2. Changing Html
        3. Changing CSS
        4. Event Listner */

// var a = document.querySelector("h1")
// a.innerHTML = "Hello Again"

// var h  = document.querySelector("h1")
// h.textContent = "Bye"

// var a = document.querySelector("h1")
// a.style.padding = "20px"

// var a = document.querySelector("h1")    
// a.addEventListener("click", function(){
//     a.innerHTML = "Badal gya hu mai bhi aaj"
//     a.style.color = "blue" 
//     a.style.backgroundColor = "gray"
// })


//? Bulb 

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0

btn.addEventListener("click", function(){
    if(flag == 0){
    bulb.style.backgroundColor = "yellow";
    bulb.style.border = "8px solid rgb(251, 255, 171)"
    btn.innerHTML = "OFF"
    flag = 1
    }else{
        bulb.style.backgroundColor = "gray";
        bulb.style.border = "4px solid rgb(208, 208, 206)"
        btn.innerHTML = "ON"
        flag = 0
    }
});

 
