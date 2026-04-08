import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="custom-container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Courses Manager
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-medium transition ${
                pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
