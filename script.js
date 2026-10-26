/* ==========================================================================
   YOUR DETAILS: edit these and every link on the page updates.
   ========================================================================== */
const CONFIG = {
  // Kept in pieces so bots scanning the page for numbers/emails don't pick them up.
  // WhatsApp: international format, digits only (country code + number without the leading 0).
  whatsapp: ["966", "50125", "6196"].join(""),
  email: ["salokhiddinrahmatjonov", "gmail.com"].join("@"),
  // The pre-filled WhatsApp greeting is in i18n.js ("js.greeting"), one per language.
};

/* ========================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (id, vars) => window.i18n.t(id, vars);
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

// ---- Contact links ----------------------------------------------------------
const setWhatsAppLinks = () => $$(".js-whatsapp").forEach((a) => (a.href = waLink(t("js.greeting"))));
setWhatsAppLinks();
document.addEventListener("langchange", setWhatsAppLinks);
$$(".js-email").forEach((a) => (a.href = `mailto:${CONFIG.email}`));
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
  burger.setAttribute("aria-label", t(open ? "js.menuClose" : "js.menuOpen"));
};
burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
$$("#nav-links a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
document.addEventListener("langchange", () => setMenu(false));
setMenu(false);

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
  // Use the visible (translated) chip labels in the message
  const services = $$('input[name="service"]:checked', form).map((i) => i.nextElementSibling.textContent.trim());

  $("#f-name").setAttribute("aria-invalid", String(!name));
  $("#f-msg").setAttribute("aria-invalid", String(!message));
  if (!name || !message) {
    errorEl.hidden = false;
    (!name ? $("#f-name") : $("#f-msg")).focus();
    return;
  }
  errorEl.hidden = true;

  const lines = [t("js.intro", { name, business: business ? t("js.from", { business }) : "" })];
  if (services.length) lines.push(t("js.interested", { list: services.join(window.i18n.lang === "ar" ? "، " : ", ") }));
  lines.push("", message);
  const text = lines.join("\n");

  if (e.submitter?.dataset.channel === "email") {
    const subject = `${t("js.subject")}${business ? ` — ${business}` : ""}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  } else {
    window.open(waLink(text), "_blank", "noopener");
  }
});
