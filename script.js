document.addEventListener('DOMContentLoaded', function() {
    // 初始化Swiper轮播图
    new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 初始化Bootstrap的modal
    var myModal = new bootstrap.Modal(document.getElementById('aboutModal'), {
        keyboard: false
    });

    // 添加滚动事件监听器
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 初始化联系我们的模态框
    var contactModal = new bootstrap.Modal(document.getElementById('contactModal'), {
        keyboard: false
    });
});