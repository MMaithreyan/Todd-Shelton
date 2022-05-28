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
