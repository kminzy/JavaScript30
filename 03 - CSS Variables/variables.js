"use strict";

// root에 선언된 css variable을 제어하기 위해 선언
let root = document.querySelector(":root");
// 각 input에 addEventListener로 이벤트를 추가하기 위해 선언
const color = document.getElementById("base");
const blur = document.getElementById("blur");
const spacing = document.getElementById("spacing");

// 1. blur 이벤트
blur.addEventListener("mousemove", (e) => {
  root.style.setProperty("--blur-base", `${e.target.value}px`);
});

// 2. spacing 이벤트
spacing.addEventListener("mousemove", (e) => {
  root.style.setProperty(
    "--space-base",
    `${e.target.value}px, ${e.target.value}px`
  );
});

// 3. color 이벤트
color.addEventListener("mousemove", (e) => {
  root.style.setProperty("--color-base", `${e.target.value}`);
});
