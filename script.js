const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const revealElements = document.querySelectorAll(".reveal");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const matches = nextFilter === "all" || card.dataset.category === nextFilter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
