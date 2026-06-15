import Link from "next/link";

export function TopNav({ brand }: { brand: string }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__brand serif">
          {brand}
        </Link>
        <nav className="nav__menu">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
