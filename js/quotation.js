/* ============================================================
   Stedra Digital — Configurateur de devis
   Parcours multi-étapes + génération WhatsApp
   ============================================================ */

const QUOTE = {

  /* ---------- Étape 1 : catégories de service ---------- */
  services: [
    { id: 'dev', label: 'Développement Web & Mobile', desc: 'Sites, applications, plateformes' },
    { id: 'design', label: 'Design graphique', desc: 'Logo, identité, supports visuels' },
    { id: 'marketing', label: 'Marketing digital', desc: 'Stratégie, réseaux, contenu' },
    { id: 'video', label: 'Production vidéo', desc: 'Montage, vidéos, formats courts' },
    { id: 'info', label: 'Services informatiques', desc: 'Installation, configuration, assistance' },
    { id: 'other', label: 'Autre demande', desc: 'Projet spécifique ou hors catégorie' }
  ],

  /* ---------- Étape 2 : types de projets par service ---------- */
  projectTypes: {
    dev: ['Site vitrine', 'Landing page', 'Site e-commerce', 'Portfolio', 'Blog', 'Site institutionnel', 'Application web', 'Application mobile', 'Solution personnalisée', 'Autre'],
    design: ['Logo', 'Identité visuelle', 'Affiche', 'Flyer', 'Visuels réseaux sociaux', 'Brochure', 'Présentation', 'Autre'],
    marketing: ['Community management', 'Stratégie digitale', 'Création de contenu', 'Gestion réseaux sociaux', 'Campagne promotionnelle', 'Autre'],
    video: ['Montage vidéo', 'Vidéo publicitaire', 'Vidéo YouTube', 'TikTok / Reels / Shorts', 'Vidéo institutionnelle', 'Motion design', 'Autre'],
    info: ['Installation système', 'Installation logiciel', 'Configuration ordinateur', 'Maintenance', 'Assistance', 'Réseau', 'Autre'],
    other: ['Demande personnalisée']
  },

  /* ---------- Budgets (indicatifs, non contractuels) ---------- */
  budgets: [
    'Moins de 100 000 FCFA',
    '100 000 – 250 000 FCFA',
    '250 000 – 500 000 FCFA',
    '500 000 – 1 000 000 FCFA',
    'Plus de 1 000 000 FCFA',
    'À définir'
  ],

  /* ---------- Étape 3 : champs dynamiques ---------- */
  detailFields: {
    dev: [
      { name: 'pages', label: 'Nombre approximatif de pages / écrans', type: 'select', options: ['1 – 3', '4 – 7', '8 – 15', 'Plus de 15', 'À définir'] },
      { name: 'features', label: 'Fonctionnalités souhaitées', type: 'textarea', placeholder: 'Ex : formulaire de contact, paiement, espace membre, multilingue...' },
      { name: 'budget', label: 'Budget estimatif', type: 'select', options: null /* rempli dynamiquement */ },
      { name: 'deadline', label: 'Délai souhaité', type: 'select', options: ['Urgent (moins de 2 semaines)', 'Environ 1 mois', '2 à 3 mois', 'Flexible'] },
      { name: 'description', label: 'Description du projet', type: 'textarea', required: true, placeholder: 'Parlez-nous de votre projet...' }
    ],
    design: [
      { name: 'supports', label: 'Nombre de supports à produire', type: 'select', options: ['1', '2 – 3', '4 – 6', 'Plus de 6', 'À définir'] },
      { name: 'style', label: 'Style souhaité', type: 'select', options: ['Minimaliste', 'Moderne', 'Élégant', 'Audacieux', 'À définir'] },
      { name: 'format', label: 'Format', type: 'select', options: ['Numérique', 'Impression', 'Les deux', 'À définir'] },
      { name: 'budget', label: 'Budget estimatif', type: 'select', options: null },
      { name: 'deadline', label: 'Délai souhaité', type: 'select', options: ['Urgent', 'Environ 1 semaine', '2 à 3 semaines', 'Flexible'] },
      { name: 'description', label: 'Description du besoin', type: 'textarea', required: true }
    ],
    video: [
      { name: 'videoCount', label: 'Nombre de vidéos', type: 'select', options: ['1', '2 – 3', '4 – 6', 'Plus de 6'] },
      { name: 'duration', label: 'Durée approximative', type: 'select', options: ['Moins de 30 s', '30 s – 1 min', '1 – 3 min', '3 – 10 min', 'Plus de 10 min'] },
      { name: 'format', label: 'Format', type: 'select', options: ['Vertical', 'Horizontal', 'Carré'] },
      { name: 'platform', label: 'Plateforme de diffusion', type: 'select', options: ['TikTok', 'Instagram', 'YouTube', 'Facebook', 'Multi-plateforme'] },
      { name: 'budget', label: 'Budget estimatif', type: 'select', options: null },
      { name: 'deadline', label: 'Délai souhaité', type: 'select', options: ['Urgent', 'Environ 1 semaine', '2 à 3 semaines', 'Flexible'] },
      { name: 'description', label: 'Description du projet vidéo', type: 'textarea', required: true }
    ],
    marketing: [
      { name: 'platforms', label: 'Plateforme(s) concernée(s)', type: 'checkbox', options: ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'WhatsApp', 'LinkedIn'] },
      { name: 'objective', label: 'Objectif principal', type: 'select', options: ['Notoriété', 'Engagement', 'Ventes', 'Lancement', 'Autre'] },
      { name: 'frequency', label: 'Fréquence de publication souhaitée', type: 'select', options: ['Quotidien', '3 – 5 par semaine', '1 – 2 par semaine', 'Occasionnel'] },
      { name: 'contentType', label: 'Type de contenu', type: 'select', options: ['Photos', 'Vidéos', 'Carrousels', 'Mixte'] },
      { name: 'duration', label: 'Durée d\'accompagnement', type: 'select', options: ['1 mois', '3 mois', '6 mois', '12 mois', 'À définir'] },
      { name: 'budget', label: 'Budget estimatif', type: 'select', options: null },
      { name: 'description', label: 'Description du besoin', type: 'textarea', required: true }
    ],
    info: [
      { name: 'interventionType', label: 'Type d\'intervention', type: 'select', options: ['Installation', 'Configuration', 'Maintenance', 'Dépannage', 'Autre'] },
      { name: 'equipment', label: 'Équipement concerné', type: 'text', placeholder: 'Ex : PC portable, imprimante, box internet...' },
      { name: 'location', label: 'Localisation générale', type: 'text', placeholder: 'Ville / quartier (facultatif)' },
      { name: 'urgency', label: 'Urgence', type: 'select', options: ['Immédiat', 'Cette semaine', 'Ce mois', 'Flexible'] },
      { name: 'description', label: 'Description du problème', type: 'textarea', required: true }
    ],
    other: [
      { name: 'budget', label: 'Budget estimatif', type: 'select', options: null },
      { name: 'deadline', label: 'Délai souhaité', type: 'select', options: ['Urgent', 'Environ 1 mois', '2 à 3 mois', 'Flexible'] },
      { name: 'description', label: 'Décrivez votre demande', type: 'textarea', required: true }
    ]
  }
};

