export default function Contacto() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">Contacto</h1>
      <p>Puedes escribirme a contacto@fisiomamifera.com</p>
      <p>
        Horario de lunes a viernes de 9h a 17h. Avenida Primero de Mayo 2,
        disponible también online.
      </p>
      <iframe
        title="Mapa"
        className="w-full h-64 border"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.2217297371!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289f3e3f3b9b%3A0x1d273b!2sAvenida%20Primero%20de%20Mayo%202!5e0!3m2!1ses!2ses!4v0000000000000"/>
    </div>
  )
}
