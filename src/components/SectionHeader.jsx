export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">{eyebrow}</p>
      )}
      <h2 className="section-title mt-2">{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
}
