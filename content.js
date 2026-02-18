(function () {
  'use strict';

  let detectionCount = 0;
  const detectedPatterns = [];

  const SEVERITY = {
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    CRITICAL: 4
  };

  // ========== COMPREHENSIVE DATASET ==========
  const DATASET = {
    urgency: {
      timeConstraints: ['limited time', 'hurry', 'offer ends', 'today only', 'last chance', 'ending soon', 'deal expires', 'expires soon', 'ends tonight', 'midnight deadline', 'final hours', 'last hours', 'ending midnight', 'ends at midnight', 'time is running out', 'running out of time', 'act now', 'act fast', 'don\'t miss out', 'almost gone', 'going fast', 'won\'t last', 'limited offer', 'temporary offer', 'for a limited time', 'while supplies last', 'while stocks last', 'until supplies run out', 'this week only', 'this month only', 'weekend only', 'flash deal', 'lightning deal', 'quick sale', 'clearance ends', 'sale ends', 'promotion ends', 'offer valid until', 'valid for', 'valid today', 'expires in', 'ends in', 'available for', 'countdown', 'timer', 'ticking', 'hours left', 'minutes left', 'days left', 'time left', 'time remaining', 'offer expires in'],
      scarcity: ['only \\d+ left', 'just \\d+ left', '\\d+ remaining', 'low stock', 'limited stock', 'limited quantity', 'limited availability', 'almost sold out', 'nearly sold out', 'selling fast', 'selling quickly', 'going quickly', 'flying off the shelves', 'in high demand', 'high demand', 'popular item', 'hot item', 'trending item', 'last \\d+ items', 'final \\d+ items', 'only a few left', 'hardly any left', 'stock running low', 'low inventory', 'limited inventory', 'rare opportunity', 'rare find', 'hard to find', 'won\'t last long', 'get it before it\'s gone', 'grab it now', 'reserve yours', 'claim yours', 'secure yours', 'lock in', 'don\'t wait', 'don\'t delay', 'immediate action required'],
      flashSales: ['flash sale', 'flash offer', 'flash deal', 'lightning sale', 'lightning offer', 'lightning deal', 'one-day sale', '24-hour sale', '48-hour sale', 'hourly deal', 'deal of the day', 'daily deal', 'today\'s deal', 'this hour only', 'next hour', 'doorbuster', 'early bird', 'limited-time discount', 'temporary discount', 'special today', 'today\'s special', 'now or never', 'once in a lifetime', 'never again', 'won\'t see this again', 'last time offer'],
      viewerPressure: ['\\d+ people viewing', '\\d+ others looking', '\\d+ active viewers', 'being viewed by \\d+', 'in \\d+ carts', 'in \\d+ baskets', '\\d+ people have this', 'popular right now', 'trending now', 'hot right now', 'in demand now', 'others are buying', '\\d+ sold today', '\\d+ sold this hour', 'recently purchased', 'just sold', 'someone just bought', 'booking fast', 'filling up fast']
    },
    confirmshaming: {
      savingsMoney: ['no thanks, i don\'t want to save', 'no thanks, i hate saving money', 'no, i prefer paying more', 'no, i want to pay full price', 'no, i\'ll pay full price', 'no thanks, i love paying more', 'i don\'t want to save money', 'i prefer wasting money', 'i don\'t want discounts', 'i hate discounts', 'no, i hate deals', 'no thanks, i don\'t like deals', 'i\'d rather pay more', 'no, i want to spend more', 'no thanks, i enjoy overpaying'],
      benefits: ['no, i don\'t want benefits', 'no thanks, i don\'t want perks', 'i don\'t need help', 'i don\'t care about my health', 'no, i don\'t care about quality', 'i prefer lower quality', 'no thanks, i don\'t want the best', 'i don\'t want to improve', 'no, i prefer to struggle', 'i don\'t want to succeed', 'no, i don\'t want protection', 'i prefer being unprotected', 'no thanks, i like being vulnerable', 'i don\'t want security'],
      exclusiveOffers: ['no, i don\'t want exclusive access', 'i don\'t want special offers', 'no thanks, i don\'t want to be special', 'i prefer to miss out', 'no, i want to be left out', 'i don\'t want vip treatment', 'no thanks, i prefer being ordinary', 'i don\'t want premium features', 'no, i like being average', 'i don\'t deserve better'],
      selfDeprecating: ['no, i\'m not smart enough', 'i don\'t deserve this', 'no thanks, i don\'t matter', 'i don\'t care about myself', 'no, i\'m fine with less', 'i don\'t want what\'s best for me', 'no thanks, i\'ll regret this later', 'i prefer missing opportunities', 'no, i like making mistakes', 'i enjoy poor decisions'],
      familyFriends: ['no, i don\'t care about my family', 'i don\'t care about my loved ones', 'no thanks, my family doesn\'t matter', 'i don\'t want to protect my family', 'no, my children don\'t deserve this', 'i don\'t care about their future', 'no thanks, i prefer putting them at risk'],
      urgencyShaming: ['no, i\'ll do it later', 'i prefer to procrastinate', 'no thanks, i\'ll regret it', 'i don\'t act fast', 'i like missing out', 'no, i enjoy being too late', 'i prefer second-guessing myself']
    },
    preselected: {
      marketing: ['newsletter', 'marketing', 'promotional', 'offers', 'promotions', 'special offers', 'deals', 'updates', 'news', 'announcements', 'send me emails', 'email me', 'keep me informed', 'notify me', 'send me updates', 'marketing emails', 'promotional emails', 'marketing communications', 'promotional materials'],
      dataSharing: ['share my data', 'share my information', 'share with partners', 'third party', 'third parties', 'partner companies', 'affiliates', 'affiliated companies', 'trusted partners', 'selected partners', 'share with third parties', 'provide to third parties', 'disclose to third parties', 'sell my data', 'sell my information', 'data sharing', 'information sharing'],
      tracking: ['cookies', 'tracking', 'analytics', 'personalization', 'personalized ads', 'targeted advertising', 'ad personalization', 'behavioral advertising', 'cross-site tracking', 'track my activity', 'monitor my behavior', 'analyze my usage', 'collect my data']
    },
    hiddenCosts: {
      fees: ['service fee', 'processing fee', 'handling fee', 'convenience fee', 'booking fee', 'reservation fee', 'transaction fee', 'payment fee', 'credit card fee', 'administrative fee', 'admin fee', 'platform fee', 'delivery fee', 'shipping fee', 'fulfillment fee', 'packaging fee', 'resort fee', 'facility fee', 'amenity fee', 'cleaning fee', 'maintenance fee', 'service charge', 'surcharge', 'additional charge', 'extra charge', 'hidden charge', 'misc fee', 'miscellaneous fee', 'processing charge', 'handling charge'],
      taxes: ['plus tax', '+ tax', 'excluding tax', 'before tax', 'tax not included', 'taxes apply', 'additional taxes', 'sales tax', 'vat', 'gst', 'duties', 'customs fees', 'import fees', 'taxes and fees']
    },
    sneaking: {
      addOns: ['warranty', 'extended warranty', 'protection plan', 'protection', 'insurance', 'coverage', 'extended coverage', 'care plan', 'service plan', 'maintenance plan', 'replacement plan', 'damage protection', 'theft protection', 'accidental damage', 'screen protection', 'device protection'],
      exclusions: ['add', 'optional', 'upgrade', 'choose', 'select']
    },
    forcedContinuity: {
      autoRenewal: ['automatically renews', 'auto-renew', 'auto renew', 'automatic renewal', 'renews automatically', 'recurring subscription', 'recurring billing', 'continuous subscription', 'ongoing subscription', 'perpetual subscription', 'renews every month', 'renews monthly', 'renews annually', 'renews each year', 'renews yearly', 'subscription continues', 'subscription renews', 'membership renews', 'plan renews'],
      trialConversion: ['trial converts to paid', 'trial becomes paid', 'after trial ends', 'when trial ends', 'trial period ends', 'free trial ends', 'trial expires', 'converts to full price', 'full price after trial', 'paid subscription begins', 'billing begins', 'charges begin', 'payment starts', 'will be charged', 'you will be charged', 'your card will be charged', 'automatic charge', 'auto charge', 'charged automatically', 'billed automatically']
    },
    trickQuestions: {
      doubleNegatives: ['do not send', 'don\'t send', 'do not email', 'don\'t email', 'do not contact', 'don\'t contact', 'do not share', 'don\'t share', 'never send', 'stop sending', 'opt out', 'unsubscribe']
    },
    socialProof: {
      patterns: ['\\d+\\s+people are viewing', '\\d+\\s+people bought', '\\d+\\s+people purchased', '\\d+\\s+people have this in', '\\d+\\s+sold', '\\d+\\s+purchased', '\\d+\\s+orders', 'selling fast', 'selling quickly', 'trending now', 'bestseller', 'best seller', 'most popular', 'popular item', 'fan favorite', 'customer favorite', 'highly rated', 'top rated', 'in high demand', 'hot item']
    },
    obstruction: {
      cancelWords: ['cancel', 'unsubscribe', 'delete account', 'close account', 'remove account', 'deactivate', 'disable account', 'terminate', 'end subscription', 'stop subscription'],
      obstructionPaths: ['contact', 'support', 'mailto:', 'customer service', 'help center']
    }
  };

  /* ========== MAIN SCANNER ========== */
  function scanPage() {
    console.log('[QuickScope] Scanning page for dark patterns...');

    // Clear previous highlights
    document.querySelectorAll('.quickscope-highlight').forEach(el => {
      el.classList.remove('quickscope-highlight', 'severity-low', 'severity-medium', 'severity-high', 'severity-critical');
      const tooltip = el.querySelector('.quickscope-tooltip');
      if (tooltip) tooltip.remove();
    });

    detectionCount = 0;
    detectedPatterns.length = 0;

    // Run all detectors
    detectUrgencyPatterns();
    detectConfirmShaming();
    detectPreselectedOptions();
    detectHiddenCosts();
    detectMisdirection();
    detectSneaking();
    detectForcedContinuity();
    detectTrickQuestions();
    detectDisguisedAds();
    detectSocialProof();
    detectObstruction();

    console.log('[QuickScope] Found ' + detectionCount + ' dark patterns');
    saveDetectionData();
    updateGlobalStats();
  }

  /* ========== DETECTORS ========== */

  function detectUrgencyPatterns() {
    const allPatterns = [
      ...DATASET.urgency.timeConstraints,
      ...DATASET.urgency.scarcity,
      ...DATASET.urgency.flashSales,
      ...DATASET.urgency.viewerPressure
    ];
    
    const regex = new RegExp(allPatterns.join('|'), 'i');

    getAllTextNodes().forEach(node => {
      const text = node.textContent.trim();
      if (regex.test(text)) {
        const el = getHighlightableParent(node);
        if (el) {
          highlightElement(el, 'Urgency', 'Uses time pressure or scarcity to push quick decisions', SEVERITY.MEDIUM);
        }
      }
    });
  }

  function detectConfirmShaming() {
    const allPhrases = [
      ...DATASET.confirmshaming.savingsMoney,
      ...DATASET.confirmshaming.benefits,
      ...DATASET.confirmshaming.exclusiveOffers,
      ...DATASET.confirmshaming.selfDeprecating,
      ...DATASET.confirmshaming.familyFriends,
      ...DATASET.confirmshaming.urgencyShaming
    ];

    const regex = new RegExp(allPhrases.join('|'), 'i');
    const clickable = Array.from(document.querySelectorAll('button, a, input[type="button"], input[type="submit"]'));

    clickable.forEach(el => {
      const text = (el.innerText || el.value || '').trim();
      if (text && regex.test(text)) {
        highlightElement(el, 'Confirmshaming', 'Guilt-tripping language designed to shame you into accepting', SEVERITY.HIGH);
      }
    });
  }

  function detectPreselectedOptions() {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    checkboxes.forEach(box => {
      if (!box.checked || box.disabled || !isElementVisible(box)) return;

      const label = getLabelForElement(box);
      const labelText = (label ? label.textContent : '') || '';
      const lower = labelText.toLowerCase();

      const allKeywords = [
        ...DATASET.preselected.marketing,
        ...DATASET.preselected.dataSharing,
        ...DATASET.preselected.tracking
      ];

      if (allKeywords.some(k => lower.includes(k.toLowerCase()))) {
        highlightElement(box, 'Preselected Option', 'Pre-checked consent for marketing or data sharing', SEVERITY.MEDIUM);
      }
    });
  }

  function detectHiddenCosts() {
    const priceRegex = /(\$|€|£|\d+(\.\d{2})?\s*(aed|usd|eur|gbp)?)/i;
    const allFeeKeywords = [...DATASET.hiddenCosts.fees, ...DATASET.hiddenCosts.taxes];
    
    const allElements = Array.from(document.querySelectorAll('span, div, p, li, small'));

    allElements.forEach(el => {
      const text = (el.innerText || '').toLowerCase();
      if (!priceRegex.test(text)) return;
      if (!allFeeKeywords.some(k => text.includes(k.toLowerCase()))) return;

      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const opacity = parseFloat(style.opacity);

      if (fontSize <= 12 || opacity < 1) {
        highlightElement(el, 'Hidden Cost', 'Additional fees shown in small or low-visibility text', SEVERITY.HIGH);
      }
    });
  }

  function detectMisdirection() {
    const containers = Array.from(document.querySelectorAll('div, form, section, dialog'));

    containers.forEach(container => {
      const buttons = Array.from(container.querySelectorAll('button, a, input[type="submit"], input[type="button"]'));
      if (buttons.length < 2) return;

      const acceptKeywords = ['accept', 'agree', 'allow', 'yes', 'continue', 'enable'];
      const rejectKeywords = ['reject', 'decline', 'no', 'manage', 'settings', 'customize'];

      let acceptButton = null;
      let rejectButton = null;

      buttons.forEach(btn => {
        const text = (btn.innerText || btn.value || '').toLowerCase();
        if (!text) return;

        if (acceptKeywords.some(k => text.includes(k))) acceptButton = btn;
        if (rejectKeywords.some(k => text.includes(k))) rejectButton = btn;
      });

      if (acceptButton && rejectButton) {
        const acceptStyle = window.getComputedStyle(acceptButton);
        const rejectStyle = window.getComputedStyle(rejectButton);

        const acceptSize = parseFloat(acceptStyle.fontSize);
        const rejectSize = parseFloat(rejectStyle.fontSize);
        const acceptWeight = parseInt(acceptStyle.fontWeight, 10) || 400;
        const rejectWeight = parseInt(rejectStyle.fontWeight, 10) || 400;

        if (acceptSize > rejectSize || acceptWeight > rejectWeight) {
          highlightElement(container, 'Misdirection', 'Accept button is more prominent than reject option', SEVERITY.MEDIUM);
        }
      }
    });
  }

  function detectSneaking() {
    const cartSelectors = ['[class*="cart"]', '[id*="cart"]', '[class*="basket"]', '[id*="basket"]'];
    const cartElements = Array.from(document.querySelectorAll(cartSelectors.join(',')));

    cartElements.forEach(cart => {
      const items = Array.from(cart.querySelectorAll('li, div, tr'));
      items.forEach(item => {
        const text = (item.innerText || '').toLowerCase();
        if (!text) return;

        const hasSneakyKeyword = DATASET.sneaking.addOns.some(k => text.includes(k.toLowerCase()));
        const hasExclusion = DATASET.sneaking.exclusions.some(k => text.includes(k.toLowerCase()));

        if (hasSneakyKeyword && !hasExclusion) {
          highlightElement(item, 'Sneaking', 'Extra item quietly added without clear consent', SEVERITY.CRITICAL);
        }
      });
    });
  }

  function detectForcedContinuity() {
    const allKeywords = [
      ...DATASET.forcedContinuity.autoRenewal,
      ...DATASET.forcedContinuity.trialConversion
    ];

    const regex = new RegExp(allKeywords.join('|'), 'i');
    const candidates = Array.from(document.querySelectorAll('p, span, div, li, small'));

    candidates.forEach(el => {
      const text = (el.innerText || '').trim();
      if (!regex.test(text)) return;

      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const opacity = parseFloat(style.opacity);

      if (fontSize <= 12 || opacity < 1) {
        highlightElement(el, 'Forced Continuity', 'Auto-renewal details hidden in fine print', SEVERITY.HIGH);
      }
    });
  }

  function detectTrickQuestions() {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

    checkboxes.forEach(box => {
      const label = getLabelForElement(box);
      const labelText = (label ? label.textContent : '') || '';
      const lower = labelText.toLowerCase();

      // Check for actual confusing patterns (multiple negatives or confusing opt-out language)
      const hasNegation = DATASET.trickQuestions.doubleNegatives.some(w => lower.includes(w));
      
      // Only flag if it's genuinely confusing (checkbox + negative language)
      if (hasNegation) {
        const words = lower.split(/\s+/);
        const negativeCount = words.filter(w => ['not', 'no', 'never', 'don\'t', 'dont'].includes(w)).length;
        
        // Flag only if genuinely confusing (multiple negatives or unchecking to opt-in)
        if (negativeCount >= 2 || (box.checked && lower.includes('opt out'))) {
          highlightElement(label || box, 'Trick Question', 'Confusing wording that may mislead your choice', SEVERITY.MEDIUM);
        }
      }
    });
  }

  function detectDisguisedAds() {
    const adCandidates = Array.from(
      document.querySelectorAll('a[href*="ad"], [class*="sponsored"], [data-ad], [data-sponsored]')
    );

    adCandidates.forEach(el => {
      const text = (el.innerText || '').toLowerCase();
      const hasAdLabel = text.includes('sponsored') || text.includes('ad ') || text.includes('advertisement');

      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);

      if (!hasAdLabel && fontSize >= 14 && isElementVisible(el)) {
        highlightElement(el, 'Disguised Ad', 'Ad content styled to blend with regular content', SEVERITY.LOW);
      }
    });
  }

  function detectSocialProof() {
    const regex = new RegExp(DATASET.socialProof.patterns.join('|'), 'i');

    getAllTextNodes().forEach(node => {
      const text = node.textContent.trim();
      if (!text) return;

      if (regex.test(text)) {
        const el = getHighlightableParent(node);
        if (el) {
          highlightElement(el, 'Social Proof', 'Popularity indicators that may be exaggerated', SEVERITY.LOW);
        }
      }
    });
  }

  function detectObstruction() {
    const links = Array.from(document.querySelectorAll('a'));

    links.forEach(link => {
      const text = (link.innerText || '').toLowerCase();
      const href = (link.getAttribute('href') || '').toLowerCase();

      const hasCancelWord = DATASET.obstruction.cancelWords.some(w => text.includes(w));
      const hasObstruction = DATASET.obstruction.obstructionPaths.some(p => href.includes(p));

      if (hasCancelWord && hasObstruction) {
        highlightElement(link, 'Obstruction', 'Cancellation requires contacting support instead of direct action', SEVERITY.HIGH);
      }
    });
  }

  /* ========== HELPER FUNCTIONS ========== */

  function getAllTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim()) nodes.push(node);
    }
    return nodes;
  }

  function getHighlightableParent(node) {
    let el = node.parentElement;
    while (el && el !== document.body) {
      if (isElementVisible(el)) return el;
      el = el.parentElement;
    }
    return null;
  }

  function isElementVisible(el) {
    if (!el || !(el instanceof Element)) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function getLabelForElement(el) {
    if (!el.id) return el.closest('label');
    const forLabel = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
    return forLabel || el.closest('label');
  }

  function highlightElement(element, patternType, description, severity) {
    if (!element || !(element instanceof Element)) return;

    detectionCount++;
    detectedPatterns.push({
      type: patternType,
      description,
      severity: severity === SEVERITY.CRITICAL ? 'Critical' : severity === SEVERITY.HIGH ? 'High' : severity === SEVERITY.MEDIUM ? 'Medium' : 'Low',
      text: (element.innerText || '').trim().slice(0, 200)
    });

    element.classList.add('quickscope-highlight');
    const severityClass = severity === SEVERITY.CRITICAL ? 'severity-critical' : severity === SEVERITY.HIGH ? 'severity-high' : severity === SEVERITY.MEDIUM ? 'severity-medium' : 'severity-low';
    element.classList.add(severityClass);

    element.dataset.quickscopeType = patternType;
    element.dataset.quickscopeDesc = description;
    element.dataset.quickscopeSeverity = severityClass;

    const tooltip = document.createElement('div');
    tooltip.className = 'quickscope-tooltip';
    tooltip.textContent = `${patternType}: ${description}`;

    const badge = document.createElement('span');
    badge.className = 'quickscope-severity-badge ' + severityClass;
    badge.textContent = severity === SEVERITY.CRITICAL ? 'CRITICAL' : severity === SEVERITY.HIGH ? 'HIGH' : severity === SEVERITY.MEDIUM ? 'MEDIUM' : 'LOW';

    tooltip.prepend(badge);
    element.appendChild(tooltip);
  }

  function saveDetectionData() {
    if (!window.chrome || !chrome.storage || !chrome.storage.local) {
      console.warn('[QuickScope] chrome.storage.local not available');
      return;
    }

    try {
      chrome.storage.local.set({
        count: detectionCount,
        patterns: detectedPatterns,
        url: window.location.href,
        timestamp: Date.now()
      }, () => {
        if (chrome.runtime && chrome.runtime.lastError) {
          console.warn('[QuickScope] Failed to save:', chrome.runtime.lastError.message);
        }
      });
    } catch (e) {
      console.warn('[QuickScope] Error saving data:', e);
    }
  }

  function updateGlobalStats() {
    if (!window.chrome || !chrome.storage || !chrome.storage.local) return;

    chrome.storage.local.get(['globalStats'], data => {
      const stats = data.globalStats || {
        totalDetections: 0,
        byType: {},
        bySeverity: { Low: 0, Medium: 0, High: 0, Critical: 0 },
        byWebsite: {},
        history: []
      };

      stats.totalDetections += detectionCount;

      detectedPatterns.forEach(pattern => {
        stats.byType[pattern.type] = (stats.byType[pattern.type] || 0) + 1;
        stats.bySeverity[pattern.severity] = (stats.bySeverity[pattern.severity] || 0) + 1;
      });

      const domain = new URL(window.location.href).hostname;
      stats.byWebsite[domain] = (stats.byWebsite[domain] || 0) + detectionCount;

      stats.history.push({
        date: new Date().toISOString().split('T')[0],
        count: detectionCount,
        url: window.location.href
      });

      if (stats.history.length > 100) stats.history = stats.history.slice(-100);

      chrome.storage.local.set({ globalStats: stats });
    });
  }

  if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'getStats') {
        sendResponse({ count: detectionCount, patterns: detectedPatterns });
      }
      return true;
    });
  }

  /* ========== BOOTSTRAP ========== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scanPage);
  } else {
    scanPage();
  }

  let scanTimeout;
  const observer = new MutationObserver(() => {
    clearTimeout(scanTimeout);
    scanTimeout = setTimeout(scanPage, 1500);
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();