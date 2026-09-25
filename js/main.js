/* ============================================================
   Stedra Digital — Script principal
   Configuration centrale, navbar, menu mobile, animations
   ============================================================ */

const SITE_CONFIG = {
  name: 'Stedra Digital',
  slogan: 'Donnons vie à vos idées numériques.',
  whatsappDisplay: '+242 05 0233797',
  whatsappNumber: '242500233797',
  email: 'stedradigital@gmail.com',
  social: {
    tiktok: 'YOUR_TIKTOK_URL',
    facebook: 'YOUR_FACEBOOK_URL',
    instagram: 'YOUR_INSTAGRAM_URL',
    youtube: 'YOUR_YOUTUBE_URL',
    whatsappChannel: 'YOUR_WHATSAPP_CHANNEL_URL'
  }
};

window.SITE_CONFIG = SITE_CONFIG;

function setupSocialLinks() {
  document.querySelectorAll('[data-social]').forEach((el) => {
    const key = el.getAttribute('data-social');
    if (SITE_CONFIG.social[key]) {
      el.setAttribute('href', SITE_CONFIG.social[key]);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

function setupWhatsAppLinks() {
  document.querySelectorAll('[data-wa]').forEach((el) => {
    el.setAttribute('href', `https://wa.me/${SITE_CONFIG.whatsappNumber}`);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
}

function setupCurrentYear() {
  document.querySelectorAll('[data-current-year], #year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function setupActiveNavigation() {
  const currentPage = document.body.getAttribute('data-page');
  if (!currentPage) return;

  const navLinks = document.querySelectorAll('[data-nav]');
  navLinks.forEach((el) => {
    const key = el.getAttribute('data-nav');
    if (key === currentPage) {
      el.classList.add('font-semibold');

      if (key === 'devis') {
        el.classList.add('bg-primary', 'text-white');
      } else {
        el.classList.add('text-navy');
        el.classList.remove('text-slate-600');
      }
    }
  });
}

function setupNavbarScrollEffect() {
  const nav = document.querySelector('nav[data-navbar]');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initializeGlobalSite() {
  setupSocialLinks();
  setupWhatsAppLinks();
  setupCurrentYear();
  setupActiveNavigation();
  setupNavbarScrollEffect();
}

window.initGlobalSite = initializeGlobalSite;