/* ---------- État du parcours ---------- */
const state = {
  step: 1,
  service: null,
  projectType: null,
  details: {},
  client: {}
};

/* ---------- Éléments ---------- */
const els = {};

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('quoteApp')) return;

  els.steps = document.querySelectorAll('.step');
  els.pills = document.querySelectorAll('[data-step-pill]');
  els.prev = document.getElementById('prevBtn');
  els.next = document.getElementById('nextBtn');

  renderServiceOptions();
  bindNavigation();

  // Pré-sélection depuis ?service=dev
  const urlParams = new URLSearchParams(window.location.search);
  const pre = urlParams.get('service');
  if (pre && QUOTE.services.some(s => s.id === pre)) {
    selectService(pre);
  }
});

/* ============================================================
   ÉTAPE 1 — Choix du service
   ============================================================ */
function renderServiceOptions() {
  const container = document.getElementById('serviceOptions');
  if (!container) return;

  container.innerHTML = QUOTE.services.map(s => `
    <button type="button" class="select-card text-left border border-slate-200 rounded-2xl p-5 bg-white" data-service="${s.id}">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="font-semibold text-navy text-[15px]">${s.label}</p>
          <p class="text-xs text-slate-500 mt-1">${s.desc}</p>
        </div>
        <span class="check w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span class="w-2.5 h-2.5 rounded-full bg-primary hidden"></span>
        </span>
      </div>
    </button>
  `).join('');

  container.querySelectorAll('[data-service]').forEach(btn => {
    btn.addEventListener('click', () => selectService(btn.getAttribute('data-service')));
  });
}

