
# 2026 베이징 로봇산업 벤치마킹 발표 사이트

## 바로 보기
`index.html`을 브라우저에서 열면 됩니다.

## GitHub Pages 올리기
1. GitHub에서 새 Repository 생성
2. 이 폴더 안의 파일과 `assets` 폴더를 그대로 업로드
3. Repository → Settings → Pages
4. `Deploy from a branch`
5. Branch `main`, Folder `/ (root)` 선택 후 Save
6. `https://사용자명.github.io/저장소명/` 주소로 발표 가능

## 영상 추가
1. MP4를 `assets/videos/` 폴더에 넣기
2. `videos.js`를 열기
3. 아래처럼 추가

```js
const VIDEO_CONFIG = [
  { title: "WRC 현장", src: "assets/videos/wrc.mp4", poster: "assets/images/img-002.png" },
  { title: "Galbot 시연", src: "assets/videos/galbot.mp4", poster: "assets/images/img-023.png" }
];
```

## 영상 삭제
`videos.js`에서 해당 줄 삭제.

## 영상 순서 변경
`VIDEO_CONFIG` 배열에서 줄 순서만 변경.

## 발표 조작
- 우측 아래 ↑ / ↓ : 섹션 이동
- 키보드 ↑ / ↓, Page Up / Page Down: 섹션 이동
- 우측 상단 `영상 관리`: 로컬 영상 임시 테스트
- 키보드 `E`: 영상 관리 패널 열기/닫기

※ `영상 관리` 패널에서 추가한 영상은 새로고침하면 사라집니다.
GitHub에 영구 반영하려면 `assets/videos` + `videos.js` 방식으로 추가하세요.
