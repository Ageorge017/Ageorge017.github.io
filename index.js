/* ============================================================
   ALBERT GEORGE — Portfolio Interactions
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ---------- TYPED TEXT EFFECT ----------
  const rotatingEl = document.getElementById("rotatingText");
  const phrases = [
    "tell your story.",
    "grow your business.",
    "celebrate your love.",
    "leave an impression.",
    "stand out online.",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      rotatingEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      rotatingEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }
  type();

  // ---------- SCROLL REVEAL (Intersection Observer) ----------
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // ---------- NAVBAR SCROLL EFFECT ----------
  const nav = document.getElementById("nav");

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    },
    { passive: true },
  );

  // ---------- MOBILE MENU ----------
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open")
      ? "hidden"
      : "";
  });

  navLinks.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPos =
          target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
      }
    });
  });

  // ---------- ACTIVE NAV LINK HIGHLIGHT ----------
  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll('.nav__link[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinkEls.forEach((link) => {
            link.style.color = "";
            if (link.getAttribute("href") === `#${id}`) {
              link.style.color = "var(--text)";
            }
          });
        }
      });
    },
    { threshold: 0.3 },
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // ---------- PROJECT CARD TILT EFFECT ----------
  const tiltCards = document.querySelectorAll("[data-tilt]");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // ---------- CONTACT FORM SUBMISSION ----------
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector(".form__submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      formStatus.textContent = "";
      formStatus.className = "form__status";

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          formStatus.textContent = "Message sent! I'll get back to you soon.";
          formStatus.classList.add("form__status--success");
          contactForm.reset();
        } else {
          formStatus.textContent = "Something went wrong. Please try again.";
          formStatus.classList.add("form__status--error");
        }
      } catch {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.classList.add("form__status--error");
      }

      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message →";
    });
  }
});
