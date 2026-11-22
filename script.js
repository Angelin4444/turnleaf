/* =============================================================
   TURNLEAF – script.js 
   IMPORTANT: nothing here calls document.startViewTransition().
    This file only:
     1. stores the data for all five books,
     2. names the correct cover so the browser can pair old/new,
     3. fills book.html with the selected book,
     4. runs the mobile menu.
   ============================================================= */
"use strict";

/* ---------- BOOK DATA ----------
   One entry per book. The key is the ID used in the URL
   (book.html?book=salt). "cover" is the cover artwork; to use your own
   image, replace the SVG string with:
   '<img src="images/your-cover.jpg" alt="Cover of ...">'              */
const BOOKS = {
  lantern: {
    title: "The Lantern Orchard", author: "Marguerite Ashdown", category: "Literary fiction",
    lead: "A tender, quietly suspenseful novel about what families plant, and what they bury.",
    body: [
      "When Elodie Marsh inherits her grandmother's failing orchard, she expects debts and neglected trees. Instead she finds a small iron lantern hanging in every tree, each one marked with a year.",
      "As she lights them one by one over a single autumn, the village begins to remember. Old friendships return, an unspoken quarrel resurfaces, and Elodie must decide whether the orchard is worth saving or the past is worth leaving dark."
    ],
    meta: [["Category", "Literary fiction"], ["Pages", "328"], ["Published", "September 2026"], ["Format", "Hardback"], ["Reading time", "About 8 hours"], ["Mood", "Warm, reflective"]],
    cover: `<svg viewBox="0 0 200 300" role="img" aria-label="Book cover: The Lantern Orchard">
        <rect width="200" height="300" fill="#6d1a37"/>
        <circle cx="100" cy="118" r="62" fill="#e3b9bf" opacity=".92"/>
        <circle cx="100" cy="118" r="62" fill="none" stroke="#f3dcc0" stroke-width="1.2" transform="scale(1.12) translate(-12 -14)"/>
        <g fill="#4a0f24"><path d="M0 300V214c30-18 52-6 76-22 20-14 40-4 60-18 24-16 44-8 64-18v162z"/></g>
        <g stroke="#2d0816" stroke-width="3" fill="none" stroke-linecap="round"><path d="M44 300v-52M100 300v-70M158 300v-48"/></g>
        <g fill="#f3c26b"><circle cx="44" cy="238" r="5"/><circle cx="100" cy="222" r="6"/><circle cx="158" cy="242" r="5"/></g>
        <g fill="#fbf6ec" opacity=".5"><circle cx="30" cy="40" r="1.4"/><circle cx="170" cy="56" r="1.4"/><circle cx="150" cy="24" r="1"/><circle cx="62" cy="22" r="1"/></g>
        <text x="100" y="46" text-anchor="middle" font-family="Georgia, serif" font-size="21" font-style="italic" fill="#fbf6ec">The Lantern</text>
        <text x="100" y="70" text-anchor="middle" font-family="Georgia, serif" font-size="21" font-style="italic" fill="#fbf6ec">Orchard</text>
        <text x="100" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#f3dcc0">MARGUERITE ASHDOWN</text>
      </svg>`
  },
  salt: {
    title: "Salt & Meridian", author: "Tobias Wren", category: "Adventure",
    lead: "A navigator's daughter, a drowned map and a coastline that refuses to stay put.",
    body: [
      "Marin Halloran has spent her life charting the Meridian Coast, a shoreline where the tides rewrite the maps faster than anyone can print them. When a salt-stained chart surfaces in her late father's sea chest, it shows a harbour that has never existed.",
      "What follows is a voyage by wind, rumour and stubborn hope, with smugglers, a reluctant crew and a rival cartographer who wants the chart for himself. Wren writes the sea with a precision that makes every landfall feel earned."
    ],
    meta: [["Category", "Adventure"], ["Pages", "412"], ["Published", "June 2026"], ["Format", "Paperback"], ["Reading time", "About 10 hours"], ["Mood", "Bold, windswept"]],
    cover: `<svg viewBox="0 0 200 300" role="img" aria-label="Book cover: Salt and Meridian">
            <rect width="200" height="300" fill="#1f3a4d"/>
            <g fill="none" stroke="#f3dcc0" stroke-width="1" opacity=".55"><circle cx="100" cy="150" r="30"/><circle cx="100" cy="150" r="55"/><circle cx="100" cy="150" r="80"/><path d="M100 60v180M10 150h180"/></g>
            <path d="M100 100l9 41 41 9-41 9-9 41-9-41-41-9 41-9z" fill="#e0a06a"/>
            <path d="M0 262c30-10 50 10 80 0s50-10 80 0 30 6 40 2v36H0z" fill="#12293a"/>
            <text x="100" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="25" fill="#f3dcc0">SALT &amp;</text>
            <text x="100" y="66" text-anchor="middle" font-family="Georgia, serif" font-size="25" fill="#f3dcc0">MERIDIAN</text>
            <text x="100" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#e0a06a">TOBIAS WREN</text>
          </svg>`
  },
  arithmetic: {
    title: "A Quiet Arithmetic", author: "Ines Okafor", category: "Contemporary",
    lead: "A small, exact novel about the sums we do to keep a family together.",
    body: [
      "Nora Adeyemi is an accountant who believes most problems can be balanced. Then her estranged brother turns up at her door with a suitcase, a secret and no plan to leave.",
      "Over one winter in a narrow terraced house, the two of them tally what each gave up and what each is owed. Okafor's prose is spare and warm, and the quiet moments land hardest."
    ],
    meta: [["Category", "Contemporary"], ["Pages", "276"], ["Published", "March 2026"], ["Format", "Hardback"], ["Reading time", "About 6 hours"], ["Mood", "Thoughtful, intimate"]],
    cover: `<svg viewBox="0 0 200 300" role="img" aria-label="Book cover: A Quiet Arithmetic">
            <rect width="200" height="300" fill="#efe2cc"/>
            <rect x="16" y="16" width="168" height="268" fill="none" stroke="#7a1f3d" stroke-width="1.5"/>
            <g fill="#e3b9bf"><rect x="40" y="110" width="52" height="52"/><circle cx="130" cy="136" r="26" fill="#7a1f3d"/><path d="M40 224l26-46 26 46z" fill="#4a3a32"/></g>
            <path d="M104 190h56M104 202h40" stroke="#4a3a32" stroke-width="2"/>
            <text x="100" y="60" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#3b2a24">A Quiet</text>
            <text x="100" y="84" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#3b2a24">Arithmetic</text>
            <text x="100" y="262" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#7a1f3d">INES OKAFOR</text>
          </svg>`
  },
  cartographer: {
    title: "The Glass Cartographer", author: "Oriel Vance", category: "Fantasy",
    lead: "A city made of mirrors, and the mapmaker who can see where it ends.",
    body: [
      "In the glass city of Veyra, maps are living things, and only one cartographer can draw the borders that keep the mirrors from shattering. Sable Ire is her apprentice, and she has just discovered a street that is missing from every chart.",
      "Her search leads through silvered corridors and forgotten guilds towards a truth about the city's makers. A richly imagined fantasy of secrets, light and the cost of knowing where things end."
    ],
    meta: [["Category", "Fantasy"], ["Pages", "456"], ["Published", "October 2026"], ["Format", "Hardback"], ["Reading time", "About 11 hours"], ["Mood", "Eerie, immersive"]],
    cover: `<svg viewBox="0 0 200 300" role="img" aria-label="Book cover: The Glass Cartographer">
            <rect width="200" height="300" fill="#2b2338"/>
            <g fill="none" stroke="#c9a7d8" stroke-width="1.2"><path d="M30 230l40-70 30 40 40-90 30 60"/><path d="M30 230l140-20" opacity=".5"/></g>
            <g fill="#e8d7f0"><circle cx="30" cy="230" r="3"/><circle cx="70" cy="160" r="3"/><circle cx="100" cy="200" r="3"/><circle cx="140" cy="110" r="3"/><circle cx="170" cy="170" r="3"/></g>
            <circle cx="150" cy="52" r="16" fill="#e3b9bf"/><circle cx="158" cy="48" r="16" fill="#2b2338"/>
            <text x="30" y="52" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#f3e9f7">The Glass</text>
            <text x="30" y="76" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#f3e9f7">Cartographer</text>
            <text x="100" y="278" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#c9a7d8">ORIEL VANCE</text>
          </svg>`
  },
  seasons: {
    title: "Paper Seasons", author: "Hana Lindqvist", category: "Essays",
    lead: "Twelve short essays on noticing, one small seasonal ritual at a time.",
    body: [
      "Hana Lindqvist writes about the ordinary things that mark the year: the first frost on a window, a drawer of mended gloves, the week the plum tree blooms and drops its petals.",
      "Each piece is brief enough for a single sitting and generous enough to reread. A book to keep beside the bed, and one to give to someone who needs slowing down."
    ],
    meta: [["Category", "Essays"], ["Pages", "192"], ["Published", "April 2026"], ["Format", "Paperback"], ["Reading time", "About 4 hours"], ["Mood", "Gentle, observant"]],
    cover: `<svg viewBox="0 0 200 300" role="img" aria-label="Book cover: Paper Seasons">
            <rect width="200" height="300" fill="#e3b9bf"/>
            <g fill="#7a1f3d"><path d="M100 70c30 20 40 60 0 100-40-40-30-80 0-100z"/></g>
            <g fill="#4a3a32" opacity=".85"><path d="M40 190c20 6 30 22 30 44-24-4-34-20-30-44z"/><path d="M160 190c-20 6-30 22-30 44 24-4 34-20 30-44z"/></g>
            <path d="M100 100v140" stroke="#fbf6ec" stroke-width="1.5"/>
            <text x="100" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="24" letter-spacing="1" fill="#3b2a24">Paper Seasons</text>
            <text x="100" y="278" text-anchor="middle" font-family="Georgia, serif" font-size="10" letter-spacing="2" fill="#6d1a37">HANA LINDQVIST</text>
          </svg>`
  }
};

