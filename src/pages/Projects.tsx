import ProjectsGrid from '../components/ProjectGrid'

function Projects() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-semibold text-text-h mb-10">
          Proyectos
        </h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}

export default Projects