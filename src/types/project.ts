export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: number
  title: string
  summary: string
  image: string
  tags: string[]
  links: ProjectLink[]
}