// Fallback for requests that never reach a language folder (the middleware
// normally sends every visitor to /en or /vi first).
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ background: '#080C14', color: '#fff', fontFamily: 'system-ui, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, marginBottom: 12 }}>Page not found</h1>
          <p><a href="/en" style={{ color: '#C4A04A' }}>MZM Africa (English)</a> · <a href="/vi" style={{ color: '#C4A04A' }}>MZM Africa (Tiếng Việt)</a></p>
        </div>
      </body>
    </html>
  )
}
