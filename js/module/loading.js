export function loadingShow(value) {
  const loading = document.querySelector(".loading");
  value ? loading.classList.add("active") : loading.classList.remove("active");
}
