/*
  DenebWebApp.jsx – Versión con detalle de proyectos e imágenes en contenido
  Requisitos: react-router-dom@^6, lucide-react, TailwindCSS, react-markdown, rehype-raw
*/

import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";       // ← permite HTML embebido
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
} from "react-router-dom";
import heroImg from "./Img/Hero.webp";
import proyectImg from "./Img/DG.svg";
import contactImg from "./Img/Contact.webp";
import {
  Menu,
  X,
  Phone,
  Mail,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Utilidades                                                                 */
/* -------------------------------------------------------------------------- */
const Container = ({ children, className = "" }) => (
  <div className={`max-w-5xl w-full mx-auto px-4 ${className}`}>{children}</div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-slate-100 text-xl md:text-2xl font-semibold mb-4">
    {children}
  </h2>
);

const PrimaryButton = ({ children, href = "#" }) => (
  <a
    href={href}
    className="inline-block px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-slate-50 font-medium transition"
  >
    {children}
  </a>
);

/* -------------------------------------------------------------------------- */
/* Datos de proyectos                                                          */
/* -------------------------------------------------------------------------- */

// Importa las imágenes para el contenido
import videoconferenciaImg from "./Img/VideoConferencia.webp";
import circuitoOriginalImg from "./Img/Amplificacion.webp";
import respuestaFrecuenciaImg from "./Img/OPAMDISENO.webp";
import mosfetImg from "./Img/OPAMDISENO.webp";

export const projectsData = [
  {
    id: 1,
    title: "Construcción OPAMP",
    desc: "La primera etapa en la construcción de un OPAMP es la identificación del proyecto, donde se analizan necesidades, requisitos y restricciones del diseño. Se definen objetivos clave y desafíos técnicos para garantizar un desarrollo eficiente y estructurado. (Clic para leer más)",
    img: "src/Img/OPAM.webp",
    sections: [
      {
        id: "introduccion",
        heading: "Introducción: ¿por qué necesitamos un preamplificador?",
        content: `
## Introducción: ¿por qué necesitamos un preamplificador?

¿Alguna vez has estado en una videollamada o grabando tu voz y notas que el sonido se escucha muy bajo o con mucho ruido de fondo? Esto sucede porque el micrófono por sí solo capta una señal muy débil y, a veces, distorsionada. El objetivo de este proyecto es diseñar un pequeño dispositivo —un preamplificador— que tome esa señal débil y la convierta en un audio claro, potente y libre de interferencias, ¡como si estuvieras usando un micrófono profesional!

<div style="text-align: center; margin: 20px 0;">
  <img src="${videoconferenciaImg}" alt="Videoconferencia" style="max-width: 100%; height: auto; border-radius: 8px; border: 2px solid #64748b;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 1: Problemática común en videoconferencias</p>
</div>
        `,
      },
      {
        id: "procedimiento",
        heading: "El recorrido de la señal: del micrófono al altavoz",
        content: `
## El recorrido de la señal: del micrófono al altavoz

Para entender cómo funciona nuestro preamplificador, imaginemos la señal de audio como el agua que pasa por un embudo muy estrecho. Si sólo confías en el embudo (el micrófono), mucha agua se pierde y llega muy poca al otro lado. El preamplificador es como una bomba que recoge toda el agua y la envía con fuerza y uniformidad.

<div style="text-align: center; margin: 20px 0;">
  <img src="${circuitoOriginalImg}" alt="Circuito original" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 2: Recorrido de la señal</p>
</div>

        `,
      },
      {
        id: "resultados",
        heading: "Piezas clave",
        content: `
##  Piezas clave

### Amplificador operacional (Op-Amp)
Un Op-Amp es como un altavoz ultra-preciso en miniatura:
1. - Tiene dos entradas (una positiva y otra negativa) y una salida.

2. - Su trabajo es tomar la diferencia entre esas entradas y reproducirla en grande, sin “colorear” la señal.

<div style="text-align: center; margin: 20px 0;">
  <img src="${respuestaFrecuenciaImg}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 3: Op-Amp</p>
</div>

### Transistor MOSFET
Imagina una puerta automática que abre o cierra el paso de la corriente con sólo un golpecito de señal eléctrica:

1. - Gate (puerta): recibe la señal de control.
2. - Drain y Source: permiten o bloquean el flujo.

<div style="text-align: center; margin: 20px 0;">
  <img src="${mosfetImg}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 3: MOSFET NMOS</p>
</div>


        `,
      },
      {
        id: "conclusion",
        heading: "Bloques internos del preamplificador",
        content: `
## Bloques internos del preamplificador

### Espejo de corriente

Garantiza que la corriente que alimenta el Op-Amp sea estable y simétrica.

*Analógico a un equipo de reparto que mete la misma cantidad de agua en dos tuberías idénticas.*

<!-- [Insertar esquema simplificado del espejo de corriente] -->

### Etapa diferencial

Compara dos señales y amplifica únicamente la diferencia (tu voz), cancelando ruidos comunes.

*Funciona como dos micrófonos midiendo el mismo sonido ambiente; al restarlos, desaparece el ruido compartido.*

<!-- [Insertar captura de forma de onda: dos señales opuestas y su resultado diferencial] -->

### Compensación del lazo

Ajusta la “velocidad” de reacción del amplificador para evitar que oscile o suene inestable.

*Es como afinar la suspensión de un coche para que no rebote en los baches.*


        `,
      },
      {
        id: "conclusion2",
        heading: "De la simulación al prototipo",
        content: `
## De la simulación al prototipo

### Simulación en software

Probamos el circuito en MATLAB/Simulink para verificar ganancias, estabilidad y respuesta en frecuencia.

*Empleamos modelos precisos para anticipar el comportamiento real antes del prototipo físico.*

<!-- [Insertar captura de pantalla de la simulación en Simulink mostrando respuesta en frecuencia y curvas de ganancia] -->

### Montaje en protoboard

Con componentes reales: resistencias, Op-Amps, MOSFETs y condensadores.

*Permite validar el funcionamiento práctico y ajustar valores en tiempo real.*

<br> <!-- [Insertar foto del protoboard con los componentes montados] -->

### Diseño de PCB

Finalmente pasamos a una placa de circuito impreso para robustez y confiabilidad.

*Optimiza el trazado de pistas y reduce ruido para un rendimiento óptimo.*

<br> <!-- [Insertar imagen de la PCB, vista esquemática y vista 3D] -->  

        `,
      },
      {
        id: "conclusion3",
        heading: "Resultados y validación",
        content: `
## Resultados y validación

### Ganancia medida: 20 dB (±5 %)

Muy cercana al valor teórico.

*Como seguir una receta al pie de la letra y obtener el mismo sabor esperado.*

<br> <!-- [Insertar tabla comparativa de valores teóricos y medidos] -->

### Ruido residual

Prácticamente imperceptible en un entorno de oficina normal.

*Como un susurro lejano en una sala silenciosa.*

<br> <!-- [Insertar enlace al clip de audio “antes” vs. “después”] -->  


        `,
      },
      {
        id: "conclusion4",
        heading: "Conclusiones y siguientes pasos",
        content: `
## Conclusiones y siguientes pasos

### Lo que logramos

**Amplificar la voz para videollamadas y grabaciones caseras con calidad profesional.**

*Como convertir un micrófono de escritorio en un equipo de estudio de radio.*

<br> <!-- [Insertar audio de muestra “antes” vs. “después”] -->

**Reducir drásticamente el ruido de fondo gracias a la etapa diferencial.**

*Como usar auriculares con cancelación activa que sólo dejan pasar tu voz.*

<br> <!-- [Insertar gráfico de nivel de ruido comparativo] -->  


        `,
      },
      
    ],
  },
  {
    id: 2,
    title: "Construcción Pre-Amplificador de Audio",
    desc: "Caso de estudio de modificación estética y acústica de un micrófono de condensador moderno.",
    img: "src/Img/PreAmplificador.webp",
    sections: [
      {
        id: "resumen",
        heading: "Resumen del Proyecto",
        content: `
## Resumen del Proyecto

Objetivos de la modificación, requisitos del cliente y alcance del trabajo realizado.
        `,
      },
      {
        id: "circuito",
        heading: "Rediseño del Circuito",
        content: `
## Rediseño del Circuito

Adición de filtros selectivos y modificación de la polarización para mejorar la sensibilidad.
        `,
      },
      {
        id: "acabado",
        heading: "Acabado Estético",
        content: `
## Acabado Estético

Aplicación de pintura electrostática y grabado láser personalizado para branding del estudio.
        `,
      },
      {
        id: "pruebas",
        heading: "Pruebas de Calidad",
        content: `
## Pruebas de Calidad

Ensayos de ruido de fondo, respuesta transitoria y verificación de compatibilidad con interfaces.
        `,
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Navbar                                                                      */
/* -------------------------------------------------------------------------- */
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  const linkBase =
    "px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 transition";

  const DesktopLinks = () => (
    <nav className="hidden md:flex gap-4">
      <NavLink to="/" end className={linkBase}>
        Inicio
      </NavLink>
      <NavLink to="/projects" className={linkBase}>
        Nuestro Proyecto
      </NavLink>
      <NavLink to="/contact" className={linkBase}>
        Contacto
      </NavLink>
    </nav>
  );

  const MobileLinks = () => (
    <nav className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur">
      <Container className="flex flex-col py-4 gap-2">
        <NavLink to="/" end className={linkBase} onClick={() => setOpen(false)}>
          Inicio
        </NavLink>
        <NavLink
          to="/projects"
          className={linkBase}
          onClick={() => setOpen(false)}
        >
          Nuestro Proyecto
        </NavLink>
        <NavLink
          to="/contact"
          className={linkBase}
          onClick={() => setOpen(false)}
        >
          Contacto
        </NavLink>
      </Container>
    </nav>
  );

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <Container className="flex items-center justify-between h-14">
        <NavLink to="/" className="text-slate-50 font-semibold">
          Deneb
        </NavLink>
        <DesktopLinks />
        {/* Botón Hamburguesa */}
        <button
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          {open ? (
            <X size={24} className="text-slate-200" />
          ) : (
            <Menu size={24} className="text-slate-200" />
          )}
        </button>
      </Container>
      {/* Enlaces móviles */}
      {open && <MobileLinks />}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Home                                                                        */
/* -------------------------------------------------------------------------- */
function Home() {
  const workCards = [
    {
      title: "Experiencia y Calidad",
      desc:
        "Contamos con un equipo altamente capacitado y con años de experiencia, garantizando soluciones eficientes y de alta calidad.",
      icon: "🛠️",
    },
    {
      title: "Compromiso y Confianza",
      desc:
        "Nos enfocamos en ofrecer un servicio confiable y personalizado, asegurándonos de cumplir con tus expectativas en cada proyecto.",
      icon: "🛡️",
    },
    {
      title: "Innovación y Eficiencia",
      desc:
        "Utilizamos las mejores herramientas y técnicas para optimizar tiempos y costos, brindándote resultados rápidos y efectivos.",
      icon: "🚀",
    },
  ];

  const team = [
    { name: "Juan Bermejo", role: "Design Leader", avatar: "src/Img/2.svg" },
    { name: "Jose Mendoza", role: "Archivist", avatar: "src/Img/4.svg" },
    {
      name: "Lucas Romero",
      role: "Communications Officer",
      avatar: "src/Img/1.svg",
    },
    {
      name: "Mariana Barrero",
      role: "Resource and Facilities Manager",
      avatar: "src/Img/3.svg",
    },
  ];

  return (
    <main className="pb-16">
      {/* Hero */}
      <section
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <Container className="relative flex flex-col items-center justify-center text-center py-24 gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-3xl">
            Escucha Calidad
          </h1>
          <h2 className="md:text-4xl font-bold text-slate-50 max-w-3xl">
            Regresamos La Voz a Tu Micrófono
          </h2>
          <PrimaryButton>Contáctanos</PrimaryButton>
        </Container>
      </section>

      {/* Our Work */}
      <Container className="mt-16 text-center">
        <SectionTitle>Nuestro Trabajo</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {workCards.map((card) => (
            <div
              key={card.title}
              className="bg-slate-800 p-5 rounded-lg border border-slate-700 hover:translate-y-[-2px] transition-transform"
            >
              <div className="text-3xl mb-3 text-center">{card.icon}</div>
              <h3 className="text-slate-100 font-semibold mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Team */}
      <Container className="mt-16 text-center">
        <SectionTitle>Nuestro Equipo</SectionTitle>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-64 md:h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-slate-100 font-medium">{member.role}</h4>
                <p className="text-slate-400 text-sm">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Projects list                                                               */
/* -------------------------------------------------------------------------- */
function Projects() {
  return (
    <main className="pb-12">
      <section
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${proyectImg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <Container className="relative py-20 max-w-7xl mx-auto px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-50 text-center py-20">
            Conoce Nuestro Trabajo
          </h1>
        </Container>
      </section>

        <Container className="relative py-10 max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-3xl font-bold text-slate-50 text-center">
          Avances del Proyecto: Sistema de Amplificación de Voz
        </h2>
        <p className="text-slate-400 text-center pt-5 ">
        Las videoconferencias son esenciales en el ámbito académico y laboral, pero la baja calidad del audio puede afectar la comunicación. Este proyecto busca desarrollar un sistema de amplificación de voz que mejore la claridad del sonido, reduciendo interferencias y optimizando la experiencia del usuario.
        </p>
        <p className="text-slate-400 text-center pt-5">
        Nuestro objetivo es diseñar un amplificador de voz eficiente que aumente la potencia del sonido sin distorsiones, filtre ruidos no deseados y sea compacto, fácil de usar y compatible con diversas plataformas de comunicación.
        </p>
        </Container>

      <Container className="mt-12 space-y-10">
        {projectsData.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="flex flex-col md:flex-row gap-6 items-start group"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full md:w-72 h-44 object-cover rounded-lg group-hover:opacity-90"
            />
            <div>
              <p className="text-blue-400 text-xs uppercase mb-1">Etapa {p.id}</p>
              <h3 className="text-slate-100 font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                {p.desc}
              </p>
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Project detail                                                              */
/* -------------------------------------------------------------------------- */
function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <main className="flex items-center justify-center min-h-[60vh]">
        <p className="text-slate-400">Proyecto no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="pb-16">
      <section
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <Container className="relative py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-3xl mx-auto">
            {project.title}
          </h1>
        </Container>
      </section>

      <Container className="mt-12 grid md:grid-cols-[260px_1fr] gap-10">
        {/* Índice */}
        <nav className="hidden md:block sticky top-24 self-start bg-slate-800/40 backdrop-blur rounded-lg p-4 border border-slate-700">
          <h3 className="text-slate-100 font-medium mb-3 text-lg">Índice</h3>
          <ul className="space-y-2 text-sm">
            {project.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-blue-400 hover:underline"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenido */}
        <div className="space-y-12">
          {project.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="prose prose-invert prose-slate max-w-none">
                <ReactMarkdown 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    // Personalizar estilos para que se vean bien con el tema dark
                    h2: ({node, ...props}) => <h2 className="text-slate-100 text-2xl font-semibold mb-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-slate-200 text-xl font-medium mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="text-slate-400 leading-relaxed mb-4" {...props} />,
                    ul: ({node, ...props}) => <ul className="text-slate-400 leading-relaxed mb-4 list-disc list-inside" {...props} />,
                    li: ({node, ...props}) => <li className="text-slate-400 mb-1" {...props} />,
                  }}
                >
                  {s.content}
                </ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */
function Contact() {
  return (
    <main className="pb-16">
      <section
        className="relative bg-center bg-cover"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <Container className="relative py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-50 max-w-xl mb-4">
            Reparación Profesional de Micrófonos
          </h1>
          <p className="text-slate-300 max-w-xl mb-6">
            Deneb se especializa en la reparación de micrófonos profesionales, garantizando un sonido de máxima calidad para sus grabaciones y actuaciones.
          </p>
          <PrimaryButton>Contáctanos</PrimaryButton>
        </Container>
      </section>

      <Container className="mt-12 space-y-8">
        <SectionTitle>Contacto</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Teléfono 1 */}
          <a href="tel:+573045739227">
            <ContactCard
              icon={<Phone size={20} />}
              title="Phone"
              value="+57 304-573-9227"
            />
          </a>

          {/* Teléfono 2 */}
          <a href="tel:+573045246172">
            <ContactCard
              icon={<Phone size={20} />}
              title="Phone"
              value="+57 304-524-6172"
            />
          </a>

          {/* Email */}
          <a href="mailto:jbermejod@uninorte.edu.co">
            <ContactCard
              icon={<Mail size={20} />}
              title="Email"
              value="jbermejod@uninorte.edu.co"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/maria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              icon={<Instagram size={20} />}
              title="Social Media"
              value="Síguenos en Instagram @denebelectronics"
            />
          </a>
        </div>
      </Container>
    </main>
  );
}

function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700">
      <div className="mt-1 text-blue-400">{icon}</div>
      <div>
        <h4 className="text-slate-100 font-medium">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{value}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-slate-800 py-6 mt-auto bg-slate-900">
      <Container className="text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Deneb. All rights reserved.
      </Container>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* App Router                                                                  */
/* -------------------------------------------------------------------------- */
export default function DenebWebApp() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-900 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}