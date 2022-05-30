const prv = document.querySelectorAll(".prv_btn");
const nxt = document.querySelectorAll(".nxt_btn");
const cont = document.querySelectorAll(".container");
const width = document.querySelector(".products");

for (i = 0; i < cont.length; i++) {
   const el1 = document.querySelector('[data-id="' + i + '"]');
   console.log(el1);

   prv[i].addEventListener("click", function () {
      console.log("mai");
      el1.scrollLeft -= width.offsetWidth + 50;
   });

   nxt[i].addEventListener("click", function () {
      console.log("mai");
      el1.scrollLeft += width.offsetWidth + 50;
   });
}




let a = document.getElementById("container_one");
let count = a.children.length;
console.log(count);

//  var parentContainerWidth = document.getElementById("container_one");
//  var a = parentContainerWidth.offsetWidth;
//  console.log(a);

// var elementCount = document.getElementsByTagName("div").filter(function () {
//    return document.querySelector(this).offset().right >= a;
// }).length;
// alert(elementCount);
