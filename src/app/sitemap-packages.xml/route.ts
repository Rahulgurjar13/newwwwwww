import { supabase } from "@/lib/supabase/SupabaseConfig"


export async function GET() {
  const { data: packages } = await supabase
    .from('Package')
    .select('slug, created_at')
    
    const urls = packages?.map(pack => `
    <url>
        <loc>${process.env.BASE_URL}/tour-packages/${pack.slug}</loc>
        <lastmod>${new Date(pack.created_at).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    `).join('')

    return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    </urlset>`,
        {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
        }
  )
}
