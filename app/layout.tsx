const webVitalsJsSnippet = `
(function () {
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
  script.onload = function () {
    webVitals.onCLS(console.log);
    webVitals.onFID(console.log);
    webVitals.onLCP(console.log);
    webVitals.onTTFB(console.log);
  };
  document.head.appendChild(script);
})();`;

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{ __html: webVitalsJsSnippet }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
