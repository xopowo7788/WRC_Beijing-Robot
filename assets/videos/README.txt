영상 파일을 이 폴더에 넣고 루트의 videos.js만 수정하세요.

예:
assets/videos/wrc_walk.mp4
assets/videos/galbot_demo.mp4

videos.js 예:
const VIDEO_CONFIG = [
  { title: "WRC 현장", src: "assets/videos/wrc_walk.mp4", poster: "assets/images/img-002.png" },
  { title: "Galbot 시연", src: "assets/videos/galbot_demo.mp4", poster: "assets/images/img-023.png" }
];

영상 추가/삭제/순서 변경은 VIDEO_CONFIG 배열만 수정하면 됩니다.
