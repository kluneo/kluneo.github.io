
      const btn = document.querySelector(".btn");
      const box = document.querySelector(".overlay");

// const showBox = new TimelineMax();
// //alias for brevity
// const sb = showBox;

// const hb = new TimelineMax(); //hidebox

btn.addEventListener("click", function() {
  if (!box.classList.contains("active")) {    
    TweenMax.fromTo(box, 0.5, { opacity: 0, y: 0 }, { opacity: 1, y: 1 });
    box.classList.add("active");
  } else {
    TweenMax.fromTo(box, 0.5, { opacity: 1, y: 0 }, { opacity: 0, y: -100 });
    box.classList.remove("active");
  }
}); 
