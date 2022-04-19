const text_key = document.getElementById("keycode");
const dis_play_pressed = document.getElementById("text");
const key_board_key = document.getElementById("keyboard-key");

window.addEventListener("keydown", function (e) {
  const key_board = e.keyCode;
  dis_play_pressed.style.display = "block";
  text_key.innerHTML = "";
  text_key.innerHTML = key_board;
});
