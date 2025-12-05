const $ = (id) => document.getElementById(id);

const translations = {
  en: {
    headline: 'Built for families who budget in two worlds',
    subhead: 'Track U.S. expenses, plan remittances, and learn finance together with bilingual lessons.',
    summaryTitle: 'Family dashboard',
    summaryCopy: 'A blended view of budgets, remittances, and learning progress.',
    budgetLabel: 'Monthly budget',
    budgetHint: 'Remaining after bills & remittances',
    remitLabel: 'Planned remittances',
    remitHint: 'Includes fees & FX buffer',
    lessonLabel: 'Lesson streak',
    lessonHint: 'Family Learning Mode',
    planningTitle: 'Budget & remittance planner',
    planningCopy: 'Plan bills, savings, and cross-border support with transparent fees.',
    budgetFormTitle: 'Add budget item',
    budgetFormCopy: 'Track bills, groceries, or savings goals.',
    budgetName: 'Name',
    budgetAmount: 'Amount (USD)',
    budgetCategory: 'Category',
    budgetSubmit: 'Add item',
    remitFormTitle: 'Plan a remittance',
    remitFormCopy: 'Estimate fees and FX buffer for your transfer.',
    remitName: 'Recipient',
    remitAmount: 'Amount (USD)',
    remitCountry: 'Country',
    remitFee: 'Expected fee (USD)',
    remitRate: 'FX buffer (%)',
    remitSubmit: 'Save transfer',
    budgetListTitle: 'Your budget',
    budgetListCopy: 'Sorted by category with totals.',
    remitListTitle: 'Remittances',
    remitListCopy: 'See fees and FX buffer for every transfer.',
    total: 'Total',
    totalWithFees: 'Total with fees',
    learningTitle: 'Family Learning Mode',
    learningCopy: 'Short, bilingual lessons you can complete together.',
    lessonBudgetTitle: 'Smart budgeting 101',
    lessonBudgetCopy: 'Learn the 50/30/20 method and how to add remittances.',
    lessonBudgetTag: 'Lesson · Parent + Teen',
    lessonRemitTitle: 'Compare remittance fees',
    lessonRemitCopy: 'Spot hidden fees, FX spreads, and transfer timing.',
    lessonRemitTag: 'Lesson · Parent',
    lessonCreditTitle: 'Credit & taxes basics',
    lessonCreditCopy: 'Understand scores, safe borrowing, and filing basics.',
    lessonCreditTag: 'Lesson · Teen',
    markDone: 'Mark done',
    trustTitle: 'Built for immigrant families',
    trustCopy: 'Culturally aware onboarding, transparent data, and sponsor-backed pricing.',
    trustCultureTitle: 'Cultural onboarding',
    trustCultureCopy: 'Select country of origin, preferred language, and remittance cadence at signup.',
    trustPrivacyTitle: 'Data privacy first',
    trustPrivacyCopy: 'Read-only connections with plain-language permissions and local data tips.',
    trustSponsorTitle: 'Sponsor-backed',
    trustSponsorCopy: 'Local banks and community partners keep core features free for families.',
    footerText: 'Pathways Finance · Bilingual budgeting and remittance education.'
  },
  es: {
    headline: 'Creado para familias que viven y presupuestan en dos mundos',
    subhead: 'Controla gastos en EE. UU., planea remesas y aprende finanzas con lecciones bilingües.',
    summaryTitle: 'Panel familiar',
    summaryCopy: 'Vista combinada de presupuesto, remesas y progreso de aprendizaje.',
    budgetLabel: 'Presupuesto mensual',
    budgetHint: 'Restante después de gastos y remesas',
    remitLabel: 'Remesas planificadas',
    remitHint: 'Incluye comisiones y colchón de tipo de cambio',
    lessonLabel: 'Racha de lecciones',
    lessonHint: 'Modo de Aprendizaje Familiar',
    planningTitle: 'Planificador de presupuesto y remesas',
    planningCopy: 'Organiza gastos, ahorros y apoyo transfronterizo con tarifas claras.',
    budgetFormTitle: 'Agregar partida',
    budgetFormCopy: 'Registra servicios, comida o metas de ahorro.',
    budgetName: 'Nombre',
    budgetAmount: 'Monto (USD)',
    budgetCategory: 'Categoría',
    budgetSubmit: 'Agregar',
    remitFormTitle: 'Planear remesa',
    remitFormCopy: 'Calcula comisiones y colchón de tipo de cambio.',
    remitName: 'Beneficiario',
    remitAmount: 'Monto (USD)',
    remitCountry: 'País',
    remitFee: 'Comisión estimada (USD)',
    remitRate: 'Colchón FX (%)',
    remitSubmit: 'Guardar envío',
    budgetListTitle: 'Tu presupuesto',
    budgetListCopy: 'Ordenado por categoría con totales.',
    remitListTitle: 'Remesas',
    remitListCopy: 'Ve comisiones y colchón FX por envío.',
    total: 'Total',
    totalWithFees: 'Total con comisiones',
    learningTitle: 'Modo de Aprendizaje Familiar',
    learningCopy: 'Lecciones cortas y bilingües para completar juntos.',
    lessonBudgetTitle: 'Presupuesto inteligente 101',
    lessonBudgetCopy: 'Conoce la regla 50/30/20 e integra las remesas.',
    lessonBudgetTag: 'Lección · Padres + Jóvenes',
    lessonRemitTitle: 'Compara comisiones de remesas',
    lessonRemitCopy: 'Detecta comisiones ocultas, spreads y tiempo de envío.',
    lessonRemitTag: 'Lección · Padres',
    lessonCreditTitle: 'Crédito e impuestos básicos',
    lessonCreditCopy: 'Comprende puntajes, uso responsable y trámites.',
    lessonCreditTag: 'Lección · Jóvenes',
    markDone: 'Marcar completada',
    trustTitle: 'Hecho para familias inmigrantes',
    trustCopy: 'Onboarding cultural, datos transparentes y patrocinio comunitario.',
    trustCultureTitle: 'Onboarding cultural',
    trustCultureCopy: 'Elige país de origen, idioma y frecuencia de remesas al registrarte.',
    trustPrivacyTitle: 'Privacidad primero',
    trustPrivacyCopy: 'Conexiones de solo lectura y permisos en lenguaje simple.',
    trustSponsorTitle: 'Patrocinado',
    trustSponsorCopy: 'Bancos locales y aliados mantienen las funciones básicas gratis.',
    footerText: 'Pathways Finance · Presupuesto y educación de remesas bilingüe.'
  }
};

