let prv = document.querySelectorAll(".prv_btn");
let nxt = document.querySelectorAll(".nxt_btn");
let cont = document.querySelectorAll(".container");
for (i = 0 ; i < cont.length; i++) {
    prv[i].addEventListener("click", function () {
        console.log("mai");
        cont[i].scrollLeft-= 450
        //document.querySelector(".container").scrollLeft -= 450;
    })

    nxt[i].addEventListener("click", function () {
        console.log("mai");
        cont[i].scrollLeft+=450
        //document.querySelector(".container").scrollLeft += 450;
    })
}
