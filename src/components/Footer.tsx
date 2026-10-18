export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-zinc-900 bg-black text-center text-zinc-500 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-zinc-300 font-medium">Umma Habiba</span>.
          All rights reserved.
        </p>
        <p className="text-xs font-mono text-zinc-600">
          Built with Next.js, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
