import { data } from "../data/portfolioData";

const Pill = ({ children }) => (
  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-accent hover:text-gray-900 transition">
    {children}
  </span>
);

export default function Skills() {
  const { languages, frameworks, tools } = data.skills;
  return (
    <section id="skills" className="px-6 lg:px-16 py-20 max-w-4xl">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-accent mb-3">Languages</h3>
          <div className="flex flex-wrap gap-3">{languages.map((s) => <Pill key={s}>{s}</Pill>)}</div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-accent mb-3">Frameworks & Methodologies</h3>
          <div className="flex flex-wrap gap-3">{frameworks.map((s) => <Pill key={s}>{s}</Pill>)}</div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-accent mb-3">Tools</h3>
          <div className="flex flex-wrap gap-3">{tools.map((s) => <Pill key={s}>{s}</Pill>)}</div>
        </div>
      </div>
    </section>
  );
}