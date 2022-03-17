const clock = document.querySelector('h2#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
	date.get
}

getClock();
setInterval(getClock, 1000);

// Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자
//                           Date 객체를 사용하기 위해 먼저 선언해 주어야 함.
// Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다.
// Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다.
// setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로
//               실행할 수 있게 해주는 함수입니다. 참고 자료

24430780.585초
/60 하면 분
/60하면 시