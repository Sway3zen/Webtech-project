document.addEventListener("DOMContentLoaded", function() {
    var videoBtn = document.querySelector(".Video-main-btn-1");
    var videoOverlay = document.getElementById("video-overlay");
    var body = document.querySelector("body");
    var blur_sel = document.querySelector(".blur_all");
  
    videoBtn.addEventListener("click", function(e) {
      e.preventDefault();
      videoOverlay.style.display = "block";
      blur_sel.classList.add("blur");
      body.style.overflow = "hidden";
    });
  
    videoOverlay.addEventListener("click", function() {
      videoOverlay.style.display = "none";
      blur_sel.classList.remove("blur");
      body.style.overflow = "visible";
    });
  });
  