function selectService(id) {
  state.service = id;
  document.querySelectorAll('[data-service]').forEach(b => {
    const isSelected = b.getAttribute('data-service') === id;
    b.classList.toggle('selected', isSelected);
    const dot = b.querySelector('.check span');
    if (dot) dot.classList.toggle('hidden', !isSelected);
    const circle = b.querySelector('.check');
    if (circle) {
      circle.classList.toggle('border-primary', isSelected);
      circle.classList.toggle('border-slate-300', !isSelected);
    }
  });
}

/* ============================================================
   ÉTAPE 2 — Type de projet (dynamique)
   ============================================================ */
function renderProjectTypes() {
  const container = document.getElementById('projectTypeOptions');
  if (!container || !state.service) return;
  const types = QUOTE.projectTypes[state.service] || [];

  container.innerHTML = types.map(t => `
    <button type="button" class="select-card text-left border border-slate-200 rounded-xl px-4 py-3 bg-white text-sm" data-project="${t}">
      ${t}
    </button>
  `).join('');

  container.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.projectType = btn.getAttribute('data-project');
      container.querySelectorAll('[data-project]').forEach(b => b.classList.toggle('selected', b === btn));
    });
  });
}

/* ============================================================
   ÉTAPE 3 — Champs dynamiques selon le service
   ============================================================ */
function renderDetailFields() {
  const container = document.getElementById('detailsFields');
  if (!container || !state.service) return;
  const schema = QUOTE.detailFields[state.service] || [];

  container.innerHTML = schema.map(f => renderField(f, state.details[f.name])).join('');

  // Bind events
  container.querySelectorAll('[data-field]').forEach(input => {
    const name = input.getAttribute('data-field');
    const type = input.getAttribute('data-type');

    if (type === 'checkbox') {
      input.addEventListener('change', () => {
        const values = Array.from(container.querySelectorAll(`[data-field="${name}"]:checked`)).map(i => i.value);
        state.details[name] = values;
      });
    } else {
      input.addEventListener('input', () => { state.details[name] = input.value; });
      input.addEventListener('change', () => { state.details[name] = input.value; });
    }
  });
}

function renderField(f, value) {
  const required = f.required ? '<span class="text-red-500">*</span>' : '';
  let input = '';

  if (f.type === 'text') {
    input = `<input type="text" class="field-input" data-field="${f.name}" data-type="text" placeholder="${f.placeholder || ''}" value="${value || ''}">`;
  } else if (f.type === 'textarea') {
    input = `<textarea rows="4" class="field-input" data-field="${f.name}" data-type="textarea" placeholder="${f.placeholder || ''}">${value || ''}</textarea>`;
  } else if (f.type === 'select') {
    const opts = f.options || QUOTE.budgets;
    input = `
      <select class="field-input" data-field="${f.name}" data-type="select">
        <option value="">-- Sélectionner --</option>
        ${opts.map(o => `<option value="${o}" ${value === o ? 'selected' : ''}>${o}</option>`).join('')}
      </select>`;
  } else if (f.type === 'checkbox') {
    const values = Array.isArray(value) ? value : [];
    input = `
      <div class="flex flex-wrap gap-2">
        ${f.options.map(o => `
          <label class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm cursor-pointer hover:border-primary/50 transition">
            <input type="checkbox" class="accent-primary" data-field="${f.name}" data-type="checkbox" value="${o}" ${values.includes(o) ? 'checked' : ''}>
            <span>${o}</span>
          </label>
        `).join('')}
      </div>`;
  }

  return `
    <div class="mb-5">
      <label class="field-label">${f.label} ${required}</label>
      ${input}
    </div>`;
}

