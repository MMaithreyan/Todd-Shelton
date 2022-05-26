let prv = document.querySelectorAll(".prv_btn");
let nxt = document.querySelectorAll(".nxt_btn");
let container = document.querySelectorAll(".container");

 let i,j;
// for(i=0 ; i<prv.length ; i++){
//  prv[i].addEventListener("click", function () {
//      console.log("hello");
//      container.scrollLeft -= 450;
//  });
// }


// for(j=0 ; j<nxt.length ; j++){
//  nxt[j].addEventListener("click", function () {
//      console.log("hello");
//      container.scrollLeft += 450;
//  });
// }


prv.forEach((left)=>{
    left.addEventListener("click",()=>{
        container.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt.forEach((right)=>{
    right.addEventListener("click",()=>{
        container.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})

// let i, j;
// for (i = 0; i < prv.length; i++) {
//     prv[i].addEventListener("click", function () {
//         console.log("hello");
//         document.querySelector(".container").scrollLeft -= 450;
        
//         // let a = document.querySelector(".show").nextElementSibling;
//         // let a = document.querySelectorAll(".container");
//         // a.forEach(a => {
//         //     a.scrollLeft -= 450
//         // });
//     });
// }

// for (j = 0; j < nxt.length; j++) {
//     nxt[j].addEventListener("click", function () {
//         console.log("hello");

//         document.querySelector(".container").scrollLeft += 450;
        
//         //  let b = document.querySelector(".show").nextElementSibling;
//         //   let b = document.querySelectorAll(".container");
//         //     b.forEach(b=>{
//         //         b.scrollLeft += 450;
//         //     });
//     });
// }










//   prv.forEach((prv)=>{
//       prv.addEventListener("click",function(){
//          document.getElementsByClassName(".container").scrollLeft -= 450;
//       })
//   });

//   nxt.forEach((nxt)=>{
//       nxt.addEventListener("click",function(){
//          document.getElementsByClassName(".container").scrollLeft += 450;
//       })
//   });




// nxt.onclick = function(){
//     document.getElementsByClassName("container").scrollLeft+=20;
// };

// nxt.addEventListener("click",()=>{
//      document.getElementsByClassName(".container").scrollLeft+=20;
// });

