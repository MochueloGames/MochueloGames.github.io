import type { Project } from '../types/project'
import Tag from './Tag'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col md:flex-row gap-6 bg-bg border border-text/10 rounded-2xl overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-64 h-48 md:h-auto object-cover"
      />

      <div className="flex flex-col justify-between p-6 flex-1">
        <div>
          <h3 className="text-xl font-semibold text-accent mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-text mb-4">{project.summary}</p>
            <br></br>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard