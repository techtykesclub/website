import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/camps", label: "Camps" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">Tech Tykes</Link>
        <nav className="flex gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="opacity-90 hover:opacity-100">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
