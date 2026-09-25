const COMPONENT_CONFIG = {
  navbar: {
    url: 'components/navbar.html',
    target: 'navbar-container'
  },
  footer: {
    url: 'components/footer.html',
    target: 'footer-container'
  }
};

function resolveComponentUrl(componentPath) {
  const candidateUrls = [
    new URL(componentPath, window.location.href).href,
    new URL(`../${componentPath}`, window.location.href).href
  ];

  return [...new Set(candidateUrls)];
}

function logComponentError(name, error) {
  console.warn(`[components] Impossible de charger ${name}:`, error);
}

async function loadComponent(componentName, targetId) {
  const component = COMPONENT_CONFIG[componentName];
  const target = document.getElementById(targetId);

  if (!component || !target) {
    return false;
  }

  try {
    let lastError = null;

    for (const url of resolveComponentUrl(component.url)) {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();
        target.innerHTML = html;
        return true;
      } catch (error) {
        lastError = error;
      }
    }

    throw lastError || new Error('Aucune URL de composant valide');
  } catch (error) {
    logComponentError(component.url, error);
    return false;
  }
}

function initializeMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');

  if (!menuBtn || !mobileMenu) return;

  if (menuBtn.dataset.menuInitialized === 'true') {
    return;
  }
  menuBtn.dataset.menuInitialized = 'true';

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');

    if (iconOpen && iconClose) {
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));

    if (iconOpen && iconClose) {
      iconOpen.classList.toggle('hidden', isOpen);
      iconClose.classList.toggle('hidden', !isOpen);
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

function initializeInjectedNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!navbarContainer || !navbarContainer.innerHTML.trim() || !menuBtn || !mobileMenu) {
    return false;
  }

  initializeMobileMenu();
  return menuBtn.dataset.menuInitialized === 'true';
}

async function initComponents() {
  const navbarLoaded = await loadComponent('navbar', 'navbar-container');
  if (!navbarLoaded || !initializeInjectedNavbar()) {
    console.error('[components] La navbar n’a pas pu être initialisée. Le menu mobile reste désactivé.');
    return;
  }

  await loadComponent('footer', 'footer-container');

  if (window.initGlobalSite) {
    window.initGlobalSite();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents, { once: true });
} else {
  initComponents();
}
