interface TeamMember {
  id: number
  name: string
  role: string
  photo: string
  bio?: string
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'David López',
    role: 'Programador',
    photo: '/src/assets/mochi_progra.jpg',
    bio: 'Un makina',
  },
  {
    id: 2,
    name: 'Juan Antonio Calero',
    role: 'Productor',
    photo: '/src/assets/mochi_cafe.jpg',
    bio: 'Otro makitruki.',
  },
  {
    id: 1,
    name: 'Cristina Calvo',
    role: 'Artista 2D',
    photo: '/src/assets/mochi_artista.jpg',
    bio: 'Un makina',
  },
  {
    id: 2,
    name: 'Miguel Navarro',
    role: 'Programador',
    photo: '/src/assets/mochi_progra.jpg',
    bio: 'Otro makitruki.',
  },
  {
    id: 1,
    name: 'Miguel López',
    role: 'Animador',
    photo: '/src/assets/mochi_artista.jpg',
    bio: 'Un makina',
  },
  {
    id: 2,
    name: 'Raúl de Miguel',
    role: 'Diseñador',
    photo: '/src/assets/mochi_diseño.jpg',
    bio: 'Otro makitruki.',
  },
  {
    id: 1,
    name: 'Victor Guerrero',
    role: 'SFX y Música',
    photo: '/src/assets/mochi_musica.jpg',
    bio: 'Un makina',
  },
  {
    id: 2,
    name: 'Celia Torres',
    role: 'SFX y música',
    photo: '/src/assets/mochi_musica.jpg',
    bio: 'Otro makitruki.',
  },
]

function TeamGrid() {
  return (
    <section id="equipo" className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Nuestro equipo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-bg rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform grayscale hover:grayscale-0 transition">
      <img
        src={member.photo}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg text-accent font-semibold">{member.name}</h3>
      <p className="text-sm text-neutral-400 mb-2">{member.role}</p>
      {member.bio && (
        <p className="text-sm text-neutral-300">{member.bio}</p>
      )}
    </div>
  )
}

export default TeamGrid