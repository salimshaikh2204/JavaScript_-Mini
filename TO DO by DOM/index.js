let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = 'delete';
    delbtn.classList.add("del");
    item.appendChild(delbtn);
    ul.appendChild(item);


    inp.value = "";
});
ul.addEventListener("click", function(even) {
    if (even.target.nodeName == "BUTTON") {
        let listitem = even.target.parentElement;
        listitem.remove();
    }

})


// let delbtns = document.querySelectorAll(".del");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         par.remove();

//     })
// }