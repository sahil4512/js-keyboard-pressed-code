const text_key = document.getElementById("keycode");
const dis_play_pressed = document.getElementById("text");

window.addEventListener("keydown", function (e) {
  const key = e.keyCode;
  dis_play_pressed.style.display = "block";
  text_key.innerHTML = "";
  text_key.innerHTML = key;
});
