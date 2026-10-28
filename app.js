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
    { name: "Corte masculino", description: "Corte personalizado e acabamento cuidadoso.", price: "R$ 55", duration: "45 min" },
    { name: "Barba completa", description: "Desenho, cuidado e finalização da barba.", price: "R$ 40", duration: "35 min" },
    { name: "Corte + barba", description: "Um cuidado completo, da cabeça à barba.", price: "R$ 85", duration: "75 min", featured: true },
    { name: "Corte infantil", description: "Um corte pensado para os pequenos.", price: "R$ 45", duration: "40 min" },
    { name: "Acabamento", description: "Contorno e detalhes para renovar o visual.", price: "R$ 25", duration: "20 min" },
    { name: "Sobrancelha", description: "Acabamento sutil para valorizar o olhar.", price: "R$ 20", duration: "15 min" },
  ],
  gallery: [
    { image: "degrade-detalhe", alt: "Detalhe de um corte em degradê com acabamento preciso" },
    { image: "corte-tradicional", alt: "Corte masculino com textura e laterais bem definidas" },
    { image: "corte-em-execucao", alt: "Barbeiro finalizando o corte de um cliente" },
    { image: "barba-detalhe", alt: "Barbeiro trabalhando no acabamento da barba" },
    { image: "corte-moderno", alt: "Corte curto com degradê e topo texturizado" },
    { image: "barbeiro-em-acao", alt: "Atendimento de barbearia durante um corte" },
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
    description: "Cada atendimento começa com uma conversa para entender o que você procura. A proposta é respeitar seu estilo, cuidar de cada detalhe e deixar você à vontade durante toda a visita.",
  },
  reviews: [
    { placeholder: "Seu depoimento real pode aparecer aqui." },
    { placeholder: "Conteúdo ilustrativo — substitua por uma avaliação real." },
    { placeholder: "Este espaço está reservado para um cliente." },
  ],
  hours: [
    ["Segunda-feira", "Exemplo: 09h–19h"],
    ["Terça-feira", "Exemplo: 09h–19h"],
    ["Quarta-feira", "Exemplo: 09h–19h"],
    ["Quinta-feira", "Exemplo: 09h–19h"],
    ["Sexta-feira", "Exemplo: 09h–19h"],
    ["Sábado", "Exemplo: 09h–16h"],
    ["Domingo", "Exemplo: fechado"],
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
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
let lastGalleryTrigger = null;

function renderServices() {
  const list = document.querySelector("#services-list");
  list.innerHTML = CONFIG.services.map((service) => `
    <article class="service-card${service.featured ? " is-featured" : ""}">
      <div>
        <h3 class="service-name">${service.name}</h3>
        <p class="service-description">${service.description}</p>
      </div>
      <p class="service-price">${service.price}<span class="service-duration">${service.duration}</span></p>
      <button class="button" type="button" data-booking>Agendar meu horário <span aria-hidden="true">↗</span></button>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = document.querySelector("#gallery-grid");
  grid.innerHTML = CONFIG.gallery.map(({ image, alt }) => `
    <button class="gallery-item" type="button" data-gallery="${image}" data-alt="${alt}" aria-label="Ampliar imagem: ${alt}">
      <picture>
        <source type="image/webp" srcset="assets/images/${image}-600.webp 600w, assets/images/${image}-960.webp 960w" sizes="(max-width: 760px) 50vw, 40vw">
        <img src="assets/images/${image}-960.webp" width="960" height="680" alt="${alt}" loading="lazy" decoding="async">
      </picture>
    </button>
  `).join("");
}

function renderFeatures() {
  document.querySelector("#feature-list").innerHTML = CONFIG.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");
}

function renderProfessional() {
  document.querySelector("#barber-name").textContent = CONFIG.professional.name;
  document.querySelector("#barber-role").textContent = CONFIG.professional.role;
  document.querySelector("#barber-description").textContent = CONFIG.professional.description;
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
      nav.hidden = true;
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

function configureGallery() {
  document.querySelector("#gallery-grid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-gallery]");
    if (!trigger) return;

    lastGalleryTrigger = trigger;
    const imageName = trigger.dataset.gallery;
    lightboxImage.src = `assets/images/${imageName}-960.webp`;
    lightboxImage.srcset = `assets/images/${imageName}-600.webp 600w, assets/images/${imageName}-960.webp 960w`;
    lightboxImage.alt = trigger.dataset.alt;
    lightboxCaption.textContent = trigger.dataset.alt;
    lightbox.showModal();
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      lightbox.close();
    }
  });
  lightbox.addEventListener("close", () => lastGalleryTrigger?.focus());
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
  configureNavigation();
  configureGallery();
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

initializePage();
