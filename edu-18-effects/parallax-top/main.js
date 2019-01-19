window.addEventListener("scroll", () => {
    const wScroll = window.pageYOffset;
  
    scrollParallax().init(wScroll);
  });


function scrollParallax() {
    const img1 = document.querySelector(".img--1");
    const img2 = document.querySelector(".img--2");
    const img3 = document.querySelector(".img--3");
  
    return {
      move: function(block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + "%";
        let transformString = `translate3d(0, ${strafe}, 0)`;
  
        let style = block.style;
  
        style.transform = transformString;
        style.webkitTransform = transformString;
      },
      init: function(wScroll) {
        this.move(img1, wScroll, -5);
        this.move(img2, wScroll, 10);
        this.move(img3, wScroll, 5);
      }
    };
  }