/* ============================================================
   ÉTAPE 4 — Informations client (statique dans le HTML)
   ============================================================ */
function collectClientInfo() {
  state.client = {
    name: document.getElementById('clientName')?.value.trim() || '',
    company: document.getElementById('clientCompany')?.value.trim() || '',
    phone: document.getElementById('clientPhone')?.value.trim() || '',
    email: document.getElementById('clientEmail')?.value.trim() || '',
    preferred: document.getElementById('clientPreferred')?.value || '',
    comment: document.getElementById('clientComment')?.value.trim() || ''
  };
}

function validateClientInfo() {
  const errors = [];
  const nameEl = document.getElementById('clientName');
  const phoneEl = document.getElementById('clientPhone');

  [nameEl, phoneEl].forEach(el => el?.classList.remove('field-error'));

  if (!state.client.name) { errors.push('Veuillez saisir votre nom.'); nameEl?.classList.add('field-error'); }
  if (!state.client.phone) { errors.push('Veuillez saisir un numéro de téléphone.'); phoneEl?.classList.add('field-error'); }
  else if (!/^[+\d\s().-]{6,}$/.test(state.client.phone)) { errors.push('Le numéro de téléphone semble invalide.'); phoneEl?.classList.add('field-error'); }

  const emailEl = document.getElementById('clientEmail');
  if (state.client.email && !/^\S+@\S+\.\S+$/.test(state.client.email)) {
    errors.push('L\'adresse email semble invalide.');
    emailEl?.classList.add('field-error');
  }

  return errors;
}

/* ============================================================
   ÉTAPE 5 — Récapitulatif
   ============================================================ */
function renderRecap() {
  const container = document.getElementById('recapContent');
  if (!container) return;

  const serviceLabel = QUOTE.services.find(s => s.id === state.service)?.label || '—';

  const detailLines = Object.entries(state.details)
    .filter(([, v]) => v && (!Array.isArray(v) || v.length))
    .map(([k, v]) => {
      const label = findFieldLabel(state.service, k);
      const val = Array.isArray(v) ? v.join(', ') : v;
      return `<div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100 last:border-0">
        <span class="text-sm text-slate-500">${label}</span>
        <span class="text-sm text-navy font-medium sm:text-right sm:max-w-[60%]">${escapeHtml(val)}</span>
      </div>`;
    }).join('');

  container.innerHTML = `
    <div class="bg-white border border-slate-200 rounded-2xl p-6 mb-4">
      <h3 class="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">Projet</h3>
      <div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Service</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(serviceLabel)}</span>
      </div>
      <div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Type de projet</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.projectType || '—')}</span>
      </div>
      ${detailLines}
    </div>
    <div class="bg-white border border-slate-200 rounded-2xl p-6">
      <h3 class="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">Contact</h3>
      <div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Nom</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.client.name || '—')}</span>
      </div>
      ${state.client.company ? `<div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Entreprise</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.client.company)}</span>
      </div>` : ''}
      <div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Téléphone</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.client.phone || '—')}</span>
      </div>
      ${state.client.email ? `<div class="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-slate-100">
        <span class="text-sm text-slate-500">Email</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.client.email)}</span>
      </div>` : ''}
      ${state.client.preferred ? `<div class="flex flex-col sm:flex-row sm:justify-between py-2">
        <span class="text-sm text-slate-500">Contact préféré</span>
        <span class="text-sm text-navy font-medium">${escapeHtml(state.client.preferred)}</span>
      </div>` : ''}
    </div>
  `;
}

function findFieldLabel(serviceId, fieldName) {
  const schema = QUOTE.detailFields[serviceId] || [];
  return schema.find(f => f.name === fieldName)?.label || fieldName;
}

/* ============================================================
   Navigation entre étapes
   ============================================================ */
