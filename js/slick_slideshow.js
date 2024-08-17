document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.custom-slider-container').forEach((container, index) => {
        let slideIndex = 0;
        const slides = container.querySelectorAll('.custom-slider-item');
        const dots = container.nextElementSibling.querySelectorAll('.dot');
        const prevButton = container.querySelector('.custom-prev');
        const nextButton = container.querySelector('.custom-next');

        function showSlides(n) {
            if (n >= slides.length) {
                slideIndex = 0;
            }
            if (n < 0) {
                slideIndex = slides.length - 1;
            }
            let offset = -slideIndex * 100;
            container.querySelector('.custom-slider-wrapper').style.transform = `translateX(${offset}%)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prevButton.addEventListener('click', function() {
            plusSlides(-1);
        });

        nextButton.addEventListener('click', function() {
            plusSlides(1);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', function() {
                currentSlide(i);
            });
        });

        // 初期表示
        showSlides(slideIndex);
    });
});
// 