const isDetailPage = document.body.classList.contains("detail-page");

/* SHARED ELEMENT IDENTIFICATION
   A cross-document transition only animates an element if BOTH pages give it
   the SAME view-transition-name. Names must be unique within a page, so every
   book gets its own: "book-" + book ID (book-lantern, book-salt, ...).
   - Discover page: only the CLICKED cover is named (clearTransitionNames()
     removes every other name first, so there is never a duplicate).
   - Details page: renderBook() names the one cover with the same value.
   The browser pairs the two same-named elements and animates between them. */
function transitionNameFor(id) { return "book-" + id; }

function clearTransitionNames() {
  document.querySelectorAll(".cover[data-book]").forEach((cover) => {
    cover.style.removeProperty("view-transition-name");
  });
}

function assignTransitionName(id) {
  clearTransitionNames();                       // guarantees only ONE named element
  const cover = document.querySelector('.cover[data-book="' + id + '"]');
  if (cover) cover.style.setProperty("view-transition-name", transitionNameFor(id));
}

// Reads the book ID from a URL such as book.html?book=salt. Returns null for any
// other page. Unknown or missing IDs fall back to the featured book.
function bookIdFromUrl(url) {
  const u = new URL(url, location.href);
  if (u.origin !== location.origin || !u.pathname.endsWith("/book.html")) return null;
  const id = u.searchParams.get("book");
  return Object.hasOwn(BOOKS, id) ? id : "lantern";
}

