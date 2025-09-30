import { data } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-16 py-20 max-w-5xl">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((p) => (
          <a
            key={p.title}
            href={p.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl bg-[#222] border border-gray-700 hover:ring-2 hover:ring-accent transition shadow hover:shadow-xl"
          >
            <div className="h-40 bg-gray-800 rounded-t-xl" />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-gray-700 text-xs rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a href={p.liveDemo} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  Live Demo
                </a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  Repository
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}