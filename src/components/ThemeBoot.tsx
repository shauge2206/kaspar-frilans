export function ThemeBoot() {
  const code = `
    try {
      var t = localStorage.getItem('theme');
      if (t === 'light' || t === 'dark') {
        document.documentElement.setAttribute('data-theme', t);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
