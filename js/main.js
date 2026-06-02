const cardData = {
  image: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 앱을<br>40% 할인된 가격 이용",
    },
    {
      icon: "asset/program-icon/photoshop.png",
      color: "#0d7fc1",
      name: "Photoshop",
      desc: "이미지, 그래픽, 아트를<br>편집하고, 합성하고, 생성",
    },
    {
      icon: "asset/program-icon/Lr.png",
      color: "#1c3fce",
      name: "Lightroom",
      desc: "어디서든 편리하게, 정리하고<br>사진편집하고, 공유",
    },
    {
      icon: "asset/program-icon/Lrc.png",
      color: "#2196c4",
      name: "Lightroom Classic",
      desc: "데스크탑에서 전문적으로<br>사진 정리 기능을 활용",
    },
    {
      icon: "asset/program-icon/st.png",
      color: "#c62535",
      name: "Adobe Stock",
      desc: "수백만 개의 이미지, 그래픽<br>비디오 항에서 선택",
    },
  ],
  video: [
    {
      icon: "asset/program-icon/pr.png",
      color: "#9b59b6",
      name: "Premiere Pro",
      desc: "영상 편집의 업계 표준<br>전문가용 영상 편집 툴",
    },
    {
      icon: "asset/program-icon/au.png",
      color: "#9b59b6",
      name: "After Effects",
      desc: "모션 그래픽과 시각 효과를<br>위한 업계 표준",
    },
    {
      icon: "asset/program-icon/me.png",
      color: "#1a1a2e",
      name: "Media Encoder",
      desc: "다양한 포맷으로<br>영상을 인코딩",
    },
    {
      icon: "asset/program-icon/ch.png",
      color: "#1a1a2e",
      name: "Media Encoder",
      desc: "다양한 포맷으로<br>영상을 인코딩",
    },
    {
      icon: "asset/program-icon/an.png",
      color: "#1a1a2e",
      name: "Media Encoder",
      desc: "다양한 포맷으로<br>영상을 인코딩",
    },
    {
      icon: "asset/program-icon/ae.png",
      color: "#1a1a2e",
      name: "Media Encoder",
      desc: "다양한 포맷으로<br>영상을 인코딩",
    },
  ],
  design: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 앱을<br>40% 할인된 가격 이용",
    },
    {
      icon: "asset/program-icon/illustrator.png",
      color: "#e8a427",
      name: "Illustrator",
      desc: "벡터 그래픽 및 일러스트<br>제작을 위한 툴",
    },
    {
      icon: "asset/program-icon/express.png",
      color: "#b84e9c",
      name: "InDesign",
      desc: "인쇄 및 디지털 미디어용<br>레이아웃 디자인",
    },
    {
      icon: "asset/program-icon/photoshop.png",
      color: "#0d7fc1",
      name: "Photoshop",
      desc: "이미지, 그래픽, 아트를<br>편집하고, 합성하고, 생성",
    },
    {
      icon: "asset/program-icon/st.png",
      color: "#b84e9c",
      name: "InDesign",
      desc: "인쇄 및 디지털 미디어용<br>레이아웃 디자인",
    },
  ],
  "3d": [
    {
      icon: "asset/program-icon/ds.png",
      color: "#2ecc71",
      name: "Substance 3D",
      desc: "3D 텍스처링과 재질 제작<br>전문 툴",
    },
    {
      icon: "asset/program-icon/md.png",
      color: "#1abc9c",
      name: "Dimension",
      desc: "3D 디자인을 손쉽게<br>제작하고 렌더링",
    },
    {
      icon: "asset/program-icon/pt.png",
      color: "#1abc9c",
      name: "Dimension",
      desc: "3D 디자인을 손쉽게<br>제작하고 렌더링",
    },
    {
      icon: "asset/program-icon/sa.png",
      color: "#1abc9c",
      name: "Dimension",
      desc: "3D 디자인을 손쉽게<br>제작하고 렌더링",
    },
    {
      icon: "asset/program-icon/sg.png",
      color: "#1abc9c",
      name: "Dimension",
      desc: "3D 디자인을 손쉽게<br>제작하고 렌더링",
    },
  ],
  document: [
    {
      icon: "asset/program-icon/creativeCloud.png",
      color: "#da0f0f",
      name: "Creative Cloud",
      desc: "20개 이상의 앱을<br>40% 할인된 가격 이용",
    },
    {
      icon: "asset/program-icon/acrobat.png",
      color: "#3498db",
      name: "Adobe Sign",
      desc: "전자 서명으로 빠르고<br>안전한 문서 처리",
    },
  ],
};

window.addEventListener("DOMContentLoaded", () => {
  const toolList = document.getElementById("solCards");
  const buttons = document.querySelectorAll(".content1-button");

  // 카드 출력 함수
  function renderCards(category) {
    const cards = cardData[category];

    if (!cards) return;

    toolList.innerHTML = cards
      .map(
        (card, i) => `
        <div class="sol-card"
          style="--rotate:${["-6deg", "2deg", "5deg", "-3deg", "4deg", "1deg"][i]}">
          
          <div class="sol-icon"
            style="background:linear-gradient(135deg, ${card.color}, ${card.color}99)">
            <img src="${card.icon}" alt="${card.name}">
          </div>

          <h3>${card.name}</h3>

          <p>${card.desc}</p>

          <span class="sol-arrow">
            <img src="asset/mainpage/nextBtn.png" alt="">
          </span>
        </div>
      `
      )
      .join("");
  }

  // 카테고리 버튼 클릭
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      buttons.forEach((item) => {
        item.classList.remove("active");
      });

      btn.classList.add("active");

      renderCards(btn.dataset.filter);
    });
  });

  // 첫 화면
  renderCards("image");
});