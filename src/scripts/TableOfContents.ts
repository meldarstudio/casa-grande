const setCurrent: IntersectionObserverCallback = (entries) => {
  for (const { target, isIntersecting } of entries) {
    const id = target.querySelector("h2")?.id;
    const navItem = document.querySelector(`#tableOfContents a[href="#${id}"]`);

    if (!navItem) continue;
    if (isIntersecting) {
      navItem.setAttribute("aria-current", "page");
    } else {
      navItem.removeAttribute("aria-current");
    }
  }
};

const toObserve = document.querySelectorAll("#category-section");
let observer: IntersectionObserver | undefined;
const observe = () => {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(setCurrent);
  toObserve.forEach((section) => {
    observer!.observe(section);
  });
};

observe();
