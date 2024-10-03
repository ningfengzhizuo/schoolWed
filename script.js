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

    // 添加滚动事件监听器
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 处理在线报名按钮点击
    const showPolicyModalButton = document.querySelector('a[data-bs-target="#policyModal"]');
    const policyModal = new bootstrap.Modal(document.getElementById('policyModal'));
    const enrollmentModal = new bootstrap.Modal(document.getElementById('enrollmentModal'));

    if (showPolicyModalButton) {
        showPolicyModalButton.addEventListener('click', function(e) {
            e.preventDefault();
            policyModal.show();
        });
    }

    // 处理"前往报名"按钮点击
    const goToEnrollmentButton = document.getElementById('goToEnrollment');
    if (goToEnrollmentButton) {
        goToEnrollmentButton.addEventListener('click', function() {
            policyModal.hide();
            enrollmentModal.show();
        });
    }

    // 处理报名表单提交
    const enrollmentForm = document.getElementById('enrollmentForm');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 这里可以添加表单数据的处理逻辑
            alert('报名成功！我们会尽快与您联系。');
            enrollmentModal.hide();
            this.reset();
        });
    }

    // 其他现有的代码保持不变
});
