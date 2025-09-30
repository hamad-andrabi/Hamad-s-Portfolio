import { data } from "../data/portfolioData";

const links = [
  { id: "summary", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

export default function Nav({ active }) {
  return (
    <nav className="hidden lg:block fixed top-0 left-0 h-screen w-80 bg-[#222] border-r border-gray-700 p-8 overflow-y-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-accent">{data.header.name}</h2>
        <p className="text-sm text-gray-400 mt-1">{data.header.title}</p>
      </div>

      <ul className="space-y-4">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block px-4 py-2 rounded transition ${
                active === id
                  ? "bg-accent/10 text-accent ring-1 ring-accent"
                  : "hover:bg-gray-700/50"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-sm text-gray-400 space-y-2">
        <p>{data.header.location}</p>
        <a href={`mailto:${data.header.email}`} className="text-accent hover:underline">
          {data.header.email}
        </a>
        <div className="flex gap-4 pt-2">
          <a href={data.header.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            LinkedIn
          </a>
          <a href={data.header.github} target="_blank" rel="noreferrer" className="text-accent hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}