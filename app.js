const CONFIG = {
  name: "Sua Barbearia",
  bookingUrl: "",
  instagramUrl: "",
  demoMode: true,
  location: {
    short: "Guaraciaba do Norte · CE",
    address: "R. Monsenhor Furtado, Guaraciaba do Norte - CE, 62380-000",
    reference: "",
    mapUrl: "",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9464.375156572523!2d-40.74960073979789!3d-4.165347627999523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x794e570b9470c27%3A0x19355a105870e59f!2sNk%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1793137153237!5m2!1spt-BR!2sbr",
  },
  services: [
    {
      name: "Corte navalhado",
      description: "Acabamento com navalha para um visual limpo e bem definido.",
      price: "R$ 38,50",
      duration: "50 min",
      image: "corte-tradicional",
      imageAlt: "Corte com acabamento limpo e linhas bem definidas",
    },
    {
      name: "Corte social",
      description: "Modelo clássico para rotina e ocasiões formais.",
      price: "R$ 38,50",
      duration: "45 min",
      image: "corte-moderno",
      imageAlt: "Corte social com topo alinhado e laterais discretas",
    },
    {
      name: "Corte degradê",
      description: "Transição suave nas laterais com estilo atual.",
      price: "R$ 38,50",
      duration: "50 min",
      image: "degrade-detalhe",
      imageAlt: "Detalhe de corte degradê com acabamento preciso",
    },
    {
      name: "Barba completa",
      description: "Desenho, cuidado e finalização da barba.",
      price: "R$ 28,00",
      duration: "35 min",
      image: "barba-detalhe",
      imageAlt: "Acabamento de barba com precisão",
    },
    {
      name: "Corte + barba",
      description: "Um cuidado completo, da cabeça à barba.",
      price: "R$ 59,50",
      duration: "75 min",
      image: "barbeiro-em-acao",
      imageAlt: "Atendimento completo de corte e barba",
    },
    {
      name: "Corte infantil",
      description: "Um corte pensado para os pequenos.",
      price: "R$ 31,50",
      duration: "40 min",
      image: "corte-em-execucao",
      imageAlt: "Barbeiro finalizando corte infantil com cuidado",
    },
    {
      name: "Acabamento",
      description: "Contorno e detalhes para renovar o visual.",
      price: "R$ 17,50",
      duration: "20 min",
      image: "corte-tradicional",
      imageAlt: "Contorno de nuca com acabamento preciso",
    },
    {
      name: "Sobrancelha",
      description: "Acabamento sutil para valorizar o olhar.",
      price: "R$ 14,00",
      duration: "15 min",
      image: "barbeiro-em-acao",
      imageAlt: "Ajuste de sobrancelha durante atendimento",
    },
  ],
  gallery: [
    { image: "degrade-detalhe", alt: "Detalhe de um corte em degradê com acabamento preciso", caption: "Degradê com precisão" },
    { image: "corte-tradicional", alt: "Corte masculino com textura e laterais bem definidas", caption: "Corte clássico alinhado" },
    { image: "corte-em-execucao", alt: "Barbeiro finalizando o corte de um cliente", caption: "Acabamento em foco" },
    { image: "barba-detalhe", alt: "Barbeiro trabalhando no acabamento da barba", caption: "Barba com cuidado" },
    { image: "corte-moderno", alt: "Corte curto com degradê e topo texturizado", caption: "Estilo contemporâneo" },
    { image: "barbeiro-em-acao", alt: "Atendimento de barbearia durante um corte", caption: "Atendimento dedicado" },
  ],
  features: [
    "Atendimento com hora marcada",
    "Atenção ao seu estilo",
    "Cuidado com o acabamento",
    "Ambiente confortável",
  ],
  professional: {
    name: "Nome do profissional",
    role: "Barbeiro · perfil demonstrativo",
    intro: "Um atendimento acolhedor para você relaxar e sair com o visual certo.",
    description: "Antes de começar, conversamos para entender o estilo que você procura e alinhar cada detalhe do corte.",
    approach: "Do desenho inicial ao acabamento final, o cuidado é manter um resultado equilibrado e fiel ao seu perfil.",
  },
  reviews: [
    { placeholder: "Seu depoimento real pode aparecer aqui." },
    { placeholder: "Conteúdo ilustrativo — substitua por uma avaliação real." },
    { placeholder: "Este espaço está reservado para um cliente." },
  ],
  hours: [
    ["Segunda-feira", "09h–19h"],
    ["Terça-feira", "09h–19h"],
    ["Quarta-feira", "09h–19h"],
    ["Quinta-feira", "09h–19h"],
    ["Sexta-feira", "09h–19h"],
    ["Sábado", "09h–16h"],
    ["Domingo", "fechado"],
  ],
  faqs: [
    {
      question: "Preciso agendar com antecedência?",
      answer: "Consulte a aplicação de agendamento para conferir os horários disponíveis e as orientações atualizadas.",
    },
    {
      question: "Como faço para marcar um horário?",
      answer: "O botão “Agendar meu horário” direciona para a plataforma externa, onde você poderá consultar as opções disponíveis e concluir a reserva conforme o funcionamento dessa aplicação.",
    },
    {
      question: "Como funciona o atendimento?",
      answer: "O atendimento é pensado para entender o estilo e o cuidado que você procura. Os detalhes poderão ser atualizados pela barbearia.",
    },
    {
      question: "Vocês atendem crianças?",
      answer: "Consulte a disponibilidade para corte infantil diretamente na plataforma de agendamento.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "As formas de pagamento serão informadas pela barbearia antes da publicação deste site.",
    },
    {
      question: "Como posso cancelar ou remarcar?",
      answer: "Consulte as orientações disponíveis na aplicação externa de agendamento para cancelar ou remarcar.",
    },
  ],
};

