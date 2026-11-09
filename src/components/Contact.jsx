import { useEffect, useRef, useState } from 'react';
import { Check, CheckCircle2, Copy, Mail, Send } from 'lucide-react';
import { PERSONAL } from '../data/constants';
import { GithubIcon, WhatsappIcon } from './BrandIcons';
import SectionHeader from './SectionHeader';

const CONTACTS = [
  { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, copyable: true },
  { icon: WhatsappIcon, label: 'WhatsApp', value: PERSONAL.phoneDisplay, href: PERSONAL.whatsapp, external: true },
  { icon: GithubIcon, label: 'GitHub', value: PERSONAL.githubUser, href: PERSONAL.github, external: true },
];

const EMPTY_FORM = { name: '', email: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Введите имя';
  if (!EMAIL_RE.test(email.trim())) errors.email = 'Введите корректный email';
  if (message.trim().length < 10) errors.message = 'Сообщение должно быть не короче 10 символов';
  return errors;
}

function Field({ id, label, error, as = 'input', className = '', ...props }) {
  const Tag = as;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
          error ? 'border-red-400 focus:ring-red-200' : 'border-slate-300 focus:border-primary-500 focus:ring-primary-100'
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Буфер обмена недоступен (например, не HTTPS) — адрес всё равно виден на карточке
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  // Без бэкенда: открываем почтовый клиент с заполненным письмом
  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = encodeURIComponent(`Сообщение с портфолио от ${form.name}`);
    const body = encodeURIComponent(`Имя: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Контакты"
          title="Давайте поработаем вместе"
          subtitle="Открыта к предложениям о работе, стажировках и интересным проектам. Напишите мне!"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <ul className="flex flex-col gap-4">
            {CONTACTS.map(({ icon: Icon, label, value, href, external, copyable }) => (
              <li key={label} className="relative">
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 ${copyable ? 'pr-16' : ''} transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block truncate font-semibold text-slate-900">{value}</span>
                  </span>
                </a>
                {copyable && (
                  <button
                    type="button"
                    onClick={() => handleCopy(value)}
                    aria-label={copied ? 'Адрес скопирован' : 'Скопировать адрес'}
                    title={copied ? 'Скопировано!' : 'Скопировать адрес'}
                    className={`absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-primary-200 ${
                      copied
                        ? 'border-green-300 bg-green-50 text-green-600'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-primary-300 hover:text-primary-600'
                    }`}
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                )}
                {copyable && (
                  <span className="sr-only" role="status" aria-live="polite">
                    {copied ? 'Адрес скопирован в буфер обмена' : ''}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Имя" placeholder="Ваше имя" value={form.name} onChange={handleChange} error={errors.name} autoComplete="name" />
              <Field id="email" type="email" label="Email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} autoComplete="email" />
            </div>
            <div className="mt-5">
              <Field id="message" as="textarea" rows={5} label="Сообщение" placeholder="Расскажите о вашем проекте..." value={form.message} onChange={handleChange} error={errors.message} className="resize-y" />
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <Send size={18} />
              Отправить сообщение
            </button>

            {sent && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600" role="status">
                <CheckCircle2 size={18} />
                Спасибо! Открылся ваш почтовый клиент — осталось нажать «Отправить».
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
