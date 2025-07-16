import { BlogCard } from "@/components/blog-card"

export default function BlogPage() {
  const posts = [
    {
      id: "future-of-ai",
      title: "El futuro de la IA en el arte",
      excerpt:
        "Explorando las implicaciones éticas y avances tecnológicos en la inteligencia artificial aplicada al arte.",
      readingTime: "5 min de lectura",
    },
    {
      id: "web3-revolution",
      title: "La revolución Web3",
      excerpt:
        "Cómo la tecnología blockchain está cambiando nuestra forma de pensar sobre la propiedad y los activos digitales.",
      readingTime: "7 min de lectura",
    },
    {
      id: "cybersecurity-tips",
      title: "Consejos esenciales de ciberseguridad",
      excerpt:
        "Medidas prácticas de seguridad que todo desarrollador debería implementar para proteger sus aplicaciones.",
      readingTime: "6 min de lectura",
    },
    {
      id: "react-performance",
      title: "Optimizando el rendimiento de React",
      excerpt: "Técnicas avanzadas para mejorar el rendimiento de tus aplicaciones React.",
      readingTime: "8 min de lectura",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">inspiracion.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">{">"}</span> ls -la /inspiracion
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
