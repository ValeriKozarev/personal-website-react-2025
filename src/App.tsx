function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Val Kozarev</h1>
          <p className="text-xl text-slate-600">
            Software Engineer
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">About</h2>
            <p className="text-slate-700 leading-relaxed">
              Welcome to my portfolio! This is a modern React application built
              with Vite, TypeScript, and Tailwind CSS.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-slate-600">Coming soon...</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-slate-600">Coming soon...</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
