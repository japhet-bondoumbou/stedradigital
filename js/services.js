/* ============================================================
   Stedra Digital — Services
   Données + rendu + filtrage + recherche
   ============================================================ */

/* ---------- Icônes SVG réutilisables ---------- */
const ICONS = {
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  design: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="14.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="15.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>`,
  marketing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M3 11v3a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1z"/><path d="M16 8a4 4 0 0 1 0 8"/><path d="M19 5a8 8 0 0 1 0 14"/></svg>`,
  video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};

/* ---------- Liste complète des services ---------- */
const SERVICES = [
  // ---------- Développement ----------
  { id: 'dev-vitrine', cat: 'dev', icon: 'code', title: 'Site vitrine',
    desc: 'Un site clair et professionnel pour présenter votre activité, vos services et votre contact.',
    tags: ['Entreprises', 'Commerçants', 'Associations'] },
  { id: 'dev-landing', cat: 'dev', icon: 'code', title: 'Landing page',
    desc: 'Une page unique optimisée pour convertir vos visiteurs en prospects ou en clients.',
    tags: ['Campagnes', 'Lancements', 'Promotions'] },
  { id: 'dev-ecom', cat: 'dev', icon: 'code', title: 'Site e-commerce',
    desc: 'Une boutique en ligne pour vendre vos produits, gérer vos commandes et vos paiements.',
    tags: ['Boutique', 'Produits', 'Vente en ligne'] },
  { id: 'dev-portfolio', cat: 'dev', icon: 'code', title: 'Portfolio en ligne',
    desc: 'Un espace élégant pour montrer vos réalisations et valoriser votre profil.',
    tags: ['Créatifs', 'Freelances', 'Artistes'] },
  { id: 'dev-blog', cat: 'dev', icon: 'code', title: 'Blog',
    desc: 'Publiez vos articles, partagez vos idées et développez votre audience.',
    tags: ['Contenu', 'SEO', 'Audience'] },
  { id: 'dev-institutionnel', cat: 'dev', icon: 'code', title: 'Site institutionnel',
    desc: 'Un site robuste pour présenter une organisation, ses équipes et ses actions.',
    tags: ['ONG', 'Écoles', 'Institutions'] },
  { id: 'dev-webapp', cat: 'dev', icon: 'code', title: 'Application web',
    desc: 'Un outil sur mesure accessible depuis le navigateur, adapté à vos processus.',
    tags: ['Gestion', 'Tableaux de bord', 'Outils'] },
  { id: 'dev-mobile', cat: 'dev', icon: 'code', title: 'Application mobile',
    desc: 'Une application pour Android/iOS pensée pour vos utilisateurs et vos usages.',
    tags: ['Android', 'iOS', 'Mobile'] },
  { id: 'dev-custom', cat: 'dev', icon: 'code', title: 'Solution personnalisée',
    desc: 'Un besoin spécifique ? Nous concevons une solution sur mesure adaptée à votre contexte.',
    tags: ['Sur mesure', 'Spécifique', 'Innovation'] },

  // ---------- Design ----------
  { id: 'des-identite', cat: 'design', icon: 'design', title: 'Identité visuelle',
    desc: 'Logo, couleurs, typographies et règles d\'usage : une image cohérente pour votre marque.',
    tags: ['Marque', 'Branding', 'Cohérence'] },
  { id: 'des-logo', cat: 'design', icon: 'design', title: 'Création de logo',
    desc: 'Un logo moderne et mémorable, adapté à votre activité et à votre public.',
    tags: ['Logo', 'Marque', 'Symbole'] },
  { id: 'des-affiche', cat: 'design', icon: 'design', title: 'Affiches',
    desc: 'Des affiches percutantes pour vos événements, promotions et annonces.',
    tags: ['Événement', 'Promo', 'Impression'] },
  { id: 'des-flyer', cat: 'design', icon: 'design', title: 'Flyers',
    desc: 'Des flyers professionnels pour communiquer rapidement et efficacement.',
    tags: ['Distribution', 'Communication'] },
  { id: 'des-social', cat: 'design', icon: 'design', title: 'Visuels réseaux sociaux',
    desc: 'Des visuels soignés et cohérents pour animer vos pages et attirer l\'attention.',
    tags: ['Instagram', 'Facebook', 'TikTok'] },
  { id: 'des-supports', cat: 'design', icon: 'design', title: 'Supports de communication',
    desc: 'Cartes de visite, brochures, présentations : tous vos supports alignés.',
    tags: ['Brochure', 'Carte', 'Présentation'] },

  // ---------- Marketing ----------
  { id: 'mkt-strategie', cat: 'marketing', icon: 'marketing', title: 'Stratégie digitale',
    desc: 'Un plan clair pour organiser votre présence en ligne et atteindre vos objectifs.',
    tags: ['Plan', 'Objectifs', 'Croissance'] },
  { id: 'mkt-community', cat: 'marketing', icon: 'marketing', title: 'Community management',
    desc: 'Animation, modération et publication régulière sur vos réseaux sociaux.',
    tags: ['Réseaux', 'Animation', 'Communauté'] },
  { id: 'mkt-contenu', cat: 'marketing', icon: 'marketing', title: 'Création de contenu',
    desc: 'Textes, visuels, vidéos courtes : du contenu pensé pour votre audience.',
    tags: ['Contenu', 'Créatif', 'Engagement'] },
  { id: 'mkt-accompagnement', cat: 'marketing', icon: 'marketing', title: 'Accompagnement réseaux sociaux',
    desc: 'Un suivi régulier pour structurer et faire grandir vos pages.',
    tags: ['Suivi', 'Structuration', 'Conseil'] },
  { id: 'mkt-visibilite', cat: 'marketing', icon: 'marketing', title: 'Visibilité en ligne',
    desc: 'Améliorer votre présence digitale et votre découvrabilité sur les moteurs de recherche.',
    tags: ['SEO', 'Référencement', 'Notoriété'] },

  // ---------- Vidéo ----------
  { id: 'vid-montage', cat: 'video', icon: 'video', title: 'Montage vidéo',
    desc: 'Un montage propre et rythmé pour donner vie à vos images.',
    tags: ['Montage', 'Post-production'] },
  { id: 'vid-promo', cat: 'video', icon: 'video', title: 'Vidéos promotionnelles',
    desc: 'Des vidéos claires pour présenter un produit, un service ou un événement.',
    tags: ['Promo', 'Publicité'] },
  { id: 'vid-social', cat: 'video', icon: 'video', title: 'Contenus réseaux sociaux',
    desc: 'Des formats adaptés à chaque plateforme pour capter l\'attention.',
    tags: ['Instagram', 'Facebook', 'TikTok'] },
  { id: 'vid-youtube', cat: 'video', icon: 'video', title: 'Vidéos YouTube',
    desc: 'Des vidéos structurées et soignées pour votre chaîne YouTube.',
    tags: ['YouTube', 'Long format'] },
  { id: 'vid-shorts', cat: 'video', icon: 'video', title: 'Formats courts',
    desc: 'Reels, Shorts, TikTok : des contenus pensés pour le scroll.',
    tags: ['Reels', 'Shorts', 'TikTok'] },

  // ---------- Informatique ----------
  { id: 'info-systeme', cat: 'info', icon: 'info', title: 'Installation de systèmes',
    desc: 'Installation propre et sécurisée de Windows, Linux ou autres systèmes.',
    tags: ['Windows', 'Linux', 'Installation'] },
  { id: 'info-logiciel', cat: 'info', icon: 'info', title: 'Installation de logiciels',
    desc: 'Mise en place de vos logiciels de travail, outils et pilotes.',
    tags: ['Logiciels', 'Outils'] },
  { id: 'info-config', cat: 'info', icon: 'info', title: 'Configuration d\'ordinateurs',
    desc: 'Paramétrage, optimisation et préparation de vos machines.',
    tags: ['Configuration', 'Optimisation'] },
  { id: 'info-maintenance', cat: 'info', icon: 'info', title: 'Maintenance',
    desc: 'Entretien, mises à jour et suivi régulier de vos équipements.',
    tags: ['Entretien', 'Mises à jour'] },
  { id: 'info-assistance', cat: 'info', icon: 'info', title: 'Assistance informatique',
    desc: 'Un appui ponctuel pour résoudre vos problèmes du quotidien.',
    tags: ['Support', 'Dépannage'] },
  { id: 'info-reseau', cat: 'info', icon: 'info', title: 'Configuration réseau de base',
    desc: 'Mise en place d\'un réseau local, Wi-Fi et partages simples.',
    tags: ['Réseau', 'Wi-Fi', 'LAN'] }
];

