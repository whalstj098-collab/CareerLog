const form = document.getElementById("experienceForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("경험이 등록되었습니다.");

  form.reset();
});
