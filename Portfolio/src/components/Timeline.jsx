import { data } from "../data/portfolioData";

const TimelineItem = ({ left, right }) => (
  <div className="relative pl-10 border-l-2 border-gray-600 pb-10">
    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      <div className="md:w-1/3 text-gray-400">{left}</div>
      <div className="md:w-2/3">{right}</div>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <section id="experience" className="px-6 lg:px-16 py-20 max-w-4xl">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>
      <div className="space-y-2">
        {data.experience.map((e) => (
          <TimelineItem
            key={e.title + e.dates}
            left={<span>{e.dates}</span>}
            right={
              <div>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-accent mb-2">{e.company}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            }
          />
        ))}
      </div>

      <h2 id="education" className="text-3xl font-semibold mt-24 mb-10">
        Education
      </h2>
      <div className="space-y-2">
        {data.education.map((edu) => (
          <TimelineItem
            key={edu.degree}
            left={<span>{edu.dates}</span>}
            right={
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}