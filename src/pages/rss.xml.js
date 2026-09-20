import { getCollection } from 'astro:content';

// 简易 RSS：无需额外依赖
export async function GET(context) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const site = context.site?.toString() ?? 'https://example.com';
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.data.title)}</title>
      <link>${site}posts/${p.id}/</link>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${escapeXml(p.data.excerpt)}</description>
      <guid>${site}posts/${p.id}/</guid>
    </item>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>老张 · 纺织制造数字化笔记</title>
    <link>${site}</link>
    <description>ERP/MES 实施、AI 落地、项目交付的一手经验</description>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