/*  DYNAMIC BOOK DETAILS
   book.html is ONE document that shows five books. The URL (?book=salt) tells
   us which one. We look it up in BOOKS and fill in the cover, title, author,
   description and metadata. This runs before the first paint, so the new page
   is complete when the browser captures it for the transition. */
function renderBook() {
  const requested = new URLSearchParams(location.search).get("book");
  const id = Object.hasOwn(BOOKS, requested) ? requested : "lantern";
  const book = BOOKS[id];

  const cover = document.getElementById("book-cover");
  cover.innerHTML = book.cover;
  cover.dataset.book = id;
  // Same name the clicked cover received on the Discover page:
  cover.style.setProperty("view-transition-name", transitionNameFor(id));

  document.title = book.title + " – Turnleaf";
  document.getElementById("book-category").textContent = book.category;
  document.getElementById("book-title").textContent = book.title;
  document.getElementById("book-author").textContent = "by " + book.author;
  document.getElementById("book-lead").textContent = book.lead;

  const body = document.getElementById("book-body");
  body.replaceChildren(...book.body.map((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }));

  const meta = document.getElementById("book-meta");
  meta.replaceChildren(...book.meta.map(([label, value]) => {
    const row = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    return row;
  }));
}

if (isDetailPage) renderBook();

/* SELECTED BOOK TRANSITION LOGIC
   The outgoing page must be captured WITH the right cover named. Two hooks:
   (a) "click": runs before navigation starts, so the clicked cover is named in time.
   (b) "pageswap": fires on the OLD page just before the browser takes its snapshot.
       event.activation.entry.url is the destination, so this also works for the
       "Explore this book" button and the book titles.
   "pagereveal" runs on the NEW page. On the Discover page it names the cover of the
   book we just left, so Back to Discover animates in reverse. */
document.addEventListener("click", (event) => {
  if (isDetailPage || event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest("a[href]");
  const id = link && bookIdFromUrl(link.href);
  if (id) assignTransitionName(id);
});

window.addEventListener("pageswap", (event) => {
  if (!event.viewTransition || isDetailPage) return; // details page is already named
  const destination = event.activation && event.activation.entry && event.activation.entry.url;
  const id = destination && bookIdFromUrl(destination);
  if (id) assignTransitionName(id);
});

window.addEventListener("pagereveal", async (event) => {
  if (!event.viewTransition || isDetailPage) return;
  const navApi = window.navigation;
  const previous = navApi && navApi.activation && navApi.activation.from && navApi.activation.from.url;
  const id = previous && bookIdFromUrl(previous);
  if (id && !location.hash) assignTransitionName(id);   // reverse transition
  try { await event.viewTransition.finished; } catch (e) { /* transition skipped */ }
  clearTransitionNames();                               // leave no stale names behind
});

// Restoring the page from the back/forward cache: remove any leftover name.
window.addEventListener("pageshow", (event) => {
  if (event.persisted && !isDetailPage) clearTransitionNames();
});

/* ---------- MOBILE MENU ---------- */
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      toggle.focus();
    }
  });
}

/* ---------- FOOTER YEAR ---------- */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();