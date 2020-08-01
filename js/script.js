var left_text = document.getElementById("left-text");
var content = document.getElementById("content");
var dark_bg = document.getElementById("darkbg");
var video_bg = document.getElementById("videobg");

left_text.onclick = function(){

  content.style.webkitAnimationPlayState = "running";
  dark_bg.style.webkitAnimationPlayState = "running";
  content.style.pointerEvents = "auto";
  video_bg.pause();

}
