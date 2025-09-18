// Sitemap generator (ESM)
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';

// ✅ Import your services JSON (adjust the path if needed)
import ServicesV1Data from './src/assets/jsonData/services/ServicesV1Data.json' assert { type: 'json' };

const siteUrl = 'https://www.odysseymanagementgroup.com'; // <-- change if needed
const outDir = './public';
const outFile = path.join(outDir, 'sitemap.xml');

// Ensure /public exists
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// --- Static routes from your <Routes> ---
const staticRoutes = [
  '/', '/about-us', '/contact-us', '/faq',
  '/global-branches', '/our-values', '/our-team',
  '/talent', '/terms-and-conditions', '/privacy-policy',
  '/blog', '/services'
];

// Map default metadata
const defaultChangefreq = 'weekly';
const defaultPriority = 0.7;

// Optional: tweak priorities per section
const priorityMap = new Map([
  ['/', 1.0],
  ['/about-us', 0.8],
  ['/services', 0.8],
  ['/blog', 0.7],
]);

const today = new Date().toISOString().split('T')[0];

function toEntry(url, {
  changefreq = defaultChangefreq,
  priority = priorityMap.get(url) ?? defaultPriority,
  lastmod = today
} = {}) {
  return { url, changefreq, priority, lastmod };
}

// --- Dynamic services from JSON ---
const serviceEntries = ServicesV1Data.map((service) => {
  // assuming your JSON looks like { "slug": "service-name", ... }
  return toEntry(`/services/${service.slug}`);
});

const entries = [
  ...staticRoutes.map((r) => toEntry(r)),
  ...serviceEntries,
  // you can also add blogSlugs or talentIds here later
];

// Build and write sitemap.xml
const smStream = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream(outFile);

streamToPromise(smStream)
  .then((data) => {
    writeStream.write(data.toString());
    console.log(`✅ Sitemap written to ${outFile}`);
  })
  .catch((err) => {
    console.error('Sitemap generation failed:', err);
    process.exit(1);
  });

for (const entry of entries) smStream.write(entry);
smStream.end();
