function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        });
    });

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
}

cursorEffect();

function swiperJs() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
}

swiperJs();