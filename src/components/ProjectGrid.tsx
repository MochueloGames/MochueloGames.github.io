import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function ProjectsGrid() {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectsGrid