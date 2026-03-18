
export async function GET() {
  return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <url>
            <loc>${process.env.BASE_URL}/</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>

        <url>
            <loc>${process.env.BASE_URL}/about</loc>
            <changefreq>monthly</changefreq>
            <priority>0.6</priority>
        </url>

        <url>
            <loc>${process.env.BASE_URL}/privacy-policy</loc>
            <priority>0.3</priority>
        </url>

        <url>
            <loc>${process.env.BASE_URL}/refund-policy</loc>
            <priority>0.3</priority>
        </url>

        
        </urlset>`,
    {
      headers: { 'Content-Type': 'application/xml' }
    }
  )
}
