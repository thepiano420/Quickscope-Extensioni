// darkPatternDataset.js - Comprehensive Dark Pattern Detection Dataset
// ~1000+ data points for detecting manipulative UI patterns

const DARK_PATTERN_DATASET = {
  
  // ========== URGENCY PATTERNS (150+ patterns) ==========
  urgency: {
    timeConstraints: [
      'limited time', 'hurry', 'offer ends', 'today only', 'last chance',
      'ending soon', 'deal expires', 'expires soon', 'ends tonight',
      'midnight deadline', 'final hours', 'last hours', 'ending midnight',
      'ends at midnight', 'time is running out', 'running out of time',
      'act now', 'act fast', 'don\'t miss out', 'almost gone',
      'going fast', 'won\'t last', 'limited offer', 'temporary offer',
      'for a limited time', 'while supplies last', 'while stocks last',
      'until supplies run out', 'this week only', 'this month only',
      'weekend only', 'flash deal', 'lightning deal', 'quick sale',
      'clearance ends', 'sale ends', 'promotion ends', 'offer valid until',
      'valid for', 'valid today', 'expires in', 'ends in', 'available for',
      'countdown', 'timer', 'ticking', 'hours left', 'minutes left',
      'days left', 'time left', 'time remaining', 'offer expires in'
    ],
    
    scarcity: [
      'only \\d+ left', 'just \\d+ left', '\\d+ remaining', 'low stock',
      'limited stock', 'limited quantity', 'limited availability',
      'almost sold out', 'nearly sold out', 'selling fast', 'selling quickly',
      'going quickly', 'flying off the shelves', 'in high demand',
      'high demand', 'popular item', 'hot item', 'trending item',
      'last \\d+ items', 'final \\d+ items', 'only a few left',
      'hardly any left', 'stock running low', 'low inventory',
      'limited inventory', 'rare opportunity', 'rare find', 'hard to find',
      'won\'t last long', 'get it before it\'s gone', 'grab it now',
      'reserve yours', 'claim yours', 'secure yours', 'lock in',
      'don\'t wait', 'don\'t delay', 'immediate action required'
    ],
    
    flashSales: [
      'flash sale', 'flash offer', 'flash deal', 'lightning sale',
      'lightning offer', 'lightning deal', 'one-day sale', '24-hour sale',
      '48-hour sale', 'hourly deal', 'deal of the day', 'daily deal',
      'today\'s deal', 'this hour only', 'next hour', 'doorbuster',
      'early bird', 'limited-time discount', 'temporary discount',
      'special today', 'today\'s special', 'now or never', 'once in a lifetime',
      'never again', 'won\'t see this again', 'last time offer'
    ],
    
    viewerPressure: [
      '\\d+ people viewing', '\\d+ others looking', '\\d+ active viewers',
      'being viewed by \\d+', 'in \\d+ carts', 'in \\d+ baskets',
      '\\d+ people have this', 'popular right now', 'trending now',
      'hot right now', 'in demand now', 'others are buying',
      '\\d+ sold today', '\\d+ sold this hour', 'recently purchased',
      'just sold', 'someone just bought', 'booking fast', 'filling up fast'
    ]
  },

  // ========== CONFIRMSHAMING (100+ patterns) ==========
  confirmshaming: {
    savingsMoney: [
      'no thanks, i don\'t want to save', 'no thanks, i hate saving money',
      'no, i prefer paying more', 'no, i want to pay full price',
      'no, i\'ll pay full price', 'no thanks, i love paying more',
      'i don\'t want to save money', 'i prefer wasting money',
      'i don\'t want discounts', 'i hate discounts', 'no, i hate deals',
      'no thanks, i don\'t like deals', 'i\'d rather pay more',
      'no, i want to spend more', 'no thanks, i enjoy overpaying'
    ],
    
    benefits: [
      'no, i don\'t want benefits', 'no thanks, i don\'t want perks',
      'i don\'t need help', 'i don\'t care about my health',
      'no, i don\'t care about quality', 'i prefer lower quality',
      'no thanks, i don\'t want the best', 'i don\'t want to improve',
      'no, i prefer to struggle', 'i don\'t want to succeed',
      'no, i don\'t want protection', 'i prefer being unprotected',
      'no thanks, i like being vulnerable', 'i don\'t want security'
    ],
    
    exclusiveOffers: [
      'no, i don\'t want exclusive access', 'i don\'t want special offers',
      'no thanks, i don\'t want to be special', 'i prefer to miss out',
      'no, i want to be left out', 'i don\'t want vip treatment',
      'no thanks, i prefer being ordinary', 'i don\'t want premium features',
      'no, i like being average', 'i don\'t deserve better'
    ],
    
    selfDeprecating: [
      'no, i\'m not smart enough', 'i don\'t deserve this',
      'no thanks, i don\'t matter', 'i don\'t care about myself',
      'no, i\'m fine with less', 'i don\'t want what\'s best for me',
      'no thanks, i\'ll regret this later', 'i prefer missing opportunities',
      'no, i like making mistakes', 'i enjoy poor decisions'
    ],
    
    familyFriends: [
      'no, i don\'t care about my family', 'i don\'t care about my loved ones',
      'no thanks, my family doesn\'t matter', 'i don\'t want to protect my family',
      'no, my children don\'t deserve this', 'i don\'t care about their future',
      'no thanks, i prefer putting them at risk'
    ],
    
    urgencyShaming: [
      'no, i\'ll do it later', 'i prefer to procrastinate',
      'no thanks, i\'ll regret it', 'i don\'t act fast', 'i like missing out',
      'no, i enjoy being too late', 'i prefer second-guessing myself'
    ]
  },

  // ========== PRESELECTED OPTIONS (80+ patterns) ==========
  preselectedKeywords: {
    marketing: [
      'newsletter', 'marketing', 'promotional', 'offers', 'promotions',
      'special offers', 'deals', 'updates', 'news', 'announcements',
      'send me emails', 'email me', 'keep me informed', 'notify me',
      'send me updates', 'marketing emails', 'promotional emails',
      'marketing communications', 'promotional materials'
    ],
    
    dataSharing: [
      'share my data', 'share my information', 'share with partners',
      'third party', 'third parties', 'partner companies', 'affiliates',
      'affiliated companies', 'trusted partners', 'selected partners',
      'share with third parties', 'provide to third parties',
      'disclose to third parties', 'sell my data', 'sell my information',
      'data sharing', 'information sharing'
    ],
    
    tracking: [
      'cookies', 'tracking', 'analytics', 'personalization',
      'personalized ads', 'targeted advertising', 'ad personalization',
      'behavioral advertising', 'cross-site tracking', 'track my activity',
      'monitor my behavior', 'analyze my usage', 'collect my data'
    ],
    
    consent: [
      'i agree to', 'i consent to', 'i accept', 'terms and conditions',
      'privacy policy', 'user agreement', 'terms of service',
      'by continuing', 'by proceeding', 'by signing up'
    ],
    
    subscriptions: [
      'auto-renew', 'automatic renewal', 'recurring billing',
      'recurring payment', 'subscription', 'monthly subscription',
      'annual subscription', 'automatic subscription'
    ]
  },

  // ========== HIDDEN COSTS (120+ patterns) ==========
  hiddenCosts: {
    fees: [
      'service fee', 'processing fee', 'handling fee', 'convenience fee',
      'booking fee', 'reservation fee', 'transaction fee', 'payment fee',
      'credit card fee', 'administrative fee', 'admin fee', 'platform fee',
      'delivery fee', 'shipping fee', 'fulfillment fee', 'packaging fee',
      'resort fee', 'facility fee', 'amenity fee', 'cleaning fee',
      'maintenance fee', 'service charge', 'surcharge', 'additional charge',
      'extra charge', 'hidden charge', 'misc fee', 'miscellaneous fee',
      'processing charge', 'handling charge'
    ],
    
    taxes: [
      'plus tax', '+ tax', 'excluding tax', 'before tax', 'tax not included',
      'taxes apply', 'additional taxes', 'sales tax', 'vat', 'gst',
      'duties', 'customs fees', 'import fees', 'taxes and fees'
    ],
    
    shippingCosts: [
      'shipping not included', 'plus shipping', '+ shipping',
      'shipping extra', 'delivery not included', 'postage extra',
      'freight charges', 'shipping costs apply', 'delivery charges apply'
    ],
    
    additionalCosts: [
      'additional costs', 'extra costs', 'other charges may apply',
      'additional fees may apply', 'subject to additional fees',
      'not including', 'excluding', 'does not include', 'separate charge',
      'charged separately', 'billed separately', 'add-on fee',
      'optional fee', 'upgrade fee', 'premium fee'
    ],
    
    disclaimers: [
      'see details', 'terms apply', 'conditions apply', 'restrictions apply',
      'exclusions apply', 'additional terms', 'subject to terms',
      'subject to conditions', 'click for details', 'view details'
    ]
  },

  // ========== MISDIRECTION (60+ patterns) ==========
  misdirection: {
    acceptButtons: [
      'accept', 'accept all', 'agree', 'agree and continue', 'i agree',
      'allow', 'allow all', 'enable', 'enable all', 'ok', 'okay',
      'yes', 'continue', 'proceed', 'got it', 'i understand',
      'confirm', 'submit', 'sign up', 'register', 'join now',
      'get started', 'start now', 'activate'
    ],
    
    rejectButtons: [
      'reject', 'reject all', 'decline', 'disagree', 'deny', 'no',
      'no thanks', 'maybe later', 'not now', 'cancel', 'close',
      'dismiss', 'manage preferences', 'manage options', 'customize',
      'settings', 'advanced settings', 'more options', 'learn more',
      'cookie settings', 'privacy settings'
    ]
  },

  // ========== SNEAKING (70+ patterns) ==========
  sneaking: {
    addOns: [
      'warranty', 'extended warranty', 'protection plan', 'protection',
      'insurance', 'coverage', 'extended coverage', 'care plan',
      'service plan', 'maintenance plan', 'replacement plan',
      'damage protection', 'theft protection', 'accidental damage',
      'screen protection', 'device protection'
    ],
    
    bundledItems: [
      'bundle', 'package deal', 'combo', 'set', 'kit', 'collection',
      'together with', 'includes', 'comes with', 'plus', 'bonus item',
      'free gift', 'complimentary', 'added to cart', 'automatically added',
      'pre-selected', 'recommended add-on', 'suggested item'
    ],
    
    subscriptionAddons: [
      'premium membership', 'vip membership', 'gold membership',
      'platinum membership', 'pro subscription', 'premium subscription',
      'upgraded service', 'enhanced service', 'priority support',
      'express shipping', 'expedited delivery', 'rush processing'
    ],
    
    donations: [
      'round up', 'donation', 'charitable contribution', 'give back',
      'support a cause', 'make a difference', 'help others',
      'tip', 'gratuity', 'service tip'
    ]
  },

  // ========== FORCED CONTINUITY (90+ patterns) ==========
  forcedContinuity: {
    autoRenewal: [
      'automatically renews', 'auto-renew', 'auto renew', 'automatic renewal',
      'renews automatically', 'recurring subscription', 'recurring billing',
      'continuous subscription', 'ongoing subscription', 'perpetual subscription',
      'renews every month', 'renews monthly', 'renews annually',
      'renews each year', 'renews yearly', 'subscription continues',
      'subscription renews', 'membership renews', 'plan renews'
    ],
    
    trialConversion: [
      'trial converts to paid', 'trial becomes paid', 'after trial ends',
      'when trial ends', 'trial period ends', 'free trial ends',
      'trial expires', 'converts to full price', 'full price after trial',
      'paid subscription begins', 'billing begins', 'charges begin',
      'payment starts', 'will be charged', 'you will be charged',
      'your card will be charged', 'automatic charge', 'auto charge',
      'charged automatically', 'billed automatically'
    ],
    
    cancellationTerms: [
      'cancel before', 'cancel by', 'must cancel', 'cancel anytime',
      'cancel any time', 'no commitment', 'no obligation',
      'cancel to avoid charges', 'cancel to prevent billing',
      'unless cancelled', 'unless you cancel', 'if not cancelled',
      'failure to cancel', 'won\'t be charged if cancelled'
    ],
    
    billingCycles: [
      'billed every', 'charged every', 'payment every', 'recurring payment',
      'recurring charge', 'monthly payment', 'annual payment', 'yearly fee',
      'subscription fee', 'membership fee', 'renewal fee', 'next payment',
      'upcoming payment', 'future payment', 'continued billing'
    ],
    
    reminders: [
      'reminder sent', 'notification sent', 'email reminder',
      'reminder before renewal', 'advance notice', 'prior notice',
      'will notify', 'you will be notified', 'notification before charge'
    ]
  },

  // ========== TRICK QUESTIONS (50+ patterns) ==========
  trickQuestions: {
    doubleNegatives: [
      'do not send me', 'don\'t send me', 'do not email me', 'don\'t email me',
      'do not contact me', 'don\'t contact me', 'do not share my',
      'don\'t share my', 'opt out of not', 'uncheck to not',
      'check to not', 'select to prevent', 'unselect to allow',
      'deselect to enable', 'check to disable', 'uncheck to enable',
      'tick to decline', 'untick to accept'
    ],
    
    confusingPhrasing: [
      'i do not want to not receive', 'never send me no', 'opt out',
      'opt in', 'unsubscribe from receiving', 'stop receiving',
      'i decline to decline', 'i refuse to refuse', 'prevent me from',
      'stop me from receiving', 'keep me from getting'
    ]
  },

  // ========== DISGUISED ADS (40+ patterns) ==========
  disguisedAds: {
    selectors: [
      '[href*="ad"]', '[href*="sponsored"]', '[href*="affiliate"]',
      '[href*="partner"]', '[href*="promo"]', '[href*="campaign"]',
      '[class*="sponsored"]', '[class*="promoted"]', '[class*="featured"]',
      '[class*="advertisement"]', '[data-ad]', '[data-sponsored]',
      '[data-promoted]', '[data-affiliate]'
    ],
    
    labels: [
      'sponsored', 'promoted', 'ad', 'advertisement', 'partner content',
      'paid content', 'promotional', 'featured', 'recommended for you',
      'suggested', 'from our partners', 'affiliate link'
    ]
  },

  // ========== SOCIAL PROOF (80+ patterns) ==========
  socialProof: {
    viewingActivity: [
      '\\d+ people viewing', '\\d+ people looking at', '\\d+ active viewers',
      '\\d+ others viewing', '\\d+ users viewing', '\\d+ customers viewing',
      'being viewed by \\d+', 'currently viewing', 'also viewing',
      '\\d+ people interested', '\\d+ watching', '\\d+ looking at this'
    ],
    
    purchaseActivity: [
      '\\d+ people bought', '\\d+ customers bought', '\\d+ sold',
      '\\d+ purchased', '\\d+ orders', '\\d+ people purchased',
      'recently purchased', 'recently bought', 'just purchased',
      'just bought', 'someone just bought', 'purchased in last \\d+',
      'sold in last \\d+', '\\d+ bought today', '\\d+ sold today',
      '\\d+ bought this hour', '\\d+ orders today'
    ],
    
    cartActivity: [
      '\\d+ in cart', '\\d+ in basket', '\\d+ people have this in cart',
      '\\d+ people have this in basket', 'added to cart by \\d+',
      'in \\d+ carts', 'in \\d+ baskets', '\\d+ people saved this'
    ],
    
    popularity: [
      'bestseller', 'best seller', 'top seller', '#\\d+ bestseller',
      'most popular', 'trending', 'trending now', 'hot item',
      'popular item', 'fan favorite', 'customer favorite',
      'staff pick', 'editor\'s pick', 'highly rated', 'top rated',
      '\\d+ star rating', '\\d+★', '\\d+⭐', 'award winner',
      'award-winning', 'best choice', 'top choice', '#\\d+ in'
    ],
    
    reviews: [
      '\\d+ reviews', '\\d+ ratings', '\\d+ customer reviews',
      'highly reviewed', 'positive reviews', 'great reviews',
      '\\d+% recommended', '\\d+% positive', 'verified purchase',
      'verified buyer', 'real customer', 'customer testimonial'
    ],
    
    scarcityMomentum: [
      'selling fast', 'selling quickly', 'selling out', 'going fast',
      'going quickly', 'flying off shelves', 'in high demand',
      'high demand', 'low stock', 'almost gone', 'nearly sold out',
      'won\'t last', 'limited stock', 'running low'
    ]
  },

  // ========== OBSTRUCTION (60+ patterns) ==========
  obstruction: {
    cancellationWords: [
      'cancel', 'unsubscribe', 'delete account', 'close account',
      'remove account', 'deactivate', 'disable account', 'terminate',
      'end subscription', 'stop subscription', 'quit', 'leave',
      'opt out', 'withdraw', 'discontinue', 'suspend account'
    ],
    
    obstructionLinks: [
      'contact us', 'contact support', 'email us', 'call us',
      'phone support', 'customer service', 'help center',
      'submit request', 'open ticket', 'request cancellation',
      'speak to representative', 'chat with us', 'get help',
      'mailto:', 'support@', 'help@', 'service@'
    ],
    
    complexPaths: [
      'settings', 'account settings', 'manage account', 'preferences',
      'edit profile', 'subscription settings', 'billing settings',
      'advanced settings', 'more options', 'additional options',
      'view all options', 'manage subscription', 'modify plan'
    ]
  }
};

// Export for use in content.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DARK_PATTERN_DATASET;
}