const state = {
  budgetItems: JSON.parse(localStorage.getItem('pf-budget') || '[]'),
  remittances: JSON.parse(localStorage.getItem('pf-remit') || '[]'),
  lessons: JSON.parse(localStorage.getItem('pf-lessons') || '{}'),
  streak: Number(localStorage.getItem('pf-streak') || 0)
};

const currency = (value) => `$${Number(value || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function saveState() {
  localStorage.setItem('pf-budget', JSON.stringify(state.budgetItems));
  localStorage.setItem('pf-remit', JSON.stringify(state.remittances));
  localStorage.setItem('pf-lessons', JSON.stringify(state.lessons));
  localStorage.setItem('pf-streak', String(state.streak));
}

function renderSummary() {
  const budgetTotal = state.budgetItems.reduce((sum, item) => sum + Number(item.amount), 0);
  const remitTotal = state.remittances.reduce((sum, remit) => sum + remit.amount + remit.fee + remit.amount * remit.fxBuffer, 0);
  $('budget-total').textContent = currency(budgetTotal);
  $('remit-total').textContent = currency(remitTotal);
  $('lesson-total').textContent = `${state.streak || 0} days`;

  const budgetPercent = Math.min(100, (budgetTotal / 2000) * 100);
  const remitPercent = Math.min(100, (remitTotal / 800) * 100);
  const lessonPercent = Math.min(100, (state.streak / 14) * 100);

  $('budget-progress').style.width = `${budgetPercent}%`;
  $('remit-progress').style.width = `${remitPercent}%`;
  $('lesson-progress').style.width = `${lessonPercent}%`;
}

function renderLists() {
  const budgetList = $('budget-list');
  budgetList.innerHTML = '';
  state.budgetItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <div class="meta">
        <strong>${item.name}</strong>
        <span class="muted">${item.category}</span>
      </div>
      <div>
        <span class="tag">${currency(item.amount)}</span>
        <button class="btn ghost" data-remove-budget="${index}">✕</button>
      </div>
    `;
    budgetList.appendChild(li);
  });
  $('budget-total-value').textContent = currency(state.budgetItems.reduce((sum, i) => sum + Number(i.amount), 0));

  const remitList = $('remit-list');
  remitList.innerHTML = '';
  state.remittances.forEach((item, index) => {
    const total = item.amount + item.fee + item.amount * item.fxBuffer;
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <div class="meta">
        <strong>${item.name}</strong>
        <span class="muted">${item.country}</span>
      </div>
      <div>
        <span class="tag">${currency(total)}</span>
        <button class="btn ghost" data-remove-remit="${index}">✕</button>
      </div>
    `;
    remitList.appendChild(li);
  });
  $('remit-total-value').textContent = currency(state.remittances.reduce((sum, i) => sum + i.amount + i.fee + i.amount * i.fxBuffer, 0));
}

function renderLessons() {
  const lessons = ['budgeting', 'remittance', 'credit'];
  lessons.forEach((key) => {
    const button = document.querySelector(`button[data-lesson="${key}"]`);
    if (state.lessons[key]) {
      button.textContent = 'Completed';
      button.classList.add('primary');
    } else {
      button.textContent = translations[getLanguage()].markDone;
      button.classList.remove('primary');
    }
  });
}

function getLanguage() {
  return $('language').value;
}

function applyTranslations() {
  const t = translations[getLanguage()];
  $('headline').textContent = t.headline;
  $('subhead').textContent = t.subhead;
  $('summary-title').textContent = t.summaryTitle;
  $('summary-copy').textContent = t.summaryCopy;
  $('budget-label').textContent = t.budgetLabel;
  $('budget-hint').textContent = t.budgetHint;
  $('remit-label').textContent = t.remitLabel;
  $('remit-hint').textContent = t.remitHint;
  $('lesson-label').textContent = t.lessonLabel;
  $('lesson-hint').textContent = t.lessonHint;
  $('planning-title').textContent = t.planningTitle;
  $('planning-copy').textContent = t.planningCopy;
  $('budget-form-title').textContent = t.budgetFormTitle;
  $('budget-form-copy').textContent = t.budgetFormCopy;
  $('budget-name-label').textContent = t.budgetName;
  $('budget-amount-label').textContent = t.budgetAmount;
  $('budget-category-label').textContent = t.budgetCategory;
  $('budget-submit').textContent = t.budgetSubmit;
  $('remit-form-title').textContent = t.remitFormTitle;
  $('remit-form-copy').textContent = t.remitFormCopy;
  $('remit-name-label').textContent = t.remitName;
  $('remit-amount-label').textContent = t.remitAmount;
  $('remit-country-label').textContent = t.remitCountry;
  $('remit-fee-label').textContent = t.remitFee;
  $('remit-rate-label').textContent = t.remitRate;
  $('remit-submit').textContent = t.remitSubmit;
  $('budget-list-title').textContent = t.budgetListTitle;
  $('budget-list-copy').textContent = t.budgetListCopy;
  $('remit-list-title').textContent = t.remitListTitle;
  $('remit-list-copy').textContent = t.remitListCopy;
  $('budget-total-label').textContent = t.total;
  $('remit-total-label').textContent = t.totalWithFees;
  $('learning-title').textContent = t.learningTitle;
  $('learning-copy').textContent = t.learningCopy;
  $('lesson-budget-title').textContent = t.lessonBudgetTitle;
  $('lesson-budget-copy').textContent = t.lessonBudgetCopy;
  $('lesson-budget-tag').textContent = t.lessonBudgetTag;
  $('lesson-remit-title').textContent = t.lessonRemitTitle;
  $('lesson-remit-copy').textContent = t.lessonRemitCopy;
  $('lesson-remit-tag').textContent = t.lessonRemitTag;
  $('lesson-credit-title').textContent = t.lessonCreditTitle;
  $('lesson-credit-copy').textContent = t.lessonCreditCopy;
  $('lesson-credit-tag').textContent = t.lessonCreditTag;
  $('lesson-budget-btn').textContent = state.lessons.budgeting ? 'Completed' : t.markDone;
  $('lesson-remit-btn').textContent = state.lessons.remittance ? 'Completed' : t.markDone;
  $('lesson-credit-btn').textContent = state.lessons.credit ? 'Completed' : t.markDone;
  $('trust-title').textContent = t.trustTitle;
  $('trust-copy').textContent = t.trustCopy;
  $('trust-culture-title').textContent = t.trustCultureTitle;
  $('trust-culture-copy').textContent = t.trustCultureCopy;
  $('trust-privacy-title').textContent = t.trustPrivacyTitle;
  $('trust-privacy-copy').textContent = t.trustPrivacyCopy;
  $('trust-sponsor-title').textContent = t.trustSponsorTitle;
  $('trust-sponsor-copy').textContent = t.trustSponsorCopy;
  $('footer-text').textContent = t.footerText;
  renderLessons();
}

function addBudgetItem(event) {
  event.preventDefault();
  const name = $('budget-name').value.trim();
  const amount = Number($('budget-amount').value);
  const category = $('budget-category').value;
  if (!name || !amount) return;
  state.budgetItems.push({ name, amount, category });
  $('budget-form').reset();
  saveState();
  renderSummary();
  renderLists();
}

function addRemittance(event) {
  event.preventDefault();
  const name = $('remit-name').value.trim();
  const amount = Number($('remit-amount').value);
  const country = $('remit-country').value;
  const fee = Number($('remit-fee').value || 0);
  const fxBuffer = Number($('remit-rate').value || 0) / 100;
  if (!name || !amount) return;
  state.remittances.push({ name, amount, country, fee, fxBuffer });
  $('remit-form').reset();
  saveState();
  renderSummary();
  renderLists();
}

function completeLesson(key) {
  if (!state.lessons[key]) {
    state.lessons[key] = true;
    state.streak += 1;
    saveState();
    renderSummary();
    renderLessons();
  }
}

function attachEvents() {
  $('budget-form').addEventListener('submit', addBudgetItem);
  $('remit-form').addEventListener('submit', addRemittance);
  document.body.addEventListener('click', (event) => {
    const budgetIndex = event.target.dataset.removeBudget;
    const remitIndex = event.target.dataset.removeRemit;
    if (budgetIndex !== undefined) {
      state.budgetItems.splice(Number(budgetIndex), 1);
      saveState();
      renderSummary();
      renderLists();
    }
    if (remitIndex !== undefined) {
      state.remittances.splice(Number(remitIndex), 1);
      saveState();
      renderSummary();
      renderLists();
    }
    if (event.target.dataset.action === 'complete') {
      completeLesson(event.target.dataset.lesson);
    }
  });
  $('language').addEventListener('change', applyTranslations);
  $('cta-start').addEventListener('click', () => document.getElementById('planning-panel').scrollIntoView({ behavior: 'smooth' }));
  $('cta-learn').addEventListener('click', () => document.getElementById('learning-panel').scrollIntoView({ behavior: 'smooth' }));
}

function seedDefaults() {
  if (!state.budgetItems.length) {
    state.budgetItems = [
      { name: 'Rent', amount: 1200, category: 'housing' },
      { name: 'Groceries', amount: 320, category: 'food' },
      { name: 'Savings', amount: 150, category: 'savings' }
    ];
  }
  if (!state.remittances.length) {
    state.remittances = [
      { name: 'Mom - Pune', amount: 200, country: 'IN', fee: 3.99, fxBuffer: 0.015 }
    ];
  }
}

function init() {
  seedDefaults();
  attachEvents();
  applyTranslations();
  renderSummary();
  renderLists();
  renderLessons();
}

init();
