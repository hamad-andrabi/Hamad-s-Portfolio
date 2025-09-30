import { data } from "../data/portfolioData";

export default function Summary() {
  return (
    <section id="summary" className="px-6 lg:px-16 py-20 max-w-4xl">
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p className="text-gray-300 leading-relaxed">{data.summary}</p>
    </section>
  );
}