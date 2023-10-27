const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); /*seachEl안에서 input요소를 찾는다*/

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused') /*클래스 명이 추가 됨 -> focus focused*/
  searchInputEl.setAttribute('placeholder' , '통합검색') /*setAttribute html속성으 지정할 때 씀*/
});

searchInputEl.addEventListener('blur', function() { /*blur는 포커스가 해제됬을 때*/
  searchEl.classList.remove('focused') /*클래스 명이 추가 됨 -> focus focused*/
  searchInputEl.setAttribute('placeholder' , '') /*setAttribute html속성으 지정할 때 씀*/
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// _.throttle(함수,시간)
// 스크롤 이벤트를 스크롤할때 몇백번 코드가 실행되는 것을 throttle이라는 기능일 이용해 일정시간 마다 한번씩만 사용되게끔 제한을 걸어둠
window.addEventListener('scroll', _.throttle(function () { //window는 우리가 보고 있는 창을 의미함, 스크롤 시에 함수 실행
  console.log(window.scrollY); //_.throttle은 <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js 라이브러리 인해 사용가능함
  if (window.scrollY > 500) { //좌표가 500보다 적을때
    //배지 숨기기
    // badgeEl.style.display = 'none'; 갑자기 사리지며 효과과 부드럽지 못함함
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    }); //요소, 지속시간, 옵션 - 0.6초동안 점점 투명해지는 효과
    //상단이동 버튼보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });  
  } else {
    //배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    }); //요소, 지속시간, 옵션 - 0.6초동안 점점 투명해지는 효과
    //상단이동 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300)); // 300은 0.3s를 의미함
//  gsap.to() 는 라이브러리로 사용가능 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"

// 버튼 누를시 페이지 최상단 이동
toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0 // 0픽셀지점 즉 최상단으로 이동
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) { //함수이름, index-반복횟수를 index받아서 사용
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 지연시간- 0.7초 이후 실행// (index+1)은 fade-in이 4개가 있는데 한개씩 실행될때마다 index가 카운트됨 0.7초 1.4초 2.1초 2.7초 이렇게 동작하게 됨
    opacity: 1
  });
});


//스와이퍼 라이브러리 스크립트,css링크 필요 head참고
// new swiper(선택자, 옵션) 
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //세로슬라이드
  autoplay: true, //자동재생여부
  loop: true //반복재생여부
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백(단위 px)
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복재생여부
  autoplay: {
    delay: 5000 // 5초에 한번씩 이미지가 슬라이드 된다
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자 // 쉼표 꼭 적어야함 
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: { // 버튼 제어
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: { // 버튼 제어
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  } 
});


const promotionEl = document.querySelector('.promotion'); // 프로모션 슬라이드
const promotionToggleBtn = document.querySelector('.toggle-promotion'); // 버튼
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //조건을 반대가 되게 만듬
  if (isHidePromotion) { //반대값인  true값이 들어옴
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소,지속시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), // 애니메이션 동작시간(랜덤(최솟값, 최댓값))
    {//옵션
      y: size, //20px만큼 내려옴
      repeat: -1, //-1은 무한반복
      yoyo: true, //한번 재생된 애니메이션을 다시 반대로 재생
      ease: Power1.easeInOut, //이징 함수로 자연스럽게 모션 처리
      delay: random(0, delay) //1초 뒤에 애니메이션 시작
    }
    //https://gsap.com/docs/v3/GSAP/gsap.to()/ 여기서 옵션 확인가능 (special properties탭에서 확인)
  );
}
floatingObject('.floating1', 1, 15) //floagint1 딜레이 1초 15픽셀 범위로 움직임
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20) 



const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
      triggerHook: 0.8 // 0(화면위)과 1(화면 아래)사이의 지점
    })
    .setClassToggle(spyEl,'show') //클래스를 토글할 요소, 토글할 클래스 이름(드래그하다가 해당 클래스에 show라는 이름이 추가됨)
    .addTo(new ScrollMagic.Controller())// 추가한 옵션을 내부의 컨트롤러에 할당해서 동작할 수 있게 하는 용도
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재년도


