export async function GET() {
  const urls = ['/', '/sobre-mi', '/servicios', '/cita', '/blog', '/contacto']
    .map((u) => `<url><loc>https://fisiomamifera.example${u}</loc></url>`) 
    .join('')
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
