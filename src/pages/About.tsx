export default function About() {
  return (
    <div className="flex-1">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>

          {/* Hobbies & Interests */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Hobbies & Interests</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Beyond coding, I enjoy exploring creative outlets and staying
              curious about the world.
            </p>
          </section>

          {/* Music */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Music I Love</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="#"
                className="bg-white p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition"
              >
                <p className="font-medium">Playlist or Artist Name</p>
                <p className="text-sm text-slate-600">Platform</p>
              </a>
            </div>
          </section>

          {/* Photo Gallery */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">Photo</span>
              </div>
              <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">Photo</span>
              </div>
              <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">Photo</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
