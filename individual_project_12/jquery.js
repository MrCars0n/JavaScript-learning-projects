// jQuery Animation for the Slider Image
$(document).ready(function () {
    var $image = $("#slider-image");
    var $sliderContainer = $("#slider-container");
    var buffer = 10; // Buffer in pixels from each edge of the slider container
    var sliderWidth = $sliderContainer.width() - $image.width() - buffer * 2;

    function bounceImage() {
        $image.animate({ left: sliderWidth }, 2000, function () {
            $image.animate({ left: buffer }, 2000, bounceImage);
        });
    }

    bounceImage();

    $(window).resize(function () {
        sliderWidth = $sliderContainer.width() - $image.width() - buffer * 2;
    });
});