function bindNavigation() {
  els.prev?.addEventListener('click', () => goToStep(state.step - 1));
  els.next?.addEventListener('click', () => {
    if (!validateCurrentStep()) return;
    if (state.step === 4) collectClientInfo();
    if (state.step < 5) goToStep(state.step + 1);
  });

  document.getElementById('sendWhatsapp')?.addEventListener('click', sendToWhatsApp);
  document.getElementById('editBtn')?.addEventListener('click', () => goToStep(1));
}

function validateCurrentStep() {
  if (state.step === 1 && !state.service) { showToast('Veuillez choisir un service.'); return false; }
  if (state.step === 2 && !state.projectType) { showToast('Veuillez choisir un type de projet.'); return false; }
  if (state.step === 3) {
    const schema = QUOTE.detailFields[state.service] || [];
    for (const f of schema) {
      if (f.required) {
        const v = state.details[f.name];
        if (!v || (Array.isArray(v) && !v.length)) {
          showToast(`Champ requis : ${f.label}`);
          return false;
        }
      }
    }
  }
  if (state.step === 4) {
    collectClientInfo();
    const errs = validateClientInfo();
    if (errs.length) { showToast(errs[0]); return false; }
  }
  return true;
}

function goToStep(n) {
  if (n < 1 || n > 5) return;

  if (n === 2 && state.service === 'other') {
    // "Autre demande" saute l'étape de type de projet
    state.projectType = 'Demande personnalisée';
    renderDetailFields();
    state.step = 3;
    return renderStep();
  }
  if (n === 3 && state.service && !state.projectType && state.service !== 'other') {
    renderDetailFields();
  }
  if (n === 2 && state.service) renderProjectTypes();
  if (n === 3) renderDetailFields();
  if (n === 5) renderRecap();

  state.step = n;
  renderStep();
}

function renderStep() {
  els.steps.forEach(s => {
    const stepNum = parseInt(s.getAttribute('data-step'), 10);
    s.classList.toggle('active', stepNum === state.step);
  });

  els.pills.forEach(p => {
    const stepNum = parseInt(p.getAttribute('data-step-pill'), 10);
    p.classList.remove('active', 'done');
    if (stepNum === state.step) p.classList.add('active');
    else if (stepNum < state.step) p.classList.add('done');
  });

  if (els.prev) els.prev.style.visibility = state.step === 1 ? 'hidden' : 'visible';
  if (els.next) els.next.style.display = state.step === 5 ? 'none' : 'inline-flex';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   WhatsApp
   ============================================================ */
function sendToWhatsApp() {
  const serviceLabel = QUOTE.services.find(s => s.id === state.service)?.label || '—';

  let details = '';
  Object.entries(state.details).forEach(([k, v]) => {
    if (!v || (Array.isArray(v) && !v.length)) return;
    const label = findFieldLabel(state.service, k);
    const val = Array.isArray(v) ? v.join(', ') : v;
    details += `${label} :\n${val}\n\n`;
  });

  const budget = state.details.budget || 'À définir';
  const deadline = state.details.deadline || state.details.urgency || 'À définir';

  const message =
`Bonjour Stedra Digital,

Je souhaite demander un devis.

━━━━━━━━━━━━━━━━━━
INFORMATIONS DU PROJET
━━━━━━━━━━━━━━━━━━

Service : ${serviceLabel}
Projet : ${state.projectType || '—'}

Détails :
${details || 'Non précisé\n\n'}Budget estimatif :
${budget}

Délai souhaité :
${deadline}

━━━━━━━━━━━━━━━━━━
MES INFORMATIONS
━━━━━━━━━━━━━━━━━━

Nom : ${state.client.name || '—'}
Entreprise : ${state.client.company || '—'}
Téléphone : ${state.client.phone || '—'}
Email : ${state.client.email || '—'}
Contact préféré : ${state.client.preferred || 'WhatsApp'}${state.client.comment ? `\n\nCommentaire :\n${state.client.comment}` : ''}

Merci.`;

  const url = `https://wa.me/${window.SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ============================================================
   Utilitaires
   ============================================================ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

let toastTimeout;
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-navy text-white text-sm px-5 py-3 rounded-xl shadow-2xl z-[100] transition-opacity duration-300';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { t.style.opacity = '0'; }, 3200);
}