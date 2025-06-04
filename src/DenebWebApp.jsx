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
import heroImg from "../src/images/Hero.webp";
import proyectImg from "../src/images//DG.svg";
import contactImg from "../src/images/Contact.webp";
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

const PrimaryButton = ({ children, to = "#" }) => (
  <Link
    to={to}
    className="inline-block px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-slate-50 font-medium transition"
  >
    {children}
  </Link>
);


/* -------------------------------------------------------------------------- */
/* Datos de proyectos                                                          */
/* -------------------------------------------------------------------------- */

// Importa las imágenes para el contenido
import videoconferenciaImg from "../src/images/VideoConferencia.webp";
import circuitoOriginalImg from "../src/images/Amplificacion.webp";
import respuestaFrecuenciaImg from "../src/images/OPAMDISENO.webp";
import mosfetImg from "../src/images/mosfet.webp";
import OPAMImg from "../src/images/OPAM.webp";
import PreAmplificadorImg from "../src/images/PreAmplificador.webp";
import avatar1 from "../src/images/1.webp";
import avatar2 from "../src/images/2.webp";
import avatar3 from "../src/images/3.webp";
import avatar4 from "../src/images/4.webp";
import espejo from "../src/images/Espejodecorriente.webp"
import parDiferencial from "../src/images/Pardiferencial.webp"
import ganancia from "../src/images/Ganancia.webp"
import esquematico from "../src/images/EsquematicoFinal.webp"
import protoboard from "../src/images/Protoboard.webp"
import Desing3D from "../src/images/Desing3D.webp"
import PreAmplificador2 from "../src/images/Preamplificador.png"
export const projectsData = [
  {
    id: 1,
    title: "Construcción OPAMP",
    desc: "La primera etapa en la construcción de un OPAMP es la identificación del proyecto, donde se analizan necesidades, requisitos y restricciones del diseño. Se definen objetivos clave y desafíos técnicos para garantizar un desarrollo eficiente y estructurado. (Clic para leer más)",
    img: OPAMImg,
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
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 4: MOSFET NMOS</p>
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

<div style="text-align: center; margin: 20px 0;">
  <img src="${espejo}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 5: Espejo de Corriente</p>
</div>

### Etapa diferencial

Compara dos señales y amplifica únicamente la diferencia (tu voz), cancelando ruidos comunes.

*Funciona como dos micrófonos midiendo el mismo sonido ambiente; al restarlos, desaparece el ruido compartido.*

<div style="text-align: center; margin: 20px 0;">
  <img src="${parDiferencial}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 6: Par Diferencial </p>
</div>

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

Probamos el circuito en LTSpice para verificar ganancias, estabilidad y respuesta en frecuencia.

*Empleamos modelos precisos para anticipar el comportamiento real antes del prototipo físico.*

<div style="text-align: center; margin: 20px 0;">
  <img src="${esquematico}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 7: Esquematico Final</p>
</div>

<div style="text-align: center; margin: 20px 0;">
  <img src="${ganancia}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 8: Ganancia </p>
</div>

### Montaje en protoboard

Con componentes reales: resistencias, MOSFETs y condensadores.

*Permite validar el funcionamiento práctico y ajustar valores en tiempo real.*

<div style="text-align: center; margin: 20px 0;">
  <img src="${protoboard}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 9: Protoboard</p>
</div>

### Diseño de PCB

Finalmente pasamos a una placa de circuito impreso para robustez y confiabilidad.

*Optimiza el trazado de pistas y reduce ruido para un rendimiento óptimo.*

<div style="text-align: center; margin: 20px 0;">
  <img src="${Desing3D}" alt="Figura 3: Op-Amp" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 10: Diseño 3D PCB</p>
</div>
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

En la próxima etapa, completaremos el montaje del circuito amplificador de audio, integrando circuitos adicionales para garantizar un sonido profesional. Simultáneamente, finalizaremos el diseño de la carcasa.

<br> <!-- [Insertar gráfico de nivel de ruido comparativo] -->  


        `,
      },
      
    ],
  },
 {
  "id": 2,
  "title": "Construcción de un Pre-Amplificador de Audio: Diario de Diseño",
  "desc": "Un caso de estudio detallado que documenta el diseño, prototipado y construcción de un pre-amplificador de audio versátil, desde la concepción teórica y la simulación, hasta la solución final del circuito y el diseño del producto.",
  "img": PreAmplificadorImg,
  "sections": [
    {
      "id": "resumen",
      "heading": "Conceptos Iniciales y Objetivos",
      "content": `
## Primeros Pasos del Proyecto

Un pre-amplificador es, en esencia, un dispositivo que toma una señal eléctrica débil y la amplifica para que pueda ser procesada por otros equipos. Antes de diseñar, se establecieron las etapas fundamentales y los objetivos clave.

### Etapas de un Pre-Amplificador de Micrófono:
* **Etapa de Entrada:** Adapta la impedancia entre el micrófono y el circuito.
* **Etapa de Ganancia:** Amplifica la señal a un nivel más útil, idealmente con un control ajustable.
* **Etapa de Ecualización y Filtrado (Opcional):** Puede incluir filtros para mejorar la calidad del audio.
* **Control de Volumen:** Permite ajustar el nivel de la señal antes de la salida.
* **Etapa de Salida:** Prepara la señal para ser entregada a otros dispositivos, como una interfaz de audio.

<div style="text-align: center; margin: 20px 0;">
  <img src="${PreAmplificador2}" alt="Videoconferencia" style="max-width: 100%; height: auto; border-radius: 8px; border: 2px solid #64748b;" />
  <p style="color: #94a3b8; font-size: 14px; margin-top: 8px;">Figura 1: Problemática común en videoconferencias</p>
</div>

### Consideraciones de Desarrollo:
* **Compatibilidad:** El circuito debía adaptarse a diferentes tipos de micrófonos, como dinámicos, de condensador y electret.
* **Ganancia Requerida:** Se necesitaba una ganancia considerable y ajustable, de entre 40 a 60 dB, para levantar las señales débiles de los micrófonos.
* **Calidad de Audio:** Se priorizó una alta relación señal-ruido (SNR) y una respuesta en frecuencia optimizada para la voz humana (80 Hz a 6 kHz). Para esto, se consideró el uso de filtros pasa-altas para eliminar ruidos de baja frecuencia.
`
    },
    {
      "id": "circuito",
      "heading": "El Viaje del Diseño: De lo Discreto a lo Integrado",
      "content": `
## El Viaje del Diseño: De lo Discreto a lo Integrado

El proyecto atravesó varias fases de diseño, comenzando con la ambiciosa meta de construir un amplificador operacional (Op-Amp) desde cero.

### Intento 1: El Op-Amp Discreto con MOSFETs
Se decidió inicialmente usar transistores MOSFET (2N7000 y BS250) por su alta impedancia de entrada y eficiencia. El proceso comenzó con la simulación en LTSPICE:
1.  **Espejo de Corriente:** Se diseñó y simuló la primera etapa para la polarización, obteniendo una corriente de 0.589 mA. Sin embargo, el montaje físico en protoboard arrojó un valor diferente (720.1 µA), una discrepancia normal debido a factores del mundo real.
2.  **Par Diferencial:** Se construyó la etapa del par diferencial. Las simulaciones mostraron un comportamiento ideal, con señales amplificadas y desfasadas 180 grados como se esperaba.
3.  **El Problema:** En la práctica, el montaje físico falló. Se observaron corrientes desiguales en las ramas del par diferencial, lo que causaba una ganancia asimétrica.
4.  **La Solución:** Tras intentos fallidos de ajuste, se propuso usar una fuente de alimentación dual (+5V / -5V). Esto eliminó la necesidad de un offset de VCM, que se identificó como una posible causa del problema, y estabilizó el circuito con éxito.

### Un Pivote Inteligente: Creando una Fuente Dual
Una vez validado el Op-Amp discreto en una PCB, el equipo decidió darle un uso práctico e innovador dentro del proyecto. En lugar de usarlo para la señal de audio, se utilizó para convertir una fuente simple de 12V en una fuente dual de +6V y -6V, necesaria para polarizar las etapas siguientes del pre-amplificador. Se configuró como un seguidor de tensión (buffer) a la salida de un divisor de voltaje, creando una referencia de tierra virtual estable. Las mediciones físicas confirmaron el éxito del diseño, obteniendo +6.058V y -5.909V.

### Intento 2: El Circuito con un Op-Amp Integrado
Para la etapa principal de ganancia y filtrado, se optó por un diseño más robusto usando el amplificador operacional **NE5532**, conocido por su buen rendimiento en audio.
* **Etapa de Ganancia:** Se diseñó un circuito con ganancia variable usando un potenciómetro. Las pruebas en protoboard fueron exitosas, mostrando una clara amplificación de la señal de entrada.
* **Etapa de Filtrado:** Para maximizar la calidad del audio, se añadió un filtro pasabanda en serie, compuesto por un filtro pasa-altas y uno pasa-bajas. Las pruebas determinaron frecuencias de corte de **139 Hz** para el pasa-altas y **3.6 kHz** para el pasa-bajas, ideales para la vo.
`
    },
    {
      "id": "acabado",
      "heading": "Del Prototipo al Producto Final",
      "content": `
## Del Prototipo al Producto Final

El desarrollo implicó un extenso trabajo de prototipado en breadboards, seguido del diseño y fabricación de placas de circuito impreso (PCB) para obtener un producto final robusto y profesional.

### Prototipos y PCBs
Se crearon múltiples montajes en protoboard para cada etapa del circuito. Una vez que el funcionamiento fue validado, se procedió a diseñar las PCBs. Se fabricaron dos placas principales:
1.  Una PCB para el Op-Amp discreto que finalmente se usó como fuente de alimentación dual.
2.  Una PCB para el circuito principal de pre-amplificación y filtrado.

### Diseño de la Carcasa 3D
Para contener los circuitos, se diseñó una carcasa a medida utilizando el software **FreeCAD**. Esto permitió planificar la disposición de los conectores y controles para un acabado profesional.
`
    },
    {
      "id": "pruebas",
      "heading": "Pruebas, Desafíos y la Solución Definitiva",
      "content": `
## Pruebas, Desafíos y la Solución Definitiva

Las pruebas finales revelaron desafíos que condujeron a una última revisión del diseño, culminando en un circuito optimizado y altamente funcional.

### Pruebas y Complicaciones Finales
La PCB de la fuente dual funcionó a la perfección, entregando voltajes estables de +5.98V y -6.12V. Sin embargo, la PCB del circuito principal presentó una cantidad de ruido excesiva. Se cree que esto fue causado por complicaciones durante la soldadura, donde parte del cobre se dañó, afectando las conexiones.

### La Solución Final Optimizada
A raíz de estos problemas, el grupo optó por rediseñar la solución final, integrando todo el aprendizaje en un único circuito robusto y versátil. Este diseño final es una clase magistral de ingeniería de audio:
* **Entrada Inteligente:** Usa un conector TRS de 3.5mm compatible con cables mono y estéreo. Un interruptor permite activar la alimentación "bias" (a través de una resistencia de 4.7kΩ) para micrófonos electret, o desactivarla para micrófonos dinámicos].
* **Fuente Simple, Operación Dual:** Para usar el Op-Amp **TL072** con una sola fuente de poder (ej. 9V), se crea una **tierra virtual** a 4.5V usando un divisor de tensión (R3, R4). Un condensador (C2) filtra esta referencia para mantenerla ultra estable y libre de ruido.
* **Ganancia Controlada y Estable:** La ganancia es ajustable mediante un potenciómetro de 470kΩ, permitiendo una amplificación de más de 100x. Se incluye una resistencia de ganancia mínima (RF_Min) que asegura que la ganancia nunca sea menor a 1x, evitando la inestabilidad.
* **Acoplamiento y Terminación:** Condensadores de acoplamiento en la entrada (C1) y salida (C3) bloquean cualquier componente de corriente continua (DC), dejando pasar únicamente la señal de audio pura. El segundo amplificador no utilizado en el chip TL072 se configura como un seguidor de voltaje y se conecta a la tierra virtual, una práctica estándar para "apagarlo" de forma segura y prevenir que introduzca ruido.
`
    }
  ]
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
    { name: "Juan Bermejo", role: "Design Leader", avatar: avatar2 },
    { name: "Jose Mendoza", role: "Archivist", avatar: avatar4 },
    {
      name: "Lucas Romero",
      role: "Communications Officer",
      avatar: avatar1,
    },
    {
      name: "Mariana Barrero",
      role: "Resource and Facilities Manager",
      avatar: avatar3,
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
          <PrimaryButton to="/contact">Contáctanos</PrimaryButton>
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