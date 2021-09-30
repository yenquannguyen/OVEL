$(' .footerContainerRight').mouseenter(function () {

gsap.to([$('.RightBottom li')], {x:0, opacity:1,stagger: 0.2});
gsap.to([$('.RightBottom li a')], {color: "white", opacity:1,stagger: 0.2});
  
});


$(' .footerContainerRight').mouseleave(function () {

  gsap.to([$('.RightBottom li')], {x:-10, alpha:0});
gsap.to([$('.RightBottom li a')], {alpha:0});
  
});