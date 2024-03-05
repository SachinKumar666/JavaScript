

var products = [
    {name:"White Chair", headLine: "Flexible, soft like cloud ", price:"1700", image:"https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Treditional Chair", headLine: "Very Comfortable ", price:"1000", image:"https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Old Stool", headLine: "looks very old but, old is gold ", price:"1400", image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
var popular = []

function addProducts(){
    var clutter =""
    products.forEach(function(products){
        clutter += `  <div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl"></div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">EJ 100 Ox Chair.</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">Hangup data.</h3>
                    <h4 class="font-semibold mt-2">$3,456</h4>
                </div>
                <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                        class="ri-add-line"></i></button>
            </div>
        </div>
        </div>`;
    })
    document.querySelector(".products").innerHTML= clutter;
}

addProducts();

