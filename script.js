(() => {
  'use strict';

  const doc = document.documentElement;
  const body = document.body;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const safely = (name, fn) => {
    try {
      fn();
    } catch (error) {
      console.error(`[Portfolio] ${name}:`, error);
    }
  };

  /* ---------------------------------------------------------
     Locale / theme state shared by every interaction module
     --------------------------------------------------------- */
  const storageGet = key => { try { return window.localStorage?.getItem(key) || null; } catch (_) { return null; } };
  const storageSet = (key, value) => { try { window.localStorage?.setItem(key, value); } catch (_) { /* persistence is optional */ } };
  let currentLanguage = storageGet('sm-language') === 'en' ? 'en' : 'es';
  const originalTextNodes = new WeakMap();
  const originalAriaLabels = new WeakMap();

  const EN_TEXT = {
    'Saltar al contenido': 'Skip to content',
    'Ingeniero en Sistemas': 'Systems Engineer',
    'Perfil': 'Profile', 'Impacto': 'Impact', 'Habilidades': 'Skills', 'Experiencia': 'Experience',
    'Formación': 'Education', 'Repositorios': 'Repositories', 'Contacto': 'Contact',
    'Disponible para nuevas oportunidades': 'Open to new opportunities',
    'INFRAESTRUCTURA TI · SOPORTE · REDES · AUTOMATIZACIÓN': 'IT INFRASTRUCTURE · SUPPORT · NETWORKING · AUTOMATION',
    'Tecnología que': 'Technology that',
    'mantiene la operación en movimiento.': 'keeps operations moving.',
    'Ingeniero en Sistemas Computacionales con experiencia resolviendo incidencias, administrando plataformas, servidores y redes, y conectando la tecnología con procesos de calidad, continuidad operativa y mejora continua.': 'Computer Systems Engineer experienced in resolving incidents, administering platforms, servers and networks, and connecting technology with quality, operational continuity and continuous improvement.',
    'Especializado en': 'Specialized in',
    'Infraestructura TI': 'IT Infrastructure',
    'Ver CV completo': 'View full résumé', 'Descargar CV': 'Download résumé', 'Ver trayectoria': 'View career path',
    '10+ años': '10+ years', 'experiencia laboral': 'professional experience', 'soporte técnico': 'technical support',
    'visión integral': 'end-to-end perspective', 'Disponible para nuevas oportunidades': 'Open to new opportunities',
    'Gestión TI': 'IT Management', 'Operación': 'Operations', 'Continuidad + Calidad': 'Continuity + Quality',
    'Ingeniero en Sistemas Computacionales': 'Computer Systems Engineer',
    'Inicializando render estelar...': 'Initializing stellar render...', 'Modo': 'Mode',
    'Infraestructura & Soporte': 'Infrastructure & Support', 'Visual': 'Visual', 'Digitalización en 4 s': '4 s digital reveal',
    'Enfoque': 'Focus', 'Resolución + Continuidad': 'Resolution + Continuity',
    'PERFIL PROFESIONAL': 'PROFESSIONAL PROFILE',
    'Un perfil técnico que entiende tanto el sistema como el proceso.': 'A technical profile that understands both systems and processes.',
    'Mi experiencia combina soporte e infraestructura con calidad industrial, documentación, análisis de causa raíz y liderazgo operativo.': 'My experience combines IT support and infrastructure with industrial quality, documentation, root-cause analysis and operational leadership.',
    'He trabajado desde la atención directa al usuario hasta la administración de servicios críticos: Microsoft 365, Windows y Linux, servidores, almacenamiento, redes, inventario TI y automatización.': 'My work ranges from direct user support to the administration of critical services: Microsoft 365, Windows and Linux, servers, storage, networks, IT inventory and automation.',
    'También he desempeñado funciones de inspección, técnico y supervisor de calidad en manufactura, lo que fortaleció mi disciplina para documentar, contener riesgos, analizar causas y estandarizar soluciones.': 'I have also worked as a quality inspector, technician and supervisor in manufacturing, strengthening my discipline for documentation, risk containment, cause analysis and solution standardization.',
    'Mi forma de trabajar es práctica: entender el problema, determinar su impacto, resolver con orden y dejar una solución que pueda repetirse, auditarse y mejorarse.': 'My approach is practical: understand the problem, determine its impact, resolve it methodically, and leave behind a solution that can be repeated, audited and improved.',
    'Diagnóstico estructurado': 'Structured diagnostics', 'Priorizo impacto, causa y continuidad antes de ejecutar cambios.': 'I prioritize impact, cause and continuity before making changes.',
    'Documentación útil': 'Useful documentation', 'Convierto soluciones técnicas en procedimientos claros y replicables.': 'I turn technical solutions into clear, repeatable procedures.',
    'Enfoque operativo': 'Operational focus', 'La tecnología debe ayudar a que usuarios y procesos sigan funcionando.': 'Technology should help users and processes keep operating.',
    'Mejora continua': 'Continuous improvement', 'Busco simplificar tareas, reducir fricción y prevenir recurrencias.': 'I look for ways to simplify tasks, reduce friction and prevent recurrence.',
    'IMPACTO PROFESIONAL': 'PROFESSIONAL IMPACT', 'Hechos concretos que resumen cómo aporto valor.': 'Concrete outcomes that summarize how I create value.',
    'SOPORTE & CONTINUIDAD': 'SUPPORT & CONTINUITY', 'Soporte técnico integral': 'End-to-end technical support',
    'Atención remota y en sitio para hardware, software, conectividad, acceso a sistemas y recursos corporativos.': 'Remote and on-site support for hardware, software, connectivity, system access and corporate resources.',
    'LIDERAZGO QA': 'QA LEADERSHIP', 'Personas lideradas': 'People led',
    'Supervisión de un equipo de calidad controlando Incoming, proceso y liberación para embarque.': 'Led a quality team covering incoming inspection, production processes and shipment release.',
    'GESTIÓN CENTRALIZADA': 'CENTRALIZED MANAGEMENT', 'Incidencias, activos e inventario': 'Incidents, assets and inventory',
    'Implementación para centralizar incidencias, activos TI, inventario y trazabilidad de equipos.': 'Implemented a centralized approach for incidents, IT assets, inventory and equipment traceability.',
    'SEGURIDAD OPERATIVA': 'OPERATIONAL SECURITY', 'Baúl de contraseñas empresarial': 'Enterprise password vault',
    'Implementación de Vaultwarden para centralizar credenciales corporativas, mejorar el acceso seguro y fortalecer la administración de contraseñas del equipo.': 'Implemented Vaultwarden to centralize corporate credentials, improve secure access and strengthen team password management.',
    'Credenciales': 'Credentials', 'Acceso seguro': 'Secure access', 'Administración': 'Administration',
    'MEJORA OPERATIVA': 'OPERATIONAL IMPROVEMENT', 'Primer lugar de producción': 'Top production performance',
    'Participación en una estación cuello de botella cuyo turno mantuvo el primer lugar en objetivos diarios durante seis meses.': 'Worked at a bottleneck station whose shift held first place in daily production targets for six months.',
    'Producción': 'Production', 'Soporte': 'Support', 'Continuidad': 'Continuity', 'Embarques': 'Shipments', 'meses': 'months', 'Objetivos': 'Targets', 'Eficiencia': 'Efficiency', 'Liderazgo': 'Leadership', 'Activos TI': 'IT Assets', 'Trazabilidad': 'Traceability',
    'TIMELINE DE HABILIDADES': 'SKILLS TIMELINE',
    'Una ruta visual desde la operación industrial hasta la administración de infraestructura.': 'A visual journey from industrial operations to infrastructure administration.',
    'La línea se ilumina conforme recorres la experiencia, mostrando cómo cada etapa construyó la siguiente.': 'The timeline lights up as you move through the experience, showing how each stage built the next.',
    'ETAPA ACTIVA': 'ACTIVE STAGE', 'Base operativa': 'Operational foundation', 'Manufactura & Producción': 'Manufacturing & Production',
    'SMT, ensamble, soldadura, fibra óptica, arneses automotrices, control de materiales, embarques y continuidad de línea.': 'SMT, assembly, soldering, fiber optics, automotive harnesses, material control, shipping and line continuity.',
    'Fibra óptica': 'Fiber optics', 'Materiales': 'Materials', 'Control & precisión': 'Control & precision', 'Calidad & Metrología': 'Quality & Metrology',
    'Incoming, inspección de proceso/final, Ishikawa, 5 Porqués, 8D, segregación de material y verificación de calibración.': 'Incoming, in-process/final inspection, Ishikawa, 5 Whys, 8D, material segregation and calibration verification.',
    '5 Porqués': '5 Whys', 'Atención & resolución': 'Support & resolution', 'Soporte & Service Desk': 'Support & Service Desk',
    'Soporte N1/N2, helpdesk, diagnóstico de hardware/software, mantenimiento preventivo/correctivo y atención remota/en sitio.': 'L1/L2 support, help desk, hardware/software diagnostics, preventive/corrective maintenance and remote/on-site service.',
    'Usuarios': 'Users', 'Conectividad': 'Connectivity', 'Redes & Comunicaciones': 'Networking & Communications',
    'DHCP, DNS, VLAN, SSH, firewall, switching, LAN/WAN, cableado estructurado y telefonía IP.': 'DHCP, DNS, VLAN, SSH, firewall, switching, LAN/WAN, structured cabling and IP telephony.',
    'Sistemas & Plataformas': 'Systems & Platforms',
    'Windows, Linux, Microsoft 365, Active Directory, Exchange Online, SharePoint, OneDrive, Hyper-V y Adobe Admin Console.': 'Windows, Linux, Microsoft 365, Active Directory, Exchange Online, SharePoint, OneDrive, Hyper-V and Adobe Admin Console.',
    'Servidores & Almacenamiento': 'Servers & Storage',
    'Windows Server, servidores Linux, Synology NAS, archivos, bases de datos, servicios web, Docker y recursos on-premise.': 'Windows Server, Linux servers, Synology NAS, file services, databases, web services, Docker and on-premises resources.',
    'Datos & eficiencia': 'Data & efficiency', 'Automatización & Datos': 'Automation & Data',
    'Power BI, Excel avanzado, SQL, MySQL/MariaDB, Visual Basic .NET, Java, macros y automatización de tareas operativas.': 'Power BI, advanced Excel, SQL, MySQL/MariaDB, Visual Basic .NET, Java, macros and operational task automation.',
    'Excel avanzado': 'Advanced Excel', 'Gestión & seguridad': 'Management & security', 'Operación TI & Seguridad': 'IT Operations & Security',
    'OCS Inventory, proveedores, documentación técnica, Bitdefender GravityZone, Vaultwarden, gestión de incidentes y capacitación.': 'OCS Inventory, vendors, technical documentation, Bitdefender GravityZone, Vaultwarden, incident management and training.',
    'Proveedores': 'Vendors',
    'STACK TÉCNICO': 'TECHNICAL STACK', 'Tecnologías y metodologías con las que he trabajado o me he formado.': 'Technologies and methodologies I have worked with or trained in.',
    'Todo': 'All', 'Sistemas': 'Systems', 'Redes': 'Networks', 'Datos': 'Data', 'Calidad': 'Quality', 'Telefonía IP': 'IP Telephony', 'Metrología': 'Metrology', 'Capacitación QA': 'QA Training',
    'TRAYECTORIA PROFESIONAL': 'PROFESSIONAL EXPERIENCE', 'Experiencia construida desde la operación hasta la administración de TI.': 'Experience built from hands-on operations through IT administration.',
    'Toda la trayectoria': 'Full career', 'TI': 'IT', 'Manufactura': 'Manufacturing',
    'Especialista en Soluciones TI / Ingeniero en Sistemas': 'IT Solutions Specialist / Systems Engineer',
    'Soporte técnico N1/N2 remoto y en sitio para hardware, software, conectividad, Microsoft 365, SharePoint y OneDrive.': 'Remote and on-site L1/L2 support for hardware, software, connectivity, Microsoft 365, SharePoint and OneDrive.',
    'Administración de usuarios, permisos, licencias, DNS, archivos, bases de datos, sistemas web y almacenamiento Synology NAS.': 'Administration of users, permissions, licenses, DNS, files, databases, web systems and Synology NAS storage.',
    'Implementación y administración de GLPI y OCS Inventory para incidencias, activos y trazabilidad.': 'Implementation and administration of GLPI and OCS Inventory for incidents, assets and traceability.',
    'Diagnóstico de DHCP, DNS, VLAN, SSH, LAN/WAN y telefonía IP Grandstream.': 'Diagnostics for DHCP, DNS, VLAN, SSH, LAN/WAN and Grandstream IP telephony.',
    'Administración de herramientas como Vaultwarden, Bitdefender GravityZone y Adobe Admin Console.': 'Administration of tools such as Vaultwarden, Bitdefender GravityZone and Adobe Admin Console.',
    'Coordinación con proveedores y desarrollo de herramientas internas y automatizaciones.': 'Vendor coordination and development of internal tools and automations.',
    'Inspector / Técnico / Supervisor de Calidad': 'Quality Inspector / Technician / Supervisor',
    'Evolución interna desde Inspector hasta Supervisor de Calidad.': 'Internal progression from Inspector to Quality Supervisor.',
    'Inspección Incoming, análisis de causa raíz con Ishikawa, 5 Porqués y 8D, reportes para gerencia y control de calibración.': 'Incoming inspection, root-cause analysis with Ishikawa, 5 Whys and 8D, management reporting and calibration control.',
    'Capacitación de inspectores QA y creación de manuales, diagramas de flujo y material visual.': 'Training of QA inspectors and creation of manuals, flowcharts and visual material.',
    'Liderazgo de un equipo de 9 personas desde recepción y proceso hasta liberación para embarque.': 'Led a 9-person team from incoming inspection and production through shipment release.',
    'Operador de Ensamble / Operador SMT': 'Assembly Operator / SMT Operator',
    'Operación de maquinaria automática de colocación y soldadura de componentes electrónicos.': 'Operation of automated electronic component placement and soldering equipment.',
    'Inspección visual, control de materiales, limpieza y mantenimiento básico de equipos SMT.': 'Visual inspection, material control, cleaning and basic SMT equipment maintenance.',
    'Seguimiento a consumo y disponibilidad de material para prevenir paros de línea.': 'Monitored material consumption and availability to prevent line stoppages.',
    'Operador de Inspección / Ensamble / Empaque · Auxiliar de Supervisor': 'Inspection / Assembly / Packaging Operator · Assistant Supervisor',
    'Inspección y certificación de productos de fibra óptica monomodo y multimodo.': 'Inspection and certification of single-mode and multimode fiber-optic products.',
    'Apoyo a supervisión mediante solicitudes de material, tickets de empaque, abastecimiento y devolución de producto defectuoso.': 'Supported supervision through material requests, packing tickets, replenishment and defective product returns.',
    'Seguimiento operativo para evitar paros por falta de suministro.': 'Operational follow-up to prevent stoppages caused by supply shortages.',
    'Inspector / Técnico de Control de Calidad': 'Quality Control Inspector / Technician',
    'Promoción de Inspector a Técnico de Control de Calidad en industria automotriz.': 'Promoted from Inspector to Quality Control Technician in the automotive industry.',
    'Liberación de líneas, seguimiento a defectos, segregación y alertas de calidad.': 'Line release, defect follow-up, segregation and quality alerts.',
    'Análisis de causa raíz, reportes para gerencia, documentación de inspección y capacitación de personal QA.': 'Root-cause analysis, management reports, inspection documentation and QA staff training.',
    'Capacitación a operadores en autoensamble, soldadura, reparación y manejo correcto de materiales.': 'Trained operators in automated assembly, soldering, repair and correct material handling.',
    'Operador de Ensamble y Soldadura': 'Assembly and Soldering Operator',
    'Ensamble, soldadura y reparación de componentes automotrices.': 'Assembly, soldering and repair of automotive components.',
    'Participación en una estación cuello de botella cuyo turno mantuvo durante seis meses el primer lugar en cumplimiento diario.': 'Worked at a bottleneck station whose shift held first place in daily target attainment for six months.',
    'Aporte de ideas de automatización y mejoras prácticas junto con personal de ingeniería.': 'Contributed automation ideas and practical improvements with engineering staff.',
    'Capacitación de nuevo ingreso y apoyo al control de material para reducir acumulación y desperdicio.': 'Trained new hires and supported material control to reduce buildup and waste.',
    'Operador de Ensamble / Auxiliar de Supervisor': 'Assembly Operator / Assistant Supervisor',
    'Ensamble de arneses automotrices con apego a instrucciones y control de materiales.': 'Automotive harness assembly following work instructions and material controls.',
    'Apoyo como auxiliar de supervisor gracias a facilidad con sistemas y captura de información.': 'Supported supervision duties due to strong systems and data-entry skills.',
    'Responsabilidad sobre inspección de calidad para producto destinado a embarque.': 'Responsible for quality inspection of products intended for shipment.',
    'Capturista de Datos / Atención Ciudadana / Soporte TI': 'Data Entry / Citizen Service / IT Support',
    'Captura, clasificación y control de documentación para trámites ciudadanos.': 'Data entry, classification and document control for citizen services.',
    'Automatización parcial de registros mediante una macro para organizar información.': 'Partially automated record entry through a macro that organized information.',
    'Soporte a equipos del módulo: aplicaciones, mantenimiento preventivo, impresoras, escáneres y pads de firma.': 'Supported office equipment: applications, preventive maintenance, printers, scanners and signature pads.',
    'CASOS DE APORTE': 'CONTRIBUTION CASES', 'No sólo herramientas: problemas reales, acciones concretas.': 'Not just tools: real problems, concrete actions.',
    'GESTIÓN TI': 'IT MANAGEMENT', 'Centralización de incidencias y activos': 'Centralizing incidents and assets',
    'Implementé y administré GLPI y OCS Inventory para concentrar el registro de incidencias, activos TI y trazabilidad de equipos.': 'Implemented and administered GLPI and OCS Inventory to centralize incident records, IT assets and equipment traceability.',
    'Activos': 'Assets', 'AUTOMATIZACIÓN': 'AUTOMATION', 'Menos captura manual, más consistencia': 'Less manual entry, more consistency',
    'En el INE automaticé parcialmente el registro de movimientos extraordinarios y documentos testimoniales mediante una macro de organización de información.': 'At INE, I partially automated the logging of extraordinary movements and testimonial documents using an information-organization macro.',
    'Productividad': 'Productivity', 'Control de calidad de extremo a extremo': 'End-to-end quality control',
    'Como Supervisor de Calidad lideré un equipo de 9 personas, dando seguimiento desde Incoming y proceso hasta la liberación para embarque.': 'As Quality Supervisor, I led a 9-person team from incoming inspection and production through shipment release.',
    '9 personas': '9 people', 'Rendimiento sostenido en un cuello de botella': 'Sustained performance at a bottleneck station',
    'Trabajé en una estación crítica de producción cuyo turno se mantuvo durante seis meses en primer lugar de cumplimiento de objetivos diarios.': 'I worked at a critical production station whose shift remained first in daily target attainment for six months.',
    'Mejora': 'Improvement',
    'FORMACIÓN Y DESARROLLO': 'EDUCATION & DEVELOPMENT', 'Base académica sólida y aprendizaje técnico continuo.': 'A solid academic foundation and continuous technical learning.',
    'FORMACIÓN ACADÉMICA': 'ACADEMIC EDUCATION', 'Ingeniería en Sistemas Computacionales': 'Computer Systems Engineering',
    'Bachillerato:': 'High school:', 'Idiomas:': 'Languages:',
    'Español nativo · Inglés con conversación básica-intermedia, comprensión auditiva intermedia y escritura intermedia-avanzada.': 'Native Spanish · English with basic-intermediate conversation, intermediate listening comprehension and intermediate-advanced writing.',
    'CERTIFICACIONES Y CURSOS': 'CERTIFICATIONS & COURSES', 'Excel TOTAL en 30 días — De Cero a Avanzado': 'Excel TOTAL in 30 Days — Beginner to Advanced',
    'Cisco CCNA — Fundamentos de Networking para Redes IP': 'Cisco CCNA — Networking Fundamentals for IP Networks',
    'Formación técnica': 'Technical training', 'Linux · Hyper-V · Bases de Datos · Cableado Estructurado · Calidad': 'Linux · Hyper-V · Databases · Structured Cabling · Quality',
    'GITHUB & PROYECTOS': 'GITHUB & PROJECTS', 'Repositorios que demuestran trabajo real, práctica constante y presencia técnica en línea.': 'Repositories that demonstrate real work, continuous practice and an active technical presence online.',
    'Una selección de repositorios públicos de mi perfil de GitHub, orientados a sitios web, presencia digital y proyectos propios.': 'A selection of public repositories from my GitHub profile, focused on websites, digital presence and personal projects.',
    'Abrir ↗': 'Open ↗',
    'Proyecto web educativo para reforzar el aprendizaje de inglés mediante una experiencia digital clara y accesible.': 'Educational web project designed to support English learning through a clear, accessible digital experience.',
    'Sitio web construido con Astro, enfocado en rendimiento y una arquitectura web ligera.': 'Astro-built website focused on performance and a lightweight web architecture.',
    'Sitio corporativo para servicios de presencia digital, desarrollo web y marketing para negocios.': 'Corporate site for digital presence, web development and marketing services for businesses.',
    'Emprendimiento': 'Small business',
    'Landing comercial para una marca de manualidades, orientada a presentar productos y fortalecer su presencia digital.': 'Commercial landing page for a crafts brand, designed to showcase products and strengthen its digital presence.',
    'Sitio demo para un emprendimiento de eventos, diseñado para presentar servicios de forma visual y atractiva.': 'Demo site for an events business, designed to present services in a visual and engaging way.', 'Diseño web': 'Web design',
    'Sitio corporativo para soluciones de CCTV y seguridad electrónica, enfocado en servicios, proyectos y confianza de marca.': 'Corporate site for CCTV and electronic security solutions, focused on services, projects and brand trust.', 'Seguridad': 'Security', 'Negocio': 'Business',
    'MESES': 'MONTHS',
    'PERFIL GITHUB': 'GITHUB PROFILE', 'Explora más proyectos, actividad y código en mi perfil completo.': 'Explore more projects, activity and code on my full profile.',
    'Ver github.com/samuelinmex': 'View github.com/samuelinmex', 'CONTACTO': 'CONTACT',
    '¿Buscas a alguien que pueda entrar a la operación, entenderla y resolver?': 'Looking for someone who can step into the operation, understand it and solve problems?',
    'Estoy orientado a posiciones de soporte técnico N1/N2, infraestructura TI, administración de sistemas, redes, calidad, mejora de procesos y supervisión.': 'I am focused on L1/L2 technical support, IT infrastructure, systems administration, networking, quality, process improvement and supervisory roles.',
    'Enviar correo': 'Send email', 'Copiar correo': 'Copy email', 'Ver GitHub': 'View GitHub', '· Portafolio profesional': '· Professional portfolio', 'Volver arriba ↑': 'Back to top ↑',
    'Tema': 'Theme', 'APARIENCIA': 'APPEARANCE', 'Selecciona un tema': 'Choose a theme', 'Cobalto': 'Cobalt', 'Oscuro corporativo': 'Corporate dark',
    'Grafito': 'Graphite', 'Neutral tecnológico': 'Technology neutral', 'Papel': 'Paper', 'Claro profesional': 'Professional light'
  };

  const ARIA_EN = {
    'Navegación principal': 'Main navigation', 'Ir al inicio': 'Go to top', 'Abrir menú': 'Open menu',
    'Preferencias del sitio': 'Site preferences', 'Elegir tema': 'Choose theme', 'Idioma': 'Language',
    'Áreas de experiencia': 'Areas of expertise', 'Resumen profesional': 'Professional summary',
    'Filtrar tecnologías': 'Filter technologies', 'Filtrar experiencia': 'Filter experience',
    'Etapa anterior': 'Previous stage', 'Etapa siguiente': 'Next stage', 'Navegar por etapas': 'Navigate stages'
  };

  const dynamicText = (es, en) => currentLanguage === 'en' ? en : es;

  const translateStaticPage = lang => {
    currentLanguage = lang === 'en' ? 'en' : 'es';
    doc.lang = currentLanguage;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const originalRaw = originalTextNodes.get(node);
      const originalCore = originalRaw.trim();
      const leading = originalRaw.match(/^\s*/)?.[0] || '';
      const trailing = originalRaw.match(/\s*$/)?.[0] || '';
      const translated = currentLanguage === 'en' ? (EN_TEXT[originalCore] || originalCore) : originalCore;
      node.nodeValue = `${leading}${translated}${trailing}`;
    });

    document.querySelectorAll('[aria-label]').forEach(el => {
      if (!originalAriaLabels.has(el)) originalAriaLabels.set(el, el.getAttribute('aria-label'));
      const original = originalAriaLabels.get(el);
      el.setAttribute('aria-label', currentLanguage === 'en' ? (ARIA_EN[original] || original) : original);
    });

    document.title = currentLanguage === 'en'
      ? 'Samuel Mancilla | Computer Systems Engineer'
      : 'Samuel Mancilla | Ingeniero en Sistemas Computacionales';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', currentLanguage === 'en'
        ? 'Professional portfolio of Samuel Mancilla, Computer Systems Engineer with experience in IT infrastructure, L1/L2 support, Microsoft 365, Linux, networking, automation, quality and operations.'
        : 'Portafolio profesional de Samuel Eustorgio Mancilla Zunun, Ingeniero en Sistemas Computacionales con experiencia en infraestructura TI, soporte N1/N2, Microsoft 365, Linux, redes, automatización, calidad y operaciones.');
    }
  };

  safely('theme controls', () => {
    const trigger = document.getElementById('themeTrigger');
    const menu = document.getElementById('themeMenu');
    const switcher = document.getElementById('themeSwitcher');
    const options = [...document.querySelectorAll('[data-theme-option]')];
    const overlay = document.getElementById('themeTransitionOverlay');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const allowed = ['cobalt', 'graphite', 'paper'];
    const saved = storageGet('sm-theme');
    let theme = allowed.includes(saved) ? saved : 'cobalt';

    const themeColor = value => value === 'paper' ? '#F2F4F7' : value === 'graphite' ? '#101216' : '#0B1220';
    const themeAccent = value => value === 'paper' ? '#1D4ED8' : value === 'graphite' ? '#94A3B8' : '#2563EB';
    const sync = value => {
      doc.dataset.theme = value;
      if (themeMeta) themeMeta.setAttribute('content', themeColor(value));
      options.forEach(option => {
        const active = option.dataset.themeOption === value;
        option.classList.toggle('is-active', active);
        option.setAttribute('aria-checked', active ? 'true' : 'false');
      });
    };
    sync(theme);

    const setOpen = open => {
      if (!trigger || !menu) return;
      trigger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    };

    trigger?.addEventListener('click', event => {
      trigger.classList.remove('is-clicked');
      void trigger.offsetWidth;
      trigger.classList.add('is-clicked');
      window.setTimeout(() => trigger.classList.remove('is-clicked'), 520);
      setOpen(trigger.getAttribute('aria-expanded') !== 'true');
      event.stopPropagation();
    });

    options.forEach(option => option.addEventListener('click', () => {
      const nextTheme = option.dataset.themeOption;
      if (!allowed.includes(nextTheme) || nextTheme === theme) {
        setOpen(false);
        return;
      }

      const applyTheme = () => {
        doc.classList.add('theme-changing');
        theme = nextTheme;
        storageSet('sm-theme', theme);
        sync(theme);
        window.dispatchEvent(new CustomEvent('portfolio:themechange', { detail: { theme } }));
        window.setTimeout(() => doc.classList.remove('theme-changing'), prefersReducedMotion ? 0 : 760);
      };

      if (!prefersReducedMotion && overlay) {
        const rect = option.getBoundingClientRect();
        doc.style.setProperty('--theme-origin-x', `${rect.left + rect.width / 2}px`);
        doc.style.setProperty('--theme-origin-y', `${rect.top + rect.height / 2}px`);
        doc.style.setProperty('--theme-transition-bg', themeColor(nextTheme));
        doc.style.setProperty('--theme-transition-accent', themeAccent(nextTheme));
        overlay.classList.remove('is-animating');
        void overlay.offsetWidth;
        overlay.classList.add('is-animating');
        window.setTimeout(applyTheme, 220);
        window.setTimeout(() => overlay.classList.remove('is-animating'), 980);
      } else {
        applyTheme();
      }

      setOpen(false);
    }));

    document.addEventListener('click', event => {
      if (switcher && !switcher.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setOpen(false);
    });
  });

  safely('language controls', () => {
    const switcher = document.getElementById('languageSwitcher');
    const buttons = [...document.querySelectorAll('[data-lang]')];
    if (!switcher || !buttons.length) return;

    const syncControls = lang => {
      switcher.dataset.activeLang = lang;
      buttons.forEach(button => {
        const active = button.dataset.lang === lang;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    };

    const applyLanguage = lang => {
      translateStaticPage(lang);
      storageSet('sm-language', currentLanguage);
      syncControls(currentLanguage);
      window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { lang: currentLanguage } }));
    };

    applyLanguage(currentLanguage);

    buttons.forEach(button => button.addEventListener('click', () => {
      const next = button.dataset.lang === 'en' ? 'en' : 'es';
      if (next === currentLanguage) return;
      button.classList.remove('is-clicked');
      void button.offsetWidth;
      button.classList.add('is-clicked');
      doc.classList.add('language-switching');
      window.setTimeout(() => {
        applyLanguage(next);
        doc.classList.remove('language-switching');
      }, prefersReducedMotion ? 0 : 135);
      window.setTimeout(() => button.classList.remove('is-clicked'), 460);
    }));
  });

  safely('year', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  });

  safely('navigation', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('navMenu');
    if (!navToggle || !navMenu) return;

    const closeMenu = () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      body.classList.remove('menu-open');
    };

    navToggle.addEventListener('click', () => {
      const open = !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      body.classList.toggle('menu-open', open);
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) closeMenu();
    }, { passive: true });
  });

  safely('reveal observer', () => {
    const revealItems = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -4% 0px' });

    revealItems.forEach(el => observer.observe(el));
  });

  safely('role rotator', () => {
    const roleRotator = document.getElementById('roleRotator');
    if (!roleRotator || prefersReducedMotion) return;

    const roleSets = {
      es: ['Infraestructura TI', 'Soporte N1 / N2', 'Microsoft 365', 'Linux & Windows Server', 'Redes y conectividad', 'Automatización de procesos'],
      en: ['IT Infrastructure', 'L1 / L2 Support', 'Microsoft 365', 'Linux & Windows Server', 'Networking & Connectivity', 'Process Automation']
    };
    let roleIndex = 0;
    const renderRole = () => {
      const roles = roleSets[currentLanguage] || roleSets.es;
      roleRotator.textContent = roles[roleIndex % roles.length];
    };
    renderRole();
    window.addEventListener('portfolio:languagechange', renderRole);

    window.setInterval(() => {
      roleRotator.classList.add('is-changing');
      window.setTimeout(() => {
        const roles = roleSets[currentLanguage] || roleSets.es;
        roleIndex = (roleIndex + 1) % roles.length;
        roleRotator.textContent = roles[roleIndex];
        roleRotator.classList.remove('is-changing');
      }, 220);
    }, 2600);
  });

  safely('scroll UI', () => {
    const progressBar = document.getElementById('scrollProgress');
    const roadmap = document.getElementById('skillsRoadmap');
    const roadProgress = document.getElementById('roadProgress');
    const skillNodes = [...document.querySelectorAll('.skill-node')];
    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];

    const update = () => {
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      if (progressBar) progressBar.style.width = `${pct}%`;

      if (roadmap && roadProgress) {
        const rect = roadmap.getBoundingClientRect();
        const viewportAnchor = window.innerHeight * 0.62;
        const total = rect.height + window.innerHeight * 0.18;
        const passed = viewportAnchor - rect.top;
        const roadPct = Math.min(100, Math.max(0, (passed / total) * 100));
        roadProgress.style.height = `${roadPct}%`;

        if (skillNodes.length) {
          const focusY = window.innerHeight * 0.50;
          let closest = null;
          let closestDistance = Infinity;
          skillNodes.forEach(node => {
            const nodeRect = node.getBoundingClientRect();
            const center = nodeRect.top + nodeRect.height / 2;
            const distance = Math.abs(center - focusY);
            if (distance < closestDistance) {
              closestDistance = distance;
              closest = node;
            }
          });
          skillNodes.forEach(node => {
            node.classList.toggle('is-active', node === closest && rect.top < window.innerHeight && rect.bottom > 0);
          });
        }
      }

      const y = window.scrollY + 150;
      let activeId = sections[0]?.id;
      sections.forEach(section => {
        if (section.offsetTop <= y) activeId = section.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  });

  safely('pointer glow', () => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    window.addEventListener('pointermove', event => {
      doc.style.setProperty('--pointer-x', `${event.clientX}px`);
      doc.style.setProperty('--pointer-y', `${event.clientY}px`);
    }, { passive: true });
  });

  safely('impact carousel', () => {
    const carousel = document.getElementById('impactCarousel');
    if (!carousel) return;

    const slides = [...carousel.querySelectorAll('[data-impact-slide]')];
    const dots = [...carousel.querySelectorAll('[data-impact-go]')];
    const prev = carousel.querySelector('[data-impact-prev]');
    const next = carousel.querySelector('[data-impact-next]');
    const progress = document.getElementById('impactProgress');
    const mobileIndex = document.getElementById('impactMobileIndex');
    const mobileLabel = document.getElementById('impactMobileLabel');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    let paused = false;
    let visible = true;
    let touchStartX = 0;
    const delay = 7000;
    const stage = carousel.querySelector('.impact-stage');

    const syncMobileStatus = () => {
      const dot = dots[current];
      if (!dot) return;
      if (mobileIndex) mobileIndex.textContent = dot.querySelector('span')?.textContent?.trim() || String(current + 1).padStart(2, '0');
      if (mobileLabel) mobileLabel.textContent = dot.querySelector('small')?.textContent?.trim() || '';
    };

    const syncStageHeight = () => {
      if (!stage || !slides.length) return;

      window.requestAnimationFrame(() => {
        const isCompact = window.matchMedia('(max-width: 820px)').matches;

        if (isCompact) {
          // Measure every compact/mobile slide at the real carousel width, even
          // though inactive slides are display:none. One maximum height is then
          // applied to the stage so arrows/progress never jump between items.
          stage.style.removeProperty('height');
          slides.forEach(slide => slide.classList.add('is-measuring'));

          window.requestAnimationFrame(() => {
            const needed = slides.reduce((maxHeight, slide) => {
              const height = Math.max(slide.scrollHeight, slide.getBoundingClientRect().height);
              return Math.max(maxHeight, height);
            }, 0);

            slides.forEach(slide => slide.classList.remove('is-measuring'));
            if (needed > 0) stage.style.height = `${Math.ceil(needed + 2)}px`;
          });
          return;
        }

        // Desktop also uses the tallest slide so the carousel remains uniform.
        const needed = slides.reduce((maxHeight, slide) => {
          const height = Math.max(slide.scrollHeight, slide.getBoundingClientRect().height);
          return Math.max(maxHeight, height);
        }, 0);
        if (needed > 0) stage.style.height = `${Math.ceil(needed)}px`;
      });
    };

    const resetProgress = () => {
      if (!progress || prefersReducedMotion) return;
      carousel.classList.remove('is-running');
      void progress.offsetWidth;
      carousel.classList.add('is-running');
    };

    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    };

    const schedule = () => {
      clearTimer();
      if (prefersReducedMotion || paused || !visible) return;
      resetProgress();
      timer = window.setTimeout(() => goTo(current + 1, true), delay);
    };

    const goTo = (index, fromAuto = false) => {
      const nextIndex = (index + slides.length) % slides.length;
      if (nextIndex === current && !fromAuto) {
        schedule();
        return;
      }

      slides.forEach((slide, i) => {
        const active = i === nextIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });

      dots.forEach((dot, i) => {
        const active = i === nextIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', active ? 'true' : 'false');
        dot.tabIndex = active ? 0 : -1;
      });

      current = nextIndex;
      syncMobileStatus();
      syncStageHeight();
      schedule();
    };

    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));
    dots.forEach(dot => dot.addEventListener('click', () => goTo(Number(dot.dataset.impactGo))));

    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(current - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(current + 1);
      }
    });

    carousel.addEventListener('pointerenter', () => {
      paused = true;
      clearTimer();
      carousel.classList.remove('is-running');
    });
    carousel.addEventListener('pointerleave', () => {
      paused = false;
      schedule();
    });
    carousel.addEventListener('focusin', () => {
      paused = true;
      clearTimer();
      carousel.classList.remove('is-running');
    });
    carousel.addEventListener('focusout', event => {
      if (!carousel.contains(event.relatedTarget)) {
        paused = false;
        schedule();
      }
    });

    carousel.addEventListener('touchstart', event => {
      touchStartX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });
    carousel.addEventListener('touchend', event => {
      const endX = event.changedTouches[0]?.clientX || 0;
      const delta = endX - touchStartX;
      if (Math.abs(delta) > 48) goTo(current + (delta < 0 ? 1 : -1));
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
        if (visible) schedule();
        else {
          clearTimer();
          carousel.classList.remove('is-running');
        }
      }, { threshold: 0.28 });
      observer.observe(carousel);
    }

    dots.forEach((dot, i) => { dot.tabIndex = i === 0 ? 0 : -1; });

    const handleLayoutChange = () => window.setTimeout(syncStageHeight, 40);
    window.addEventListener('resize', handleLayoutChange, { passive: true });
    window.addEventListener('portfolio:themechange', handleLayoutChange);
    window.addEventListener('portfolio:languagechange', () => {
      syncMobileStatus();
      handleLayoutChange();
    });
    syncMobileStatus();
    syncStageHeight();
    if (document.fonts?.ready) document.fonts.ready.then(syncStageHeight).catch(() => {});
    schedule();
  });

  safely('interactive skills timeline', () => {
    const roadmap = document.getElementById('skillsRoadmap');
    const nodes = [...document.querySelectorAll('.skill-node')];
    const indexButtons = [...document.querySelectorAll('[data-timeline-go]')];
    const prev = document.querySelector('[data-timeline-prev]');
    const next = document.querySelector('[data-timeline-next]');
    const activeTitle = document.getElementById('timelineActiveTitle');
    const activeMeta = document.getElementById('timelineActiveMeta');
    const consoleProgress = document.getElementById('timelineConsoleProgress');
    if (!roadmap || !nodes.length) return;

    let current = 0;
    let scrollTicking = false;
    let scrollLockUntil = 0;

    const activate = (index, shouldScroll = false) => {
      current = (index + nodes.length) % nodes.length;
      nodes.forEach((node, i) => node.classList.toggle('is-selected', i === current));
      indexButtons.forEach((button, i) => {
        const active = i === current;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', active ? 'true' : 'false');
        button.tabIndex = active ? 0 : -1;
      });

      const node = nodes[current];
      const title = node.querySelector('h3')?.textContent?.trim() || '';
      const kicker = node.querySelector('.node-kicker')?.textContent?.trim() || '';
      if (activeTitle) activeTitle.textContent = title;
      if (activeMeta) activeMeta.textContent = `${String(current + 1).padStart(2, '0')} · ${kicker}`;
      if (consoleProgress) consoleProgress.style.width = `${((current + 1) / nodes.length) * 100}%`;

      if (shouldScroll) {
        scrollLockUntil = performance.now() + 1050;
        node.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'center'
        });
      }
    };

    const closestToViewport = () => {
      if (performance.now() < scrollLockUntil) return;
      const roadmapRect = roadmap.getBoundingClientRect();
      if (roadmapRect.bottom < 0 || roadmapRect.top > window.innerHeight) return;
      const focusY = Math.min(window.innerHeight * .58, window.innerHeight - 120);
      let closestIndex = current;
      let distance = Infinity;
      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const candidate = Math.abs(center - focusY);
        if (candidate < distance) {
          distance = candidate;
          closestIndex = index;
        }
      });
      if (closestIndex !== current) activate(closestIndex, false);
    };

    nodes.forEach((node, index) => {
      node.setAttribute('role', 'button');
      node.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')} · ${node.querySelector('h3')?.textContent?.trim() || ''}`);
      node.addEventListener('click', () => activate(index, true));
      node.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate(index, true);
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
          event.preventDefault();
          activate(current + 1, true);
        } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
          event.preventDefault();
          activate(current - 1, true);
        }
      });

      if (window.matchMedia('(hover: hover)').matches) {
        const card = node.querySelector('.node-card');
        node.addEventListener('pointermove', event => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const px = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
          const py = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
          const tiltY = (px - .5) * 5.5;
          const tiltX = (.5 - py) * 4.5;
          card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
          card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
          card.style.setProperty('--card-glow-x', `${(px * 100).toFixed(1)}%`);
          card.style.setProperty('--card-glow-y', `${(py * 100).toFixed(1)}%`);
        }, { passive: true });
        node.addEventListener('pointerleave', () => {
          if (!card) return;
          card.style.setProperty('--tilt-x', '0deg');
          card.style.setProperty('--tilt-y', '0deg');
          card.style.setProperty('--card-glow-x', '50%');
          card.style.setProperty('--card-glow-y', '50%');
        });
      }
    });

    indexButtons.forEach(button => button.addEventListener('click', () => activate(Number(button.dataset.timelineGo), true)));
    prev?.addEventListener('click', () => activate(current - 1, true));
    next?.addEventListener('click', () => activate(current + 1, true));

    roadmap.addEventListener('keydown', event => {
      if (event.target !== roadmap) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        activate(current + 1, true);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        activate(current - 1, true);
      }
    });

    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        closestToViewport();
        scrollTicking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('portfolio:languagechange', () => {
      nodes.forEach((node, index) => {
        node.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')} · ${node.querySelector('h3')?.textContent?.trim() || ''}`);
      });
      window.setTimeout(() => activate(current, false), 0);
    });

    activate(0, false);
  });

  safely('stack filters', () => {
    const buttons = [...document.querySelectorAll('[data-stack-filter]')];
    const items = [...document.querySelectorAll('[data-stack]')];
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.stackFilter;
        buttons.forEach(btn => btn.classList.toggle('active', btn === button));
        items.forEach(item => {
          const visible = filter === 'all' || item.dataset.stack === filter;
          item.classList.toggle('is-hidden', !visible);
        });
      });
    });
  });

  safely('career filters', () => {
    const buttons = [...document.querySelectorAll('[data-career-filter]')];
    const items = [...document.querySelectorAll('[data-career]')];
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.careerFilter;
        buttons.forEach(btn => btn.classList.toggle('active', btn === button));
        items.forEach(item => {
          const categories = (item.dataset.career || '').split(/\s+/);
          item.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
        });
      });
    });
  });

  safely('copy email', () => {
    const copyButton = document.getElementById('copyEmail');
    const copyStatus = document.getElementById('copyStatus');
    if (!copyButton) return;

    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.email || '';
      let copied = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(email);
          copied = true;
        } catch (_) {
          copied = false;
        }
      }

      if (!copied) {
        const temp = document.createElement('textarea');
        temp.value = email;
        temp.setAttribute('readonly', '');
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try {
          copied = document.execCommand('copy');
        } catch (_) {
          copied = false;
        }
        temp.remove();
      }

      if (copyStatus) {
        copyStatus.textContent = copied ? dynamicText('Correo copiado al portapapeles.', 'Email copied to clipboard.') : `${dynamicText('Correo', 'Email')}: ${email}`;
        window.setTimeout(() => { copyStatus.textContent = ''; }, 2800);
      }
    });
  });

  safely('scroll to top', () => {
    const button = document.getElementById('scrollToTop');
    if (!button) return;
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  safely('smooth anchors', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      anchor.addEventListener('click', event => {
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        if (history.replaceState) history.replaceState(null, '', targetId);
      });
    });
  });

  // Enhancement only: every functional control above is already registered before this runs.
  safely('cinematic portrait', () => {
    const lab = document.getElementById('portraitLab');
    const canvas = document.getElementById('portraitCanvas');
    const status = document.getElementById('heroDecodeStatus');
    if (!lab || !canvas) return;

    const setStatus = message => {
      if (status) status.textContent = message;
    };

    if (prefersReducedMotion) {
      lab.classList.add('is-materialized');
      setStatus(dynamicText('Perfil materializado.', 'Profile materialized.'));
      return;
    }

    const rect = lab.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    const width = Math.max(280, Math.round(rect.width * dpr));
    const height = Math.max(350, Math.round(rect.height * dpr));
    canvas.width = width;
    canvas.height = height;
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const particles = [];
    const streaks = [];
    const cols = 44;
    const rows = Math.round(cols * 1.24);
    const cellW = width / cols;
    const cellH = height / rows;

    for (let gy = 0; gy < rows; gy += 1) {
      for (let gx = 0; gx < cols; gx += 1) {
        if (Math.random() > 0.54) continue;
        const targetX = gx * cellW + cellW * 0.5;
        const targetY = gy * cellH + cellH * 0.5;
        const edge = Math.floor(Math.random() * 4);
        let startX;
        let startY;
        if (edge === 0) { startX = Math.random() * width; startY = -height * (0.08 + Math.random() * 0.22); }
        else if (edge === 1) { startX = width * (1.08 + Math.random() * 0.22); startY = Math.random() * height; }
        else if (edge === 2) { startX = Math.random() * width; startY = height * (1.08 + Math.random() * 0.22); }
        else { startX = -width * (0.08 + Math.random() * 0.22); startY = Math.random() * height; }

        particles.push({
          sx: startX,
          sy: startY,
          tx: targetX,
          ty: targetY,
          delay: Math.random() * 900,
          duration: 1050 + Math.random() * 1250,
          size: Math.max(1.1, Math.min(cellW, cellH) * (0.25 + Math.random() * 0.45)),
          phase: Math.random() * Math.PI * 2,
          bright: Math.random() > 0.83
        });
      }
    }

    for (let i = 0; i < 42; i += 1) {
      const fromLeft = i % 2 === 0;
      streaks.push({
        sx: fromLeft ? -width * 0.15 : width * 1.15,
        sy: Math.random() * height,
        ex: width * (0.18 + Math.random() * 0.64),
        ey: height * (0.08 + Math.random() * 0.84),
        delay: Math.random() * 2100,
        duration: 500 + Math.random() * 950,
        alpha: 0.25 + Math.random() * 0.55,
        width: 0.6 + Math.random() * 1.7
      });
    }

    const start = performance.now();
    const totalDuration = 4000;
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
    const easeOutQuad = t => 1 - (1 - t) * (1 - t);

    const frame = now => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / totalDuration);

      if (elapsed < 600) setStatus(dynamicText('Iniciando secuencia visual...', 'Starting visual sequence...'));
      else if (elapsed < 1500) setStatus(dynamicText('Encendiendo destellos...', 'Igniting light traces...'));
      else if (elapsed < 2700) setStatus(dynamicText('Bits convergiendo...', 'Bits converging...'));
      else if (elapsed < totalDuration) setStatus(dynamicText('Revelando identidad...', 'Revealing identity...'));
      else setStatus(dynamicText('Perfil materializado.', 'Profile materialized.'));

      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      // Moving cinematic flare.
      const flareX = width * (-0.08 + progress * 1.16);
      const flareY = height * (0.18 + 0.52 * progress);
      const flare = ctx.createRadialGradient(flareX, flareY, 0, flareX, flareY, width * 0.18);
      flare.addColorStop(0, 'rgba(255,255,255,0.72)');
      flare.addColorStop(0.14, 'rgba(187,216,255,0.38)');
      flare.addColorStop(0.42, 'rgba(37,99,235,0.12)');
      flare.addColorStop(1, 'rgba(37,99,235,0)');
      ctx.fillStyle = flare;
      ctx.beginPath();
      ctx.arc(flareX, flareY, width * 0.18, 0, Math.PI * 2);
      ctx.fill();
      lab.style.setProperty('--flare-x', `${(flareX / width) * 100}%`);
      lab.style.setProperty('--flare-y', `${(flareY / height) * 100}%`);

      // Light streaks crossing the frame.
      streaks.forEach(streak => {
        const raw = Math.min(1, Math.max(0, (elapsed - streak.delay) / streak.duration));
        if (raw <= 0 || raw >= 1) return;
        const t = easeOutQuad(raw);
        const x = streak.sx + (streak.ex - streak.sx) * t;
        const y = streak.sy + (streak.ey - streak.sy) * t;
        const previous = Math.max(0, t - 0.09);
        const px = streak.sx + (streak.ex - streak.sx) * previous;
        const py = streak.sy + (streak.ey - streak.sy) * previous;
        ctx.strokeStyle = `rgba(186,218,255,${Math.sin(raw * Math.PI) * streak.alpha})`;
        ctx.lineWidth = streak.width;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      // Square bits converge into a digital portrait field, then dissolve to reveal the real photo.
      particles.forEach(particle => {
        const raw = Math.min(1, Math.max(0, (elapsed - particle.delay) / particle.duration));
        if (raw <= 0) return;
        const t = easeOutCubic(raw);
        const inv = 1 - t;
        const x = particle.sx + (particle.tx - particle.sx) * t + Math.sin(elapsed / 150 + particle.phase) * inv * 12;
        const y = particle.sy + (particle.ty - particle.sy) * t + Math.cos(elapsed / 190 + particle.phase) * inv * 10;
        const dissolve = progress > 0.72 ? Math.max(0, 1 - (progress - 0.72) / 0.28) : 1;
        const alpha = Math.min(0.88, 0.18 + raw * 0.75) * dissolve;
        const size = particle.size * (1.45 - raw * 0.35);
        ctx.fillStyle = particle.bright
          ? `rgba(242,247,255,${alpha})`
          : `rgba(95,151,244,${alpha * 0.72})`;
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      });

      ctx.restore();

      if (elapsed < totalDuration) {
        requestAnimationFrame(frame);
      } else {
        lab.classList.add('is-materialized');
        canvas.style.opacity = '0';
        setStatus(dynamicText('Perfil materializado.', 'Profile materialized.'));
      }
    };

    requestAnimationFrame(frame);
    window.setTimeout(() => {
      lab.classList.add('is-materialized');
      setStatus(dynamicText('Perfil materializado.', 'Profile materialized.'));
    }, 4200);
    window.addEventListener('portfolio:languagechange', () => {
      if (lab.classList.contains('is-materialized')) setStatus(dynamicText('Perfil materializado.', 'Profile materialized.'));
    });
  });
})();
