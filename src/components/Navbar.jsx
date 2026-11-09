import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '../data/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#hero" onClick={closeMenu} className="flex items-center gap-2 font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-sm text-white">
            МА
          </span>
          <span className="text-base sm:text-lg">{PERSONAL.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-primary-50 hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={PERSONAL.cv} download className="btn-primary !py-2.5">
            <Download size={16} />
            Скачать CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={PERSONAL.cv} download onClick={closeMenu} className="btn-primary w-full">
                <Download size={16} />
                Скачать CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
