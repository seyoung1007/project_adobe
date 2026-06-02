const programs = [
  {
    name: "포토그래피",
    desc: "데스크탑, 웹, iPhone, iPad용 Photoshop, 1TB 클라우드 스토리지",
    salePrice: "₩46,860",
    regularPrice: "₩00,000",
    icon: "asset/program-icon/photoshop.png",
  },
  {
    name: "Illustrator",
    desc: "로고, 아이콘, 일러스트레이션, 그래픽 디자인을 제작하세요.",
    salePrice: "₩30,800",
    regularPrice: "₩00,000",
    icon: "asset/program-icon/illustrator.png",
  },
  {
    name: "Premiere Pro",
    desc: "영상 편집과 숏폼 콘텐츠 제작을 위한 전문 편집 앱입니다.",
    salePrice: "₩30,800",
    regularPrice: "₩00,000",
    icon: "asset/program-icon/pr.png",
  },
  {
    name: "Acrobat Pro",
    desc: "PDF 편집, 변환, 서명까지 문서 작업을 효율적으로 관리하세요.",
    salePrice: "₩23,100",
    regularPrice: "₩00,000",
    icon: "asset/program-icon/acrobat.png",
  },
];

const cardsGrid = document.querySelector(".cards-grid");

programs.forEach((program) => {
  const card = document.createElement("article");

  card.classList.add("program-card");

  card.innerHTML = `
    <div class="program-card_thumb">
      <img src="${program.icon}" alt="${program.name}">
    </div>

    <div class="program-card_info">
      <h3 class="program-card_title">${program.name}</h3>
      <p class="program-card_desc">${program.desc}</p>
    </div>

    <div class="program-card_price-area">
      <p class="program-card_sale-price">
        <strong>${program.salePrice}</strong>
        <span>/월</span>
      </p>

      <p class="program-card_regular-price">
        정상가 <del>${program.regularPrice}</del><span>/월</span>
      </p>
    </div>

    <div class="program-card_button-group">
      <button type="button" class="program-card_button">
        구매
      </button>

      <a href="#" class="program-card_link">
        자세히 보기
      </a>
    </div>
  `;

  cardsGrid.appendChild(card);
});

      // User type button toggle
      document.querySelectorAll(".user-type-btns button").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".user-type-btns button")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });

      // Sidebar item toggle
      document.querySelectorAll(".sidebar-item").forEach((item) => {
        item.addEventListener("click", () => {
          document
            .querySelectorAll(".sidebar-item")
            .forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
        });
      });

      // Pagination dots
      document.querySelectorAll(".dot").forEach((dot) => {
        dot.addEventListener("click", () => {
          document
            .querySelectorAll(".dot")
            .forEach((d) => d.classList.remove("active"));
          dot.classList.add("active");
        });
      });
    