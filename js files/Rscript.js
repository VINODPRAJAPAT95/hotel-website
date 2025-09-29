// Mobile menu
function toggleMenu(){
  document.getElementById('navMenu').classList.toggle('active');
}

// Video play/pause
const video=document.getElementById("myVideo");
const button=document.getElementById("playPauseBtn");
function togglePlayPause(){
  if(video.paused){ video.play(); button.innerHTML="⏸"; }
  else{ video.pause(); button.innerHTML="▶"; }
}

// Scroll buttons
document.getElementById("scrollLeft").onclick=()=>{
  document.getElementById("roomScroll").scrollBy({left:-350,behavior:"smooth"});
};
document.getElementById("scrollRight").onclick=()=>{
  document.getElementById("roomScroll").scrollBy({left:350,behavior:"smooth"});
};
