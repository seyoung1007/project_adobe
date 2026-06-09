const apps = [
  {
    name: "Illustrator",
    desc: "데스크탑 및 iPad에서 세밀한 디자인, 일러스트레이션 및 벡터 그래픽 제작",
    price: "₩30,800",
    icon: "Ai",
    iconClass: "icon-ai",
    category: ["all", "graphic", "illustration"],
  },
  {
    name: "Adobe Express Premium",
    desc: "전단지, TikTok, 이력서, 콘텐츠 디자인을 빠르게 만들어 보세요.",
    price: "₩13,200",
    icon: "A",
    iconClass: "icon-express",
    category: ["all", "graphic", "social"],
  },
  {
    name: "Adobe Firefly Standard",
    desc: "2,000개의 크레딧으로 영상, 오디오, 이미지를 빠르게 만들어 보세요.",
    price: "₩11,000",
    icon: "Fi",
    iconClass: "icon-firefly",
    category: ["all", "graphic", "video"],
  },
  {
    name: "Adobe Firefly Pro",
    desc: "웹과 모바일 등 어디서나 Adobe Photoshop으로 편집",
    price: "₩22,000",
    icon: "Fi",
    iconClass: "icon-firefly",
    category: ["all", "photo", "graphic"],
  },
  {
    name: "Adobe Firefly Premium",
    desc: "50,000개의 크레딧으로 콘텐츠를 대규모로 만들어 보세요.",
    price: "₩114,950",
    icon: "Fi",
    iconClass: "icon-firefly",
    category: ["all", "graphic", "video"],
    badge: "50%",
  },
  {
    name: "Adobe Firefly Pro Plus",
    desc: "10,000개의 크레딧을 활용하여 콘텐츠의 완성도를 높여보세요.",
    price: "₩28,050",
    icon: "Fi",
    iconClass: "icon-firefly",
    category: ["all", "graphic"],
    badge: "50%",
  },
  {
    name: "InDesign",
    desc: "인쇄 및 디지털 미디어에 사용할 페이지 디자인 및 레이아웃 제작",
    price: "₩30,800",
    icon: "Id",
    iconClass: "icon-indesign",
    category: ["all", "graphic"],
  },
  {
    name: "InCopy",
    desc: "디자인에 영향을 미치지 않고 텍스트 편집 및 레이아웃 수정",
    price: "₩6,600",
    icon: "Ic",
    iconClass: "icon-incopy",
    category: ["all", "graphic"],
  },
  {
    name: "Acrobat Standard",
    desc: "간단한 PDF 툴로 문서를 손쉽게 편집하고 변환하세요.",
    price: "₩14,080",
    icon: "Ac",
    iconClass: "icon-acrobat",
    category: ["all", "pdf"],
  },
];

const categories = ["all", "photo", "graphic", "video", "illustration", "pdf", "3d", "social"];

const grid = document.querySelector(".app-cards-grid");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const searchInput = document.querySelector(".search-bar input");
const dotsWrap = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentCategory = "all";
let currentIndex = 0;

function renderApps(category = "all", keyword = "") {
  const filteredApps = apps.filter((app) => {
    const matchCategory = app.category.includes(category);
    const matchKeyword = app.name.toLowerCase().includes(keyword.toLowerCase());

    return matchCategory && matchKeyword;
  });

  grid.innerHTML = "";

  if (filteredApps.length === 0) {
    grid.innerHTML = `<p class="no-result">검색 결과가 없습니다.</p>`;
    return;
  }

  filteredApps.forEach((app) => {
    grid.innerHTML += `
      <div class="app-card">
        ${app.badge ? `<div class="app-badge">${app.badge}</div>` : ""}

        <div class="app-card-header">
          <div class="app-card-icon ${app.iconClass}">${app.icon}</div>
          <h4>${app.name}</h4>
        </div>

        <p class="app-desc">${app.desc}</p>

        <div class="app-card-footer">
          <div class="app-price">${app.price} <span>/월</span></div>
          <button class="add-btn">+</button>
        </div>
      </div>
    `;
  });
}

function renderDots() {
  dotsWrap.innerHTML = "";

  categories.forEach((category, index) => {
    dotsWrap.innerHTML += `
      <div class="dot ${index === currentIndex ? "active" : ""}" data-index="${index}"></div>
    `;
  });

  document.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = Number(dot.dataset.index);
      currentCategory = categories[currentIndex];
      updateCategory();
    });
  });
}

function updateCategory() {
  sidebarItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.category === currentCategory);
  });

  searchInput.value = "";
  renderApps(currentCategory);
  renderDots();
}

sidebarItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentCategory = item.dataset.category;
    currentIndex = categories.indexOf(currentCategory);
    updateCategory();
  });
});

searchInput.addEventListener("input", (e) => {
  renderApps(currentCategory, e.target.value);
});

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
  currentCategory = categories[currentIndex];
  updateCategory();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
  currentCategory = categories[currentIndex];
  updateCategory();
});

renderApps(currentCategory);
renderDots();