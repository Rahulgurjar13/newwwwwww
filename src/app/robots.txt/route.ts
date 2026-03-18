export async function GET() {
  const BASE_URL =
    process.env.BASE_URL ||
    "https://vrindavanmathuraguide.com";
  return new Response(
`User-agent: *
 Allow: /
 Disallow: /admin-x9AqP7mK2/
 Sitemap: ${BASE_URL}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
