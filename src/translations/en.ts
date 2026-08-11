import es from "./es";

const en: typeof es = {
  metadata: {
    title: "YapLin — Digital payment collection for your business in Peru",
    description:
      "Receive, track, and get real-time notifications for Yape, Plin, and Izipay payments across all your stores. Request a YapLin demo.",
    privacyTitle: "Privacy Policy — YapLin",
    privacyDescription: "How YapLin collects, uses, and protects your business's data.",
  },

  common: {
    comingSoon: "Coming soon",
    selectLanguage: "Select language",
  },

  header: {
    links: [
      { href: "/#beneficios", label: "Benefits" },
      { href: "/#como-funciona", label: "How it works" },
      { href: "/#metodos-de-pago", label: "Payment methods" },
      { href: "/#preguntas", label: "FAQ" },
    ],
    requestDemo: "Request demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    badge: "🇵🇪 Made for Peruvian businesses",
    titleBefore: "Centralize all your ",
    titleHighlight: "digital payments",
    titleAfter: " in one place",
    description:
      "Receive, track, and get real-time notifications for Yape, Plin, and Izipay payments across all your stores — from a single app for you and your team.",
    ctaWhatsapp: "Request a demo on WhatsApp",
    ctaBenefits: "See benefits ↓",
    trustInstant: "Notifications in seconds",
    trustMultiStore: "Multi-store",
    mockupLive: "● Live",
    paymentReceivedBy: (method: string) => `Payment received via ${method}`,
    notifications: [
      { amount: "S/ 45.00", from: "Carlos M.", time: "now" },
      { amount: "S/ 120.00", from: "Downtown Store", time: "1 min ago" },
      { amount: "S/ 89.50", from: "North Branch", time: "3 min ago" },
    ],
  },

  paymentMethods: {
    sectionLabel: "Compatible with the most widely used payment methods in Peru",
    trustItems: [
      "Notifications in seconds",
      "Your business's data protected",
      "Direct support via WhatsApp",
    ],
  },

  problemSolution: {
    title: "Collecting digital payments shouldn't be a headache",
    withoutLabel: "Without YapLin",
    withLabel: "With YapLin",
    problems: [
      "You keep checking your phone to see if you've been paid",
      "Your team doesn't know if a customer has already paid or is still waiting",
      "You waste time balancing the till at the end of the day",
      "You have no visibility into what each store collected separately",
    ],
    solutions: [
      "You get the notification instantly, without checking anything",
      "Your whole team sees the confirmed payment in real time",
      "Your sales reports build themselves",
      "You see the detail for each store from a single dashboard",
    ],
  },

  features: {
    badge: "Benefits",
    title: "Everything you need to never miss a payment",
    description:
      "YapLin centralizes your business's digital payments so you and your team are always in the loop.",
    items: [
      {
        title: "Never miss a payment",
        description:
          "Get instant alerts every time someone pays you via Yape, Plin, or Izipay. No delays, no missed payments.",
      },
      {
        title: "Manage all your stores",
        description:
          "Control payments across all your locations from a single dashboard, no matter how many stores you have.",
      },
      {
        title: "Role-based access control",
        description:
          "Give your team access based on their role — owner, supervisor, or cashier — and decide what each one can see and do.",
      },
      {
        title: "Get alerts wherever you want",
        description:
          "Push notifications or WhatsApp. You decide how and when your team finds out about a payment.",
      },
      {
        title: "Real-time reports",
        description:
          "View your sales for the day, week, or month. Make better decisions with clear data.",
      },
      {
        title: "History always at hand",
        description:
          "Every transaction is logged — search, filter, and review any payment whenever you need to.",
      },
    ],
  },

  howItWorks: {
    badge: "How it works",
    title: "From zero to receiving alerts in three steps",
    description:
      "Your account is activated with hands-on assistance — there's no automatic sign-up, so we make sure every business is set up correctly from day one.",
    steps: [
      {
        number: "1",
        title: "Request access",
        description:
          "Message us on WhatsApp and tell us about your business: how many stores you have and how you collect payments today.",
      },
      {
        number: "2",
        title: "We activate your account",
        description:
          "Our team sets up your business, your stores, and your team members in YapLin.",
      },
      {
        number: "3",
        title: "Start receiving alerts",
        description:
          "From that moment on, every payment via Yape, Plin, or Izipay reaches you in real time, and anyone else you choose.",
      },
    ],
    cta: "Request my access",
  },

  faq: {
    title: "Frequently asked questions",
    description: "Have another question? Message us on WhatsApp, we're happy to help.",
    items: [
      {
        q: "How do I start using YapLin?",
        a: "Message us on WhatsApp and tell us about your business. Our team activates your account, your stores, and your team members for you.",
      },
      {
        q: "Does it work if I have multiple stores?",
        a: "Yes. You can manage all your stores from a single account, with notifications and reports separated by location.",
      },
      {
        q: "Which payment methods does it detect?",
        a: "For now, Yape, Plin, and Izipay — the most widely used digital payment methods among businesses in Peru.",
      },
      {
        q: "Can I give my team access?",
        a: "Yes. With owner, supervisor, and cashier roles, you decide exactly what each person on your team can see and do.",
      },
      {
        q: "Is my data and my customers' data safe?",
        a: "Yes, your business's information is handled privately and securely, and only your authorized team can access it.",
      },
      {
        q: "How much does YapLin cost?",
        a: "It depends on the size of your business and how many stores you manage. Message us on WhatsApp and we'll put together a plan tailored to you.",
      },
    ],
  },

  ctaSection: {
    title: "Ready to centralize your business's payments?",
    description: "Message us on WhatsApp and we'll help you activate your YapLin account in minutes.",
    cta: "Chat on WhatsApp",
  },

  footer: {
    copyright: (year: number) => `YapLin © ${year}. Made for Peruvian businesses.`,
    privacyLink: "Privacy Policy",
    whatsappCta: "Message us on WhatsApp",
  },

  whatsapp: {
    defaultMessage: "Hi, I'd like information about YapLin for my business.",
    floatingButtonAriaLabel: "Message us on WhatsApp",
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 4, 2026",
    sections: [
      {
        heading: "1. Who we are",
        body: [
          "YapLin is a product developed by Qubira to help Peruvian businesses centralize and receive real-time notifications for payments via Yape, Plin, and Izipay. This policy explains what information we collect, what we use it for, and what rights you have over it.",
          "If you have questions about this policy or about your data, write to us at qubirasac@gmail.com or via WhatsApp.",
        ],
      },
      {
        heading: "2. What information we collect",
        body: [
          "**Account data:** name, email address, role (owner, supervisor, or cashier), the store you belong to, and, if you turn it on, a transaction PIN (always stored encrypted, never in plain text) used to confirm sensitive actions like correcting a payment's amount. This data is registered by our team when we activate your business on YapLin — there is no public sign-up form.",
          "**Payment notifications:** the YapLin Android app requests the system's **notification access** permission. With that permission, YapLin listens only to notifications from Yape and Izipay and, for Plin — which has no app of its own —, from whichever bank app you use to pay with Plin (BBVA, Interbank, or Scotiabank), always identified by their application package. From those notifications it extracts the amount, the payer's name, the payment method, and the transaction reference. No other notification on the phone (messages, emails, social media, other unconnected apps, etc.) is read, processed, or stored.",
          "**Minimal technical data:** we use only the information strictly necessary for the app to function (for example, a session token). For sensitive actions or attempts blocked due to insufficient permissions, we also log the date, IP address, and device/browser type they came from, as a security and traceability measure for your account. YapLin does not access your location, contacts, camera, microphone, or device files.",
        ],
      },
      {
        heading: "3. What we use this information for",
        body: [
          "We use the data exclusively to operate the service you contracted: showing your payments in real time, generating reports for your business, managing your team's access, and notifying you about the status of your account (for example, subscription renewals). We also use security logs (such as blocked attempts or sensitive changes) to detect improper activity and protect your account. We do not sell or share your data with third parties for advertising purposes.",
        ],
      },
      {
        heading: "4. Where it's stored and how it's protected",
        body: [
          "Data is stored in a database hosted with providers specialized in cloud infrastructure, with encrypted connections. Passwords are always stored encrypted (never in plain text), and access to each business's information is restricted to users of that same account according to their role.",
        ],
      },
      {
        heading: "5. How long we keep your data",
        body: [
          "We keep your information for as long as your account is active. Payments recorded in YapLin cannot be deleted — not by you, not by your team: they always stay in the history (they can be reassigned to another store or have their amount corrected, and every change is logged) so your business has reliable, traceable accounting.",
          "Team members, on the other hand, can be deactivated instantly from the app, or deleted entirely if they should no longer have access. If your business stops using YapLin and you want your account and associated data deleted, write to us directly — we handle these requests manually and directly.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "Under Law No. 29733 (Peru's Personal Data Protection Law), you can exercise your rights of access, rectification, cancellation, and opposition (ARCO rights) over your personal data at any time by writing to us at qubirasac@gmail.com.",
        ],
      },
      {
        heading: "7. Changes to this policy",
        body: [
          "If we update this policy, we will publish the new version on this same page along with the corresponding update date.",
        ],
      },
    ],
  },
};

export default en;
