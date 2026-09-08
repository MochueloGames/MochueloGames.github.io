import logo from '../assets/logo_cuadrado.png'

function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-8 py-24 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Logo del equipo"
          className="w-40 md:w-56 mb-8"
        />
        <h1 className="text-2xl md:text-4xl font-semibold text-text-h max-w-2xl">
          Mochueleo que te veo
        </h1>
      </div>
    </section>
  )
}

export default Hero