const bookingDialog = document.querySelector("#booking-dialog");
function renderServices() {
  const list = document.querySelector("#services-list");
  list.innerHTML = CONFIG.services.map((service) => `
    <article class="service-card" tabindex="0">
      <picture class="service-media" aria-hidden="true">
        <source type="image/webp" srcset="assets/images/${service.image}-600.webp 600w, assets/images/${service.image}-960.webp 960w" sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 960px) calc((100vw - 56px) / 2), calc((min(1200px, 100vw - 64px) - 32px) / 3)">
        <img src="assets/images/${service.image}-960.webp" width="960" height="680" alt="${service.imageAlt}" loading="lazy" decoding="async">
      </picture>
      <div class="service-overlay" aria-hidden="true"></div>
      <div class="service-content">
        <h3 class="service-name">${service.name}</h3>
        <p class="service-description">${service.description}</p>
        <p class="service-duration">${service.duration}</p>
      </div>
      <p class="service-price">${service.price}</p>
    </article>
  `).join("");
}

function renderGallery() {
  const [firstTrack, secondTrack] = [
    [CONFIG.gallery[0], CONFIG.gallery[2], CONFIG.gallery[4], CONFIG.gallery[1]],
    [CONFIG.gallery[3], CONFIG.gallery[5], CONFIG.gallery[0], CONFIG.gallery[4]],
  ];

  const createGroup = (items, isClone = false) => `
    <div class="gallery-marquee-group"${isClone ? ' aria-hidden="true"' : ""}>
      ${items.map(({ image, alt, caption }) => `
    <figure class="gallery-frame${isClone ? " is-clone" : ""}">
      <picture>
        <source type="image/webp" srcset="assets/images/${image}-600.webp 600w, assets/images/${image}-960.webp 960w" sizes="(max-width: 760px) 58vw, (max-width: 1120px) 30vw, 24vw">
        <img src="assets/images/${image}-960.webp" width="960" height="680" alt="${isClone ? "" : alt}" loading="lazy" decoding="async">
      </picture>
      <figcaption>${caption}</figcaption>
    </figure>`).join("")}
    </div>`;

  const tracks = Array.from(document.querySelectorAll("[data-work-track]"));
  if (tracks.length < 2) return;
  tracks[0].innerHTML = `${createGroup(firstTrack)}${createGroup(firstTrack, true)}`;
  tracks[1].innerHTML = `${createGroup(secondTrack)}${createGroup(secondTrack, true)}`;
}

function renderFeatures() {
  document.querySelector("#feature-list").innerHTML = CONFIG.features
    .slice(0, 3)
    .map((feature) => `<li>${feature}</li>`)
    .join("");
}

function renderProfessional() {
  document.querySelector("#barber-name").textContent = CONFIG.professional.name;
  document.querySelector("#barber-role").textContent = CONFIG.professional.role;
  document.querySelector("#barber-intro").textContent = CONFIG.professional.intro;
  document.querySelector("#barber-description").textContent = CONFIG.professional.description;
  document.querySelector("#barber-approach").textContent = CONFIG.professional.approach;
}

function renderReviews() {
  document.querySelector("#reviews-grid").innerHTML = CONFIG.reviews.map(({ placeholder }) => `
    <article class="review-card">
      <p class="review-stars" aria-label="Depoimento demonstrativo, sem avaliação">···</p>
      <p class="review-placeholder">${placeholder}</p>
      <p class="review-source">Espaço ilustrativo para avaliação real</p>
    </article>
  `).join("");
}

function renderLocation() {
  document.querySelector("#location-address").textContent = CONFIG.location.address;
  document.querySelector("#footer-address").textContent = CONFIG.location.address;
  document.querySelector("#location-reference").textContent = CONFIG.location.reference;
  document.querySelectorAll("[data-location-short]").forEach((element) => {
    element.textContent = CONFIG.location.short;
  });

  const mapEmbed = document.querySelector("#map-embed");
  if (CONFIG.location.mapEmbedUrl) {
    mapEmbed.src = CONFIG.location.mapEmbedUrl;
  } else {
    mapEmbed.hidden = true;
  }

  const directionsLink = document.querySelector("#directions-link");
  if (CONFIG.location.mapUrl) {
    directionsLink.href = CONFIG.location.mapUrl;
    directionsLink.hidden = false;
  }

  document.querySelector("#hours-list").innerHTML = CONFIG.hours.map(([day, hours]) => `
    <div class="hours-row"><dt>${day}</dt><dd>${hours}</dd></div>
  `).join("");
}

