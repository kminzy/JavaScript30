// 모든 panel들 가져와서 click 이벤트 추가
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => panel.addEventListener("click", clickMotion));
panels.forEach((panel) => panel.addEventListener("mouseleave", endMotion));

function clickMotion() {
  // open class를 추가해서 효과 적용
  this.classList.add("open");
}

function endMotion() {
  // visible처리 되어있는 홀수번째 p들을 모두 선택
  const p = this.querySelectorAll("p:nth-child(odd)");

  this.classList.remove("open");
  p.forEach((item) => {
    item.style.animation = `bottom-to-top 0.7s`;
  });
}
