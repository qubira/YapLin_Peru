const es = {
  metadata: {
    title: "YapLin — Cobros digitales para tu negocio en Perú",
    description:
      "Recibe, controla y notifica en tiempo real los pagos por Yape, Plin e Izipay de todas tus tiendas. Solicita una demo de YapLin.",
    privacyTitle: "Política de Privacidad — YapLin",
    privacyDescription: "Cómo YapLin recopila, usa y protege los datos de tu negocio.",
  },

  common: {
    comingSoon: "Próximamente",
    selectLanguage: "Seleccionar idioma",
  },

  header: {
    links: [
      { href: "/#beneficios", label: "Beneficios" },
      { href: "/#como-funciona", label: "Cómo funciona" },
      { href: "/#metodos-de-pago", label: "Métodos de pago" },
      { href: "/#preguntas", label: "Preguntas" },
    ],
    requestDemo: "Solicitar demo",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },

  hero: {
    badge: "🇵🇪 Hecho para negocios peruanos",
    titleBefore: "Centraliza todos tus ",
    titleHighlight: "cobros digitales",
    titleAfter: " en un solo lugar",
    description:
      "Recibe, controla y notifica en tiempo real los pagos por Yape, Plin e Izipay de todas tus tiendas — desde una sola app para ti y tu equipo.",
    ctaWhatsapp: "Solicitar demo por WhatsApp",
    ctaBenefits: "Ver beneficios ↓",
    trustInstant: "Notificaciones en segundos",
    trustMultiStore: "Multi-tienda",
    mockupLive: "● En vivo",
    paymentReceivedBy: (method: string) => `Pago recibido por ${method}`,
    notifications: [
      { amount: "S/ 45.00", from: "Carlos M.", time: "ahora" },
      { amount: "S/ 120.00", from: "Tienda Centro", time: "hace 1 min" },
      { amount: "S/ 89.50", from: "Sucursal Norte", time: "hace 3 min" },
    ],
  },

  paymentMethods: {
    sectionLabel: "Compatible con los métodos de pago más usados en Perú",
    trustItems: [
      "Notificaciones en segundos",
      "Datos de tu negocio protegidos",
      "Soporte directo por WhatsApp",
    ],
  },

  problemSolution: {
    title: "Cobrar digital no debería ser un dolor de cabeza",
    withoutLabel: "Sin YapLin",
    withLabel: "Con YapLin",
    problems: [
      "Revisas el teléfono a cada rato para ver si ya te pagaron",
      "Tu equipo no sabe si un cliente ya pagó o sigue esperando",
      "Pierdes tiempo cuadrando caja al final del día",
      "No tienes control de qué cobró cada tienda por separado",
    ],
    solutions: [
      "Recibes la notificación al instante, sin revisar nada",
      "Todo tu equipo ve el pago confirmado en tiempo real",
      "Tus reportes de ventas se arman solos",
      "Ves el detalle de cada tienda desde un solo panel",
    ],
  },

  features: {
    badge: "Beneficios",
    title: "Todo lo que necesitas para no perder ni un cobro",
    description:
      "YapLin centraliza los pagos digitales de tu negocio para que tú y tu equipo siempre estén al tanto.",
    items: [
      {
        title: "Nunca te pierdas un yapeo",
        description:
          "Recibe alertas instantáneas cada vez que alguien te pague por Yape, Plin o Izipay. Sin delays, sin pérdidas.",
      },
      {
        title: "Gestiona todas tus tiendas",
        description:
          "Controla los cobros de todos tus locales desde un solo panel, sin importar cuántas tiendas tengas.",
      },
      {
        title: "Control de acceso por roles",
        description:
          "Da acceso a tu equipo según su rol — dueño, supervisor o cajero — y decide qué puede ver y hacer cada uno.",
      },
      {
        title: "Recibe alertas donde quieras",
        description:
          "Notificaciones push o por WhatsApp. Tú decides cómo y cuándo se entera tu equipo de un cobro.",
      },
      {
        title: "Reportes en tiempo real",
        description:
          "Visualiza tus ventas del día, semana o mes. Toma mejores decisiones con datos claros.",
      },
      {
        title: "Historial siempre a la mano",
        description:
          "Cada transacción queda registrada — busca, filtra y revisa cualquier cobro cuando lo necesites.",
      },
    ],
  },

  howItWorks: {
    badge: "Cómo funciona",
    title: "De cero a recibir alertas en tres pasos",
    description:
      "Tu cuenta se activa de forma asistida — no hay registro automático, así garantizamos que cada negocio quede configurado correctamente desde el día uno.",
    steps: [
      {
        number: "1",
        title: "Solicita tu acceso",
        description:
          "Escríbenos por WhatsApp y cuéntanos sobre tu negocio: cuántas tiendas tienes y cómo cobras hoy.",
      },
      {
        number: "2",
        title: "Activamos tu cuenta",
        description:
          "Nuestro equipo da de alta tu negocio, tus tiendas y a los miembros de tu equipo en YapLin.",
      },
      {
        number: "3",
        title: "Empieza a recibir alertas",
        description:
          "Desde ese momento, cada cobro por Yape, Plin o Izipay te llega en tiempo real, a ti y a quien tú decidas.",
      },
    ],
    cta: "Solicitar mi acceso",
  },

  faq: {
    title: "Preguntas frecuentes",
    description: "¿Tienes otra duda? Escríbenos por WhatsApp, con gusto te respondemos.",
    items: [
      {
        q: "¿Cómo empiezo a usar YapLin?",
        a: "Escríbenos por WhatsApp y cuéntanos sobre tu negocio. Nuestro equipo activa tu cuenta, tus tiendas y a los miembros de tu equipo por ti.",
      },
      {
        q: "¿Funciona si tengo varias tiendas?",
        a: "Sí. Puedes gestionar todas tus tiendas desde una sola cuenta, con notificaciones y reportes separados por local.",
      },
      {
        q: "¿Qué métodos de pago detecta?",
        a: "Por ahora Yape, Plin e Izipay — los métodos digitales más usados por negocios en Perú.",
      },
      {
        q: "¿Puedo darle acceso a mi equipo?",
        a: "Sí. Con roles de dueño, supervisor y cajero decides exactamente qué puede ver y hacer cada persona de tu equipo.",
      },
      {
        q: "¿Mis datos y los de mis clientes están seguros?",
        a: "Sí, la información de tu negocio se maneja de forma privada y segura, y solo tu equipo autorizado puede acceder a ella.",
      },
      {
        q: "¿Cuánto cuesta YapLin?",
        a: "Depende del tamaño de tu negocio y cuántas tiendas manejas. Escríbenos por WhatsApp y te armamos una propuesta a tu medida.",
      },
    ],
  },

  ctaSection: {
    title: "¿Listo para centralizar los cobros de tu negocio?",
    description:
      "Escríbenos por WhatsApp y te ayudamos a activar tu cuenta de YapLin en minutos.",
    cta: "Conversar por WhatsApp",
  },

  footer: {
    copyright: (year: number) => `YapLin © ${year}. Hecho para negocios peruanos.`,
    privacyLink: "Política de Privacidad",
    whatsappCta: "Escríbenos por WhatsApp",
  },

  whatsapp: {
    defaultMessage: "Hola, quiero información sobre YapLin para mi negocio.",
    floatingButtonAriaLabel: "Escríbenos por WhatsApp",
  },

  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 4 de agosto de 2026",
    sections: [
      {
        heading: "1. Quiénes somos",
        body: [
          "YapLin es un producto desarrollado por Qubira para ayudar a negocios peruanos a centralizar y recibir en tiempo real las notificaciones de pagos por Yape, Plin e Izipay. Esta política explica qué información recopilamos, para qué la usamos y qué derechos tienes sobre ella.",
          "Si tienes preguntas sobre esta política o sobre tus datos, escríbenos a qubirasac@gmail.com o por WhatsApp.",
        ],
      },
      {
        heading: "2. Qué información recopilamos",
        body: [
          "**Datos de cuenta:** nombre, correo electrónico, rol (propietario, supervisor o cajero), la tienda a la que perteneces y, si lo activas, un PIN de transacciones (guardado siempre cifrado, nunca en texto plano) para confirmar acciones sensibles como corregir el monto de un pago. Estos datos los registra nuestro equipo al activar tu negocio en YapLin — no existe un formulario público de registro.",
          "**Notificaciones de pago:** la app Android de YapLin solicita el permiso de **acceso a notificaciones** del sistema. Con ese permiso, YapLin escucha únicamente las notificaciones de Yape e Izipay y, para Plin —que no tiene una app propia—, las del banco que uses para pagar con Plin (BBVA, Interbank o Scotiabank), identificadas siempre por su paquete de aplicación. De esas notificaciones extrae el monto, el nombre del pagador, el método de pago y la referencia de la operación. Ninguna otra notificación del celular (mensajes, correos, redes sociales, otras apps no conectadas, etc.) es leída, procesada ni almacenada.",
          "**Datos técnicos mínimos:** usamos la información estrictamente necesaria para el funcionamiento de la app (por ejemplo, un token de sesión). Para acciones sensibles o intentos bloqueados por falta de permiso, registramos también la fecha, la dirección IP y el tipo de dispositivo/navegador desde donde se hicieron, como medida de seguridad y trazabilidad de tu cuenta. YapLin no accede a tu ubicación, contactos, cámara, micrófono ni archivos del dispositivo.",
        ],
      },
      {
        heading: "3. Para qué usamos esta información",
        body: [
          "Usamos los datos exclusivamente para operar el servicio que contrataste: mostrar tus pagos en tiempo real, generar reportes para tu negocio, gestionar los accesos de tu equipo y notificarte sobre el estado de tu cuenta (por ejemplo, vencimientos de suscripción). También usamos los registros de seguridad (como intentos bloqueados o cambios sensibles) para detectar actividad indebida y proteger tu cuenta. No vendemos ni compartimos tus datos con terceros para fines publicitarios.",
        ],
      },
      {
        heading: "4. Dónde se almacena y cómo se protege",
        body: [
          "Los datos se almacenan en una base de datos alojada con proveedores especializados en infraestructura en la nube, con conexiones cifradas. Las contraseñas se guardan siempre cifradas (nunca en texto plano), y el acceso a la información de cada negocio está restringido a los usuarios de esa misma cuenta según su rol.",
        ],
      },
      {
        heading: "5. Cuánto tiempo conservamos tus datos",
        body: [
          "Conservamos la información mientras tu cuenta esté activa. Los pagos registrados en YapLin no pueden eliminarse — ni por ti ni por tu equipo: quedan siempre en el historial (se pueden reasignar a otra tienda o corregir en su monto, y cada cambio queda registrado) para que tu negocio tenga una contabilidad confiable y trazable.",
          "Los miembros de tu equipo sí pueden desactivarse al instante desde la app, o eliminarse por completo si ya no deben tener acceso. Si tu negocio deja de usar YapLin y quieres eliminar tu cuenta y los datos asociados, escríbenos directamente — atendemos estas solicitudes de forma manual y directa.",
        ],
      },
      {
        heading: "6. Tus derechos",
        body: [
          "De acuerdo con la Ley N° 29733 (Ley de Protección de Datos Personales del Perú), puedes ejercer en cualquier momento tus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) sobre tus datos personales, escribiéndonos a qubirasac@gmail.com.",
        ],
      },
      {
        heading: "7. Cambios a esta política",
        body: [
          "Si actualizamos esta política, publicaremos la nueva versión en esta misma página con la fecha de actualización correspondiente.",
        ],
      },
    ],
  },
};

export default es;
