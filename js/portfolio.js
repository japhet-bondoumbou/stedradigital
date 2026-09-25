/* ============================================================
   Stedra Digital — Portfolio
   Données + rendu + filtrage
   ============================================================ */

/* ⚠️ Projets de démonstration — NE PAS présenter comme clients réels. */
const PROJECTS = [
  {
    id: 'p1',
    title: 'VitaShop',
    cat: 'web',
    type: 'Projet concept',
    desc: 'Concept de boutique en ligne moderne avec panier et fiches produits.',
    tools: ['HTML', 'Tailwind', 'JavaScript'],
    accent: 'from-blue-500 to-indigo-600',
    image: 'assets/images/portfolio/vita.jpeg'
  },
  {
    id: 'p2',
    title: 'Kin Market',
    cat: 'mobile',
    type: 'Prototype',
    desc: 'Prototype d\'application mobile de mise en relation entre commerçants et clients.',
    tools: ['UI mobile', 'Prototype'],
    accent: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p3',
    title: 'Aurora Studio',
    cat: 'design',
    type: 'Projet personnel',
    desc: 'Exploration d\'une identité visuelle sobre et contemporaine.',
    tools: ['Logo', 'Charte', 'Couleurs'],
    accent: 'from-violet-500 to-fuchsia-600',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p4',
    title: 'Congo Food',
    cat: 'video',
    type: 'Démo',
    desc: 'Démo de vidéo promotionnelle pour un restaurant local.',
    tools: ['Montage', 'Motion', 'Étalonnage'],
    accent: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p5',
    title: 'Pulse Agency',
    cat: 'web',
    type: 'Projet concept',
    desc: 'Concept de site vitrine pour une agence créative.',
    tools: ['HTML', 'Tailwind', 'JS'],
    accent: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'p6',
    title: 'Léa Coaching',
    cat: 'marketing',
    type: 'Démo',
    desc: 'Exemple de ligne éditoriale et de visuels pour un compte coaching.',
    tools: ['Contenu', 'Visuels', 'Stratégie'],
    accent: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  }
];

const CAT_LABELS = {
  web: 'Web', mobile: 'Mobile', design: 'Design', video: 'Vidéo', marketing: 'Marketing'
};

let activeProjectCat = 'all';

function renderProjects(list) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `<div class="col-span-full text-center py-16"><p class="text-slate-500 text-sm">Aucun projet ne correspond à votre recherche.</p><button id="resetProjectSearch" class="mt-4 text-primary font-medium text-sm hover:underline">Réinitialiser les filtres</button></div>`;
    const reset = document.getElementById('resetProjectSearch');
    if (reset) reset.addEventListener('click', () => {
      const input = document.getElementById('projectSearchInput');
      if (input) input.value = '';
      activeProjectCat = 'all';
      updateProjectFilters();
      renderProjects(PROJECTS);
    });
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div class="relative h-48 overflow-hidden bg-slate-200">
        <img src="${p.image}" alt="${p.title}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/90 text-navy">${p.type}</span>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-base font-semibold text-navy">${p.title}</h3>
          <span class="text-[11px] uppercase tracking-wider text-primary font-semibold">${CAT_LABELS[p.cat]}</span>
        </div>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${p.desc}</p>
        <div class="flex flex-wrap gap-1.5">
          ${p.tools.map(t => `<span class="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-600">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function updateProjectFilters() {
  document.querySelectorAll('[data-project-filter]').forEach(btn => {
    const cat = btn.getAttribute('data-project-filter');
    if (cat === activeProjectCat) {
      btn.classList.add('bg-navy', 'text-white', 'border-navy');
      btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
    } else {
      btn.classList.remove('bg-navy', 'text-white', 'border-navy');
      btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
    }
  });
}

function applyProjectFilters() {
  const query = (document.getElementById('projectSearchInput')?.value || '').toLowerCase().trim();
  let list = activeProjectCat === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === activeProjectCat);

  if (query) {
    list = list.filter(p => [
      p.title,
      p.desc,
      p.type,
      CAT_LABELS[p.cat],
      ...p.tools
    ].some(value => value.toLowerCase().includes(query)));
  }

  renderProjects(list);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  renderProjects(PROJECTS);
  updateProjectFilters();

  document.querySelectorAll('[data-project-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeProjectCat = btn.getAttribute('data-project-filter');
      updateProjectFilters();
      applyProjectFilters();
    });
  });

  const search = document.getElementById('projectSearchInput');
  if (search) search.addEventListener('input', applyProjectFilters);
});