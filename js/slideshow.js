// slideshow.js

// スライドショー1の設定
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides1 = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}
    slides1[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 2000); // 2秒ごとにスライドが切り替わる
}

// スライドショー2の設定
let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    slides2[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 2000); // 2秒ごとにスライドが切り替わる
}
