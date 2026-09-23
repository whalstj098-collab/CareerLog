const skill = document.getElementById("skill");
const button = document.getElementById("searchButton");
const result = document.getElementById("resultText");

const serviceJob = document.getElementById("serviceJob");
const managerJob = document.getElementById("managerJob");
const counselJob = document.getElementById("counselJob");

button.addEventListener("click", function () {
  if (skill.value === "") {
    result.textContent = "관심 역량을 선택해 주세요.";
    return;
  }

  // Hide all jobs
  serviceJob.style.display = "none";
  managerJob.style.display = "none";
  counselJob.style.display = "none";

  if (skill.value === "communication") {
    serviceJob.style.display = "block";
    managerJob.style.display = "block";
    counselJob.style.display = "block";

    result.textContent = "의사소통 역량과 관련된 직무입니다.";
  }

  if (skill.value === "management") {
    managerJob.style.display = "block";

    result.textContent = "관리 역량과 관련된 직무입니다.";
  }

  if (skill.value === "problem") {
    serviceJob.style.display = "block";
    counselJob.style.display = "block";

    result.textContent = "문제 해결 역량과 관련된 직무입니다.";
  }
});
