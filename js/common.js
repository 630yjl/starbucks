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



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //현재년도
