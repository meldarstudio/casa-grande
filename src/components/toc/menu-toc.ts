export class MenuTOC extends HTMLElement {
  private _current = this.querySelector<HTMLAnchorElement>(
    'a[aria-current="true"]',
  );

  private _nav = this.querySelector<HTMLUListElement>(".scroll-container");

  protected set current(link: HTMLAnchorElement) {
    if (link === this._current) return;
    if (this._current) this._current.removeAttribute("aria-current");
    link.setAttribute("aria-current", "true");
    this._current = link;
  }

  private onIdle = (cb: IdleRequestCallback) =>
    (window.requestIdleCallback || ((cb) => setTimeout(cb, 1)))(cb);

  constructor() {
    super();
    this.onIdle(() => this.init());
  }

  private init = (): void => {
    /** All the links in the table of contents. */
    const links = [...this.querySelectorAll("a")];

    /** Test if an element is a table-of-contents heading. */
    const isHeading = (el: Element): el is HTMLHeadingElement => {
      return el instanceof HTMLHeadingElement;
    };

    /** Walk up the DOM to find the nearest heading. */
    const getElementHeading = (
      el: Element | null,
    ): HTMLHeadingElement | null => {
      if (!el) return null;
      const origin = el;
      while (el) {
        if (isHeading(el)) return el;
        // Assign the previous sibling’s last, most deeply nested child to el.
        el = el.previousElementSibling;
        while (el?.lastElementChild) {
          el = el.lastElementChild;
        }
        // Look for headings amongst siblings.
        const h = getElementHeading(el);
        if (h) return h;
      }
      // Walk back up the parent.
      return getElementHeading(origin.parentElement);
    };

    /** Handle intersections and set the current link to the heading for the current intersection. */
    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        const heading = getElementHeading(target);
        if (!heading) continue;
        const link = links.find(
          (link) => link.hash === "#" + encodeURIComponent(heading.id),
        );
        if (link) {
          this.current = link;
          break;
        }
      }
    };

    const toObserve = document.querySelectorAll("main [id]");

    let observer: IntersectionObserver | undefined;
    const observe = () => {
      if (observer) return;
      observer = new IntersectionObserver(setCurrent);
      // eslint-disable-next-line
      toObserve.forEach((h) => observer!.observe(h));
    };
    observe();

    let resizeTimeout: NodeJS.Timeout;
    let scrollTimeout: NodeJS.Timeout;

    window.addEventListener("resize", () => {
      // Disable intersection observer while window is resizing.
      if (observer) {
        observer.disconnect();
        observer = undefined;
      }
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => this.onIdle(observe), 200);
    });

    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // eslint-disable-next-line
        const itemRect = this._current?.getBoundingClientRect()!;
        // eslint-disable-next-line
        const containerRect = this._nav?.getBoundingClientRect()!;

        const isOutOfView =
          itemRect.left < containerRect.left ||
          itemRect.right > containerRect.right;

        if (isOutOfView) {
          this._current?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });
        }
      }, 150);
    });

    this._nav?.addEventListener("scroll", () => {
      this.updateFade();
    });
    this.updateFade();
  };

  updateFade() {
    if (!this._nav) return;

    const containerWidth = this._nav.offsetWidth;
    const scrollWidth = this._nav.scrollWidth;
    const scrollLeft = this._nav.scrollLeft;

    this._nav.style.setProperty("--fade-left", scrollLeft > 0 ? "1" : "0");
    this._nav.style.setProperty(
      "--fade-right",
      scrollLeft + containerWidth < scrollWidth ? "1" : "0",
    );
  }
}

customElements.define("menu-toc", MenuTOC);
