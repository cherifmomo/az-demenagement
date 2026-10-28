// QA du build : SEO de base, liens internes, tags Google (ordre + unicité).
// Usage : npm run build && node scripts/qa.mjs
import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import { join } from 'path';
const files = [];
(function walk(d){ for (const f of readdirSync(d)) { const p = join(d,f); statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && files.push(p);} })('dist');
// L'admin (Sveltia CMS) est une application, pas une page de contenu
const pages = files.filter((f) => !f.includes('/admin/'));
files.length = 0; files.push(...pages);
let issues = 0;
const count = (s, re) => (s.match(re) || []).length;
for (const f of files) {
  const html = readFileSync(f,'utf8'); const bad = [];
  const head = html.slice(0, html.indexOf('</head>'));
  const afterBody = html.slice(html.indexOf('<body'), html.indexOf('<body') + 400);
  if (count(html, /<h1[\s>]/g) !== 1) bad.push('h1 count');
  if (!/<title>[^<]{10,}<\/title>/.test(html)) bad.push('title');
  if (!/<meta name="description" content="[^"]{30,}"/.test(html)) bad.push('meta desc');
  if (!html.includes('rel="canonical"')) bad.push('canonical');
  if (/lorem ipsum/i.test(html)) bad.push('lorem');
  if (/href="#"/.test(html)) bad.push('href=#');
  if (/<img(?![^>]*alt=)/.test(html)) bad.push('img alt');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) { const p = m[1]; const t = p.endsWith('/') ? join('dist', p, 'index.html') : join('dist', p); if (!existsSync(t)) bad.push('lien cassé ' + p); }
  // Tags Google
  if (count(head, /gtag\/js\?id=G-DQHF4S2PLG/g) !== 1) bad.push('gtag.js src ≠ 1');
  if (count(html, /gtag\('config', 'G-DQHF4S2PLG'\)/g) !== 1) bad.push('gtag config ≠ 1');
  if (count(html, /gtm\.js\?id='\+i\+dl/g) !== 1) bad.push('GTM loader ≠ 1');
  if (count(html, /ns\.html\?id=GTM-N95KL6CL/g) !== 1) bad.push('GTM noscript ≠ 1');
  if (!/<body[^>]*>\s*<!-- Google Tag Manager \(noscript\) -->/.test(afterBody)) bad.push('GTM noscript pas juste après <body>');
  if (!(head.indexOf("gtag('consent', 'default'") < head.indexOf('gtag/js?id=') && head.indexOf('gtag/js?id=') < head.indexOf("'gtm.start'"))) bad.push('ordre consent→GA4→GTM');
  if (!html.includes('id="cookie-consent"')) bad.push('bannière cookies absente');
  if (bad.length) { issues++; console.log('✗', f, [...new Set(bad)]); }
}
console.log(`${files.length} pages HTML analysées — ${issues ? issues + ' page(s) avec problèmes' : 'SEO, liens, tags Google : aucun problème ✔'}`);
process.exit(issues ? 1 : 0);
