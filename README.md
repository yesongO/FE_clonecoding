## 👩🏻‍💻 멋쟁이사자처럼 13기 클론코딩 과제 

### 구현 화면
<img width="1029" alt="lion_album_clone" src="https://github.com/user-attachments/assets/5f5d7e6f-6d16-4bc1-a541-7cc4cbe562df" />


### 컴포넌트 계층 구조

In components Folder 📁 ...

📄 ***Header.jsx***
-> 고정된 상단 바로, header 태그 안에 좌측 카메라 아이콘과 텍스트, 우측의
   햄버거 모양 아이콘으로 구성되어 있습니다.

📄 ***MiddleBody.jsx***
-> 가운데 정렬된 메인 본문 영역이며 h1의 제목과 p의 설명 텍스트, 그리고
   두 개의 버튼을 포함합니다.

📄 ***PhotoCard.jsx***
-> 각각의 카드 하나를 구성하며 부모(App.jsx)로부터 받은 props(title, imgURLm content)로
   카드를 각각 렌더링합니다.
   각각의 PhotoCard는 이미지와 설명글, 버튼 두개로 이루어져 있습니다.
