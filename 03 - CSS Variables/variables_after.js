"use strict";

// controls div의 모든 input 요소를 가져와서 어떤 이벤트가 발생하면 css를 변경한다.
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // px, or nothing은 type=color input을 가리킨다.
  // || ''을 명시하지 않으면 undefined 처리된다.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
