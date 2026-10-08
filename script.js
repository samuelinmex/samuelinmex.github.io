'use strict';

(() => {
  const translations = {
    es: {
      pageTitle: 'Samuel Mancilla — Tecnología con criterio',
      description: 'Samuel Mancilla, Ingeniero en Sistemas Computacionales. Soporte N1/N2, Microsoft 365, infraestructura TI, automatización y mejora de procesos en Cancún, México.',
      ogDescription: 'Infraestructura TI, soporte y automatización con una mirada integral de la operación.',
      skip: 'Saltar al contenido', home: 'Samuel Mancilla, inicio', navLabel: 'Navegación principal', mobileNavLabel: 'Navegación móvil',
      navProfile: 'Perfil', navImpact: 'Impacto', navCareer: 'Trayectoria', navContact: 'Contacto', languageLabel: 'Idioma',
      openPreferences: 'Abrir opciones de accesibilidad y apariencia', closePreferences: 'Cerrar opciones', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
      heroEyebrow: 'INGENIERO EN SISTEMAS COMPUTACIONALES', heroLineOne: 'Tecnología', heroLineTwo: 'con criterio.',
      heroIntro: 'Detrás de cada sistema, hay personas.<br>Mi trabajo es hacer que ambos avancen.',
      heroSpecialties: 'Infraestructura TI · Soporte N1/N2 · Automatización', explore: 'Explorar mi trabajo', download: 'Descargar CV',
      portraitAlt: 'Retrato de Samuel Mancilla en blanco y negro', signatureRole: 'Tecnología & mejora continua', location: 'CANCÚN, MÉXICO', scroll: 'UNA MIRADA MÁS CERCANA',
      disciplinesLabel: 'Áreas de experiencia', stripInfrastructure: 'Infraestructura', stripAutomation: 'Automatización', stripQuality: 'Mejora continua',
      profileMarker: 'LA PERSONA DETRÁS DEL SISTEMA', profileTitle: 'Una mirada técnica.<br><em>Un sentido humano.</em>',
      profileCaption: 'De Chiapas a Cancún.<br>Siempre, hacia lo que sigue.',
      profilePortraitAlt: 'Samuel Mancilla, mirando hacia arriba a la derecha',
      profileLead: 'Me apasiona entender cómo funcionan las cosas. Y encontrar una forma de hacerlas funcionar mejor.',
      profileBody: 'Soy Samuel Mancilla, Ingeniero en Sistemas Computacionales. Mi trayectoria conecta la tecnología con la operación industrial: soporte a usuarios, administración de infraestructura y Microsoft 365, automatización y liderazgo en calidad.',
      profileBodyTwo: 'Esa combinación me enseñó a mirar más allá del incidente. Entender el proceso, escuchar a las personas y documentar una solución que tenga sentido para quienes la usan.',
      principleOne: 'Entender.', principleTwo: 'Resolver.', principleThree: 'Mejorar.',
      statSupport: 'Soporte técnico<br>remoto y en sitio', people: ' personas', statTeam: 'Equipo liderado<br>en calidad · Tatung', months: ' meses', statProduction: 'Turno en primer lugar en metas<br>diarias de producción · TED',
      impactMarker: 'CONTRIBUCIONES QUE CUENTAN', impactHint: 'SELECCIONA UN CASO PARA EXPLORARLO', impactTitle: 'El criterio se convierte<br><em>en resultados.</em>', caseTabsLabel: 'Logros profesionales',
      caseItTitle: 'Orden en la operación TI', caseItTag: 'GLPI + OCS Inventory', caseAutoTitle: 'Menos tareas repetitivas', caseAutoTag: 'Automatización + datos', caseQualityTitle: 'Calidad desde el proceso', caseQualityTag: 'Liderazgo + mejora continua',
      caseItHeading: 'De incidencias aisladas<br>a una operación trazable.',
      caseItBody: 'Implementé y administré GLPI y OCS Inventory para centralizar el registro de incidencias, los activos TI y la trazabilidad de los equipos. Lo desplegué desde cero: instalación de Ubuntu Server, base de datos MySQL y DNS local en Windows Server 2019 para entrar con una URL interna.',
      itMapLabel: 'Áreas centralizadas con GLPI y OCS Inventory', incidents: 'Incidencias', assets: 'Activos', traceability: 'Trazabilidad', contribution: 'CONTRIBUCIÓN',
      caseItOutcome: 'Gestión centralizada de incidencias y activos, con seguimiento de equipos, acceso mediante una URL interna y apoyo a la continuidad operativa.',
      caseAutoHeading: 'La tecnología también está<br>en los pequeños cambios.',
      caseAutoBody: 'En el INE automaticé parcialmente la captura de movimientos extraordinarios y documentos testimoniales mediante una macro. Más adelante desarrollé herramientas internas para simplificar tareas operativas recurrentes.',
      workflowInput: 'Información', workflowProcess: 'Organización<br>automática', workflowOutput: 'Registro',
      caseAutoOutcome: 'Información organizada conforme al proceso del módulo y herramientas diseñadas para simplificar el trabajo diario.',
      caseQualityHeading: 'La mejora se sostiene<br>con personas y método.',
      caseQualityBody: 'En Tatung avancé de Inspector a Técnico y Supervisor de Calidad, liderando a 9 personas. En TED de México, nuestro turno se mantuvo en primer lugar en objetivos diarios de producción durante seis meses.',
      qualityTeam: 'personas en el equipo', qualityMonths: 'meses en primer lugar',
      caseQualityOutcome: 'Capacitación QA, estandarización de inspección y análisis de causa raíz. Un enfoque preventivo para cuidar la calidad desde el proceso.',
      caseOffTitle: 'Préstamos sin perder datos', caseOffTag: 'VB.NET + modo sin conexión', caseHrTitle: 'Expedientes en orden', caseHrTag: 'Python + Excel', caseCtlTitle: 'Control a la vista', caseCtlTag: 'WordPress + Excel', caseWebTitle: 'Del boceto al navegador', caseWebTag: 'Desarrollo web + GitHub',
      caseOffMeta: 'APLICACIÓN DE ESCRITORIO', caseOffHeading: 'Cada movimiento registrado,<br>incluso sin conexión.',
      caseOffBody: 'Programé una aplicación para llevar el control detallado de préstamos y asignaciones de equipo. Completa de forma semiautomática los formatos de la empresa y, si la conexión falla, guarda los movimientos en el equipo para actualizar la base de datos cuando se recupera.',
      offInput: 'Préstamo o<br>asignación', offCore: 'Guardado local<br>si falla la red', offOutput: 'Base de datos<br>actualizada',
      caseOffOutcome: 'Control granular de préstamos y asignaciones, formatos llenados de forma semiautomática y movimientos pendientes protegidos ante fallos de conexión.',
      tagOffline: 'Modo sin conexión', tagSync: 'Sincronización', tagForms: 'Formatos semiautomáticos',
      caseHrMeta: 'RECURSOS HUMANOS', caseHrHeading: 'Cada documento,<br>en la carpeta de su persona.',
      caseHrBody: 'Diseñé una aplicación para Recursos Humanos que lee archivos identificados con un ID, los compara contra una lista de registros en Excel y los asigna a una carpeta con el nombre de cada persona. Así se organiza la información de forma estructurada, con menos tiempo y menos errores.',
      hrInput: 'Archivos<br>con ID', hrCore: 'Comparación<br>con Excel', hrOutput: 'Carpeta por<br>persona',
      caseHrOutcome: 'Documentación del personal clasificada de forma estructurada, con menos tiempo de proceso y menos errores de organización.', tagFiles: 'Automatización de archivos',
      caseCtlMeta: 'CONTROL OPERATIVO', caseCtlHeading: 'Disponibilidad y vencimientos,<br>siempre visibles.',
      caseCtlBody: 'Con WordPress y un plugin de reservas organicé el préstamo de un equipo compartido para proyectos de diseño 3D: quien lo necesita consulta si está libre o reservado, sin preguntar. En Excel armé un dashboard para controlar licenciamientos, con alerta de las tres próximas a vencer, y el vencimiento de dominios públicos.',
      ctlInput: 'Equipo<br>compartido', ctlCore: 'Reserva<br>en línea', ctlOutput: 'Estado visible<br>para todos',
      caseCtlOutcome: 'Seguimiento claro del uso de un equipo compartido y vencimientos de licencias y dominios bajo control en un dashboard.',
      tagBooking: 'Plugin de reservas', tagDashboard: 'Dashboard', tagRenewals: 'Licencias y dominios',
      caseWebMeta: 'DESARROLLO WEB', caseWebHeading: 'Del boceto<br>al navegador.', caseWebBody: 'He desarrollado sitios web y proyectos técnicos, y los mantengo en GitHub. Estos son algunos de mis repositorios.',
      reposLabel: 'Repositorios en GitHub', caseWebOutcome: 'Desarrollo web de principio a fin, desde la estructura hasta la puesta en producción.',
      tagLocalDns: 'DNS local · Windows Server 2019',
      tagDocumentation: 'Documentación', tagWhys: '5 Porqués', tagLeadership: 'Liderazgo QA', sourceNote: 'Contribuciones documentadas en mi trayectoria profesional.',
      capMarker: 'MI CAJA DE HERRAMIENTAS', capTitle: 'Tecnología al servicio<br><em>de la operación.</em>', capIntro: 'Un conjunto de capacidades conectado por una misma intención: resolver con claridad.',
      capOne: 'Sistemas & infraestructura', capOneBody: 'Administración de entornos empresariales, servidores y almacenamiento. Diagnóstico de conectividad y soporte a recursos corporativos.',
      capTwo: 'Microsoft 365 & soporte', capTwoBody: 'Atención N1/N2 remota y en sitio. Gestión de usuarios, permisos y licencias; acompañamiento a usuarios y coordinación con proveedores.',
      capThree: 'Datos & automatización', capThreeBody: 'Herramientas internas en Python y Visual Basic .NET, dashboards en Excel, organización de información y desarrollo web: desde la estructura hasta la puesta en producción.',
      capFour: 'Calidad & liderazgo', capFourBody: 'Experiencia en inspección, metrología, manufactura y formación de equipos. Métodos de análisis para entender la causa y prevenir recurrencias.',
      advancedExcel: 'Excel avanzado', webDevelopment: 'Desarrollo web', metrology: 'Metrología', training: 'Capacitación',
      careerMarker: 'EXPERIENCIA QUE CONECTA', careerTitle: 'Cada etapa,<br><em>una nueva perspectiva.</em>', careerIntro: 'Tecnología, calidad y operación.<br>Una trayectoria que suma perspectivas.',
      careerNueveRole: 'Especialista en Soluciones TI', careerNueveType: 'TECNOLOGÍA', careerNueveDates: '02 NOV 2023 — 18 SEP 2026',
      careerNueveBody: 'Soporte N1/N2, administración de Microsoft 365 y SharePoint/OneDrive, servidores y Synology NAS. Implementación de GLPI/OCS, automatizaciones internas, diagnóstico de redes y telefonía IP.',
      careerTatungRole: 'Inspector · Técnico · Supervisor de Calidad', careerTatungType: 'LIDERAZGO & QA', careerTatungDates: '21 JUL 2021 — 11 AGO 2023',
      careerTatungBody: 'Promoción de Inspector a Técnico y Supervisor. Liderazgo de un equipo de 9 personas, capacitación QA, análisis 8D y estandarización de inspección, desde Incoming hasta liberación para embarque.',
      career2022Role: 'Ensamble SMT · Fibra óptica · Operación', career2022Type: 'MANUFACTURA',
      careerCommscopeDates: 'ADC DE JUÁREZ (COMMSCOPE) · 06 JUN — 18 JUL 2022', careerCommscopeBody: 'Inspección, ensamble, empaque y certificación de calidad de productos de fibra óptica. Apoyo como auxiliar de supervisor y seguimiento de materiales.',
      careerFoxconnDates: 'SCIENTIFIC ATLANTA DE MÉXICO (FOXCONN) · 19 JUL — 14 SEP 2022', careerFoxconnBody: 'Ensamble y operación SMT, inspección de soldadura, mantenimiento básico de equipo y control de disponibilidad de materiales.',
      careerIndustryRole: 'Calidad · Ensamble · Mejora de procesos', careerIndustryType: 'INDUSTRIA',
      careerFirstronicDates: 'IMS OPERACIONES (FIRSTRONIC) · 10 AGO 2020 — 08 JUL 2021', careerFirstronicBody: 'Inspector y Técnico de Control de Calidad en electrónica automotriz. Liberación de líneas, alertas de calidad, análisis de causa raíz y capacitación.',
      careerTedDates: 'TED DE MÉXICO · 27 JUN 2019 — 14 AGO 2020', careerTedBody: 'Ensamble y soldadura de componentes automotrices. Turno reconocido por seis meses en primer lugar en objetivos diarios; colaboración con ingeniería en mejoras de operación.',
      careerEciDates: 'ELECTRO COMPONENTES DE MÉXICO · 04 FEB — 23 MAY 2019', careerEciBody: 'Ensamble de arneses, apoyo como auxiliar de supervisor e inspección de calidad de producto para embarque.',
      careerIneRole: 'Captura de datos · Atención ciudadana · Soporte TI', careerIneType: 'SERVICIO & DATOS', careerIneDates: '03 MAR 2015 — 02 ENE 2019',
      careerIneBody: 'Captura y control documental, atención a usuarios y automatización parcial con macros. Instalación de aplicaciones, mantenimiento y configuración de impresoras, escáneres y pads de firma.',
      educationLabel: 'FORMACIÓN', degree: 'Ingeniería en Sistemas Computacionales', completeCv: 'Descargar CV completo',
      learningNote: 'Sigo aprendiendo. Linux, seguridad de la información, virtualización, bases de datos y desarrollo web forman parte de mi formación continua.',
      contactMarker: 'LA SIGUIENTE CONVERSACIÓN', contactTitle: 'Los buenos proyectos<br><em>empiezan hablando.</em>', contactIntro: '¿Tu equipo necesita soporte, infraestructura o una mirada fresca a sus procesos? Hablemos de lo que podemos construir.',
      contactCvLabel: 'CURRÍCULUM', contactCvText: 'Mi experiencia, en detalle', footerLocation: 'Cancún, Quintana Roo · México', backToTop: 'Volver al inicio',
      preferencesEyebrow: 'A TU MANERA', preferencesTitle: 'Accesibilidad y apariencia', themeLegend: 'Elige un tema', themeGraphite: 'Grafito', themeLight: 'Claro', themeContrast: 'Alto contraste',
      reduceMotion: 'Reducir movimiento', reduceMotionHelp: 'Desactiva animaciones y desplazamiento suave.', cursorLabel: 'Halo del cursor', cursorHelp: 'Visible con ratón, también en alto contraste.',
      textSize: 'Tamaño del texto', textSizeHelp: 'Ajusta la lectura a tu comodidad.', textNormal: 'Normal', textLarge: 'Grande', textLarger: 'Más grande',
      savedLocally: 'Tus preferencias se recuerdan en este navegador.', resetPreferences: 'Restablecer preferencias', preferencesReset: 'Preferencias restablecidas.', languageChanged: 'Idioma cambiado a español.'
    },
    en: {
      pageTitle: 'Samuel Mancilla — Technology with purpose',
      description: 'Samuel Mancilla, Computer Systems Engineer. L1/L2 support, Microsoft 365, IT infrastructure, automation and process improvement in Cancún, Mexico.',
      ogDescription: 'IT infrastructure, support and automation informed by hands-on operational experience.',
      skip: 'Skip to content', home: 'Samuel Mancilla, home', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation',
      navProfile: 'Profile', navImpact: 'Impact', navCareer: 'Experience', navContact: 'Contact', languageLabel: 'Language',
      openPreferences: 'Open accessibility and appearance settings', closePreferences: 'Close settings', openMenu: 'Open menu', closeMenu: 'Close menu',
      heroEyebrow: 'COMPUTER SYSTEMS ENGINEER', heroLineOne: 'Technology', heroLineTwo: 'with purpose.',
      heroIntro: 'Behind every system, there are people.<br>My work helps both move forward.',
      heroSpecialties: 'IT infrastructure · L1/L2 support · Automation', explore: 'Explore my work', download: 'Download résumé',
      portraitAlt: 'Black-and-white portrait of Samuel Mancilla', signatureRole: 'Technology & continuous improvement', location: 'CANCÚN, MEXICO', scroll: 'TAKE A CLOSER LOOK',
      disciplinesLabel: 'Areas of expertise', stripInfrastructure: 'Infrastructure', stripAutomation: 'Automation', stripQuality: 'Continuous improvement',
      profileMarker: 'THE PERSON BEHIND THE SYSTEM', profileTitle: 'A technical perspective.<br><em>A human approach.</em>',
      profileCaption: 'From Chiapas to Cancún.<br>Always moving forward.',
      profilePortraitAlt: 'Samuel Mancilla, looking up and to the right',
      profileLead: 'I am driven to understand how things work. And to find a way to make them work better.',
      profileBody: 'I am Samuel Mancilla, a Computer Systems Engineer. My experience connects technology with industrial operations: user support, infrastructure and Microsoft 365 administration, automation and quality leadership.',
      profileBodyTwo: 'That combination taught me to look beyond the incident. To understand the process, listen to people and document a solution that makes sense to those who use it.',
      principleOne: 'Understand.', principleTwo: 'Resolve.', principleThree: 'Improve.',
      statSupport: 'Technical support<br>remote and on-site', people: ' people', statTeam: 'Quality team<br>led at Tatung', months: ' months', statProduction: 'Shift ranked first in daily<br>production targets · TED',
      impactMarker: 'CONTRIBUTIONS THAT MATTER', impactHint: 'SELECT A CASE TO EXPLORE', impactTitle: 'Sound judgment.<br><em>Practical results.</em>', caseTabsLabel: 'Professional achievements',
      caseItTitle: 'Bringing order to IT', caseItTag: 'GLPI + OCS Inventory', caseAutoTitle: 'Fewer repetitive tasks', caseAutoTag: 'Automation + data', caseQualityTitle: 'Quality from the start', caseQualityTag: 'Leadership + improvement',
      caseItHeading: 'From isolated incidents<br>to traceable operations.',
      caseItBody: 'I implemented and administered GLPI and OCS Inventory to centralize incident records, IT assets and equipment traceability. I deployed it from scratch: Ubuntu Server installation, a MySQL database and local DNS on Windows Server 2019 so it can be reached through an internal URL.',
      itMapLabel: 'Areas centralized with GLPI and OCS Inventory', incidents: 'Incidents', assets: 'Assets', traceability: 'Traceability', contribution: 'CONTRIBUTION',
      caseItOutcome: 'Centralized incident and asset management, with equipment tracking, access through an internal URL and support for operational continuity.',
      caseAutoHeading: 'Technology also lives<br>in the small changes.',
      caseAutoBody: 'At INE, I partially automated data entry for exceptional transactions and testimonial documents using a macro. Later, I developed internal tools to simplify recurring operational tasks.',
      workflowInput: 'Information', workflowProcess: 'Automated<br>organization', workflowOutput: 'Records',
      caseAutoOutcome: 'Information organized according to the office workflow, and tools designed to simplify day-to-day work.',
      caseQualityHeading: 'Lasting improvement takes<br>people and method.',
      caseQualityBody: 'At Tatung, I progressed from Quality Inspector to Technician and Supervisor, leading 9 people. At TED de México, our shift ranked first in daily production targets for six months.',
      qualityTeam: 'people on the team', qualityMonths: 'months ranked first',
      caseQualityOutcome: 'QA training, standardized inspections and root-cause analysis. A preventive approach to quality throughout the process.',
      caseOffTitle: 'Loans without lost data', caseOffTag: 'VB.NET + offline mode', caseHrTitle: 'Records in order', caseHrTag: 'Python + Excel', caseCtlTitle: 'Control at a glance', caseCtlTag: 'WordPress + Excel', caseWebTitle: 'From sketch to browser', caseWebTag: 'Web development + GitHub',
      caseOffMeta: 'DESKTOP APPLICATION', caseOffHeading: 'Every movement recorded,<br>even offline.',
      caseOffBody: 'I built an application to track equipment loans and assignments in detail. It semi-automatically completes the company’s forms and, if the connection fails, stores movements on the device so the database can be updated once the connection returns.',
      offInput: 'Loan or<br>assignment', offCore: 'Saved locally<br>if the network fails', offOutput: 'Database<br>updated',
      caseOffOutcome: 'Granular control of loans and assignments, semi-automatically completed forms and pending movements protected against connection failures.',
      tagOffline: 'Offline mode', tagSync: 'Synchronization', tagForms: 'Semi-automated forms',
      caseHrMeta: 'HUMAN RESOURCES', caseHrHeading: 'Each document,<br>in its owner’s folder.',
      caseHrBody: 'I designed an application for Human Resources that reads files identified by an ID, matches them against a list of records in Excel and assigns them to a folder named after each person. Information is organized in a structured way, in less time and with fewer errors.',
      hrInput: 'Files<br>with ID', hrCore: 'Matching<br>with Excel', hrOutput: 'Folder per<br>person',
      caseHrOutcome: 'Personnel documentation classified in a structured way, with less processing time and fewer filing errors.', tagFiles: 'File automation',
      caseCtlMeta: 'OPERATIONAL CONTROL', caseCtlHeading: 'Availability and renewals,<br>always visible.',
      caseCtlBody: 'With WordPress and a booking plugin, I organized loans of a shared workstation for 3D design projects: anyone who needs it can see whether it is free or reserved, without having to ask. In Excel, I built a dashboard to manage software licensing, alerting on the three closest to expiring, along with public domain expirations.',
      ctlInput: 'Shared<br>equipment', ctlCore: 'Online<br>booking', ctlOutput: 'Status visible<br>to everyone',
      caseCtlOutcome: 'Clear tracking of a shared workstation and license and domain expirations under control in one dashboard.',
      tagBooking: 'Booking plugin', tagDashboard: 'Dashboard', tagRenewals: 'Licenses & domains',
      caseWebMeta: 'WEB DEVELOPMENT', caseWebHeading: 'From sketch<br>to browser.', caseWebBody: 'I have built websites and technical projects, and I maintain them on GitHub. Here are some of my repositories.',
      reposLabel: 'GitHub repositories', caseWebOutcome: 'End-to-end web development, from structure through production launch.',
      tagLocalDns: 'Local DNS · Windows Server 2019',
      tagDocumentation: 'Documentation', tagWhys: '5 Whys', tagLeadership: 'QA leadership', sourceNote: 'Contributions documented in my professional experience.',
      capMarker: 'MY TOOLKIT', capTitle: 'Technology that serves<br><em>the operation.</em>', capIntro: 'A connected set of capabilities with one shared purpose: solving problems with clarity.',
      capOne: 'Systems & infrastructure', capOneBody: 'Administration of enterprise environments, servers and storage. Connectivity troubleshooting and support for corporate resources.',
      capTwo: 'Microsoft 365 & support', capTwoBody: 'Remote and on-site L1/L2 support. User, permission and license management; user assistance and vendor coordination.',
      capThree: 'Data & automation', capThreeBody: 'Internal tools in Python and Visual Basic .NET, Excel dashboards, information management and web development, from structure through production launch.',
      capFour: 'Quality & leadership', capFourBody: 'Experience in inspection, metrology, manufacturing and team training. Analytical methods to understand causes and prevent recurrence.',
      advancedExcel: 'Advanced Excel', webDevelopment: 'Web development', metrology: 'Metrology', training: 'Training',
      careerMarker: 'EXPERIENCE THAT CONNECTS', careerTitle: 'Every chapter,<br><em>a new perspective.</em>', careerIntro: 'Technology, quality and operations.<br>Experience that brings perspectives together.',
      careerNueveRole: 'IT Solutions Specialist', careerNueveType: 'TECHNOLOGY', careerNueveDates: '02 NOV 2023 — 18 SEP 2026',
      careerNueveBody: 'L1/L2 support, Microsoft 365 and SharePoint/OneDrive administration, servers and Synology NAS. GLPI/OCS implementation, internal automation, network troubleshooting and IP telephony.',
      careerTatungRole: 'Quality Inspector · Technician · Supervisor', careerTatungType: 'LEADERSHIP & QA', careerTatungDates: '21 JUL 2021 — 11 AUG 2023',
      careerTatungBody: 'Promoted from Inspector to Technician and Supervisor. Led a team of 9, delivered QA training, performed 8D analysis and standardized inspections from Incoming to shipment release.',
      career2022Role: 'SMT assembly · Fiber optics · Operations', career2022Type: 'MANUFACTURING',
      careerCommscopeDates: 'ADC DE JUÁREZ (COMMSCOPE) · 06 JUN — 18 JUL 2022', careerCommscopeBody: 'Inspection, assembly, packaging and quality certification of fiber-optic products. Assistant-supervisor duties and material tracking.',
      careerFoxconnDates: 'SCIENTIFIC ATLANTA DE MÉXICO (FOXCONN) · 19 JUL — 14 SEP 2022', careerFoxconnBody: 'Assembly and SMT operation, solder inspection, basic equipment maintenance and material-availability monitoring.',
      careerIndustryRole: 'Quality · Assembly · Process improvement', careerIndustryType: 'INDUSTRY',
      careerFirstronicDates: 'IMS OPERACIONES (FIRSTRONIC) · 10 AUG 2020 — 08 JUL 2021', careerFirstronicBody: 'Quality Inspector and Technician in automotive electronics. Production-line release, quality alerts, root-cause analysis and training.',
      careerTedDates: 'TED DE MÉXICO · 27 JUN 2019 — 14 AUG 2020', careerTedBody: 'Automotive component assembly and soldering. Shift recognized for six months ranked first in daily targets; collaboration with engineering on operational improvements.',
      careerEciDates: 'ELECTRO COMPONENTES DE MÉXICO · 04 FEB — 23 MAY 2019', careerEciBody: 'Wiring-harness assembly, assistant-supervisor support and quality inspection of products for shipment.',
      careerIneRole: 'Data entry · Citizen services · IT support', careerIneType: 'SERVICE & DATA', careerIneDates: '03 MAR 2015 — 02 JAN 2019',
      careerIneBody: 'Data entry and document control, user services and partial automation with macros. Application installation, maintenance, and configuration of printers, scanners and signature pads.',
      educationLabel: 'EDUCATION', degree: 'Computer Systems Engineering', completeCv: 'Download full résumé',
      learningNote: 'I keep learning. Linux, information security, virtualization, databases and web development are part of my ongoing professional development.',
      contactMarker: 'THE NEXT CONVERSATION', contactTitle: 'Good projects start<br><em>with a conversation.</em>', contactIntro: 'Does your team need support, infrastructure or a fresh perspective on its processes? Let’s talk about what we can build.',
      contactCvLabel: 'RÉSUMÉ', contactCvText: 'My experience, in detail', footerLocation: 'Cancún, Quintana Roo · Mexico', backToTop: 'Back to top',
      preferencesEyebrow: 'YOUR WAY', preferencesTitle: 'Accessibility & appearance', themeLegend: 'Choose a theme', themeGraphite: 'Graphite', themeLight: 'Light', themeContrast: 'High contrast',
      reduceMotion: 'Reduce motion', reduceMotionHelp: 'Turn off animations and smooth scrolling.', cursorLabel: 'Cursor halo', cursorHelp: 'Visible with a mouse, including high contrast.',
      textSize: 'Text size', textSizeHelp: 'Adjust the reading experience to suit you.', textNormal: 'Normal', textLarge: 'Large', textLarger: 'Larger',
      savedLocally: 'Your preferences are remembered in this browser.', resetPreferences: 'Reset preferences', preferencesReset: 'Preferences reset.', languageChanged: 'Language changed to English.'
    }
  };

  const root = document.documentElement;
  const mediaMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mediaPointer = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const mobileBreakpoint = window.matchMedia('(max-width: 800px)');
  const storageKey = 'sm-portfolio-preferences';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch (_) { /* Storage can be unavailable in private browsing. */ }
  const urlLanguage = new URLSearchParams(window.location.search).get('lang');
  const preferences = {
    theme: ['graphite', 'light', 'contrast'].includes(saved.theme) ? saved.theme : 'graphite',
    motion: typeof saved.motion === 'boolean' ? saved.motion : null,
    cursor: saved.cursor !== false,
    fontSize: [100, 112, 125].includes(saved.fontSize) ? saved.fontSize : 100,
    language: ['es', 'en'].includes(urlLanguage) ? urlLanguage : (saved.language === 'en' ? 'en' : 'es')
  };

  const motionToggle = document.querySelector('#motion-toggle');
  const cursorToggle = document.querySelector('#cursor-toggle');
  const fontSizeSelect = document.querySelector('#font-size');
  const dialog = document.querySelector('#preferences');
  const menuToggle = document.querySelector('#menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const halo = document.querySelector('#cursor-halo');
  const statusMessage = document.querySelector('#status-message');
  const intro = document.querySelector('#cinematic-intro');
  const introMotionToggle = document.querySelector('#intro-motion-toggle');
  const introChoices = Array.from(document.querySelectorAll('[data-entry-lang]'));
  const motionEnabled = () => preferences.motion === null ? !mediaMotion.matches : preferences.motion;

  function storePreferences() {
    try { localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch (_) { /* Preferences still work for this visit. */ }
  }
  function updateMenuLabel() {
    menuToggle.setAttribute('aria-label', translations[preferences.language][mobileNav.hidden ? 'openMenu' : 'closeMenu']);
  }
  function updateTextLayout() {
    root.dataset.largeText = String(parseFloat(getComputedStyle(root).fontSize) > 17);
    updateTabOrientation();
  }
  function applyPreferences() {
    root.dataset.theme = preferences.theme;
    root.dataset.motion = motionEnabled() ? 'full' : 'reduced';
    root.dataset.cursor = preferences.cursor ? 'on' : 'off';
    root.style.fontSize = `${preferences.fontSize}%`;
    root.classList.toggle('js-motion', motionEnabled() && 'IntersectionObserver' in window);
    if (!motionEnabled()) document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
    document.querySelectorAll('input[name="theme"]').forEach(input => input.checked = input.value === preferences.theme);
    motionToggle.checked = !motionEnabled();
    introMotionToggle.checked = !motionEnabled();
    cursorToggle.checked = preferences.cursor;
    fontSizeSelect.value = String(preferences.fontSize);
    document.querySelector('meta[name="theme-color"]').content = { graphite: '#10151c', light: '#f7f8fa', contrast: '#000000' }[preferences.theme];
    if (!preferences.cursor) halo.classList.remove('active');
    updateTextLayout();
  }
  function setLanguage(language, announce = true) {
    if (!(language in translations)) return;
    preferences.language = language;
    const dictionary = translations[language];
    root.lang = language;
    document.title = dictionary.pageTitle;
    document.querySelector('meta[name="description"]').content = dictionary.description;
    document.querySelector('meta[property="og:title"]').content = dictionary.pageTitle;
    document.querySelector('meta[property="og:description"]').content = dictionary.ogDescription;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = dictionary[element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    for (const [dataKey, attribute] of [['i18nAria', 'aria-label'], ['i18nAlt', 'alt'], ['i18nTitle', 'title']]) {
      const selector = { i18nAria: '[data-i18n-aria]', i18nAlt: '[data-i18n-alt]', i18nTitle: '[data-i18n-title]' }[dataKey];
      document.querySelectorAll(selector).forEach(element => {
        if (dictionary[element.dataset[dataKey]] !== undefined) element.setAttribute(attribute, dictionary[element.dataset[dataKey]]);
      });
    }
    document.querySelectorAll('[data-lang]').forEach(button => {
      const active = button.dataset.lang === language;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const filename = `Samuel-Mancilla-CV-${language.toUpperCase()}.pdf`;
    document.querySelectorAll('.cv-download').forEach(link => {
      link.href = `assets/cv/${filename}`;
      link.download = filename;
      link.setAttribute('hreflang', language);
      link.setAttribute('type', 'application/pdf');
    });
    updateMenuLabel();
    if (announce) statusMessage.textContent = dictionary.languageChanged;
    storePreferences();
  }

  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelectorAll('input[name="theme"]').forEach(input => input.addEventListener('change', () => {
    preferences.theme = input.value; applyPreferences(); storePreferences();
  }));
  motionToggle.addEventListener('change', () => { preferences.motion = !motionToggle.checked; applyPreferences(); storePreferences(); });
  cursorToggle.addEventListener('change', () => { preferences.cursor = cursorToggle.checked; applyPreferences(); storePreferences(); });
  fontSizeSelect.addEventListener('change', () => { preferences.fontSize = Number(fontSizeSelect.value); applyPreferences(); storePreferences(); });
  document.querySelector('#reset-preferences').addEventListener('click', () => {
    Object.assign(preferences, { theme: 'graphite', motion: null, cursor: true, fontSize: 100 });
    applyPreferences(); storePreferences(); statusMessage.textContent = translations[preferences.language].preferencesReset;
  });
  mediaMotion.addEventListener('change', applyPreferences);

  function closeMenu(restoreFocus = false) {
    mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); updateMenuLabel();
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
    menuToggle.setAttribute('aria-expanded', String(!mobileNav.hidden)); updateMenuLabel();
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    closeMenu();
    const target = link.hash ? document.querySelector(link.hash) : null;
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
  }));
  document.addEventListener('click', event => { if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true); });
  mobileBreakpoint.addEventListener('change', () => { closeMenu(); updateTabOrientation(); });
  document.querySelector('#preferences-open').addEventListener('click', () => {
    closeMenu(); dialog.showModal(); dialog.append(halo); document.body.classList.add('dialog-open');
  });
  document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); document.body.append(halo); });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });

  const caseTabs = Array.from(document.querySelectorAll('.case-tab'));
  function activateTab(tab, focus = false) {
    caseTabs.forEach(candidate => {
      const active = candidate === tab;
      candidate.setAttribute('aria-selected', String(active)); candidate.tabIndex = active ? 0 : -1;
      candidate.classList.toggle('selected', active);
      const panel = document.getElementById(candidate.getAttribute('aria-controls'));
      panel.hidden = !active; panel.classList.remove('panel-enter');
      if (active && motionEnabled()) { void panel.offsetWidth; panel.classList.add('panel-enter'); }
    });
    if (focus) tab.focus();
  }
  function updateTabOrientation() {
    document.querySelector('.case-selectors').setAttribute('aria-orientation', mobileBreakpoint.matches && root.dataset.largeText !== 'true' ? 'horizontal' : 'vertical');
  }
  caseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      const horizontal = document.querySelector('.case-selectors').getAttribute('aria-orientation') === 'horizontal';
      const next = horizontal ? 'ArrowRight' : 'ArrowDown';
      const previous = horizontal ? 'ArrowLeft' : 'ArrowUp';
      let destination;
      if (event.key === next) destination = (index + 1) % caseTabs.length;
      else if (event.key === previous) destination = (index + caseTabs.length - 1) % caseTabs.length;
      else if (event.key === 'Home') destination = 0;
      else if (event.key === 'End') destination = caseTabs.length - 1;
      else return;
      event.preventDefault(); activateTab(caseTabs[destination], true);
    });
  });
  updateTabOrientation();

  applyPreferences();
  setLanguage(preferences.language, false);
  document.querySelector('#year').textContent = new Date().getFullYear();

  let introLeaving = false;
  let introClosed = false;
  let introExitTimer;
  function completeIntro() {
    if (introClosed) return;
    introClosed = true;
    clearTimeout(introExitTimer);
    if (intro.open) intro.close();
    document.body.classList.remove('intro-open');
    document.body.append(halo);
    halo.classList.remove('active');
    document.querySelector('.hero').classList.add('cinematic-arrival');
    const fragment = window.location.hash || '';
    let destination = document.querySelector('#hero-title');
    try { destination = document.getElementById(decodeURIComponent(fragment.slice(1))) || destination; } catch (_) { /* Use the hero when a URL fragment is invalid. */ }
    destination.setAttribute('tabindex', '-1');
    destination.focus({ preventScroll: true });
    statusMessage.textContent = translations[preferences.language].languageChanged;
  }
  function enterPortfolio(language = preferences.language, immediate = false) {
    if (introClosed) return;
    if (introLeaving) { if (immediate) completeIntro(); return; }
    introLeaving = true;
    setLanguage(language, false);
    introChoices.forEach(button => {
      button.disabled = true;
      button.classList.toggle('chosen', button.dataset.entryLang === language);
    });
    if (immediate || !motionEnabled()) { completeIntro(); return; }
    intro.classList.add('intro-leaving');
    introExitTimer = setTimeout(completeIntro, 850);
  }
  introChoices.forEach(button => button.addEventListener('click', () => enterPortfolio(button.dataset.entryLang)));
  document.querySelector('#intro-skip').addEventListener('click', () => enterPortfolio(preferences.language, true));
  intro.addEventListener('cancel', event => { event.preventDefault(); enterPortfolio(preferences.language, true); });
  intro.addEventListener('close', () => { if (!introClosed) completeIntro(); });
  introMotionToggle.addEventListener('change', () => {
    preferences.motion = !introMotionToggle.checked;
    applyPreferences(); storePreferences();
    if (introLeaving && !motionEnabled()) completeIntro();
  });
  if (typeof intro.showModal === 'function') {
    document.body.classList.add('intro-open');
    intro.showModal();
    intro.append(halo);
    const initialChoice = introChoices.find(button => button.dataset.entryLang === preferences.language);
    if (initialChoice) initialChoice.focus({ preventScroll: true });
  }

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.07, rootMargin: '0px 0px -25px 0px' });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
    const navigationLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('current', active);
        if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
    navigationLinks.forEach(link => navObserver.observe(document.querySelector(link.hash)));
  }

  const progress = document.querySelector('.reading-progress');
  let scrollScheduled = false;
  function updateProgress() {
    const available = root.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0})`;
    scrollScheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  window.addEventListener('resize', () => { updateProgress(); updateTextLayout(); }, { passive: true });
  updateProgress();

  let cursorX = 0, cursorY = 0, targetX = 0, targetY = 0, cursorFrame = 0;
  function cursorAllowed() { return mediaPointer.matches && preferences.cursor; }
  function moveHalo() {
    if (!cursorAllowed()) { cursorFrame = 0; halo.classList.remove('active'); return; }
    if (!motionEnabled()) {
      cursorX = targetX; cursorY = targetY;
      halo.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
      cursorFrame = 0; return;
    }
    cursorX += (targetX - cursorX) * .18; cursorY += (targetY - cursorY) * .18;
    halo.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
    if (Math.abs(targetX - cursorX) + Math.abs(targetY - cursorY) > .25) cursorFrame = requestAnimationFrame(moveHalo);
    else cursorFrame = 0;
  }
  document.addEventListener('pointermove', event => {
    if (!cursorAllowed() || event.pointerType !== 'mouse') { halo.classList.remove('active'); return; }
    if (!halo.classList.contains('active')) { cursorX = event.clientX; cursorY = event.clientY; }
    targetX = event.clientX; targetY = event.clientY;
    halo.classList.add('active');
    halo.classList.toggle('hovering', Boolean(event.target.closest('a,button,summary,input,select,label')));
    if (!motionEnabled()) {
      cursorX = targetX; cursorY = targetY;
      halo.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
    } else if (!cursorFrame) cursorFrame = requestAnimationFrame(moveHalo);
  }, { passive: true });
  document.addEventListener('pointerleave', () => halo.classList.remove('active'));
  window.addEventListener('blur', () => halo.classList.remove('active'));
  mediaPointer.addEventListener('change', () => { if (!mediaPointer.matches) halo.classList.remove('active'); });
})();