const CATEGORY_LABELS = {
  dev: 'Développement Web & Mobile',
  design: 'Design graphique',
  marketing: 'Marketing digital',
  video: 'Production vidéo',
  info: 'Services informatiques'
};

/* ---------- Rendu ---------- */
function renderServices(list) {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  if (!list.length) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16">
        <p class="text-slate-500 text-sm">Aucun service ne correspond à votre recherche.</p>
        <button id="resetSearch" class="mt-4 text-primary font-medium text-sm hover:underline">Réinitialiser la recherche</button>
      </div>`;
    const reset = document.getElementById('resetSearch');
    if (reset) reset.addEventListener('click', () => {
      const input = document.getElementById('searchInput');
      if (input) input.value = '';
      activeCategory = 'all';
      updateServiceFilters();
      renderServices(SERVICES);
    });
    return;
  }

  container.innerHTML = list.map(s => `
    <article class="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div class="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4 group-hover:gradient-primary group-hover:text-white transition-all">
        ${ICONS[s.icon]}
      </div>
      <span class="text-[11px] uppercase tracking-wider text-primary font-semibold mb-1">${CATEGORY_LABELS[s.cat]}</span>
      <h3 class="text-base font-semibold text-navy mb-2">${s.title}</h3>
      <p class="text-sm text-slate-600 leading-relaxed mb-4 flex-1">${s.desc}</p>
      <div class="flex flex-wrap gap-1.5 mb-4">
        ${s.tags.map(t => `<span class="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600">${t}</span>`).join('')}
      </div>
      <a href="devis.html?service=${s.cat}" class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
        Demander un devis
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </article>
  `).join('');
}

/* ---------- Filtres ---------- */
let activeCategory = 'all';

function updateServiceFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    const cat = btn.getAttribute('data-filter');
    if (cat === activeCategory) {
      btn.classList.add('bg-navy', 'text-white', 'border-navy');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
    } else {
      btn.classList.remove('bg-navy', 'text-white', 'border-navy');
      btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
    }
  });
}

function applyServiceFilters() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  let list = SERVICES;
  if (activeCategory !== 'all') list = list.filter(s => s.cat === activeCategory);
  if (query) {
    list = list.filter(s =>
      s.title.toLowerCase().includes(query) ||
      s.desc.toLowerCase().includes(query) ||
      CATEGORY_LABELS[s.cat].toLowerCase().includes(query) ||
      s.tags.some(t => t.toLowerCase().includes(query))
    );
  }
  renderServices(list);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  renderServices(SERVICES);
  updateServiceFilters();

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-filter');
      updateServiceFilters();
      applyServiceFilters();
    });
  });

  const search = document.getElementById('searchInput');
  if (search) search.addEventListener('input', applyServiceFilters);
});