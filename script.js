const helloButton = document.querySelector("#hello-button");
const helloMessage = document.querySelector("#hello-message");

helloButton.addEventListener("click", () => {
  helloMessage.textContent = "반가워요! 방문해 주셔서 감사합니다 ✨";
  helloButton.textContent = "인사 완료 ✓";
});