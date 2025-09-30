import { data } from "../data/portfolioData";

export default function Header() {
  return (
    <header className="lg:hidden px-6 py-4 bg-[#222] border-b border-gray-700">
      <h1 className="text-xl font-bold text-accent">{data.header.name}</h1>
      <p className="text-sm text-gray-400">{data.header.title}</p>
    </header>
  );
}