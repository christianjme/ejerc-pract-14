function searchFilter(input, selector) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      const $selector = document.querySelectorAll(selector);
      $selector.forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}

addEventListener("DOMContentLoaded", (e) =>
  searchFilter(".card-filter", ".card")
);
