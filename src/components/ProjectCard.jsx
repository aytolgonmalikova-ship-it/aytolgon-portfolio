import { ExternalLink, Clock } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Превью проекта ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  const { gradient, emoji, tagline } = project.preview;
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
      {/* Мини-макет окна браузера */}
      <div className="w-4/5 rounded-xl bg-white/90 shadow-xl backdrop-blur transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-slate-200" />
        </div>
        <div className="flex items-center gap-3 p-4">
          <span className="text-3xl">{emoji}</span>
          <div className="flex-1">
            <p className="font-bold text-slate-900">{project.title}</p>
            <p className="text-xs text-slate-500">{tagline}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-4 pb-4">
          <span className="h-8 rounded-md bg-slate-100" />
          <span className="h-8 rounded-md bg-slate-100" />
          <span className="h-8 rounded-md bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden">
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-slate-600">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Технологии">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-3"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !px-3">
              <ExternalLink size={18} />
              Live Demo
            </a>
          ) : (
            <span
              className="btn cursor-not-allowed bg-slate-100 !px-3 text-slate-400"
              title="Ссылка на деплой скоро появится"
              aria-disabled="true"
            >
              <Clock size={18} />
              Скоро
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
