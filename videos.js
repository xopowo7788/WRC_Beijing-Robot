const VIDEO_CONFIG = [
  { title:"휴머노이드 안내", src:"assets/videos/humanoid.mp4", poster:"assets/images/img-001.png" },
  { title:"로봇 댄스", src:"assets/videos/robotdance.mp4", poster:"assets/images/img-004.png" },
  { title:"격투 로봇", src:"assets/videos/fight.mp4", poster:"assets/images/img-012.png" },
  { title:"밴드 로봇", src:"band.mp4", poster:"assets/images/img-017.png" },
  { title:"아인슈타인 로봇", src:"assets/videos/einstein.mp4", poster:"assets/images/img-015.png" },
  { title:"헬스 체험", src:"assets/videos/health.mp4", poster:"assets/images/img-016.png" },
  { title:"컴패니언", src:"companion.mp4", poster:"assets/images/img-009.png" },
  { title:"편의점 로봇", src:"assets/videos/store.mp4", poster:"assets/images/img-022.png" },
  { title:"GALBOT 안내 로봇", src:"assets/videos/galbot.mp4", poster:"assets/images/img-023.png" }
];

function setupClickVideos() {
  document.querySelectorAll("img").forEach(img => {
    const raw = (img.getAttribute("src") || "").split("?")[0];

    const cfg = VIDEO_CONFIG.find(v =>
      raw.endsWith(v.poster) ||
      raw.endsWith(v.poster.split("/").pop())
    );

    if (!cfg || img.dataset.videoReady) return;
    img.dataset.videoReady = "1";

    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const video = document.createElement("video");

      video.src = cfg.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;

      video.style.width = img.offsetWidth + "px";
      video.style.height = img.offsetHeight + "px";
      video.style.objectFit = "cover";
      video.style.borderRadius = getComputedStyle(img).borderRadius;
      video.style.background = "#000";

      img.replaceWith(video);
      video.play();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupClickVideos);
} else {
  setupClickVideos();
}
