import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-baseline pt-8 md:flex-row text-skin-base">
      <Link href="/">
        <a className="mb-4 mr-10 text-2xl font-bold md:mb-0">Dane.</a>
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/about">
              <a className="nav__link">About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="nav__link">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="nav__link">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="nav__link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
