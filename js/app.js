function operation(state, state2) {
  const sideBar = document.getElementById("sidebar");
  const horizontal = document.querySelectorAll(".horizontal");
  for (const line of horizontal) {
    line.style.display = state2;
  }
  sideBar.style.display = state;
}

document
  .querySelector(".fa-bars-staggered")
  .addEventListener("click", () => operation("block", "none"));

document
  .querySelector(".fa-times")
  .addEventListener("click", () => operation("none", "block"));
