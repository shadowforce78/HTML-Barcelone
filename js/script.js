document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let index = 0;

    function showImage(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : images.length - 1;
        showImage(index);
    });

    nextButton.addEventListener('click', function () {
        index = (index < images.length - 1) ? index + 1 : 0;
        showImage(index);
    });
});
