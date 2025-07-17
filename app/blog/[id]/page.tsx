"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params
  const { t } = useLanguage()

  // This would typically come from an API or database
  const posts = {
    "Mi-viaje-hasta-NeoNoia": {
      title: "Mi viaje hasta NeoNoia",
      date: "",
      readingTime: "5 min de lectura",
      content: `
        <p>Hace casi un año empecé a soñar con una web que reflejara mi mirada creativa: un espacio donde la “paranoia” interior se convirtiera en belleza.El nombre nació casi de un casualidad: Neo como renovación y Noia —que en catalán significa “niña”— como ese toque dulce que se esconde tras algo tan rudo como escribir código. Me imaginé un sitio oscuro y luminoso a la vez, un refugio para mi lado rebelde y coquette.</p>
        
        <p>Los primeros meses fueron un torbellino. Sin experiencia en desarrollo web, probé plantillas y tutoriales: HTML, CSS, JavaScript… cada paso venía acompañado de un error nuevo. Se caía el layout, no cargaban las imágenes, conflictos de rutas… Pocas veces sentí tanta frustración y ganas de rendirme. Y muchas veces lo hice. Pero luego algo me hacía volver a empezar. Cada fallo, además de frustrarme, se convirtió en un pequeño aprendizaje (aunque de esto me haya dado cuenta ahora): descubrí la importancia de la estructura de carpetas, de las buenas prácticas en Git, de pedir ayuda en foros y que y como pedirle a ChatGPT las cosas.</p>
        
        <p>Anteayer: me armé de paciencia y borré todas las líneas de código. Y comencé de cero, recuperé solo los componentes básicos que sabía que funcionaban y reinicié el proyecto desde ahí, sin volver a caer en los mismos errores. Esta vez mi prioridad era que la web fuera simplemente funcional, no perfecta, liberándome de los dolores de cabeza que provocaba la ansia de pulir cada detalle. Justo unos días antes, mi profesora Lorraine me había recordado por correo:</p>
        
        <h3>"Es importante que no pierdas el foco: ser demasiado perfeccionista o extenderte más de lo necesario puede jugar en tu contra."</h3>
        
        <p>En dos días ya tengo un prototipo limpio, rápido y con la esencia que buscaba.</p>
        
        <p>El futuro del desarrollo de la IA es a la vez emocionante y desafiante. A medida que continuamos ampliando los límites de lo que es posible, también debemos ser conscientes de los riesgos potenciales y asegurarnos de que los sistemas de IA se desarrollen y desplieguen de manera responsable.</p>
        
        <p>Este post es mi primera entrada de inspiración: un recordatorio de que los errores no son fracasos, sino huellas de aprendizaje. Que aunque suene Mr. Wonderfull, es la verdad. Ahora te invito a acompañarme en este blog y mis redes sociales. Un besitoo <33 NeoNoia. </p>
      `,
    },
    /*
    "web3-revolution": {
      title: "La revolución Web3",
      date: "2023-04-22",
      readingTime: "7 min de lectura",
      content: `
        <p>Web3 representa un cambio de paradigma en la forma en que interactuamos con Internet. A diferencia de Web2, que está dominado por plataformas centralizadas que controlan los datos y la monetización de los usuarios, Web3 pretende crear un Internet más descentralizado y centrado en el usuario.</p>
        
        <h2>Componentes clave de Web3</h2>
        
        <p>En su esencia, Web3 se basa en varias tecnologías y conceptos clave:</p>
        
        <ul>
          <li>Blockchain: Registros distribuidos que permiten transacciones y mantenimiento de registros sin confianza</li>
          <li>Criptomonedas: Activos digitales que facilitan el intercambio de valor sin intermediarios</li>
          <li>Contratos inteligentes: Código autoejecutado que automatiza acuerdos y transacciones</li>
          <li>Aplicaciones descentralizadas (dApps): Aplicaciones que se ejecutan en redes peer-to-peer</li>
          <li>Tokens no fungibles (NFT): Activos digitales únicos que representan la propiedad de elementos específicos</li>
        </ul>
        
        <h2>Cambio de modelos de propiedad</h2>
        
        <p>Uno de los aspectos más significativos de Web3 es cómo está cambiando nuestra comprensión de la propiedad digital. En la era Web2, los usuarios rara vez eran realmente dueños de sus activos o datos digitales. Las plataformas podían cambiar los términos de servicio, restringir el acceso o incluso eliminar contenido a voluntad.</p>
        
        <p>Con Web3, la propiedad está criptográficamente asegurada en la blockchain. Los NFT, por ejemplo, permiten a los creadores vender activos digitales únicos directamente a los coleccionistas, con escasez y autenticidad comprobables.</p>
        
        <h2>Desafíos y oportunidades</h2>
        
        <p>A pesar de su promesa, Web3 enfrenta varios desafíos:</p>
        
        <ul>
          <li>Escalabilidad: Las redes blockchain actuales a menudo luchan con altos volúmenes de transacciones</li>
          <li>Experiencia de usuario: Las aplicaciones Web3 pueden ser complejas e intimidantes para los usuarios promedio</li>
          <li>Incertidumbre regulatoria: Los gobiernos de todo el mundo todavía están tratando de entender cómo abordar este nuevo paradigma</li>
          <li>Preocupaciones ambientales: Algunas redes blockchain consumen cantidades significativas de energía</li>
        </ul>
        
        <p>Sin embargo, estos desafíos también presentan oportunidades para la innovación. Las soluciones de capa 2 están abordando la escalabilidad, mientras que las interfaces mejoradas están haciendo que Web3 sea más accesible. A medida que el ecosistema madura, podemos esperar ver soluciones más amigables para el usuario y eficientes.</p>
      `,
    },
    "cybersecurity-tips": {
      title: "Consejos esenciales de ciberseguridad",
      date: "2023-03-10",
      readingTime: "6 min de lectura",
      content: `
        <p>En el mundo interconectado de hoy, la ciberseguridad es más importante que nunca. Como desarrolladores, tenemos la responsabilidad de garantizar que las aplicaciones que construimos sean seguras y protejan los datos de los usuarios. Aquí hay algunos consejos esenciales de ciberseguridad que todo desarrollador debería seguir.</p>
        
        <h2>1. Mantén las dependencias actualizadas</h2>
        
        <p>Las dependencias desactualizadas pueden contener vulnerabilidades conocidas que los atacantes pueden explotar. Actualiza regularmente tus dependencias y utiliza herramientas como npm audit, Dependabot o Snyk para identificar y corregir automáticamente las dependencias vulnerables.</p>
        
        <h2>2. Implementa una autenticación adecuada</h2>
        
        <p>La autenticación es la primera línea de defensa para tu aplicación. Implementa políticas de contraseñas fuertes, autenticación multifactor y considera usar OAuth u OpenID Connect para la autenticación federada.</p>
        
        <h2>3. Valida y desinfecta la entrada</h2>
        
        <p>Nunca confíes en la entrada del usuario. Siempre valida y desinfecta la entrada tanto en el lado del cliente como en el servidor para prevenir ataques de inyección como SQL injection, XSS y CSRF.</p>
        
        <h2>4. Usa HTTPS en todas partes</h2>
        
        <p>HTTPS cifra los datos en tránsito, protegiéndolos de la interceptación y los ataques de intermediarios. Utiliza siempre HTTPS para tus aplicaciones, incluso durante el desarrollo.</p>
        
        <h2>5. Implementa un manejo adecuado de errores</h2>
        
        <p>Los mensajes de error detallados pueden revelar información sensible sobre la arquitectura de tu aplicación. Implementa un manejo de errores adecuado que proporcione información útil a los usuarios sin exponer detalles internos.</p>
        
        <h2>6. Sigue el principio de privilegio mínimo</h2>
        
        <p>Solo otorga los permisos mínimos necesarios para que un usuario o sistema realice su función. Esto limita el daño potencial si una cuenta se ve comprometida.</p>
        
        <h2>7. Asegura tu API</h2>
        
        <p>Implementa limitación de velocidad, usa claves o tokens API para la autenticación y valida todas las solicitudes API para prevenir abusos y accesos no autorizados.</p>
        
        <h2>8. Ten en cuenta la seguridad desde el principio</h2>
        
        <p>La seguridad no debe ser una ocurrencia tardía. Incorpora consideraciones de seguridad en tu proceso de diseño y desarrollo desde el principio.</p>
        
        <p>Siguiendo estos consejos, puedes mejorar significativamente la seguridad de tus aplicaciones y proteger los datos de tus usuarios. Recuerda, la seguridad es un proceso continuo, no una tarea única.</p>
      `,
    },
    "react-performance": {
      title: "Optimizando el rendimiento de React",
      date: "2023-02-18",
      readingTime: "8 min de lectura",
      content: `
        <p>React es conocido por su DOM virtual y renderizado eficiente, pero a medida que las aplicaciones crecen en complejidad, el rendimiento puede convertirse en un problema. Aquí hay algunas técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React.</p>
        
        <h2>1. Usa React.memo para la memoización de componentes</h2>
        
        <p>React.memo es un componente de orden superior que memoriza el resultado del renderizado de un componente. Realiza una comparación superficial de props y solo vuelve a renderizar si las props han cambiado.</p>
        
        <pre><code>
const MyComponent = React.memo(function MyComponent(props) {
  /* renderizar usando props 
});
        </code></pre>
        
        <h2>2. Optimiza las dependencias de useEffect</h2>
        
        <p>Ten cuidado con el array de dependencias en useEffect. Incluir dependencias innecesarias puede hacer que el efecto se ejecute con más frecuencia de lo necesario.</p>
        
        <pre><code>
useEffect(() => {
  // Este efecto solo se ejecutará cuando count cambie
}, [count]);
        </code></pre>
        
        <h2>3. Usa useMemo y useCallback</h2>
        
        <p>useMemo memoriza el resultado de un cálculo, mientras que useCallback memoriza una función. Ambos pueden evitar recálculos innecesarios o recreaciones de funciones.</p>
        
        <pre><code>
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
        </code></pre>
        
        <h2>4. Virtualiza listas largas</h2>
        
        <p>Para listas largas, usa bibliotecas de virtualización como react-window o react-virtualized para renderizar solo los elementos que están actualmente visibles en el viewport.</p>
        
        <h2>5. División de código con React.lazy</h2>
        
        <p>Divide tu código en trozos más pequeños que se cargan bajo demanda usando React.lazy y Suspense.</p>
        
        <pre><code>
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
        </code></pre>
        
        <h2>6. Usa builds de producción</h2>
        
        <p>Siempre usa builds de producción para el despliegue. Las builds de desarrollo incluyen advertencias adicionales y herramientas de desarrollo que ralentizan tu aplicación.</p>
        
        <h2>7. Evita funciones inline en renders</h2>
        
        <p>Las funciones inline en renders crean nuevas instancias de función en cada renderizado, lo que puede llevar a renderizados innecesarios de componentes hijos.</p>
        
        <h2>8. Perfila y mide</h2>
        
        <p>Usa el Profiler de React DevTools para identificar cuellos de botella de rendimiento en tu aplicación. Mide el impacto de tus optimizaciones para asegurarte de que realmente están mejorando el rendimiento.</p>
        
        <p>Aplicando estas técnicas, puedes mejorar significativamente el rendimiento de tus aplicaciones React, proporcionando una mejor experiencia de usuario y reduciendo el uso de recursos.</p>
      `,
    },*/
  }

  const post = posts[id as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> {t("backToInspiration")}
      </Link>

      <article>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 glitch" data-text={post.title}>
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
