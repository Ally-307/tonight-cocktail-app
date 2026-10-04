(() => {
  'use strict';

  const coreDrinks = {
    rainy: { name: '雨夜霓虹', subtitle: '黑麦 · 西柚 · 迷迭香', style: '烈酒感', image: 'assets/rainy-neon-hero.jpg', alt: '红宝石色调酒与柑橘装饰', ingredients: [['黑麦威士忌', '45 ml'], ['粉红西柚糖浆', '20 ml'], ['干味美思', '15 ml'], ['盐水', '2 滴'], ['迷迭香', '1 枝']], steps: [['冰镇酒杯', '在 Nick & Nora 杯中装入冰水，预冷 1 分钟。', '01:00'], ['倒入基酒', '倒入黑麦、西柚糖浆、干味美思与盐水。', ''], ['加冰搅拌', '加入满杯冰块，搅拌至酒杯外侧起雾。', '00:20'], ['滤入并挤香', '滤入预冷酒杯，在杯面挤西柚皮，放上迷迭香。', '']] },
    lime: { name: '青柠暮色', subtitle: '白朗姆 · 青柠 · 蜂蜜', style: '清爽感', image: 'assets/lime-dusk.jpg', alt: '带青柠装饰的浅色鸡尾酒', ingredients: [['白朗姆', '40 ml'], ['青柠汁', '25 ml'], ['蜂蜜糖浆', '15 ml'], ['苏打水', '60 ml'], ['青柠角', '1 块']], steps: [['准备高球杯', '加入冰块至八分满，冰杯 30 秒。', '00:30'], ['加入基酒', '倒入白朗姆、青柠汁与蜂蜜糖浆。', ''], ['轻轻搅拌', '搅拌 8 秒，让蜂蜜糖浆充分融合。', '00:08'], ['补苏打水', '沿杯壁补入苏打水，放上青柠角。', '']] },
    party: { name: '同桌派对', subtitle: '伏特加 · 红茶 · 热带果汁', style: '分享装', image: 'assets/party-pour.jpg', alt: '三杯不同色泽的调酒', ingredients: [['伏特加', '90 ml'], ['冷泡红茶', '120 ml'], ['菠萝汁', '60 ml'], ['柠檬汁', '25 ml'], ['碎冰', '适量']], steps: [['准备三只杯子', '每杯加入半杯碎冰，提前冷却。', '01:00'], ['调制基底', '在壶中混合伏特加、冷泡红茶、菠萝汁与柠檬汁。', ''], ['快速摇匀', '加冰后快速摇 10 秒，保留清爽口感。', '00:10'], ['分杯完成', '平均倒入三杯，按口味加薄荷或水果。', '']] },
    berry: { name: '莓果晚风', subtitle: '金酒 · 黑莓 · 薄荷', style: '果香感', image: 'assets/rainy-neon-hero.jpg', alt: '莓果与薄荷装饰的红色调酒', ingredients: [['伦敦干金酒', '45 ml'], ['黑莓糖浆', '20 ml'], ['柠檬汁', '20 ml'], ['薄荷叶', '6 片'], ['碎冰', '适量']], steps: [['拍醒薄荷', '轻拍薄荷叶，让香气释放但不发苦。', ''], ['加入液体', '加入金酒、黑莓糖浆与柠檬汁。', ''], ['加碎冰摇匀', '摇 12 秒，杯体冰凉即可。', '00:12'], ['倒入岩石杯', '连同碎冰倒入杯中，用黑莓和薄荷点缀。', '']] },
    sakura: { name: '晚樱之吻', subtitle: '伏特加 · 接骨木 · 樱桃', style: '花香感', image: 'assets/rainy-neon-hero.jpg', alt: '樱桃与花香风味的粉色调酒', ingredients: [['伏特加', '40 ml'], ['接骨木花利口酒', '20 ml'], ['樱桃汁', '35 ml'], ['柠檬汁', '15 ml'], ['冰块', '适量']], steps: [['冷却鸡尾酒杯', '将酒杯装满冰水，静置 1 分钟后倒掉冰水。', '01:00'], ['倒入风味基底', '向摇壶加入伏特加、接骨木花利口酒、樱桃汁与柠檬汁。', ''], ['加冰摇匀', '加入冰块，快速摇 12 秒，让花香和果味充分融合。', '00:12'], ['滤入并点缀', '滤入冰镇酒杯，用一颗樱桃完成点缀。', '']] },
    sunrise: { name: '海盐日出', subtitle: '龙舌兰 · 西柚 · 海盐', style: '明亮感', image: 'assets/lime-dusk.jpg', alt: '西柚与海盐风味的明亮调酒', ingredients: [['白龙舌兰', '45 ml'], ['西柚汁', '60 ml'], ['青柠汁', '15 ml'], ['龙舌兰糖浆', '10 ml'], ['海盐', '1 撮']], steps: [['准备岩石杯', '在岩石杯中加满冰块，杯口轻沾海盐。', '00:30'], ['加入基酒', '倒入白龙舌兰、鲜榨西柚汁、青柠汁和龙舌兰糖浆。', ''], ['轻搅融合', '用吧匙搅拌 10 秒，保留西柚的清亮口感。', '00:10'], ['完成装饰', '补一片西柚角，直接上桌享用。', '']] },
    midnight: { name: '黑金之夜', subtitle: '波本 · 咖啡 · 可可', style: '醇厚感', image: 'assets/party-pour.jpg', alt: '咖啡与可可风味的深色调酒', ingredients: [['波本威士忌', '45 ml'], ['咖啡利口酒', '25 ml'], ['冷萃咖啡', '30 ml'], ['可可糖浆', '10 ml'], ['橙皮', '1 条']], steps: [['冰镇岩石杯', '将大冰球放入岩石杯，预先冷却杯壁。', '00:30'], ['混合酒液', '向搅拌杯倒入波本、咖啡利口酒、冷萃咖啡与可可糖浆。', ''], ['加冰搅拌', '加入冰块搅拌 20 秒，让酒体更顺滑。', '00:20'], ['滤入并挤香', '滤入装有大冰球的酒杯，挤橙皮香气后放入杯中。', '']] },
    mango: { name: '热带偏航', subtitle: '深色朗姆 · 芒果 · 香草', style: '热带感', image: 'assets/lime-dusk.jpg', alt: '芒果与香草风味的热带调酒', ingredients: [['深色朗姆', '50 ml'], ['芒果泥', '45 ml'], ['椰奶', '30 ml'], ['香草糖浆', '10 ml'], ['碎冰', '适量']], steps: [['准备飓风杯', '将飓风杯装入碎冰，提前冰镇 30 秒。', '00:30'], ['加入热带风味', '向摇壶倒入深色朗姆、芒果泥、椰奶与香草糖浆。', ''], ['加冰摇匀', '加入碎冰后摇 15 秒，摇壶外壁冰凉即可。', '00:15'], ['倒入并装饰', '连同碎冰倒入杯中，以芒果片或薄荷叶装饰。', '']] }
  };

  const drinks = { ...coreDrinks, ...(window.marketDrinks || {}) };
  const drinkOrder = ['rainy', 'lime', 'party', 'berry', 'sakura', 'sunrise', 'midnight', 'mango', 'oldFashioned', 'manhattan', 'whiskeySour', 'martini', 'negroni', 'tomCollins', 'mojito', 'daiquiri', 'cubaLibre', 'pinaColada', 'maiTai', 'margarita', 'paloma', 'moscowMule', 'bloodyMary', 'cosmopolitan', 'espressoMartini', 'sidecar', 'mimosa', 'sangria', 'shandy', 'baijiuLime', 'sakeHighball', 'plumSoda', 'ciderSpritz', 'huangjiuGinger'].filter((key) => drinks[key]);
  const sizes = [{ label: '单杯', factor: 1 }, { label: '双杯', factor: 2 }, { label: '分享装', factor: 3 }];
  const ingredientGroups = [
    { title: '果汁', items: ['柠檬汁', '青柠汁', '橙汁', '蔓越莓汁', '菠萝汁', '西柚汁', '番茄汁', '苹果汁', '百香果汁', '石榴汁', '芒果汁', '草莓汁', '树莓汁', '蓝莓汁', '蜜桃汁', '西瓜汁', '猕猴桃汁', '椰子水'] },
    { title: '鲜果与辅料', items: ['柠檬', '青柠', '橙子', '草莓', '树莓', '蓝莓', '菠萝', '芒果', '薄荷', '迷迭香', '椰奶', '糖浆'] },
    { title: '基酒与饮料', items: ['伏特加', '金酒', '白朗姆', '深色朗姆', '龙舌兰', '威士忌', '白兰地', '白酒', '清酒', '梅酒', '黄酒', '苏打水', '可乐', '汤力水', '姜汁啤酒', '起泡酒', '冷萃咖啡'] }
  ];
  const scenePresets = {
    convenience: ['伏特加', '金酒', '苏打水', '可乐'],
    home: ['青柠汁', '柠檬汁', '薄荷', '糖浆']
  };

  const shaker = document.querySelector('.shaker-button');
  const tickets = [...document.querySelectorAll('.ticket')];
  const stage = document.querySelector('.home-stage');
  const status = document.querySelector('.status-message');
  const taskSurface = document.querySelector('.task-surface');
  const taskKicker = document.querySelector('.task-kicker');
  const taskLevel = document.querySelector('.task-level');
  const taskPath = document.querySelector('.task-path');
  const layerBands = [...document.querySelectorAll('[data-layer-band]')];
  const taskTitle = document.querySelector('.task-copy h2');
  const taskDescription = document.querySelector('.task-copy p:last-child');
  const taskContent = document.querySelector('.task-content');
  const taskPrimary = document.querySelector('.task-primary');
  const taskSecondary = document.querySelector('.task-secondary');
  const taskFooter = document.querySelector('.task-footer');
  const backButton = document.querySelector('.back-button');
  const backLabel = backButton.querySelector('span');
  const soundButton = document.querySelector('[data-sound-toggle]');
  const appFrame = document.querySelector('.app-frame');
  const toast = document.querySelector('.toast');
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selectedIngredients = new Set();
  const favoriteDrinks = new Set();

  let currentMode = 'home';
  let recipeReturnMode = 'library';
  let activeDrink = 'rainy';
  let activeSize = 0;
  let recipeStep = -1;
  let lastDrawnDrink = '';
  let ingredientQuery = '';
  let libraryQuery = '';
  let taskSwapTimer = 0;
  let taskCloseTimer = 0;
  let toastTimer = 0;
  let soundEnabled = true;
  let audioContext = null;
  let audioMaster = null;
  let noiseBuffer = null;
  let soundPulseTimer = 0;
  let lastSoundAt = 0;

  function escapeHTML(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function scaledAmount(amount, factor) {
    const match = String(amount).match(/^(\d+) ml$/);
    return match ? `${Number(match[1]) * factor} ml` : amount;
  }

  function loadPreferences() {
    try {
      soundEnabled = localStorage.getItem('cocktail-lab-sound') !== 'off';
      const storedFavorites = JSON.parse(localStorage.getItem('cocktail-lab-favorites-v2') || 'null');
      const initialFavorites = Array.isArray(storedFavorites) ? storedFavorites : ['rainy'];
      initialFavorites.filter((key) => drinks[key]).forEach((key) => favoriteDrinks.add(key));
    } catch (error) {
      soundEnabled = true;
      favoriteDrinks.add('rainy');
    }
  }

  function persistFavorites() {
    try { localStorage.setItem('cocktail-lab-favorites-v2', JSON.stringify([...favoriteDrinks])); } catch (error) {}
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  }

  function swapTaskView(update, { preserveScroll = false, direction = 'forward' } = {}) {
    if (reduceMotionQuery.matches || !taskSurface.classList.contains('is-visible')) {
      update();
      if (!preserveScroll) taskSurface.scrollTop = 0;
      return;
    }
    const previousScroll = taskSurface.scrollTop;
    window.clearTimeout(taskSwapTimer);
    taskSurface.dataset.motion = direction;
    taskSurface.classList.add('is-swapping');
    taskSwapTimer = window.setTimeout(() => {
      update();
      taskSurface.scrollTop = preserveScroll ? previousScroll : 0;
      requestAnimationFrame(() => taskSurface.classList.remove('is-swapping'));
    }, 140);
  }

  function setTaskView({ kicker, title, description, content, path = ['摇杯', '任务'], view = 'task', primaryText = '', primaryAction = null, primaryDisabled = false, secondaryText = '', secondaryAction = null, backText = '回到摇杯', afterRender = null }) {
    const safePath = path.length > 1 ? path : ['摇杯', ...path];
    const level = Math.min(4, Math.max(2, safePath.length));
    taskSurface.dataset.level = String(level);
    taskSurface.dataset.view = view;
    taskKicker.textContent = kicker;
    taskLevel.textContent = `L${level}`;
    taskTitle.textContent = title;
    taskDescription.textContent = description;
    taskDescription.style.color = '';
    taskContent.innerHTML = content;
    taskPath.innerHTML = safePath.map((item, index) => `<span ${index === safePath.length - 1 ? 'aria-current="page"' : ''}>${escapeHTML(item)}</span>`).join('<i aria-hidden="true"></i>');
    layerBands.forEach((band, index) => {
      const label = safePath[index];
      band.hidden = !label || index >= safePath.length - 1;
      if (label) {
        band.querySelector('span').textContent = String(index + 1).padStart(2, '0');
        band.querySelector('strong').textContent = label;
      }
    });
    backLabel.textContent = backText.replace(/^(返回|回到)/, '');
    backButton.setAttribute('aria-label', backText);

    taskPrimary.hidden = !primaryText;
    taskPrimary.disabled = Boolean(primaryDisabled);
    taskPrimary.textContent = primaryText;
    taskPrimary.onclick = primaryAction;

    taskSecondary.hidden = !secondaryText;
    taskSecondary.textContent = secondaryText;
    taskSecondary.onclick = secondaryAction;
    taskFooter.hidden = !primaryText && !secondaryText;

    if (afterRender) afterRender();
  }

  function setTaskVisible(visible) {
    taskSurface.classList.remove('is-swapping');
    window.clearTimeout(taskSwapTimer);
    window.clearTimeout(taskCloseTimer);
    if (visible) {
      window.scrollTo(0, 0);
      taskSurface.scrollTop = 0;
      document.body.classList.add('is-task-open');
      taskSurface.hidden = false;
      stage.inert = true;
      stage.setAttribute('aria-hidden', 'true');
      requestAnimationFrame(() => {
        taskSurface.classList.add('is-visible');
        appFrame.classList.add('is-task-open');
        window.setTimeout(() => backButton.focus({ preventScroll: true }), reduceMotionQuery.matches ? 0 : 260);
      });
      return;
    }
    appFrame.classList.remove('is-task-open');
    taskSurface.classList.remove('is-visible');
    document.body.classList.remove('is-task-open');
    stage.inert = false;
    stage.removeAttribute('aria-hidden');
    if (reduceMotionQuery.matches) taskSurface.hidden = true;
    else taskCloseTimer = window.setTimeout(() => { taskSurface.hidden = true; }, 420);
  }

  function setSelectedTicket(mode) {
    tickets.forEach((ticket) => ticket.classList.toggle('is-selected', ticket.dataset.mode === mode));
  }

  function collapseShaker() {
    stage.classList.remove('is-open');
    shaker.classList.remove('is-open');
    shaker.setAttribute('aria-expanded', 'false');
    tickets.forEach((ticket) => ticket.classList.remove('is-selected'));
    status.textContent = '点击摇杯，打开今晚的调酒入口';
    status.classList.remove('is-active');
  }

  function resetHome() {
    currentMode = 'home';
    setTaskVisible(false);
    collapseShaker();
    window.setTimeout(() => shaker.focus({ preventScroll: true }), reduceMotionQuery.matches ? 0 : 420);
  }

  function openMode(mode) {
    currentMode = mode;
    setSelectedTicket(mode);
    setTaskVisible(true);
    if (mode === 'random') showRandom();
    else if (mode === 'materials') showMaterials();
    else if (mode === 'library') { libraryQuery = ''; showLibrary('library'); }
    else { libraryQuery = ''; showLibrary('saved'); }
  }

  function recipeTicketMarkup(key, label, stamp) {
    const drink = drinks[key];
    return `<article class="recipe-ticket"><small>${escapeHTML(label)}</small><h3>${escapeHTML(drink.name)}</h3><p>${escapeHTML(drink.subtitle)}</p><span class="ticket-stamp">${escapeHTML(stamp)}</span></article>`;
  }

  function drawRandomDrink() {
    const candidates = drinkOrder.filter((key) => key !== lastDrawnDrink);
    activeDrink = candidates[Math.floor(Math.random() * candidates.length)] || drinkOrder[0];
    lastDrawnDrink = activeDrink;
    playIceClinkSound();
    showRandomResult();
  }

  function showRandom(direction = 'forward') {
    currentMode = 'random';
    swapTaskView(() => setTaskView({
      kicker: 'RANDOM / 34 RECIPES',
      title: '把今晚交给一点灵感',
      description: '每次从完整酒单抽取，连续两次不会出现同一杯。',
      path: ['摇杯', '随机抽取'],
      content: '<div class="empty-ticket"><div><strong>摇匀今晚的选择</strong><span>无需先懂酒名，抽到后可以直接查看配方。</span></div></div><div class="next-layer-preview"><span>NEXT / 抽取结果</span><strong>下一层会显示酒名、风味与配方入口</strong><em>不会把你送回页面顶部</em></div>',
      primaryText: '随机抽一杯',
      primaryAction: drawRandomDrink
    }), { direction });
  }

  function showRandomResult(direction = 'forward') {
    currentMode = 'random-result';
    const drink = drinks[activeDrink];
    swapTaskView(() => setTaskView({
      kicker: 'RANDOM / TONIGHT PICK',
      title: `抽到：${drink.name}`,
      description: `${drink.style}，${drink.subtitle}。`,
      path: ['摇杯', '随机抽取', '抽取结果'],
      content: `${recipeTicketMarkup(activeDrink, 'TONIGHT\'S PICK', 'OPEN RECIPE')}<div class="next-layer-preview"><span>NEXT / 配方窗口</span><strong>查看原料、杯量与逐步调制</strong><em>配方会在更小的子窗口中打开</em></div>`,
      primaryText: '查看完整配方',
      primaryAction: () => showRecipe(activeDrink, -1, 'random'),
      secondaryText: '再抽一杯',
      secondaryAction: drawRandomDrink,
      backText: '返回随机抽取'
    }), { direction });
  }

  function materialGroupsMarkup() {
    const query = ingredientQuery.trim();
    const groups = ingredientGroups.map((group) => {
      const items = group.items.filter((item) => item.includes(query));
      if (!items.length) return '';
      return `<section class="ingredient-group"><h3>${escapeHTML(group.title)}</h3><div class="ingredient-tray">${items.map((item) => `<button class="ingredient-chip ${selectedIngredients.has(item) ? 'is-selected' : ''}" type="button" data-ingredient="${escapeHTML(item)}" aria-pressed="${selectedIngredients.has(item)}">${escapeHTML(item)}</button>`).join('')}</div></section>`;
    }).join('');
    return groups || '<div class="empty-ticket"><div><strong>没有找到这种材料</strong><span>换个关键词，或清空搜索后继续选择。</span></div></div>';
  }

  function updateMaterialSummary() {
    const count = selectedIngredients.size;
    const summary = taskContent.querySelector('[data-selection-summary]');
    const preview = taskContent.querySelector('[data-next-layer-copy]');
    if (summary) summary.innerHTML = `<span>${count ? [...selectedIngredients].map(escapeHTML).join(' · ') : '还没有选择材料'}</span><strong>${count} / 5</strong>`;
    if (preview) preview.textContent = count ? `已选 ${count} 种材料，下一层将按命中数量排序` : '选择至少 1 种材料后，解锁匹配结果';
    taskPrimary.disabled = count === 0;
    taskPrimary.textContent = count ? `匹配配方（${count}）` : '先选择材料';
  }

  function bindIngredientButtons() {
    taskContent.querySelectorAll('[data-ingredient]').forEach((button) => button.addEventListener('click', () => {
      const ingredient = button.dataset.ingredient;
      const selecting = !selectedIngredients.has(ingredient);
      if (selecting && selectedIngredients.size >= 5) {
        showToast('一次最多选择 5 种原材料。');
        return;
      }
      if (selecting) selectedIngredients.add(ingredient);
      else selectedIngredients.delete(ingredient);
      button.classList.toggle('is-selected', selecting);
      button.setAttribute('aria-pressed', String(selecting));
      updateMaterialSummary();
      if (selecting && (/汁$/.test(ingredient) || ['柠檬', '青柠', '橙子', '草莓', '树莓', '蓝莓', '菠萝', '芒果'].includes(ingredient))) playJuiceSound();
    }));
  }

  function refreshIngredientGroups() {
    const container = taskContent.querySelector('#ingredient-groups');
    if (!container) return;
    container.innerHTML = materialGroupsMarkup();
    bindIngredientButtons();
    updateMaterialSummary();
  }

  function applyPreset(name) {
    selectedIngredients.clear();
    (scenePresets[name] || []).slice(0, 5).forEach((ingredient) => selectedIngredients.add(ingredient));
    refreshIngredientGroups();
    showToast(name === 'home' ? '已选中家用常见材料。' : '已选中便利店常见材料。');
  }

  function showMaterials(direction = 'forward') {
    currentMode = 'materials';
    swapTaskView(() => setTaskView({
      kicker: 'MATERIALS / 0–5',
      title: '手边有什么？',
      description: '最多选择 5 种材料，也可以先套用一个常见场景。',
      path: ['摇杯', '材料匹配'],
      content: `<label class="search-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg><span class="sr-only">搜索原材料</span><input id="ingredient-search" type="search" autocomplete="off" placeholder="搜索原材料" value="${escapeHTML(ingredientQuery)}"></label><div class="preset-row" aria-label="材料快捷场景"><button class="preset-button" type="button" data-preset="convenience">便利店常见</button><button class="preset-button" type="button" data-preset="home">在家小酌</button></div><div class="selection-meta" data-selection-summary></div><div class="next-layer-preview is-compact"><span>NEXT / 匹配结果</span><strong data-next-layer-copy></strong><em>结果会保留这层材料上下文</em></div><div class="ingredient-groups" id="ingredient-groups">${materialGroupsMarkup()}</div>`,
      primaryText: selectedIngredients.size ? `匹配配方（${selectedIngredients.size}）` : '先选择材料',
      primaryAction: showMatches,
      primaryDisabled: selectedIngredients.size === 0,
      afterRender: () => {
        const input = taskContent.querySelector('#ingredient-search');
        input.addEventListener('input', (event) => {
          ingredientQuery = event.target.value;
          refreshIngredientGroups();
        });
        taskContent.querySelectorAll('[data-preset]').forEach((button) => button.addEventListener('click', () => applyPreset(button.dataset.preset)));
        bindIngredientButtons();
        updateMaterialSummary();
      }
    }), { direction });
  }

  function getMatchingDrinks() {
    return drinkOrder.map((key, order) => {
      const recipeText = drinks[key].ingredients.map(([name]) => name).join(' ');
      const score = [...selectedIngredients].filter((ingredient) => recipeText.includes(ingredient)).length;
      return { key, score, order };
    }).filter(({ score }) => score > 0).sort((a, b) => b.score - a.score || a.order - b.order);
  }

  function drinkListItemMarkup(key, index, detail) {
    const drink = drinks[key];
    return `<button class="task-list-item" type="button" data-drink="${escapeHTML(key)}" aria-label="打开${escapeHTML(drink.name)}配方"><span class="task-list-thumb"><img src="${escapeHTML(drink.image)}" alt="${escapeHTML(drink.alt)}"></span><span><small>${String(index + 1).padStart(2, '0')} / ${escapeHTML(drink.style)}</small><strong>${escapeHTML(drink.name)}</strong><span>${escapeHTML(detail || drink.subtitle)}</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>`;
  }

  function showMatches(direction = 'forward') {
    if (!selectedIngredients.size) {
      showToast('先选至少一种材料，再开始匹配。');
      return;
    }
    currentMode = 'matches';
    const matches = getMatchingDrinks();
    swapTaskView(() => setTaskView({
      kicker: `MATCH / ${matches.length} RESULTS`,
      title: matches.length ? '这些配方最接近' : '暂时没有直接匹配',
      description: matches.length ? `已根据 ${selectedIngredients.size} 种材料按命中数量排序。` : '返回材料页换一种材料，通常从基酒或果汁开始更容易命中。',
      path: ['摇杯', '材料匹配', '匹配结果'],
      content: matches.length ? `<div class="task-list">${matches.map(({ key, score }, index) => drinkListItemMarkup(key, index, `命中 ${score} 种材料 · ${drinks[key].subtitle}`)).join('')}</div>` : '<div class="empty-ticket"><div><strong>没有直接命中的配方</strong><span>试着补选基酒、柠檬汁、青柠汁或苏打水。</span></div></div>',
      primaryText: '调整材料',
      primaryAction: () => showMaterials('back'),
      backText: '返回材料',
      afterRender: () => taskContent.querySelectorAll('[data-drink]').forEach((button) => button.addEventListener('click', () => showRecipe(button.dataset.drink, -1, 'matches')))
    }), { direction });
  }

  function filteredLibraryKeys(mode) {
    const base = mode === 'saved' ? drinkOrder.filter((key) => favoriteDrinks.has(key)) : drinkOrder;
    const query = libraryQuery.trim();
    return query ? base.filter((key) => `${drinks[key].name}${drinks[key].subtitle}${drinks[key].style}`.includes(query)) : base;
  }

  function renderLibraryResults(mode) {
    const keys = filteredLibraryKeys(mode);
    const list = taskContent.querySelector('#library-results');
    const count = taskContent.querySelector('#library-count');
    if (!list || !count) return;
    count.textContent = `${keys.length} 款`;
    list.innerHTML = keys.length ? `<div class="task-list">${keys.map((key) => drinkListItemMarkup(key, drinkOrder.indexOf(key))).join('')}</div>` : `<div class="empty-ticket"><div><strong>${mode === 'saved' && !libraryQuery ? '还没有收藏配方' : '没有找到匹配酒款'}</strong><span>${mode === 'saved' && !libraryQuery ? '打开任一配方，点“收藏这杯”后会出现在这里。' : '换个酒名、基酒或风味关键词再试一次。'}</span></div></div>`;
    list.querySelectorAll('[data-drink]').forEach((button) => button.addEventListener('click', () => showRecipe(button.dataset.drink, -1, mode)));
  }

  function showLibrary(mode = 'library', direction = 'forward') {
    currentMode = mode;
    const isSaved = mode === 'saved';
    swapTaskView(() => setTaskView({
      kicker: isSaved ? 'SAVED / YOUR RECIPES' : `LIBRARY / ${drinkOrder.length} RECIPES`,
      title: isSaved ? '我的收藏' : '今晚的酒单',
      description: isSaved ? '喜欢的配方会留在设备里，下次可以直接回来。' : '按酒名、基酒或风味搜索，也可以从头慢慢浏览。',
      path: ['摇杯', isSaved ? '我的收藏' : '浏览酒单'],
      content: `<label class="search-field"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg><span class="sr-only">搜索酒款</span><input id="library-search" type="search" autocomplete="off" placeholder="搜索酒名、基酒或风味" value="${escapeHTML(libraryQuery)}"></label><div class="library-meta"><span>${isSaved ? '设备内收藏' : '完整离线酒单'}</span><strong id="library-count">0 款</strong></div><div class="next-layer-preview is-compact"><span>NEXT / 配方窗口</span><strong>选择一杯后，在更小的窗口查看配方</strong><em>返回时仍停留在当前酒单</em></div><div id="library-results"></div>`,
      primaryText: isSaved && favoriteDrinks.size === 0 ? '去浏览酒单' : '',
      primaryAction: isSaved && favoriteDrinks.size === 0 ? () => showLibrary('library') : null,
      afterRender: () => {
        const input = taskContent.querySelector('#library-search');
        input.addEventListener('input', (event) => {
          libraryQuery = event.target.value;
          renderLibraryResults(mode);
        });
        renderLibraryResults(mode);
      }
    }), { direction });
  }

  function recipeSourceLabel() {
    if (recipeReturnMode === 'random') return '抽取结果';
    if (recipeReturnMode === 'matches') return '匹配结果';
    if (recipeReturnMode === 'saved') return '我的收藏';
    return '酒单';
  }

  function recipePath() {
    if (recipeReturnMode === 'random') return ['摇杯', '随机抽取', '抽取结果', '配方'];
    if (recipeReturnMode === 'matches') return ['摇杯', '材料匹配', '匹配结果', '配方'];
    if (recipeReturnMode === 'saved') return ['摇杯', '我的收藏', '配方'];
    return ['摇杯', '浏览酒单', '配方'];
  }

  function recipeStepPanelMarkup(key, stepIndex) {
    const drink = drinks[key];
    const total = drink.steps.length;
    const done = stepIndex >= total;
    const step = stepIndex >= 0 && stepIndex < total ? drink.steps[stepIndex] : null;
    const progress = Array.from({ length: total }, (_, index) => `<span class="${done || index <= stepIndex ? 'is-active' : ''}"></span>`).join('');
    let label = `READY / ${String(total).padStart(2, '0')} STEPS`;
    let title = '配方已备好';
    let description = `下一层从“${drink.steps[0][0]}”开始，步骤会留在当前小窗口里连续推进。`;
    let preview = `NEXT / ${drink.steps[0][0]}`;
    let actions = `<button class="step-control is-primary" type="button" data-step-target="0">开始第 1 步</button>`;

    if (step) {
      const nextIndex = stepIndex + 1;
      const nextLabel = nextIndex < total ? drink.steps[nextIndex][0] : '完成与上桌';
      label = `STEP ${String(stepIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
      title = step[0];
      description = step[1];
      preview = `NEXT / ${nextLabel}`;
      actions = `<button class="step-control" type="button" data-step-target="${stepIndex - 1}">${stepIndex === 0 ? '配方总览' : '上一步'}</button><button class="step-control is-primary" type="button" data-step-target="${nextIndex}">${nextIndex < total ? `下一步：${escapeHTML(nextLabel)}` : '完成调制'}</button>`;
    }

    if (done) {
      label = `COMPLETE / ${String(total).padStart(2, '0')} STEPS`;
      title = '这一杯完成了';
      description = `${drink.name} 已经可以上桌。配方层仍在上方，收藏与分享不会打断当前路径。`;
      preview = 'NEXT / 收藏、分享或重新开始';
      actions = `<button class="step-control" type="button" data-step-target="${total - 1}">回看最后一步</button><button class="step-control is-primary" type="button" data-step-target="0">重新开始</button>`;
    }

    return `<section class="recipe-step-dock ${done ? 'is-done' : ''}" id="recipe-step-panel" aria-live="polite"><div class="step-dock-head"><span>${escapeHTML(label)}</span>${step && step[2] ? `<time>${escapeHTML(step[2])}</time>` : ''}</div><div class="step-progress" aria-hidden="true">${progress}</div><div class="step-dock-copy"><strong>${escapeHTML(title)}</strong><p>${escapeHTML(description)}</p></div><div class="step-next-preview">${escapeHTML(preview)}</div><div class="step-dock-actions">${actions}</div></section>`;
  }

  function recipeOverviewMarkup(key, stepIndex) {
    const drink = drinks[key];
    const factor = sizes[activeSize].factor;
    const sizeButtons = sizes.map((size, index) => `<button class="size-button ${index === activeSize ? 'is-selected' : ''}" type="button" data-size="${index}" aria-pressed="${index === activeSize}">${escapeHTML(size.label)} · ${size.factor}×</button>`).join('');
    const ingredients = drink.ingredients.map(([name, amount]) => `<div class="ingredient-line"><span>${escapeHTML(name)}</span><strong>${escapeHTML(scaledAmount(amount, factor))}</strong></div>`).join('');
    return `<div class="recipe-workspace"><article class="recipe-hero"><img src="${escapeHTML(drink.image)}" alt="${escapeHTML(drink.alt)}"><div class="recipe-hero-copy"><small>${escapeHTML(drink.style)} / RECIPE</small><h3>${escapeHTML(drink.name)}</h3><p>${escapeHTML(drink.subtitle)}</p></div><button class="recipe-context-return" type="button" id="change-recipe">返回${escapeHTML(recipeSourceLabel())}换一杯</button></article><div class="recipe-overview-scroll"><section class="recipe-measures"><div><span class="section-label">杯量换算</span><div class="size-row">${sizeButtons}</div></div><div><div class="recipe-meta"><span>配方清单</span><strong data-recipe-total>${sizes[activeSize].label} / 约 ${80 * factor} ml</strong></div><div class="ingredient-lines">${ingredients}</div></div><div class="recipe-actions"><button class="recipe-action ${favoriteDrinks.has(key) ? 'is-saved' : ''}" type="button" id="favorite-recipe" aria-pressed="${favoriteDrinks.has(key)}">${favoriteDrinks.has(key) ? '已收藏' : '收藏这杯'}</button><button class="recipe-action" type="button" id="share-recipe">分享配方</button></div></section></div>${recipeStepPanelMarkup(key, stepIndex)}</div>`;
  }

  function returnFromRecipe(direction = 'back') {
    if (recipeReturnMode === 'random') showRandomResult(direction);
    else if (recipeReturnMode === 'matches') showMatches(direction);
    else if (recipeReturnMode === 'saved') showLibrary('saved', direction);
    else showLibrary('library', direction);
  }

  function playStepSound(stepIndex) {
    const step = drinks[activeDrink].steps[stepIndex];
    if (step && /冰|摇|搅/.test(`${step[0]}${step[1]}`)) playIceClinkSound();
  }

  function toggleFavorite() {
    if (favoriteDrinks.has(activeDrink)) favoriteDrinks.delete(activeDrink);
    else favoriteDrinks.add(activeDrink);
    persistFavorites();
    const button = taskContent.querySelector('#favorite-recipe');
    if (button) {
      const saved = favoriteDrinks.has(activeDrink);
      button.classList.toggle('is-saved', saved);
      button.setAttribute('aria-pressed', String(saved));
      button.textContent = saved ? '已收藏' : '收藏这杯';
      showToast(saved ? '已收藏这杯配方。' : '已取消收藏。');
    }
  }

  async function shareRecipe() {
    const drink = drinks[activeDrink];
    const shareData = { title: `今夜调酒 · ${drink.name}`, text: `${drink.name}：${drink.subtitle}` };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (error) { if (error && error.name !== 'AbortError') showToast('暂时无法调用系统分享。'); }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}`);
      showToast('配方名称已复制。');
    } catch (error) {
      showToast(`${drink.name} · ${drink.subtitle}`);
    }
  }

  function bindRecipeStepPanel() {
    const panel = taskContent.querySelector('#recipe-step-panel');
    if (!panel) return;
    panel.querySelectorAll('[data-step-target]').forEach((button) => button.addEventListener('click', () => setRecipeStep(Number(button.dataset.stepTarget))));
  }

  function setRecipeStep(stepIndex) {
    const drink = drinks[activeDrink];
    recipeStep = Math.max(-1, Math.min(stepIndex, drink.steps.length));
    if (recipeStep >= 0 && recipeStep < drink.steps.length) playStepSound(recipeStep);
    const panel = taskContent.querySelector('#recipe-step-panel');
    if (!panel) return;
    const replacePanel = () => {
      const holder = document.createElement('div');
      holder.innerHTML = recipeStepPanelMarkup(activeDrink, recipeStep);
      panel.replaceWith(holder.firstElementChild);
      bindRecipeStepPanel();
      const nextPrimary = taskContent.querySelector('#recipe-step-panel .step-control.is-primary');
      if (nextPrimary) nextPrimary.focus({ preventScroll: true });
    };
    if (reduceMotionQuery.matches) replacePanel();
    else {
      panel.classList.add('is-updating');
      window.setTimeout(replacePanel, 130);
    }
  }

  function updateRecipeMeasures() {
    const drink = drinks[activeDrink];
    const factor = sizes[activeSize].factor;
    taskContent.querySelectorAll('[data-size]').forEach((button) => {
      const selected = Number(button.dataset.size) === activeSize;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    const total = taskContent.querySelector('[data-recipe-total]');
    if (total) total.textContent = `${sizes[activeSize].label} / 约 ${80 * factor} ml`;
    const list = taskContent.querySelector('.ingredient-lines');
    if (list) list.innerHTML = drink.ingredients.map(([name, amount]) => `<div class="ingredient-line"><span>${escapeHTML(name)}</span><strong>${escapeHTML(scaledAmount(amount, factor))}</strong></div>`).join('');
  }

  function showRecipe(key, stepIndex = -1, returnMode = null, direction = 'forward') {
    if (!drinks[key]) key = drinkOrder[0];
    if (currentMode !== 'recipe') recipeReturnMode = returnMode || currentMode || 'library';
    else if (returnMode) recipeReturnMode = returnMode;
    currentMode = 'recipe';
    activeDrink = key;
    recipeStep = stepIndex;
    const drink = drinks[key];
    swapTaskView(() => setTaskView({
      kicker: `RECIPE / ${String(drinkOrder.indexOf(key) + 1).padStart(2, '0')} OF ${String(drinkOrder.length).padStart(2, '0')}`,
      title: '配方与步骤',
      description: `${drink.name} · ${drink.subtitle}`,
      path: recipePath(),
      view: 'recipe',
      content: recipeOverviewMarkup(key, stepIndex),
      backText: `返回${recipeSourceLabel()}`,
      afterRender: () => {
        taskContent.querySelectorAll('[data-size]').forEach((button) => button.addEventListener('click', () => {
          activeSize = Number(button.dataset.size);
          updateRecipeMeasures();
        }));
        taskContent.querySelector('#change-recipe').addEventListener('click', () => returnFromRecipe('back'));
        taskContent.querySelector('#favorite-recipe').addEventListener('click', toggleFavorite);
        taskContent.querySelector('#share-recipe').addEventListener('click', shareRecipe);
        bindRecipeStepPanel();
      }
    }), { direction });
  }

  function getAudioContext() {
    if (!soundEnabled) return null;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioContext) audioContext = new AudioContextClass();
    return audioContext;
  }

  function getAudioOutput(context) {
    if (audioMaster) return audioMaster;
    const compressor = context.createDynamicsCompressor();
    audioMaster = context.createGain();
    audioMaster.gain.value = soundEnabled ? 0.52 : 0.0001;
    compressor.threshold.value = -20;
    compressor.knee.value = 14;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.16;
    audioMaster.connect(compressor).connect(context.destination);
    return audioMaster;
  }

  function runWhenAudioReady(renderSound) {
    const context = getAudioContext();
    if (!context) return;
    const render = () => renderSound(context, getAudioOutput(context));
    if (context.state === 'running') render();
    else context.resume().then(render).catch(() => {});
  }

  function getNoiseBuffer(context) {
    if (noiseBuffer && noiseBuffer.sampleRate === context.sampleRate) return noiseBuffer;
    noiseBuffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.8), context.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) data[index] = Math.random() * 2 - 1;
    return noiseBuffer;
  }

  function pulseSoundButton() {
    if (!soundButton || reduceMotionQuery.matches) return;
    soundButton.classList.add('is-playing');
    window.clearTimeout(soundPulseTimer);
    soundPulseTimer = window.setTimeout(() => soundButton.classList.remove('is-playing'), 380);
  }

  function canPlaySound() {
    const now = performance.now();
    if (now - lastSoundAt < 120) return false;
    lastSoundAt = now;
    return true;
  }

  function playJuiceSound() {
    if (!soundEnabled || !canPlaySound()) return;
    runWhenAudioReady((context, output) => {
      const now = context.currentTime + 0.018;
      const noise = context.createBufferSource();
      const filter = context.createBiquadFilter();
      const gain = context.createGain();
      const body = context.createOscillator();
      const bodyGain = context.createGain();
      noise.buffer = getNoiseBuffer(context);
      filter.type = 'bandpass';
      filter.Q.value = 0.72;
      filter.frequency.setValueAtTime(520, now);
      filter.frequency.exponentialRampToValueAtTime(980, now + 0.12);
      filter.frequency.exponentialRampToValueAtTime(310, now + 0.55);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.13, now + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 0.22);
      gain.gain.exponentialRampToValueAtTime(0.1, now + 0.31);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
      body.type = 'sine';
      body.frequency.setValueAtTime(118, now);
      body.frequency.exponentialRampToValueAtTime(72, now + 0.52);
      bodyGain.gain.setValueAtTime(0.0001, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.055, now + 0.04);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.54);
      noise.connect(filter).connect(gain).connect(output);
      body.connect(bodyGain).connect(output);
      noise.start(now);
      body.start(now);
      noise.stop(now + 0.6);
      body.stop(now + 0.58);
      pulseSoundButton();
    });
  }

  function playIceClinkSound() {
    if (!soundEnabled || !canPlaySound()) return;
    runWhenAudioReady((context, output) => {
      const now = context.currentTime + 0.018;
      [0, 0.055, 0.118].forEach((delay, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = now + delay;
        oscillator.type = index === 1 ? 'triangle' : 'sine';
        oscillator.frequency.value = [1880, 2630, 3370][index] * (0.94 + Math.random() * 0.12);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.075 - index * 0.012, start + 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.13 + index * 0.035);
        oscillator.connect(gain).connect(output);
        oscillator.start(start);
        oscillator.stop(start + 0.19 + index * 0.04);
      });
      pulseSoundButton();
    });
  }

  function updateSoundButton() {
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', soundEnabled ? '关闭调酒音效' : '开启调酒音效');
    soundButton.textContent = soundEnabled ? '声音 开' : '声音 关';
  }

  function setSoundEnabled(enabled, preview = false) {
    soundEnabled = enabled;
    updateSoundButton();
    try { localStorage.setItem('cocktail-lab-sound', enabled ? 'on' : 'off'); } catch (error) {}
    if (audioContext && audioMaster) {
      audioMaster.gain.cancelScheduledValues(audioContext.currentTime);
      audioMaster.gain.setTargetAtTime(enabled ? 0.52 : 0.0001, audioContext.currentTime, 0.012);
    }
    if (enabled && preview) playIceClinkSound();
    showToast(enabled ? '调酒音效已开启。' : '调酒音效已静音。');
  }

  function handleBack() {
    if (currentMode === 'recipe') { returnFromRecipe(); return true; }
    if (currentMode === 'matches') { showMaterials('back'); return true; }
    if (currentMode === 'random-result') { showRandom('back'); return true; }
    if (currentMode !== 'home') { resetHome(); return true; }
    if (stage.classList.contains('is-open')) { collapseShaker(); return true; }
    return false;
  }

  shaker.addEventListener('click', () => {
    const open = shaker.classList.toggle('is-open');
    stage.classList.toggle('is-open', open);
    shaker.setAttribute('aria-expanded', String(open));
    status.textContent = open ? '选择一种今晚的开始方式' : '点击摇杯，打开今晚的调酒入口';
    status.classList.toggle('is-active', open);
  });

  tickets.forEach((ticket) => ticket.addEventListener('click', () => openMode(ticket.dataset.mode)));
  backButton.addEventListener('click', handleBack);
  soundButton.addEventListener('click', () => setSoundEnabled(!soundEnabled, !soundEnabled));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && handleBack()) event.preventDefault();
  });

  window.handleAndroidBack = handleBack;
  loadPreferences();
  updateSoundButton();
})();
