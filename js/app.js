// import { gsap } from "gsap";

const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
  yValue = 0;

let rotatedDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotationSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1; // to check if the layer is in the left part of the window
    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px)) rotateY(${
      rotatedDegree * rotationSpeed
    }deg) perspective(2300px) translateZ(${zValue * speedz}px `;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  xValue =
    e.clientX -
    window.innerWidth / 2; /* relative to the center of the window */
  yValue = e.clientY - window.innerHeight / 2;

  rotatedDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});

if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
}else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}


/* GSAP Animation */

// let timeline = gsap.timeline();

// parallax_el.forEach(el => {
//     timeline.from(
//         el,
//       {
//         top: `${el.offsetHeight / 2 + +200}px`,
//         duration: 1,
//       },
//       "1"
//     );
// })


