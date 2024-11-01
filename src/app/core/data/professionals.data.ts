import { Professional } from '../models/professional.interface';

const generarHorariosDisponibles = () => {
  return [
    { dia: 'lunes', horaInicio: '09:00', horaFin: '18:00' },
    { dia: 'martes', horaInicio: '09:00', horaFin: '18:00' },
    { dia: 'miércoles', horaInicio: '09:00', horaFin: '18:00' },
    { dia: 'jueves', horaInicio: '09:00', horaFin: '18:00' },
    { dia: 'viernes', horaInicio: '09:00', horaFin: '16:00' }
  ];
};

const generarCitasOcupadas = () => {
  const citas = [];
  const servicios = ['Mantenimiento', 'Instalación', 'Reparación', 'Consulta'];
  const duraciones = [60, 90, 120, 180];

  // Generar citas para los próximos 15 días
  for (let i = 0; i < 5; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + Math.floor(Math.random() * 15));
    
    citas.push({
      fecha: fecha,
      horaInicio: `${9 + Math.floor(Math.random() * 8)}:${Math.random() < 0.5 ? '00' : '30'}`,
      duracion: duraciones[Math.floor(Math.random() * duraciones.length)],
      servicio: servicios[Math.floor(Math.random() * servicios.length)],
      estado: 'confirmada'
    });
  }

  return citas;
};

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Pérez',
    profession: 'Carpintero',
    location: 'Merida',
    rating: 4.8,
    imageUrl: 'assets/images/carpintero.webp',
    description: 'Especialista en muebles a medida con más de 15 años de experiencia.',
    categoryId: 'carpinteria',
    email: 'juan.perez@chambitas.mx',
    phone: '+52 999 123 4567',
    skills: [
      'Diseño de muebles',
      'Restauración',
      'Carpintería fina',
      'Instalación de cocinas',
      'Trabajos en madera maciza'
    ],
    experience: [
      {
        position: 'Carpintero Senior',
        company: 'Muebles Finos Mérida',
        period: '2015 - Presente',
        description: 'Diseño y fabricación de muebles a medida para clientes premium.'
      },
      {
        position: 'Carpintero',
        company: 'Carpintería Tradicional',
        period: '2008 - 2015',
        description: 'Fabricación y restauración de muebles tradicionales yucatecos.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "Laura Sánchez",
        rating: 5,
        comment: "Excelente trabajo en mi cocina integral. El acabado es perfecto y cumplió con el tiempo acordado.",
        date: "20 Mar 2024",
        serviceType: "Muebles a medida"
      },
      {
        id: 2,
        userName: "Pedro Ramírez",
        rating: 4,
        comment: "Muy buen trabajo en la restauración de mis muebles antiguos. Quedaron como nuevos.",
        date: "15 Mar 2024",
        serviceType: "Restauración"
      },
      {
        id: 3,
        userName: "Carmen Ortiz",
        rating: 5,
        comment: "Diseñó y fabricó un closet perfecto para mi espacio. Muy profesional y detallista.",
        date: "5 Mar 2024",
        serviceType: "Diseño de muebles"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Maestro Carpintero",
        institution: "Asociación Nacional de Carpinteros",
        year: "2018",
        description: "Certificación en técnicas avanzadas de carpintería y ebanistería"
      },
      {
        id: 2,
        name: "Especialista en Restauración",
        institution: "Instituto de Artes y Oficios",
        year: "2020",
        description: "Especialización en restauración de muebles antiguos"
      }
    ],
    servicios: [
      {
        nombre: 'Muebles a Medida',
        precioBase: 2500,
        descripcion: 'Diseño y fabricación de muebles personalizados según sus necesidades',
        caracteristicas: [
          'Diseño personalizado',
          'Selección de materiales',
          'Acabados de alta calidad',
          'Instalación incluida'
        ]
      },
      {
        nombre: 'Restauración de Muebles',
        precioBase: 1200,
        descripcion: 'Restauración y renovación de muebles antiguos o dañados',
        caracteristicas: [
          'Evaluación inicial',
          'Reparación estructural',
          'Acabados originales',
          'Tratamiento anti-plagas'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  },
  {
    id: 2,
    name: 'Carlos',
    lastName: 'Gómez',
    profession: 'Electricista',
    location: 'CDMX',
    rating: 4.9,
    imageUrl: 'assets/images/electricista.webp',
    description: 'Especialista en instalaciones eléctricas residenciales y comerciales.',
    categoryId: 'electricidad',
    email: 'carlos.gomez@chambitas.mx',
    phone: '+52 55 8765 4321',
    skills: [
      'Instalaciones eléctricas',
      'Mantenimiento preventivo',
      'Diagnóstico de fallas',
      'Cableado estructurado',
      'Instalación de paneles solares'
    ],
    experience: [
      {
        position: 'Electricista Senior',
        company: 'Instalaciones Eléctricas México',
        period: '2018 - Presente',
        description: 'Responsable de proyectos eléctricos residenciales y comerciales.'
      },
      {
        position: 'Electricista',
        company: 'Servicios Eléctricos CDMX',
        period: '2015 - 2018',
        description: 'Mantenimiento e instalaciones eléctricas en edificios comerciales.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "María García",
        rating: 5,
        comment: "Excelente trabajo, muy profesional y puntual. Resolvió el problema eléctrico rápidamente.",
        date: "15 Mar 2024",
        serviceType: "Instalación eléctrica"
      },
      {
        id: 2,
        userName: "Roberto Méndez",
        rating: 4,
        comment: "Buen servicio, aunque tardó un poco más de lo esperado. El resultado final fue muy bueno.",
        date: "10 Mar 2024",
        serviceType: "Reparación de cortocircuito"
      },
      {
        id: 3,
        userName: "Ana Martínez",
        rating: 5,
        comment: "Muy recomendable. Instaló todo el sistema eléctrico de mi casa nueva y quedó perfecto.",
        date: "1 Mar 2024",
        serviceType: "Instalación completa"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Técnico Electricista Certificado",
        institution: "CFE - Comisión Federal de Electricidad",
        year: "2019",
        description: "Certificación oficial para instalaciones eléctricas residenciales y comerciales"
      },
      {
        id: 2,
        name: "Instalador de Paneles Solares",
        institution: "Asociación Mexicana de Energía Solar",
        year: "2021",
        description: "Especialización en sistemas fotovoltaicos"
      }
    ],
    servicios: [
      {
        nombre: 'Instalación Eléctrica',
        precioBase: 1800,
        descripcion: 'Instalación completa o parcial de sistema eléctrico residencial',
        caracteristicas: [
          'Diagnóstico inicial',
          'Material certificado',
          'Pruebas de seguridad',
          'Garantía de trabajo'
        ]
      },
      {
        nombre: 'Mantenimiento Preventivo',
        precioBase: 800,
        descripcion: 'Revisión y mantenimiento de instalaciones eléctricas',
        caracteristicas: [
          'Inspección completa',
          'Detección de riesgos',
          'Ajustes necesarios',
          'Reporte detallado'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  },
  {
    id: 3,
    name: 'Jaime',
    lastName: 'López',
    profession: 'Plomera',
    location: 'Guadalajara',
    rating: 4.7,
    imageUrl: 'assets/images/plomero.webp',
    description: 'Experto en reparaciones y mantenimiento de sistemas de agua y gas.',
    categoryId: 'plomeria',
    email: 'jaime.lopez@chambitas.mx',
    phone: '+52 33 2345 6789',
    skills: [
      'Instalaciones hidráulicas',
      'Reparación de fugas',
      'Mantenimiento preventivo',
      'Instalación de calentadores',
      'Sistemas de riego'
    ],
    experience: [
      {
        position: 'Plomera Independiente',
        company: 'Servicios Hidráulicos GDL',
        period: '2016 - Presente',
        description: 'Servicios de plomería residencial y comercial.'
      },
      {
        position: 'Plomera',
        company: 'Constructora Jalisco',
        period: '2012 - 2016',
        description: 'Instalaciones hidráulicas en nuevas construcciones.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "Fernando Torres",
        rating: 5,
        comment: "Excelente servicio. Detectó y reparó una fuga difícil de encontrar.",
        date: "18 Mar 2024",
        serviceType: "Reparación de fugas"
      },
      {
        id: 2,
        userName: "Diana Flores",
        rating: 5,
        comment: "Instaló todo el sistema de riego para mi jardín. Trabajo impecable.",
        date: "12 Mar 2024",
        serviceType: "Sistema de riego"
      },
      {
        id: 3,
        userName: "Miguel Ángel Ruiz",
        rating: 4,
        comment: "Buen trabajo en la instalación del calentador. Muy profesional.",
        date: "8 Mar 2024",
        serviceType: "Instalación de calentador"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Técnico en Plomería",
        institution: "CONAGUA",
        year: "2020",
        description: "Certificación en sistemas hidráulicos y sanitarios"
      },
      {
        id: 2,
        name: "Especialista en Sistemas de Riego",
        institution: "Instituto Mexicano de Tecnología del Agua",
        year: "2021",
        description: "Certificación en diseño e instalación de sistemas de riego"
      }
    ],
    servicios: [
      {
        nombre: 'Reparación de Fugas',
        precioBase: 600,
        descripcion: 'Detección y reparación de fugas de agua',
        caracteristicas: [
          'Detección profesional',
          'Reparación inmediata',
          'Prevención de daños',
          'Garantía del servicio'
        ]
      },
      {
        nombre: 'Instalación Hidráulica',
        precioBase: 1500,
        descripcion: 'Instalación de sistemas de agua y drenaje',
        caracteristicas: [
          'Materiales de calidad',
          'Instalación normada',
          'Pruebas de presión',
          'Certificación del trabajo'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  },
  {
    id: 4,
    name: 'Juan Carlos',
    lastName: 'Hernández',
    profession: 'Albañil',
    location: 'Monterrey',
    rating: 4.8,
    imageUrl: 'assets/images/albañil.webp',
    description: 'Maestro en construcción y remodelación de edificios y estructuras.',
    categoryId: 'albanileria',
    email: 'juancarlos.hernandez@chambitas.mx',
    phone: '+52 81 3456 7890',
    skills: [
      'Construcción de muros',
      'Colocación de pisos',
      'Acabados finos',
      'Remodelaciones',
      'Impermeabilización'
    ],
    experience: [
      {
        position: 'Maestro Albañil',
        company: 'Constructora Monterrey',
        period: '2017 - Presente',
        description: 'Supervisión y ejecución de obras residenciales y comerciales.'
      },
      {
        position: 'Albañil',
        company: 'Construcciones del Norte',
        period: '2010 - 2017',
        description: 'Construcción y remodelación de viviendas.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "Ricardo Vega",
        rating: 5,
        comment: "Excelente trabajo en la remodelación de mi cocina. Muy limpio y ordenado.",
        date: "19 Mar 2024",
        serviceType: "Remodelación"
      },
      {
        id: 2,
        userName: "Isabel Moreno",
        rating: 5,
        comment: "Hizo un trabajo perfecto con la impermeabilización de mi terraza.",
        date: "14 Mar 2024",
        serviceType: "Impermeabilización"
      },
      {
        id: 3,
        userName: "Jorge Medina",
        rating: 4,
        comment: "Muy buen trabajo en la construcción del muro. Cumplió con los tiempos.",
        date: "9 Mar 2024",
        serviceType: "Construcción"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Maestro en Construcción",
        institution: "CMIC - Cámara Mexicana de la Industria de la Construcción",
        year: "2017",
        description: "Certificación en técnicas de construcción y acabados"
      },
      {
        id: 2,
        name: "Especialista en Impermeabilización",
        institution: "Instituto de la Construcción",
        year: "2019",
        description: "Certificación en sistemas de impermeabilización modernos"
      }
    ],
    servicios: [
      {
        nombre: 'Construcción',
        precioBase: 3000,
        descripcion: 'Construcción de muros, pisos y estructuras básicas',
        caracteristicas: [
          'Presupuesto detallado',
          'Materiales incluidos',
          'Acabados profesionales',
          'Limpieza posterior'
        ]
      },
      {
        nombre: 'Remodelación',
        precioBase: 2000,
        descripcion: 'Renovación y remodelación de espacios existentes',
        caracteristicas: [
          'Asesoría de diseño',
          'Demolición incluida',
          'Acabados a elegir',
          'Manejo de escombros'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  },
  {
    id: 5,
    name: 'Mariano',
    lastName: 'Rodríguez',
    profession: 'Mecánico',
    location: 'Puebla',
    rating: 4.6,
    imageUrl: 'assets/images/mecanico.webp',
    description: 'Especialista en reparaciones y mantenimiento de vehículos.',
    categoryId: 'mecanica',
    email: 'mariano.rodriguez@chambitas.mx',
    phone: '+52 22 4567 8901',
    skills: [
      'Diagnóstico computarizado',
      'Reparación de motores',
      'Sistemas de frenos',
      'Sistemas de suspensión',
      'Mantenimiento preventivo'
    ],
    experience: [
      {
        position: 'Mecánico Senior',
        company: 'Taller Automotriz Puebla',
        period: '2019 - Presente',
        description: 'Diagnóstico y reparación de vehículos de todas las marcas.'
      },
      {
        position: 'Mecánico',
        company: 'Agencia Volkswagen',
        period: '2014 - 2019',
        description: 'Mantenimiento y reparación de vehículos de la marca.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "Alberto Cruz",
        rating: 5,
        comment: "Excelente diagnóstico y reparación de mi auto. Muy honesto con los precios.",
        date: "17 Mar 2024",
        serviceType: "Reparación de motor"
      },
      {
        id: 2,
        userName: "Patricia Núñez",
        rating: 4,
        comment: "Buen servicio en el mantenimiento de mi vehículo. Muy detallista.",
        date: "11 Mar 2024",
        serviceType: "Mantenimiento general"
      },
      {
        id: 3,
        userName: "Héctor Vargas",
        rating: 5,
        comment: "Arregló los frenos de mi auto perfectamente. Muy profesional.",
        date: "6 Mar 2024",
        serviceType: "Sistema de frenos"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Técnico Automotriz Certificado",
        institution: "Asociación Mexicana de la Industria Automotriz",
        year: "2018",
        description: "Certificación en diagnóstico y reparación de vehículos modernos"
      },
      {
        id: 2,
        name: "Especialista en Sistemas Electrónicos",
        institution: "Instituto Automotriz de México",
        year: "2021",
        description: "Certificación en sistemas electrónicos y computarizados"
      }
    ],
    servicios: [
      {
        nombre: 'Mantenimiento General',
        precioBase: 1200,
        descripcion: 'Servicio completo de mantenimiento preventivo',
        caracteristicas: [
          'Diagnóstico computarizado',
          'Cambio de aceite',
          'Revisión de frenos',
          'Afinación básica'
        ]
      },
      {
        nombre: 'Reparación Mayor',
        precioBase: 3500,
        descripcion: 'Reparación de motor y sistemas principales',
        caracteristicas: [
          'Diagnóstico completo',
          'Reparación especializada',
          'Refacciones originales',
          'Garantía extendida'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  },
  {
    id: 6,
    name: 'Luis',
    lastName: 'Sánchez',
    profession: 'Refrigeración',
    location: 'Campeche',
    rating: 4.9,
    imageUrl: 'assets/images/refrigeracion.webp',
    description: 'Especialista en instalación y mantenimiento de sistemas de refrigeración y A/C',
    categoryId: 'refrigeracion',
    email: 'luis.sanchez@chambitas.mx',
    phone: '+52 981 567 8901',
    skills: [
      'Instalación de aire acondicionado',
      'Mantenimiento preventivo',
      'Reparación de sistemas de refrigeración',
      'Diagnóstico de fallas',
      'Sistemas de climatización comercial'
    ],
    experience: [
      {
        position: 'Técnico en Refrigeración Senior',
        company: 'Servicios de Climatización Campeche',
        period: '2016 - Presente',
        description: 'Instalación y mantenimiento de sistemas de A/C residenciales y comerciales.'
      },
      {
        position: 'Técnico en Refrigeración',
        company: 'Frío Industrial',
        period: '2011 - 2016',
        description: 'Mantenimiento de sistemas de refrigeración industrial y comercial.'
      }
    ],
    reviews: [
      {
        id: 1,
        userName: "Sofía Reyes",
        rating: 5,
        comment: "Excelente instalación del aire acondicionado. Muy profesional y limpio.",
        date: "16 Mar 2024",
        serviceType: "Instalación A/C"
      },
      {
        id: 2,
        userName: "Andrés Luna",
        rating: 5,
        comment: "Gran trabajo en el mantenimiento de los equipos de mi negocio.",
        date: "13 Mar 2024",
        serviceType: "Mantenimiento comercial"
      },
      {
        id: 3,
        userName: "Carolina Díaz",
        rating: 4,
        comment: "Buen servicio en la reparación de mi refrigerador. Muy puntual.",
        date: "7 Mar 2024",
        serviceType: "Reparación"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "Técnico en Sistemas de Refrigeración",
        institution: "CONOCER - SEP",
        year: "2019",
        description: "Certificación oficial en sistemas de refrigeración y climatización"
      },
      {
        id: 2,
        name: "Especialista en Aire Acondicionado",
        institution: "Asociación Mexicana de Empresas de Refrigeración",
        year: "2021",
        description: "Certificación en sistemas de aire acondicionado residencial y comercial"
      }
    ],
    servicios: [
      {
        nombre: 'Mantenimiento A/C',
        precioBase: 800,
        descripcion: 'Servicio de mantenimiento para aire acondicionado',
        caracteristicas: [
          'Limpieza profunda',
          'Recarga de gas',
          'Revisión eléctrica',
          'Sanitización'
        ]
      },
      {
        nombre: 'Instalación Nueva',
        precioBase: 2500,
        descripcion: 'Instalación completa de equipo de aire acondicionado',
        caracteristicas: [
          'Equipo incluido',
          'Instalación certificada',
          'Pruebas de funcionamiento',
          'Garantía de instalación'
        ]
      }
    ],
    disponibilidad: {
      horariosDisponibles: generarHorariosDisponibles(),
      citasOcupadas: generarCitasOcupadas()
    }
  }
];
