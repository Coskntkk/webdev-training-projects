const imageSelf = $("img");
const image = $(".img-div");

const imageTop = image.offset().top;
const imageHeight = image.height();
const imageY = imageTop + (imageHeight / 2);

const imageLeft = image.offset().left;
const imageWidth = image.width();
const imageX = imageLeft + (imageWidth / 2);

$(document).click(function(e) {
  var clickX = e.pageX;
  var clickY = e.pageY;

  var angle = (Math.atan2(clickY - imageY, clickX - imageX) * 180 / Math.PI) + 90;

  imageSelf.animate({deg: angle}, {
    duration: 1200,
    step: function(angle) {
      $(this).css({
        transform: 'rotate(' + angle + 'deg)'
      });
    }
  });
});
