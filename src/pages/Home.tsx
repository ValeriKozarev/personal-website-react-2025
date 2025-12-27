import LazyImage from "../components/LazyImage";

export default function Home() {
  return (
    <div className="flex-1 flex items-center">
      <section className="container mx-auto px-8 py-16 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-6">Hi, I'm Val &#128075;&#127996;</h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-4">
                I'm a senior software engineer with over five years of experience across various industries and tech stacks. I operate with a focus on dependable execution, continuous learning, and well-structured work. Teams value me for my reliability and ability to keep projects organized and moving forward. Let’s see what we can build together!
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                This site is a snapshot of my work and how I approach software engineering. I periodically rebuild it to explore new tools, stay current with industry trends, and sharpen my skills. You'll find career highlights, personal projects, and little snapshots into some of my hobbies throughout - feel free to explore and get in touch!
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
            
            <div className="w-full md:w-72 flex-shrink-0">
              <LazyImage
                src="/profile.jpeg"
                alt="Portrait photo of me!"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
