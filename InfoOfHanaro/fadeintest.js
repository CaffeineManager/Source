// DOM 요소를 선택합니다.
const fadeElements = document.querySelectorAll('.fade-in-content');

// 스크롤 이벤트 핸들러 함수를 정의합니다.
function handleScroll() {
    fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 스크롤 위치에 따라 요소의 위치를 조정하여 fade-in 효과를 적용합니다.
        if (elementTop < windowHeight * 0.8) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
        } else {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        }
    });
    }

// 스크롤 이벤트를 추가합니다.
window.addEventListener('scroll', handleScroll);

// 페이지 로딩 시 초기 상태를 체크합니다.
handleScroll();