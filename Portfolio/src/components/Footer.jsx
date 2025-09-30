export default function Footer() {
  return (
    <footer className="px-6 lg:px-16 py-10 border-t border-gray-700 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Hamad Andrabi. Built with React & Tailwind CSS.
    </footer>
  );
}