Draggable.create("#wrapperBoxes", {
		bounds:"#dragSpace",
  //allowNativeTouchScrolling:false,
		type:"x"
		}
)

TweenMax.set("body", {overflowY:'scroll'});

var scrollSpeed = 0.5; // half of user scroll
var scrollHeight = 10000;

TweenMax.set("body", {height:scrollHeight, overflowY:'scroll'});

$(document).on("scroll", function (){
  const pixels = $(document).scrollTop();
  TweenMax.to('#wrapperBoxes',1,{x:-0.5 * pixels})
  
  //  '0.5' = half speed of user scroll
  console.log(pixels);
})