function renderFaqs() {
  document.querySelector("#faq-list").innerHTML = CONFIG.faqs.map(({ question, answer }) => `
    <details class="faq-item">
      <summary>${question}</summary>
      <div class="faq-answer"><p>${answer}</p></div>
    </details>
  `).join("");
}

function configureBrand() {
  document.querySelectorAll("[data-brand]").forEach((element) => {
    element.textContent = CONFIG.name.toLocaleUpperCase("pt-BR");
  });
  document.title = `${CONFIG.name} | Cabelo, barba e estilo`;
  document.querySelector('meta[name="description"]').content =
    `Cortes, barba e atenção aos detalhes em ${CONFIG.name}. Agende seu horário.`;
  document.querySelector('meta[property="og:title"]').content =
    `${CONFIG.name} | Cabelo, barba e estilo`;
  document.querySelector('meta[name="robots"]').content =
    CONFIG.demoMode ? "noindex, nofollow" : "index, follow";
}

function configureSocial() {
  const instagramLink = document.querySelector("#instagram-link");
  const socialPlaceholder = document.querySelector("#social-placeholder");
  if (CONFIG.instagramUrl) {
    instagramLink.href = CONFIG.instagramUrl;
    instagramLink.hidden = false;
    socialPlaceholder.hidden = true;
  }
}

function handleBooking() {
  if (CONFIG.bookingUrl) {
    window.location.assign(CONFIG.bookingUrl);
    return;
  }
  bookingDialog.showModal();
}

function configureBooking() {
  document.querySelectorAll("[data-booking]").forEach((button) => {
    button.addEventListener("click", handleBooking);
  });
  bookingDialog.querySelectorAll(".dialog-close, .dialog-ok").forEach((button) => {
    button.addEventListener("click", () => bookingDialog.close());
  });
  bookingDialog.addEventListener("click", (event) => {
    if (event.target === bookingDialog) bookingDialog.close();
  });
  bookingDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      bookingDialog.close();
    }
  });
}

function configureHeroSlider() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const slidesContainer = hero.querySelector(".hero-slides");
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeSlide = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  let slideTimer;

  function showSlide(index) {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
    });
    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  }

  function stopSlideTimer() {
    window.clearInterval(slideTimer);
  }

  function startSlideTimer() {
    stopSlideTimer();
    if (slides.length > 1 && !motionPreference.matches && !document.hidden) {
      slideTimer = window.setInterval(() => showSlide(activeSlide + 1), 6500);
    }
  }

  showSlide(activeSlide);
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startSlideTimer();
    });
  });
  let pointerStartX = null;

  function resetDrag() {
    pointerStartX = null;
    slidesContainer.classList.remove("is-dragging");
  }

  slidesContainer.addEventListener("pointerdown", (event) => {
    if (pointerStartX !== null || (event.pointerType === "mouse" && event.button !== 0)) return;
    if (event.target instanceof Element && event.target.closest("button, a, input, select, textarea")) return;
    pointerStartX = event.clientX;
    slidesContainer.setPointerCapture(event.pointerId);
    slidesContainer.classList.add("is-dragging");
    stopSlideTimer();
  });
  slidesContainer.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    resetDrag();
    if (Math.abs(distance) >= 50) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    startSlideTimer();
  });
  slidesContainer.addEventListener("pointercancel", () => {
    if (pointerStartX === null) return;
    resetDrag();
    startSlideTimer();
  });
  hero.addEventListener("mouseenter", stopSlideTimer);
  hero.addEventListener("mouseleave", startSlideTimer);
  hero.addEventListener("focusin", stopSlideTimer);
  hero.addEventListener("focusout", (event) => {
    if (!hero.contains(event.relatedTarget)) startSlideTimer();
  });
  document.addEventListener("visibilitychange", startSlideTimer);
  motionPreference.addEventListener?.("change", startSlideTimer);
  startSlideTimer();
}

function configureNavigation() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.hidden = expanded;
  });
  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      if (window.matchMedia("(max-width: 760px)").matches) {
        nav.hidden = true;
      }
    }
  });
  nav.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.hidden = true;
      menuToggle.focus();
    }
  });
  menuToggle.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.hidden = true;
    }
  });

  const syncMobileNav = () => {
    if (window.matchMedia("(min-width: 761px)").matches) {
      nav.hidden = false;
      menuToggle.setAttribute("aria-expanded", "false");
    } else if (menuToggle.getAttribute("aria-expanded") !== "true") {
      nav.hidden = true;
    }
  };
  syncMobileNav();
  window.addEventListener("resize", syncMobileNav);
}

function initializePage() {
  configureBrand();
  renderServices();
  renderGallery();
  renderFeatures();
  renderProfessional();
  renderReviews();
  renderLocation();
  renderFaqs();
  configureSocial();
  configureBooking();
  configureHeroSlider();
  configureNavigation();
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

initializePage();
