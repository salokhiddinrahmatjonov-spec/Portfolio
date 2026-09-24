/* ==========================================================================
   YOUR DETAILS: edit these and every link on the page updates.
   ========================================================================== */
const CONFIG = {
  // International format, digits only, no "+" or spaces. Example: "966512345678"
  whatsapp: "966500000000",
  whatsappDisplay: "+966 50 000 0000",
  email: "you@example.com",
  // Pre-filled text when someone taps a WhatsApp button
  whatsappGreeting: "Hi Salokh! I found your website and I'd like to talk about a project.",
};

/* ========================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

// ---- Contact links ----------------------------------------------------------
$$(".js-whatsapp").forEach((a) => (a.href = waLink(CONFIG.whatsappGreeting)));
$$(".js-email").forEach((a) => (a.href = `mailto:${CONFIG.email}`));
$$(".js-whatsapp-display").forEach((el) => (el.textContent = CONFIG.whatsappDisplay));
$$(".js-email-display").forEach((el) => (el.textContent = CONFIG.email));
$("#year").textContent = new Date().getFullYear();

// ---- Theme toggle -----------------------------------------------------------
$("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  $('meta[name="theme-color"]').content = next === "light" ? "#f7f8f6" : "#0b0d0c";
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// ---- Nav: scrolled state, mobile menu, active link -------------------------
const nav = $("#nav");
const burger = $("#burger");
const fab = $(".fab");
const hero = $(".hero");

const onScroll = () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 8);
  fab.classList.toggle("is-visible", window.scrollY > hero.offsetHeight * 0.6);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const setMenu = (open) => {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};
burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
$$("#nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

const navLinks = $$('.nav__links a[href^="#"]:not(.btn)');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
$$("main section[id]").forEach((s) => sectionObserver.observe(s));

// ---- Scroll reveal ----------------------------------------------------------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
// Stagger siblings that share a parent (e.g. cards in a grid)
$$(".reveal").forEach((el) => {
  const siblings = $$(":scope > .reveal", el.parentElement);
  el.style.setProperty("--d", `${siblings.indexOf(el) * 0.08}s`);
  revealObserver.observe(el);
});

// ---- Hero flow: light up steps one by one ----------------------------------
const steps = $$(".flow__steps li");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  steps.forEach((s) => s.classList.add("is-lit"));
} else {
  let i = 0;
  const tick = () => {
    if (i === steps.length) {
      steps.forEach((s) => s.classList.remove("is-lit"));
      i = 0;
      setTimeout(tick, 900);
      return;
    }
    steps[i++].classList.add("is-lit");
    setTimeout(tick, i === steps.length ? 2600 : 900);
  };
  setTimeout(tick, 700);
}

// ---- Contact form → WhatsApp or email (no backend) --------------------------
const form = $("#contact-form");
const errorEl = $("#form-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const business = data.get("business").trim();
  const message = data.get("message").trim();
  const services = data.getAll("service");

  $("#f-name").setAttribute("aria-invalid", String(!name));
  $("#f-msg").setAttribute("aria-invalid", String(!message));
  if (!name || !message) {
    errorEl.hidden = false;
    (!name ? $("#f-name") : $("#f-msg")).focus();
    return;
  }
  errorEl.hidden = true;

  const lines = [`Hi Salokh, I'm ${name}${business ? ` from ${business}` : ""}.`];
  if (services.length) lines.push(`Interested in: ${services.join(", ")}`);
  lines.push("", message);
  const text = lines.join("\n");

  if (e.submitter?.dataset.channel === "email") {
    const subject = `Project enquiry${business ? ` — ${business}` : ""}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  } else {
    window.open(waLink(text), "_blank", "noopener");
  }
});
