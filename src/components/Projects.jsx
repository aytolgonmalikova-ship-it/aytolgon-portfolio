import { PROJECTS } from '../data/constants';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Портфолио"
          title="Мои проекты"
          subtitle="Проекты, над которыми я работала: от идеи и вёрстки до деплоя."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
