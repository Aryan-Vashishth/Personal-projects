const crsr = document.querySelector(".cursor");
const crsrB = document.querySelector(".cursor-b");

document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrB.style.left = dets.x - 150 + "px";
    crsrB.style.top = dets.y - 150 + "px";
});


// const h4All = document.querySelectorAll(".nav h4");
// // console.log(h4All);
// h4All.forEach(function(elem){
//     // console.log(elem);
//     elem.addEventListener('mouseenter', function(){

//         crsr.style.scale = 3;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//     });

//     elem.addEventListener('mouseleave', function() {
//         crsr.style.scale = 1;
//         crsr.style.border = "1px solid #95C11E";
//         crsr.style.backgroundColor = "#95C11E";
//     })
// });

// const dwnArrow = document.querySelector('#arrow');
// console.log(dwnArrow);

// const scl = document.querySelector('.scroller');
// console.log(aboutUs);

// dwnArrow.addEventListener('click', function(){
//     scl.scrollIntoView({behaviour: "smooth"});
// });


gsap.to(".nav",{
    backgroundColor :"#000",
    height: "105px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
});

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
});

gsap.from(".about-us img, .about-us-in", {
    y : 50,
    opacity: 0,
    duration: 1,
    stagger: .4,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
});


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: .1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    }
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

});

gsap.from(".page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
});

