document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModal');
    var span = document.getElementsByClassName('close')[0];

    var swiper = null;

    btn.onclick = function() {
        modal.style.display = "block";
        // Initialize Swiper
        swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    }

    span.onclick = function() {
        modal.style.display = "none";
        if (swiper) {
            swiper.destroy();
            swiper = null;
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            if (swiper) {
                swiper.destroy();
                swiper = null;
            }
        }
    }
});

