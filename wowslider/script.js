function ws_basic_linear(c, a, b) {
 var d = jQuery;
 var e = d("<div></div>").css({
  position: "absolute",
  display: "none",
  "z-index": 2,
  width: "200%",
  height: "100%"
 }).appendTo(b);
 this.go = function(f, j) {
  e.stop(1, 1);
  var g = (!!((f - j + 1) % a.length) ^ c.revers ? "left" : "right");
  d(a[j]).clone().css({
   position: "absolute",
   left: "auto",
   right: "auto",
   top: 0,
   width: "50%"
  }).appendTo(e).css(g, 0);
  d(a[f]).clone().css({
   position: "absolute",
   left: "auto",
   right: "auto",
   top: 0,
   width: "50%"
  }).appendTo(e).css(g, "50%").show();
  e.css({
   left: "auto",
   right: "auto",
   top: 0
  }).css(g, 0).show();
  var h = b.find("ul").hide();
  var i = {};
  i[g] = "-100%";
  e.animate(i, c.duration, "easeInOutExpo", function() {
   h.css({
    left: -f + "00%"
   }).show();
   d(this).hide().html("")
  });
  return f
 }
};
jQuery("#wowslider-container1").wowSlider({
 effect: "basic_linear",
 prev: "",
 next: "",
 duration: 20 * 100,
 delay: 12 * 100,
 width: 430,
 height: 265,
 autoPlay: true,
 playPause: false,
 stopOnHover: true,
 loop: false,
 bullets: true,
 caption: true,
 captionEffect: "move",
 controls: true,
 onBeforeStep: 0,
 images: 0
});