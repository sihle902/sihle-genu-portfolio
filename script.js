const reveals = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((reveal) => obs.observe(reveal));

const bars = document.querySelectorAll(".skill-fill");

const barObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.targetWidth;
      }
    });
  },
  { threshold: 0.3 }
);

bars.forEach((bar) => {
  const targetWidth = bar.style.width;

  bar.dataset.targetWidth = targetWidth;

  bar.style.width = "0";

  barObs.observe(bar);
});
