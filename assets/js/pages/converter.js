const experience = document.getElementById("experience");
const button = document.getElementById("convertButton");
const result = document.getElementById("resultText");

button.addEventListener("click", function () {
  if (experience.value === "") {
    result.textContent = "먼저 경험을 선택해 주세요.";
    return;
  }

  if (experience.value === "cafe") {
    result.textContent = "고객 응대 능력, 의사소통 능력, 현장 대응 능력";
  }

  if (experience.value === "store") {
    result.textContent = "재고 관리 능력, 고객 응대 능력, 문제 해결 능력";
  }

  if (experience.value === "book") {
    result.textContent = "상품 관리 능력, 고객 응대 능력, 매장 관리 능력";
  }
});
