// ===========================================================
// Portfolio site — tag filtering
//
// How it works:
// 1. Each tag button has a data-tag attribute (e.g. data-tag="ux-ui").
// 2. Each project card has a data-tags attribute listing every tag
//    that applies to it, separated by spaces
//    (e.g. data-tags="ux-ui user-research").
// 3. Clicking a tag toggles it "active" and adds/removes it from
//    a Set of currently active tags.
// 4. Every card is shown if NO tags are active (default view),
//    or if it has AT LEAST ONE tag that matches an active tag.
// ===========================================================

document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll(".tag");
  const cards = document.querySelectorAll(".project-card");
  const activeTags = new Set();

  function updateVisibleCards() {
    cards.forEach((card) => {
      const cardTags = card.dataset.tags ? card.dataset.tags.split(" ") : [];
      const shouldShow =
        activeTags.size === 0 || cardTags.some((tag) => activeTags.has(tag));

      card.style.display = shouldShow ? "" : "none";
    });
  }

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.dataset.tag;

      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        button.classList.remove("active");
      } else {
        activeTags.add(tag);
        button.classList.add("active");
      }

      updateVisibleCards();
    });
  });
});
