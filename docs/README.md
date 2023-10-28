

## 📌 2주 차 미션 : 자동차 경주 게임 🏎️

### 구현할 기능 목록

1️⃣ 입출력
- 입력 
    - [ ] 사용자에게 경주 할 자동차 이름 입력 받기
    - [ ] 사용자에게 시도할 횟수 입력 받기
-  출력
    - [ ] 초기 메세지 출력
    - [ ] 각 차의 이름 및 전진한 수만큼 '-'출력
    - [ ] 단독 우승자 출력
    - [ ] 공동 우승시 쉼표로 구분하여 출력


2️⃣ 게임 진행 관련
    
- 게임 진행

    - [ ] 입력 받은 자동차 이름을 저장하는 메소드
    - [ ] 입력 받은 시도할 횟수 만큼 반복문을 실행시키는 메소드
    - [ ] 각 자동차의 전진횟수 저장하기
    - [ ] 전진횟수가 제일 많은 자동차를 단독 혹은 공동 우승자로 반환하는 메소드
    
- 게임 진행을 도와주는 도구 메소드
    - [ ] 문자열을 쉼표 기준으로 구분한후 각 값을 반환하는 메소드
    - [ ] 0~9 사이의 무작위 값을 구하는 메소드
    - [ ] 각 자동차에서 4이상의 값이 나왔을 때 전진하였음을 반환하는 메소드

3️⃣ 검증

- 입력값 검증
    - [ ] 경주할 자동차 이름이 5자초과일 경우 예외 발생
    - [ ] 쉼표가 없거나 쉼표 뒤에 입력값이 아예 없을 시 예외 발생
    - [ ] 시도할 횟수 입력할 때 숫자를 입력하지 않았을 시 예외 발생