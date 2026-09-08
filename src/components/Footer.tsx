
function Footer() {
 const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Información de la marca */}
          <div>
            <span className="text-lg font-bold text-gray-900">Mochuelo Games</span>
            <p className="text-sm mt-1">Construyendo experiencias con cariño desde cero.</p>
          </div>

          {/* Enlaces de navegación */}
          <div className="flex space-x-6 text-sm">
            <a href="/about" className="hover:text-gray-900 transition-colors">Acerca de</a>
            <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacidad</a>
            <a href="/contact" className="hover:text-gray-900 transition-colors">Contacto</a>
          </div>

          {/* Copyright dinámico */}
          <div className="text-xs">
            &copy; {currentYear} Mochuelo Games. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;