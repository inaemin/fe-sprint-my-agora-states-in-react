## 나만의 아고라 스테이츠 만들기 in ReactJS
------------------
![edit1](https://user-images.githubusercontent.com/97337038/197401885-26bae71c-a3fc-4459-a831-e67d308460d6.gif)
![edit2](https://user-images.githubusercontent.com/97337038/197401892-8eb05c23-b44e-4a4c-8436-c70ba24e577b.gif)
------------------

주소] https://inaemin.github.io/fe-sprint-my-agora-states-in-react/  

기존에 HTML, VanilaJS, CSS로만 만들었던 아고라 스테이츠를 ReactJS로 리팩토링하였습니다. 모든 기능이 동일하게 동작하지만 로컬스토리지 부분은 실제 서버와 연동되기 때문에 제외하였습니다.


아래 주소에 저장되어있는 서버를 실행시켜야 리액트 앱과 연동되어 동작합니다.  
https://github.com/inaemin/fe-sprint-my-agora-states-server


------------------
### 기능 설명

- 페이지네이션
- 공지 유무를 확인하여 공지인 경우 상단에 고정. 나머지만 아래에 렌더링.
- 목록 새로 렌더링시 목록 제일 상단으로 이동
- 첫 로딩시에는 목록 상단으로 이동 제외.
- 랜덤 프로필 이미지. 하지만 이름이 같은 경우 동일.
- 정렬 개수 선택 가능. [5/10/15/20] 10개가 디폴트.
- 반응형 웹사이트. 가로가 1000px 이상인 경우, 질문폼과 게시글이 가로로 정렬되고 Textarea 높이도 변경.
- Textarea부분에 줄바뀜이 일어나면 자동으로 높이 변경.
- 답변이 있는 경우 아코디언식 구성. 마우스 호버시 배경색 변경, 클릭시 보더라인 강조.
- 폼에 내용을 입력하고 제출하면 목록에 즉시 반영. 하지만 POST요청은 보내지 않아 새로고침하면 사라짐.  

#
#
#
#

## My Agora States in ReactJS
------------------
url] https://inaemin.github.io/fe-sprint-my-agora-states-in-react/

I refactored Agora States in ReactJS which I used only HTML, VanilaJS, CSS last time. Everything works same but I excluded localStorage part cos this one actually gets data from server.

You have to run the server below to run the react app.  
https://github.com/inaemin/fe-sprint-my-agora-states-server


------------------
### Features
- Pagination
- If discussion is for notice, fix it on the top. If not, rendering below.
- After list is rendered or re-rendered, scroll to top of the list.
- First loaded, skip scrolling to top of the list.
- Random profile image. If author is same, it shows same image.
- Setting pagination limit. Choose between [5/10/15/20]. Default value is 10.
- Responsive website. If width is more than 1000px, change to landscape mode.
- Textbox height automatically changes, if line-break happens.
- If already answered, answer part is collapsible. Turns green when mouse hovers, outline changes when mouse clicks.
- After submitting the form, re-render the list instantly. Not sending POST request to server yet, so it disappears when refreshed.  


