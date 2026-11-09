import { Mail } from 'lucide-react';
import { PERSONAL } from '../data/constants';
import { GithubIcon, WhatsappIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-500">
          © 2026 {PERSONAL.fullName}. Все права защищены.
        </p>
        <div className="flex gap-2">
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="icon-link !h-9 !w-9" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={PERSONAL.whatsapp} target="_blank" rel="noopener noreferrer" className="icon-link !h-9 !w-9" aria-label="WhatsApp">
            <WhatsappIcon size={18} />
          </a>
          <a href={`mailto:${PERSONAL.email}`} className="icon-link !h-9 !w-9" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
