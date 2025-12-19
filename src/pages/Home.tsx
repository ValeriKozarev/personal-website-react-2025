export default function Home() {
  return (
    <div className="flex-1 flex items-center">
      {/* Hero Section */}
      <section className="container mx-auto px-8 py-16 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Blurb */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Hi, I'm Val &#128075;&#127996;</h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-4">
                I'm a senior software engineer with over five years of experience across various industries and tech stacks. I operate with a focus on dependable execution, continuous learning, and well-structured work. Teams value me for my reliability and ability to keep projects organized and moving forward. Let’s see what we can build together!
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                This site is a snapshot of my work and how I approach software engineering. I periodically rebuild it to explore new tools, stay current with industry trends, and sharpen my skills. You'll find career highlights, personal projects, and little snapshots into some of my hobbies throughout - feel free to explore and get in touch!
              </p>
            </div>

            {/* Right: Photo */}
            <div className="w-full md:w-72 flex-shrink-0">
              <img
                src="/profile.jpeg"
                alt="Val Kozarev"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
