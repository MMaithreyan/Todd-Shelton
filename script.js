let prv = document.querySelectorAll(".prv_btn1");
let nxt = document.querySelectorAll(".nxt_btn1");
let container = document.querySelectorAll(".container1");

let prv2 = document.querySelectorAll(".prv_btn2");
let nxt2 = document.querySelectorAll(".prv_btn2");
let cont2 = document.querySelectorAll(".container2");

let prv3 = document.querySelectorAll("prv_btn3");
let nxt3 = document.querySelectorAll("nxt_btn3");
let cont3 = document.querySelectorAll("container3");

let prv4 = document.querySelectorAll("prv_btn4");
let nxt4 = document.querySelectorAll("nxt_btn4");
let cont4 = document.querySelectorAll("container4");

let prv5 = document.querySelectorAll("prv_btn5");
let nxt5 = document.querySelectorAll("nxt_btn5");
let cont5 = document.querySelectorAll("container5");

let prv6 = document.querySelectorAll("prv_btn6");
let nxt6 = document.querySelectorAll("nxt_btn6");
let cont6 = document.querySelectorAll("container6");

let prv7 = document.querySelectorAll("prv_btn7");
let nxt7 = document.querySelectorAll("nxt_btn7");
let cont7 = document.querySelectorAll("container7");

let prv8 = document.querySelectorAll("prv_btn8");
let nxt8 = document.querySelectorAll("nxt_btn8");
let cont8 = document.querySelectorAll("container8");


prv.forEach((left)=>{
    left.addEventListener("click",()=>{
        container.forEach((move)=>{
            console.log("hello");
            move.scrollLeft -= 450;
        })
    })
})

nxt.forEach((right)=>{
    right.addEventListener("click",()=>{
        container.forEach((move)=>{
            console.log("hello");
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv2.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont2.forEach((move)=>{
            console.log("hello");
            move.scrollLeft -= 450;
        })
    })
})

nxt2.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont2.forEach((move)=>{
            console.log("hello");
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv3.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont3.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt3.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont3.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv4.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont4.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt4.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont4.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv5.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont5.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt5.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont5.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################


prv6.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont6.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt6.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont6.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv7.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont7.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt7.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont7.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################



prv8.forEach((left)=>{
    left.addEventListener("click",()=>{
        cont8.forEach((move)=>{
            move.scrollLeft -= 450;
        })
    })
})

nxt8.forEach((right)=>{
    right.addEventListener("click",()=>{
        cont8.forEach((move)=>{
            move.scrollLeft += 450;
        })
    })
})
//########################################################################################################


