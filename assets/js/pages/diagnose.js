const wage = document.getElementById("wage");
const contract = document.getElementById("contract");
const pay = document.getElementById("pay");
const breakTime = document.getElementById("break");

const button = document.getElementById("diagnoseButton");
const result = document.getElementById("resultText");

button.addEventListener("click", function () {
  if (
    wage.value === "" ||
    contract.value === "" ||
    pay.value === "" ||
    breakTime.value === ""
  ) {
    result.textContent = "모든 항목을 입력해 주세요.";
    return;
  }

  if (
    contract.value === "no" ||
    pay.value === "no" ||
    breakTime.value === "no"
  ) {
    result.textContent =
      "확인이 필요한 근로조건이 있습니다. 관련 노동권 정보를 확인해 보세요.";
    return;
  }

  result.textContent = "입력한 근로조건에서 확인이 필요한 항목이 없습니다.";
});
