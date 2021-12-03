// 1. 눌린 key에서 audio 소리가 재생되게 한다.
// 2. 눌린 key에 playing classList를 추가한다.
// 3. 모든 이벤트가 끝나면, playing classList를 제거하여 복구한다.

document.addEventListener("keydown", playSound); // 키 눌렸을 때

const keys = document.querySelectorAll(".key"); // 이벤트 끝났을 때
keys.forEach((key) => key.addEventListener("transitionend", removePressed));

// Key가 눌렸을 때 동작하는 함수
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (key == null || audio == null) {
    // 눌린 key 또는 audio가 null 이면 아무것도 하지 않는다.
    return;
  }

  audio.currentTime = 0; // 재생 지점을 0으로 설정하여 누를 때마다 재생 지점 초기화
  audio.play();

  key.classList.add("playing");
}

// 이벤트가 끝나면 실행될 함수
function removePressed(e) {
  if (e.propertyName != "transform") return; // transform이 아닌 border, shadow 등의 경우에는 무시
  // console.log(e.propertyName); // 이 때, transform속성만 출력된다.
  this.classList.remove("playing");
}
