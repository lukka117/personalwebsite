/**
 * Public folder paths (respects Vite base for GitHub Pages).
 */
export function assetUrl(path) {
  const clean = path.replace(/^\//, '')
  const encoded = clean.split('/').map(encodeURIComponent).join('/')
  return `${import.meta.env.BASE_URL}${encoded}`
}
