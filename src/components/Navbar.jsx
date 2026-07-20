import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ language, onToggleLanguage, t }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#transformations", label: t.nav.transformations },
    { href: "#packages", label: t.nav.packages },
    { href: "#booking", label: t.nav.booking },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#home" onClick={() => setOpen(false)}>
          <span>Chef</span>
          <strong>El Adalat</strong>
        </a>

        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="language-toggle" type="button" onClick={onToggleLanguage}>
            {t.languageLabel}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}
