/* ==========================================================
   script.js – builds the page from content.js and adds the
   interactions. You normally don't need to edit this file.
   ========================================================== */

/* ---------- 1. Small helpers ---------- */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Create an element: el("div", "card", "text")
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Read a value like "profile.name" from CONTENT
const read = (path) => path.split(".").reduce((obj, key) => obj[key], CONTENT);

// Fill a container with a list of chips
function fillChips(container, items) {
  items.forEach((item) => container.appendChild(el("span", "", item)));
}

/* ---------- 2. Fill text (data-bind) ---------- */
function bindText() {
  $$("[data-bind]").forEach((node) => (node.textContent = read(node.dataset.bind)));
}

/* ---------- 3. Build sections from content.js ---------- */
function renderStats() {
  CONTENT.profile.stats.forEach((s) => {
    const box = el("div");
    box.append(el("b", "", s.value), s.label);
    $("#stats").appendChild(box);
  });
}

function renderRibbon() {
  const names = CONTENT.skills.flatMap((group) => group.items);
  const html = names.map((name) => `<span>${name}</span>✦`).join("");
  $("#ribbon").innerHTML = html + html; // repeated twice for a seamless loop
}

function renderAbout() {
  fillChips($("#about-tags"), CONTENT.about.tags);
}

function renderSkills() {
  CONTENT.skills.forEach((group) => {
    const card = el("div", "card tilt");
    const chips = el("div", "chips");
    fillChips(chips, group.items);
    card.append(el("div", "icon", group.icon), el("h3", "", group.title), chips);
    $("#skills-grid").appendChild(card);
  });
}

function renderExperience() {
  CONTENT.experience.forEach((job) => {
    const card = el("div", "job card tilt");
    card.append(el("h4", "", job.role), el("small", "", `${job.company} · ${job.place} · ${job.dates}`));
    job.points.forEach((point) => card.append("• " + point, el("br")));
    if (job.tools) card.append("• Tools used: " + job.tools);
    $("#experience-list").appendChild(card);
  });
}

function renderProjects() {
  const tabs = $("#project-tabs");
  const allTab = el("button", "on", "All");
  allTab.dataset.filter = "all";
  tabs.appendChild(allTab);

  CONTENT.categories.forEach((cat) => {
    const tab = el("button", "", cat.label);
    tab.dataset.filter = cat.id;
    tabs.appendChild(tab);
  });

  CONTENT.projects.forEach((project) => {
    const cat = CONTENT.categories.find((c) => c.id === project.category);
    const card = el("div", "card tilt");
    card.dataset.category = project.category;

    const preview = el("div", "preview");
    if (project.image) {
      const img = el("img");
      img.src = project.image;
      img.alt = project.title;
      preview.appendChild(img);
    } else {
            preview.appendChild(el("span", "", project.file ? "📄" : cat.icon));
           }

    const chips = el("div", "chips");
    fillChips(chips, [cat.label]);
    card.append(preview, el("h3", "", project.title), el("p", "", project.result), chips);
        // PDF projects (for example brochures, printing): View and Download buttons
    if (project.file) {
      const actions = el("div", "card-actions");
      const view = el("a", "btn btn-small", "View PDF");
      view.href = project.file;
      view.target = "_blank";
      view.rel = "noopener";
      actions.append(view);
      card.appendChild(actions);
    }
    $("#project-grid").appendChild(card);
  });
}

function renderContact() {
  fillChips($("#contact-tags"), CONTENT.contact.tags);
  const link = $("#contact-email");
  link.href = "mailto:" + CONTENT.profile.email;
  link.textContent = CONTENT.profile.email;
  CONTENT.contact.jobTypes.forEach((type) => $("#job-type").appendChild(el("option", "", type)));
  CONTENT.profile.social.forEach((s) => {
    const a = el("a", "", s.label);
    a.href = s.url;
    a.target = "_blank";
    a.rel = "noopener";
    $("#social").appendChild(a);
  });
}

/* ---------- 4. Interactions ---------- */

// Fade sections in as you scroll
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
  }, { threshold: 0.12 });
  $$(".reveal").forEach((node) => observer.observe(node));
}

// 3D tilt on hover for every element with class "tilt"
function initTilt() {
  $$(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(10px)`;
    });
    card.addEventListener("mouseleave", () => (card.style.transform = ""));
  });
}

// Hero 3D scene follows the mouse
function initParallax() {
  const stage = $("#stage");
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;
    stage.style.transform = `rotateY(${x * 30}deg) rotateX(${-y * 30}deg)`;
  });
}

// Project filter tabs
function initFilter() {
  $$("#project-tabs button").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$("#project-tabs button").forEach((t) => t.classList.remove("on"));
      tab.classList.add("on");
      $$("#project-grid .card").forEach((card) => {
        const show = tab.dataset.filter === "all" || card.dataset.category === tab.dataset.filter;
        card.classList.toggle("hide", !show);
      });
    });
  });
}

// Photo: loaded from profile.photo in content.js (view only).
// If the file is missing, the "MM" placeholder stays visible.
function initPhoto() {
  const src = CONTENT.profile.photo;
  if (!src) return;
  const img = $("#photo-img");
  img.addEventListener("load", () => {
    img.hidden = false;
    $("#photo-fallback").style.display = "none";
  });
  img.src = src;
}
// CV: sets the View / Download buttons and the preview from profile.cv.
// If profile.cv is empty, all CV buttons and the CV section are hidden.
function initCV() {
  const cv = CONTENT.profile.cv;
  if (!cv) {
    $("#cv").style.display = "none";
    $$("[data-cv-download], [data-cv-view], a[href='#cv']").forEach((node) => (node.style.display = "none"));
    return;
  }

  // View: opens the PDF in a new tab
  $$("[data-cv-view]").forEach((a) => (a.href = cv));

  // Download: saves the PDF with this file name
  $$("[data-cv-download]").forEach((a) => {
    a.href = cv;
    a.setAttribute("download", "Muna_Mangrati_CV.pdf");
  });

  $("#cv-frame").src = cv + "#view=FitH";
}
// Contact form: sends to your Formspree URL if set, otherwise shows a demo message
function initContactForm() {
  const form = $("#contact-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const endpoint = CONTENT.contact.formEndpoint;
    try {
      if (endpoint) {
        await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      }
      form.innerHTML = "<h3>Thank you! Your message has been sent.</h3>";
    } catch (err) {
      form.append(el("p", "", "Sorry, something went wrong. Please email me directly."));
    }
  });
}

/* ---------- 5. Start ---------- */
bindText();
renderStats();
renderRibbon();
renderAbout();
renderSkills();
renderExperience();
renderProjects();
renderContact();
initReveal();
initTilt();
initParallax();
initFilter();
initPhoto();
initCV();
initContactForm();
