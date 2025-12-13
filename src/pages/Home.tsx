export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Blurb */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Hey, I'm Val! &#128075;</h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-4">
                I'm a rising senior-level software engineer passionate about technology, the reach that it offers us, and how interacting with it shapes our daily lives. In my 5+ years of experience, I have worked in various industries and with a variety of tech stacks. TODO
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every few years I recreate my personal website with the modern tooling of the time to keep up to date with industry trends, and frankly, because I just love front-end development! You can see some of the older versions of this site and other personal projects on my GitHub. Feel free to look around here to get to know me a little bit better! TODO
              </p>
            </div>

            {/* Right: Photo */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">Photo placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
